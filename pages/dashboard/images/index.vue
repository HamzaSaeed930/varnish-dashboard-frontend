<template>
  <DashboardLayout>
    <div class="space-y-6">
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
        <div class="flex-1 min-w-0">
          <h1 
            class="text-xl sm:text-2xl lg:text-3xl font-bold mb-1"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 700;
              color: #101828;
            "
          >
            Image Optimization
          </h1>
          <p 
            class="text-xs sm:text-sm"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              color: #475467;
            "
          >
            Monitor compression savings and configure rules for image optimization through Varnish.
          </p>
        </div>
        <div class="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <!-- Refresh Button -->
          <button
            class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border transition-colors hover:bg-gray-50 bg-white flex-shrink-0"
            style="border-radius: 8px; border: 1px solid #E5E7EB;"
          >
            <svg 
              class="w-4 h-4 sm:w-5 sm:h-5" 
              style="color: #6B7280;"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <!-- Add Rule Button -->
          <button
            @click="$router.push('/dashboard/images/add')"
            class="px-3 sm:px-4 py-2 rounded-lg font-medium text-white transition-colors hover:opacity-90 flex-1 sm:flex-initial text-sm sm:text-base"
            style="
              background: #182230;
              border-radius: 8px;
              font-family: 'Inter', sans-serif;
              font-weight: 600;
            "
          >
            <span class="hidden sm:inline">+ Add Rule</span>
            <span class="sm:hidden">+ Add</span>
          </button>
        </div>
      </div>

      <!-- Key Metrics Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Total images optimized -->
        <div 
          class="rounded-lg p-4"
          style="border-radius: 8px; background: #F9FAFB; border: 1px solid #E5E7EB;"
        >
          <div class="flex items-center gap-3 mb-3">
            <div 
              class="w-10 h-10 flex items-center justify-center rounded-lg"
              style="background: #E5E7EB;"
            >
              <svg 
                class="w-5 h-5" 
                style="color: #6B7280;"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p 
              class="text-sm font-medium"
              style="font-family: 'Inter', sans-serif; color: #6B7280;"
            >
              Total images optimized
            </p>
          </div>
          <div 
            class="rounded-lg p-4 flex items-center justify-between"
            style="background: #FFFFFF; border-radius: 8px;"
          >
            <p 
              class="text-2xl font-bold"
              style="font-family: 'Inter', sans-serif; font-weight: 700; color: #101828;"
            >
              14.2 k
            </p>
            <div class="flex items-center gap-1" style="color: #14B8A6;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span class="text-sm font-medium">7%</span>
            </div>
          </div>
        </div>

        <!-- Data Saved -->
        <div 
          class="rounded-lg p-4"
          style="border-radius: 8px; background: #F9FAFB; border: 1px solid #E5E7EB;"
        >
          <div class="flex items-center gap-3 mb-3">
            <div 
              class="w-10 h-10 flex items-center justify-center rounded-lg"
              style="background: #E5E7EB;"
            >
              <svg 
                class="w-5 h-5" 
                style="color: #6B7280;"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
            </div>
            <p 
              class="text-sm font-medium"
              style="font-family: 'Inter', sans-serif; color: #6B7280;"
            >
              Data Saved
            </p>
          </div>
          <div 
            class="rounded-lg p-4 flex items-center justify-between"
            style="background: #FFFFFF; border-radius: 8px;"
          >
            <p 
              class="text-2xl font-bold"
              style="font-family: 'Inter', sans-serif; font-weight: 700; color: #101828;"
            >
              3.6 GB
            </p>
            <div class="flex items-center gap-1" style="color: #14B8A6;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span class="text-sm font-medium">7%</span>
            </div>
          </div>
        </div>

        <!-- Average Compression -->
        <div 
          class="rounded-lg p-4"
          style="border-radius: 8px; background: #F9FAFB; border: 1px solid #E5E7EB;"
        >
          <div class="flex items-center gap-3 mb-3">
            <div 
              class="w-10 h-10 flex items-center justify-center rounded-lg"
              style="background: #E5E7EB;"
            >
              <svg 
                class="w-5 h-5" 
                style="color: #6B7280;"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <p 
              class="text-sm font-medium"
              style="font-family: 'Inter', sans-serif; color: #6B7280;"
            >
              Average Compression
            </p>
          </div>
          <div 
            class="rounded-lg p-4 flex items-center justify-between"
            style="background: #FFFFFF; border-radius: 8px;"
          >
            <p 
              class="text-2xl font-bold"
              style="font-family: 'Inter', sans-serif; font-weight: 700; color: #101828;"
            >
              24%
            </p>
            <div class="flex items-center gap-1" style="color: #14B8A6;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span class="text-sm font-medium">7%</span>
            </div>
          </div>
        </div>

        <!-- Conversion -->
        <div 
          class="rounded-lg p-4"
          style="border-radius: 8px; background: #F9FAFB; border: 1px solid #E5E7EB;"
        >
          <div class="flex items-center gap-3 mb-3">
            <div 
              class="w-10 h-10 flex items-center justify-center rounded-lg"
              style="background: #E5E7EB;"
            >
              <svg 
                class="w-5 h-5" 
                style="color: #6B7280;"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <p 
              class="text-sm font-medium"
              style="font-family: 'Inter', sans-serif; color: #6B7280;"
            >
              Conversion
            </p>
          </div>
          <div 
            class="rounded-lg p-4 flex items-center justify-between"
            style="background: #FFFFFF; border-radius: 8px;"
          >
            <p 
              class="text-2xl font-bold"
              style="font-family: 'Inter', sans-serif; font-weight: 700; color: #101828;"
            >
              WebP enabled
            </p>
            <div class="flex items-center gap-1" style="color: #14B8A6;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span class="text-sm font-medium">7%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- List of Images Table -->
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
            List of Images
          </h2>
          <div class="flex items-center gap-3">
            <!-- Search Input -->
            <div class="relative">
              <input
                type="text"
                placeholder="Search SSL"
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
                    Domain
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
                    Format
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
                    Quality
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
                    Resize
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
                    Last Run
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
                    Savings
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
                  Actions
                </th>
                <th 
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style="color: #6B7280; font-family: 'Inter', sans-serif;"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody style="background: #FFFFFF;" class="divide-y divide-gray-200">
              <tr 
                v-for="(row, index) in imagesData" 
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
                  {{ row.domain }}
                </td>
                <td 
                  class="px-4 py-4 text-sm"
                  style="color: #101828;"
                >
                  {{ row.format }}
                </td>
                <td 
                  class="px-4 py-4 text-sm"
                  style="color: #101828;"
                >
                  {{ row.quality }}
                </td>
                <td 
                  class="px-4 py-4 text-sm"
                  style="color: #101828;"
                >
                  {{ row.resize }}
                </td>
                <td 
                  class="px-4 py-4 text-sm"
                  style="color: #101828;"
                >
                  {{ row.lastRun }}
                </td>
                <td 
                  class="px-4 py-4 text-sm"
                  style="color: #101828;"
                >
                  {{ row.savings }}
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
                    Delete
                  </button>
                </td>
                <td class="px-4 py-4">
                  <button
                    class="px-3 py-1 text-sm font-medium rounded transition-colors hover:bg-gray-100"
                    style="border-radius: 6px; color: #374151; background: #FFFFFF;"
                  >
                    Edit
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

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Performance Visualisations Chart -->
        <div 
          class="rounded-lg border p-6"
          style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px;"
        >
          <div class="flex items-center justify-between mb-6">
            <h3 
              class="text-lg font-semibold"
              style="font-family: 'Inter', sans-serif; font-weight: 600; color: #101828;"
            >
              Performance Visualisations
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
            <canvas ref="performanceChart"></canvas>
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

        <!-- Data Saved Chart -->
        <div 
          class="rounded-lg border p-6"
          style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px;"
        >
          <div class="flex items-center justify-between mb-6">
            <h3 
              class="text-lg font-semibold"
              style="font-family: 'Inter', sans-serif; font-weight: 600; color: #101828;"
            >
              Data Saved
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
              <canvas ref="dataSavedChart"></canvas>
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
                  Unsaved
                </span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-4 h-4 rounded-full" style="background: #F97316;"></div>
                <span class="text-sm" style="color: #374151; font-family: 'Inter', sans-serif;">
                  Saved
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
  title: "Image Optimization - Varnish Dashboard",
});

// Chart refs
const performanceChart = ref<HTMLCanvasElement | null>(null);
const dataSavedChart = ref<HTMLCanvasElement | null>(null);

// Mock images data
const imagesData = ref([
  { domain: 'example.com', format: 'JPEG to WebP', quality: '80%', resize: '1920px max', lastRun: '2hr ago', savings: '18%' },
  { domain: 'my.shop.net', format: 'PNG to WebP', quality: '75%', resize: '1080px max', lastRun: '1d ago', savings: '22%' },
  { domain: 'cdn-site.io', format: 'PNG to WebP', quality: '70%', resize: 'Disabled', lastRun: '-', savings: '-' },
  { domain: 'cdn-site.io', format: 'PNG to WebP', quality: '70%', resize: 'Disabled', lastRun: '-', savings: '-' },
  { domain: 'cdn-site.io', format: 'PNG to WebP', quality: '70%', resize: 'Disabled', lastRun: '-', savings: '-' },
]);

// Chart instances
let performanceChartInstance: any = null;
let dataSavedChartInstance: any = null;

// Create Performance Bar Chart
const createPerformanceChart = () => {
  if (performanceChart.value) {
    const existingChart = Chart.getChart(performanceChart.value);
    if (existingChart) {
      existingChart.destroy();
    }
    
    const ctx = performanceChart.value.getContext('2d');
    if (!ctx) return;
    
    // Sample data matching the image (bar chart for Jan-Jun)
    const data = [40, 80, 20, 60, 0, 0]; // Feb is tallest, Mar is shortest
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    
    performanceChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Performance',
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

// Create Data Saved Donut Chart
const createDataSavedChart = () => {
  if (dataSavedChart.value) {
    const existingChart = Chart.getChart(dataSavedChart.value);
    if (existingChart) {
      existingChart.destroy();
    }
    
    const ctx = dataSavedChart.value.getContext('2d');
    if (!ctx) return;
    
    dataSavedChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Unsaved', 'Saved'],
        datasets: [{
          data: [10, 90], // Mostly saved (orange), small unsaved (teal)
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
    createPerformanceChart();
    createDataSavedChart();
  });
});

// Cleanup on unmount
onUnmounted(() => {
  if (performanceChartInstance) performanceChartInstance.destroy();
  if (dataSavedChartInstance) dataSavedChartInstance.destroy();
});
</script>

