<template>
  <DashboardLayout>
    <div class="space-y-6">
      <!-- Page Header -->
      <div class="flex flex-row items-center justify-between w-full gap-4">
        <div class="flex-1 min-w-0">
          <h1 
            class="text-2xl sm:text-3xl font-bold mb-1"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 700;
              color: #101828;
            "
          >
            Billing
          </h1>
          <p 
            class="text-sm"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              color: #475467;
            "
          >
            View Invoices, Manage subscriptions, and update payment methods.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <!-- Refresh Button -->
          <button
            class="w-10 h-10 flex items-center justify-center rounded-lg border transition-colors hover:bg-gray-50 bg-white"
            style="border-radius: 8px; border: 1px solid #E5E7EB;"
          >
            <svg 
              class="w-5 h-5" 
              style="color: #6B7280;"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <!-- Add Payment Method Button -->
          <button
            @click="$router.push('/dashboard/billings/add')"
            class="px-4 py-2 rounded-lg font-medium text-white transition-colors hover:opacity-90"
            style="
              background: #182230;
              border-radius: 8px;
              font-family: 'Inter', sans-serif;
              font-weight: 600;
              font-size: 14px;
            "
          >
            + Add Payment Method
          </button>
        </div>
      </div>

      <!-- Pro Plan Card -->
      <div 
        class="rounded-lg border p-6"
        style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px;"
      >
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-2">
              <h2 
                class="text-xl font-bold"
                style="font-family: 'Inter', sans-serif; font-weight: 700; color: #101828;"
              >
                Pro Plan
              </h2>
              <span 
                class="px-2 py-1 text-xs font-medium rounded"
                style="background: #F3F4F6; color: #374151; border-radius: 4px; font-family: 'Inter', sans-serif;"
              >
                Monthly
              </span>
            </div>
            <p 
              class="text-sm mb-4"
              style="font-family: 'Inter', sans-serif; font-weight: 400; color: #6B7280;"
            >
              Our most popular plan for small teams.
            </p>
            <div class="space-y-2 mb-4">
              <div class="flex items-center gap-2">
                <span 
                  class="text-sm"
                  style="font-family: 'Inter', sans-serif; font-weight: 400; color: #6B7280;"
                >
                  Renewal:
                </span>
                <span 
                  class="text-sm font-medium"
                  style="font-family: 'Inter', sans-serif; font-weight: 500; color: #101828;"
                >
                  12 Nov 2025
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span 
                  class="text-sm"
                  style="font-family: 'Inter', sans-serif; font-weight: 400; color: #6B7280;"
                >
                  Total Due:
                </span>
                <span 
                  class="text-sm font-medium"
                  style="font-family: 'Inter', sans-serif; font-weight: 500; color: #101828;"
                >
                  $146
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span 
                  class="text-sm"
                  style="font-family: 'Inter', sans-serif; font-weight: 400; color: #6B7280;"
                >
                  Payment method:
                </span>
                <span 
                  class="text-sm font-medium"
                  style="font-family: 'Inter', sans-serif; font-weight: 500; color: #101828;"
                >
                  VISA ending in 1234
                </span>
              </div>
            </div>
            <button
              class="text-sm font-medium transition-colors hover:underline"
              style="color: #182230; font-family: 'Inter', sans-serif;"
            >
              View Subscription Details
            </button>
          </div>
          <div class="text-right">
            <p 
              class="text-4xl font-bold mb-1"
              style="font-family: 'Inter', sans-serif; font-weight: 700; color: #101828;"
            >
              $99
            </p>
            <p 
              class="text-sm"
              style="font-family: 'Inter', sans-serif; font-weight: 400; color: #6B7280;"
            >
              /month + usage
            </p>
          </div>
        </div>
      </div>

      <!-- Invoices Table -->
      <div 
        class="rounded-lg border"
        style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px;"
      >
        <!-- Table Header -->
        <div 
          class="p-4 border-b flex items-center justify-between"
          style="border-bottom: 1px solid #E5E7EB;"
        >
          <h2 
            class="text-lg font-semibold"
            style="font-family: 'Inter', sans-serif; font-weight: 600; color: #101828;"
          >
            Invoices
          </h2>
          <div class="flex items-center gap-3">
            <!-- Search Input -->
            <div class="relative">
              <input
                type="text"
                placeholder="Search Ticket"
                class="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                style="
                  width: 200px;
                  height: 36px;
                  border-radius: 8px;
                  font-family: 'Inter', sans-serif;
                  border: 1px solid #D0D5DD;
                  background: #FFFFFF;
                  color: #101828;
                "
              />
              <svg 
                class="absolute left-3 top-2.5 w-4 h-4" 
                style="color: #9CA3AF;"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <!-- Filters Button -->
            <button
              class="px-4 py-2 border rounded-lg text-sm font-medium transition-colors hover:bg-gray-50"
              style="
                height: 36px;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                border: 1px solid #D0D5DD;
                color: #374151;
                background: #FFFFFF;
              "
            >
              Filters
            </button>
            <!-- Manage Button -->
            <button
              class="px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
              style="
                background: #182230;
                height: 36px;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                font-weight: 600;
              "
            >
              Manage
            </button>
          </div>
        </div>

        <!-- Table -->
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead style="background: #F9FAFB;">
              <tr>
                <th class="px-4 py-3 text-left">
                  <input type="checkbox" class="rounded border-gray-300" />
                </th>
                <th 
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style="color: #6B7280; font-family: 'Inter', sans-serif;"
                >
                  <div class="flex items-center gap-2">
                    Invoice
                    <div class="flex flex-col">
                      <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                      </svg>
                      <svg class="w-3 h-3 text-gray-400 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </th>
                <th 
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style="color: #6B7280; font-family: 'Inter', sans-serif;"
                >
                  <div class="flex items-center gap-2">
                    Billing Date
                    <div class="flex flex-col">
                      <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                      </svg>
                      <svg class="w-3 h-3 text-gray-400 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </th>
                <th 
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style="color: #6B7280; font-family: 'Inter', sans-serif;"
                >
                  <div class="flex items-center gap-2">
                    Amount
                    <div class="flex flex-col">
                      <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                      </svg>
                      <svg class="w-3 h-3 text-gray-400 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </th>
                <th 
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style="color: #6B7280; font-family: 'Inter', sans-serif;"
                >
                  <div class="flex items-center gap-2">
                    Plan
                    <div class="flex flex-col">
                      <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                      </svg>
                      <svg class="w-3 h-3 text-gray-400 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </th>
                <th 
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style="color: #6B7280; font-family: 'Inter', sans-serif;"
                >
                  <div class="flex items-center gap-2">
                    Status
                    <div class="flex flex-col">
                      <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                      </svg>
                      <svg class="w-3 h-3 text-gray-400 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </th>
                <th 
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style="color: #6B7280; font-family: 'Inter', sans-serif;"
                >
                  <div class="flex items-center gap-2">
                    Actions
                    <div class="flex flex-col">
                      <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                      </svg>
                      <svg class="w-3 h-3 text-gray-400 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody style="background: #FFFFFF;" class="divide-y divide-gray-200">
              <tr 
                v-for="(row, index) in invoicesData" 
                :key="index" 
                class="hover:bg-gray-50"
              >
                <td class="px-4 py-4">
                  <input type="checkbox" class="rounded border-gray-300" />
                </td>
                <td 
                  class="px-4 py-4 text-sm"
                  style="color: #101828;"
                >
                  {{ row.invoice }}
                </td>
                <td 
                  class="px-4 py-4 text-sm"
                  style="color: #101828;"
                >
                  {{ row.billingDate }}
                </td>
                <td 
                  class="px-4 py-4 text-sm"
                  style="color: #101828;"
                >
                  {{ row.amount }}
                </td>
                <td 
                  class="px-4 py-4 text-sm"
                  style="color: #101828;"
                >
                  {{ row.plan }}
                </td>
                <td class="px-4 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span 
                      class="text-sm"
                      style="color: #101828;"
                    >
                      Approved
                    </span>
                  </div>
                </td>
                <td class="px-4 py-4">
                  <button
                    class="px-3 py-1 text-sm font-medium rounded transition-colors hover:bg-gray-100"
                    style="border-radius: 6px; color: #374151; background: #FFFFFF;"
                  >
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div 
          class="p-4 border-t flex items-center justify-between"
          style="border-top: 1px solid #E5E7EB;"
        >
          <button
            class="px-3 py-2 text-sm font-medium rounded transition-colors disabled:opacity-50 hover:bg-gray-50"
            style="border-radius: 6px; color: #374151;"
            disabled
          >
            ← Previous
          </button>
          <div class="flex items-center gap-2">
            <button
              v-for="page in [1, 2, 3, '...', 8, 9, 10]"
              :key="page"
              :class="[
                'px-3 py-1 text-sm font-medium rounded transition-colors',
                page === 1 
                  ? 'bg-gray-100 text-gray-900' 
                  : 'text-gray-700 hover:bg-gray-50'
              ]"
              style="border-radius: 6px;"
            >
              {{ page }}
            </button>
          </div>
          <button
            class="px-3 py-2 text-sm font-medium rounded transition-colors hover:bg-gray-50"
            style="border-radius: 6px; color: #374151;"
          >
            Next →
          </button>
        </div>
      </div>

      <!-- Payment Method Section -->
      <div 
        class="rounded-lg border p-6"
        style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px;"
      >
        <h2 
          class="text-lg font-semibold mb-1"
          style="font-family: 'Inter', sans-serif; font-weight: 600; color: #101828;"
        >
          Payment Method
        </h2>
        <p 
          class="text-sm mb-4"
          style="font-family: 'Inter', sans-serif; font-weight: 400; color: #6B7280;"
        >
          Choose what you want to be notified about.
        </p>
        <div class="space-y-3">
          <div class="flex items-center gap-3">
            <input type="checkbox" class="rounded border-gray-300" />
            <div class="flex-1">
              <p 
                class="text-sm font-medium"
                style="font-family: 'Inter', sans-serif; font-weight: 500; color: #101828;"
              >
                Visa
              </p>
              <p 
                class="text-xs"
                style="font-family: 'Inter', sans-serif; font-weight: 400; color: #6B7280;"
              >
                Expiry 02/2026
              </p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <input type="checkbox" class="rounded border-gray-300" />
            <div class="flex-1">
              <p 
                class="text-sm font-medium"
                style="font-family: 'Inter', sans-serif; font-weight: 500; color: #101828;"
              >
                Mastercard
              </p>
              <p 
                class="text-xs"
                style="font-family: 'Inter', sans-serif; font-weight: 400; color: #6B7280;"
              >
                Expiry 02/2026
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Usage Summary Chart -->
        <div 
          class="rounded-lg border p-6"
          style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px;"
        >
          <div class="flex items-center justify-between mb-6">
            <h3 
              class="text-lg font-semibold"
              style="font-family: 'Inter', sans-serif; font-weight: 600; color: #101828;"
            >
              Usage Summary
            </h3>
            <div class="flex items-center gap-2">
              <button
                v-for="period in ['1H', '1D', '7D', '1M']"
                :key="period"
                :class="[
                  'px-3 py-1 text-sm font-medium rounded transition-colors',
                  period === '7D'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                ]"
                style="border-radius: 6px; font-family: 'Inter', sans-serif;"
              >
                {{ period }}
              </button>
            </div>
          </div>
          <div class="mb-4">
            <h4 class="text-sm font-medium mb-2" style="color: #6B7280; font-family: 'Inter', sans-serif;">
              Bar Chart
            </h4>
            <p class="text-xs" style="color: #9CA3AF; font-family: 'Inter', sans-serif;">
              January - June 2024
            </p>
          </div>
          <div class="h-64">
            <canvas ref="usageChart"></canvas>
          </div>
          <div class="mt-4 space-y-1">
            <p class="text-sm font-medium" style="color: #101828; font-family: 'Inter', sans-serif;">
              Trending up by 5.2% this month
            </p>
            <p class="text-xs" style="color: #6B7280; font-family: 'Inter', sans-serif;">
              Showing Performance for the last 7 days
            </p>
          </div>
        </div>

        <!-- Cost Breakdown Chart -->
        <div 
          class="rounded-lg border p-6"
          style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px;"
        >
          <div class="flex items-center justify-between mb-6">
            <h3 
              class="text-lg font-semibold"
              style="font-family: 'Inter', sans-serif; font-weight: 600; color: #101828;"
            >
              Cost Breakdown
            </h3>
            <div class="flex items-center gap-2">
              <button
                v-for="period in ['30 Day', '7 Day']"
                :key="period"
                :class="[
                  'px-3 py-1 text-sm font-medium rounded transition-colors',
                  period === '30 Day'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                ]"
                style="border-radius: 6px; font-family: 'Inter', sans-serif;"
              >
                {{ period }}
              </button>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <div class="relative w-64 h-64">
              <canvas ref="costBreakdownChart"></canvas>
              <div class="absolute inset-0 flex items-center justify-center flex-col">
                <span 
                  class="text-3xl font-bold"
                  style="color: #101828; font-family: 'Inter', sans-serif;"
                >
                  90 TB
                </span>
                <span 
                  class="text-sm"
                  style="color: #6B7280; font-family: 'Inter', sans-serif;"
                >
                  Data Saved
                </span>
              </div>
            </div>
            <div class="ml-8 space-y-4">
              <div class="flex items-center gap-2">
                <div class="w-4 h-4 rounded-full" style="background: #14B8A6;"></div>
                <span class="text-sm" style="color: #374151; font-family: 'Inter', sans-serif;">
                  Domain
                </span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-4 h-4 rounded-full" style="background: #F97316;"></div>
                <span class="text-sm" style="color: #374151; font-family: 'Inter', sans-serif;">
                  Hosting
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import { Chart, registerables, ArcElement } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables, ArcElement);

// Set page title
useHead({
  title: "Billing - Varnish Dashboard",
});

// Chart refs
const usageChart = ref<HTMLCanvasElement | null>(null);
const costBreakdownChart = ref<HTMLCanvasElement | null>(null);

// Mock invoices data
const invoicesData = ref([
  { invoice: 'Invoice #007', billingDate: 'Dec 1, 2025', amount: 'USD $99.00', plan: 'Basic Plan' },
  { invoice: 'Invoice #007', billingDate: 'Dec 1, 2025', amount: 'USD $99.00', plan: 'Basic Plan' },
  { invoice: 'Invoice #007', billingDate: 'Dec 1, 2025', amount: 'USD $99.00', plan: 'Basic Plan' },
  { invoice: 'Invoice #007', billingDate: 'Dec 1, 2025', amount: 'USD $99.00', plan: 'Basic Plan' },
  { invoice: 'Invoice #007', billingDate: 'Dec 1, 2025', amount: 'USD $99.00', plan: 'Basic Plan' },
]);

// Chart instances
let usageChartInstance: any = null;
let costBreakdownChartInstance: any = null;

// Create Usage Summary Bar Chart
const createUsageChart = () => {
  if (usageChart.value) {
    const existingChart = Chart.getChart(usageChart.value);
    if (existingChart) {
      existingChart.destroy();
    }
    
    const ctx = usageChart.value.getContext('2d');
    if (!ctx) return;
    
    // Sample data matching the image (bar chart for Jan-Jun)
    const data = [40, 80, 20, 60, 0, 0]; // Feb is tallest, Mar is shortest
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    
    usageChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Usage',
          data: data,
          backgroundColor: '#14B8A6',
          borderWidth: 0,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              stepSize: 20
            },
            grid: {
              color: '#E5E7EB'
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
  }
};

// Create Cost Breakdown Donut Chart
const createCostBreakdownChart = () => {
  if (costBreakdownChart.value) {
    const existingChart = Chart.getChart(costBreakdownChart.value);
    if (existingChart) {
      existingChart.destroy();
    }
    
    const ctx = costBreakdownChart.value.getContext('2d');
    if (!ctx) return;
    
    costBreakdownChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Domain', 'Hosting'],
        datasets: [{
          data: [20, 80], // Mostly Hosting (orange), smaller Domain (teal)
          backgroundColor: ['#14B8A6', '#F97316'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (context) => {
                return `${context.label}: ${context.parsed}%`;
              }
            }
          }
        },
        cutout: '70%'
      }
    });
  }
};

// Initialize charts on mount
onMounted(() => {
  nextTick(() => {
    createUsageChart();
    createCostBreakdownChart();
  });
});

// Cleanup on unmount
onUnmounted(() => {
  if (usageChartInstance) usageChartInstance.destroy();
  if (costBreakdownChartInstance) costBreakdownChartInstance.destroy();
});
</script>

