<template>
  <DashboardLayout>
    <div class="space-y-6">
      <!-- Page Header -->
      <div class="flex flex-row items-center justify-between w-full">
        <h1 class="text-xl font-semibold text-gray-900 dark:text-gray-900 uppercase">
          Dashboard
        </h1>
      </div>

      <!-- Top Row - KPI Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <!-- REQUESTS Card -->
        <div class="bg-white dark:bg-white rounded-[20px] border border-gray-200 dark:border-gray-200 p-6 shadow-sm">
          <p class="text-3xl font-bold text-gray-900 dark:text-gray-900 mb-1">
            {{ formatNumber(dashboardData.requests) }}
          </p>
          <p class="text-sm font-medium text-gray-600 dark:text-gray-600 uppercase mb-1">Requests</p>
          <p class="text-xs text-gray-500 dark:text-gray-500">Server(s): All</p>
        </div>

        <!-- MISS Card -->
        <div class="bg-white dark:bg-white rounded-[20px] border border-gray-200 dark:border-gray-200 p-6 shadow-sm">
          <p class="text-3xl font-bold text-gray-900 dark:text-gray-900 mb-1">
            {{ formatNumber(dashboardData.miss) }}
          </p>
          <p class="text-sm font-medium text-gray-600 dark:text-gray-600 uppercase mb-1">Miss</p>
          <p class="text-xs text-gray-500 dark:text-gray-500">Server(s): All</p>
        </div>

        <!-- HITS Card -->
        <div class="bg-white dark:bg-white rounded-[20px] border border-gray-200 dark:border-gray-200 p-6 shadow-sm">
          <p class="text-3xl font-bold text-gray-900 dark:text-gray-900 mb-1">
            {{ formatNumber(dashboardData.hits) }}
          </p>
          <p class="text-sm font-medium text-gray-600 dark:text-gray-600 uppercase mb-1">Hits</p>
          <p class="text-xs text-gray-500 dark:text-gray-500">Server(s): All</p>
        </div>

        <!-- SESSION CONNECTIONS Card -->
        <div class="bg-white dark:bg-white rounded-[20px] border border-gray-200 dark:border-gray-200 p-6 shadow-sm">
          <p class="text-3xl font-bold text-gray-900 dark:text-gray-900 mb-1">
            {{ formatNumber(dashboardData.sessionConnections) }}
          </p>
          <p class="text-sm font-medium text-gray-600 dark:text-gray-600 uppercase mb-1">Session Connections</p>
          <p class="text-xs text-gray-500 dark:text-gray-500">Server(s): All</p>
        </div>
      </div>

      <!-- Middle Row - Hit Rate and Hit/Miss Chart -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <!-- Hit Rate Card -->
        <div class="bg-white dark:bg-white rounded-[20px] border border-gray-200 dark:border-gray-200 p-6 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div>
              <p class="text-sm font-semibold text-gray-900 dark:text-gray-900 uppercase mb-1">Hit Rate</p>
              <p class="text-xs text-gray-500 dark:text-gray-500">Server(s): All</p>
            </div>
          </div>
          <div class="flex items-center justify-center mb-4">
            <div class="relative w-32 h-32">
              <canvas ref="hitRateChart"></canvas>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <p class="text-3xl font-bold text-gray-900 dark:text-gray-900">{{ hitRate }}%</p>
                </div>
              </div>
            </div>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-500 text-center">average per sec</p>
        </div>

        <!-- Hit and Miss Chart -->
        <div class="bg-white dark:bg-white rounded-[20px] border border-gray-200 dark:border-gray-200 p-6 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div>
              <p class="text-sm font-semibold text-gray-900 dark:text-gray-900 uppercase mb-1">Hit and Miss</p>
              <p class="text-xs text-gray-500 dark:text-gray-500">Server(s): All</p>
            </div>
          </div>
          <div class="h-48 mb-2">
            <canvas ref="hitMissChart"></canvas>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-blue-500"></div>
                <span class="text-xs text-gray-600 dark:text-gray-600">Hit</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span class="text-xs text-gray-600 dark:text-gray-600">Miss</span>
              </div>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-500">average per sec</p>
          </div>
        </div>
      </div>

      <!-- Third Row - Stacked Area Chart -->
      <div class="bg-white dark:bg-white rounded-[20px] border border-gray-200 dark:border-gray-200 p-6 shadow-sm">
        <div class="mb-4">
          <p class="text-sm font-semibold text-gray-900 dark:text-gray-900 uppercase mb-1">
            Hit, Miss and Others Stacked to Requests
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-500 mb-1">Server(s): All</p>
          <p class="text-xs text-gray-500 dark:text-gray-500 italic">
            others can be hit_for_pass, synth, pipe, etc
          </p>
        </div>
        <div class="h-48 mb-2">
          <canvas ref="stackedChart"></canvas>
        </div>
        <div class="flex items-center justify-end">
          <p class="text-xs text-gray-500 dark:text-gray-500">average per sec</p>
        </div>
      </div>

      <!-- Bottom Row - Top 5 Servers Tables -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <!-- Top 5 Servers by Requests -->
        <div class="bg-white dark:bg-white rounded-[20px] border border-gray-200 dark:border-gray-200 p-6 shadow-sm">
          <p class="text-sm font-semibold text-gray-900 dark:text-gray-900 uppercase mb-1">
            Top 5 Servers by Requests
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-500 mb-4">Server(s): All</p>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-200">
                  <th class="text-left text-xs font-semibold text-gray-600 dark:text-gray-600 py-2 uppercase">Name</th>
                  <th class="text-right text-xs font-semibold text-gray-600 dark:text-gray-600 py-2 uppercase">Requests</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(server, index) in topServersByRequests" :key="index" class="border-b border-gray-100 dark:border-gray-100">
                  <td class="text-sm text-gray-900 dark:text-gray-900 py-2">{{ server.name }}</td>
                  <td class="text-sm text-gray-900 dark:text-gray-900 py-2 text-right">{{ formatNumber(server.requests) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Top 5 Servers by Hit -->
        <div class="bg-white dark:bg-white rounded-[20px] border border-gray-200 dark:border-gray-200 p-6 shadow-sm">
          <p class="text-sm font-semibold text-gray-900 dark:text-gray-900 uppercase mb-1">
            Top 5 Servers by Hit
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-500 mb-4">Server(s): All</p>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-200">
                  <th class="text-left text-xs font-semibold text-gray-600 dark:text-gray-600 py-2 uppercase">Name</th>
                  <th class="text-right text-xs font-semibold text-gray-600 dark:text-gray-600 py-2 uppercase">Hit</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(server, index) in topServersByHit" :key="index" class="border-b border-gray-100 dark:border-gray-100">
                  <td class="text-sm text-gray-900 dark:text-gray-900 py-2">{{ server.name }}</td>
                  <td class="text-sm text-gray-900 dark:text-gray-900 py-2 text-right">{{ formatNumber(server.hit) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Top 5 by Miss -->
        <div class="bg-white dark:bg-white rounded-[20px] border border-gray-200 dark:border-gray-200 p-6 shadow-sm">
          <p class="text-sm font-semibold text-gray-900 dark:text-gray-900 uppercase mb-1">
            Top 5 by Miss
          </p>
          <p class="text-xs text-gray-500 dark:text-gray-500 mb-4">Server(s): All</p>
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-200 dark:border-gray-200">
                  <th class="text-left text-xs font-semibold text-gray-600 dark:text-gray-600 py-2 uppercase">Name</th>
                  <th class="text-right text-xs font-semibold text-gray-600 dark:text-gray-600 py-2 uppercase">Miss</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(server, index) in topServersByMiss" :key="index" class="border-b border-gray-100 dark:border-gray-100">
                  <td class="text-sm text-gray-900 dark:text-gray-900 py-2">{{ server.name }}</td>
                  <td class="text-sm text-gray-900 dark:text-gray-900 py-2 text-right">{{ formatNumber(server.miss) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { Chart, registerables } from 'chart.js';
import { ref, computed, nextTick, onMounted, onUnmounted } from 'vue';

// Register Chart.js components
Chart.register(...registerables);

// Set page title
useHead({
  title: "Dashboard - Varnish Dashboard",
});

// Dashboard data
const dashboardData = ref({
  requests: 286200,
  miss: 5,
  hits: 140700,
  sessionConnections: 286200,
});

const hitRate = computed(() => {
  if (dashboardData.value.requests === 0) return 0;
  return Math.round((dashboardData.value.hits / dashboardData.value.requests) * 100);
});

// Top servers data
const topServersByRequests = ref([
  { name: 'varnish-server-1', requests: 142300 },
  { name: 'varnish-server-4', requests: 94300 },
  { name: 'varnish-server-3', requests: 48300 },
  { name: 'varnish-server-2', requests: 1300 },
]);

const topServersByHit = ref([
  { name: 'varnish-server-1', hit: 140700 },
  { name: 'varnish-server-4', hit: 0 },
  { name: 'varnish-server-2', hit: 0 },
  { name: 'varnish-server-3', hit: 0 },
]);

const topServersByMiss = ref([
  { name: 'varnish-server-1', miss: 2 },
  { name: 'varnish-server-4', miss: 1 },
  { name: 'varnish-server-2', miss: 1 },
  { name: 'varnish-server-3', miss: 1 },
]);

// Chart refs
const hitRateChart = ref<HTMLCanvasElement | null>(null);
const hitMissChart = ref<HTMLCanvasElement | null>(null);
const stackedChart = ref<HTMLCanvasElement | null>(null);

// Chart instances
let hitRateChartInstance: Chart | null = null;
let hitMissChartInstance: Chart | null = null;
let stackedChartInstance: Chart | null = null;

// Generate sample time series data
const generateTimeLabels = () => {
  const labels = [];
  const startDate = new Date('2024-10-18T09:35:00');
  for (let i = 0; i < 10; i++) {
    const date = new Date(startDate);
    date.setMinutes(date.getMinutes() + i * 5);
    labels.push(date.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }));
  }
  return labels;
};

// Create Hit Rate gauge chart
const createHitRateChart = () => {
  if (hitRateChart.value) {
    const existingChart = Chart.getChart(hitRateChart.value);
    if (existingChart) {
      existingChart.destroy();
    }

    const ctx = hitRateChart.value.getContext('2d') as CanvasRenderingContext2D;
    const percentage = hitRate.value;

    hitRateChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [percentage, 100 - percentage],
          backgroundColor: ['#8B5CF6', '#E5E7EB'],
          borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '75%',
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        }
      }
    });
  }
};

// Create Hit and Miss line chart
const createHitMissChart = () => {
  if (hitMissChart.value) {
    const existingChart = Chart.getChart(hitMissChart.value);
    if (existingChart) {
      existingChart.destroy();
    }

    const ctx = hitMissChart.value.getContext('2d') as CanvasRenderingContext2D;
    const labels = generateTimeLabels();
    
    // Generate sample data
    const hitData = labels.map(() => Math.random() * 50 + 20);
    const missData = labels.map(() => Math.random() * 30 + 5);

    hitMissChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Hit',
            data: hitData,
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#3B82F6',
          },
          {
            label: 'Miss',
            data: missData,
            borderColor: '#EAB308',
            backgroundColor: 'rgba(234, 179, 8, 0.1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointRadius: 4,
            pointBackgroundColor: '#EAB308',
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            mode: 'index',
            intersect: false,
          }
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: false
            },
            ticks: {
              maxRotation: 45,
              minRotation: 45,
              font: {
                size: 10
              }
            }
          },
          y: {
            display: true,
            beginAtZero: true,
            max: 100,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              font: {
                size: 10
              }
            }
          }
        }
      }
    });
  }
};

// Create Stacked Area Chart
const createStackedChart = () => {
  if (stackedChart.value) {
    const existingChart = Chart.getChart(stackedChart.value);
    if (existingChart) {
      existingChart.destroy();
    }

    const ctx = stackedChart.value.getContext('2d') as CanvasRenderingContext2D;
    const labels = generateTimeLabels();
    
    // Generate sample data
    const hitData = labels.map(() => Math.random() * 40 + 30);
    const missData = labels.map(() => Math.random() * 20 + 10);
    const othersData = labels.map(() => Math.random() * 10 + 5);

    stackedChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Hit',
            data: hitData,
            borderColor: '#3B82F6',
            backgroundColor: 'rgba(59, 130, 246, 0.5)',
            borderWidth: 0,
            fill: true,
            tension: 0.4,
          },
          {
            label: 'Miss',
            data: missData,
            borderColor: '#8B5CF6',
            backgroundColor: 'rgba(139, 92, 246, 0.5)',
            borderWidth: 0,
            fill: true,
            tension: 0.4,
          },
          {
            label: 'Others',
            data: othersData,
            borderColor: '#F97316',
            backgroundColor: 'rgba(249, 115, 22, 0.5)',
            borderWidth: 0,
            fill: true,
            tension: 0.4,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            mode: 'index',
            intersect: false,
          }
        },
        scales: {
          x: {
            display: true,
            grid: {
              display: false
            },
            stacked: true,
            ticks: {
              maxRotation: 45,
              minRotation: 45,
              font: {
                size: 10
              }
            }
          },
          y: {
            display: true,
            beginAtZero: true,
            max: 100,
            stacked: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
              font: {
                size: 10
              }
            }
          }
        }
      }
    });
  }
};

// Format number
const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

// Initialize charts
const initializeCharts = () => {
  nextTick(() => {
    createHitRateChart();
    createHitMissChart();
    createStackedChart();
  });
};

// Initialize on mount
onMounted(() => {
  initializeCharts();
});

// Cleanup on unmount
onUnmounted(() => {
  if (hitRateChartInstance) hitRateChartInstance.destroy();
  if (hitMissChartInstance) hitMissChartInstance.destroy();
  if (stackedChartInstance) stackedChartInstance.destroy();
});
</script>
