<template>
  <DashboardLayout>
    <div class="space-y-6">
      <!-- Page Header -->
      <div class="flex flex-row items-center justify-between w-full gap-4">
        <div class="flex-1 min-w-0">
          <h1 
            class="text-2xl sm:text-3xl font-bold mb-1"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 700;
              color: #101828;
            "
          >
            Domains
          </h1>
          <p 
            class="text-sm"
            :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              color: #475467;
            "
          >
            Manage, connect and monitor all your domains.
          </p>
        </div>
        <div class="flex items-center gap-3">
          <!-- Refresh Button -->
          <button
            class="w-10 h-10 flex items-center justify-center rounded-lg border transition-colors"
            :class="isDarkMode ? 'border-gray-700 hover:bg-[#1a2f4a] bg-[#1a2f4a]' : 'border-gray-200 hover:bg-gray-50 bg-white'"
            style="border-radius: 8px;"
          >
            <svg 
              class="w-5 h-5" 
              :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <!-- Add Domain Button -->
          <button
            @click="$router.push('/dashboard/domains/add')"
            class="px-4 py-2 rounded-lg font-medium text-white transition-colors hover:opacity-90"
            style="
              background: #182230;
              border-radius: 8px;
              font-family: 'Inter', sans-serif;
              font-weight: 600;
              font-size: 14px;
            "
          >
            + Domain
          </button>
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Hosting Card -->
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p 
              class="text-sm font-medium"
              style="font-family: 'Inter', sans-serif; color: #6B7280;"
            >
              Hosting
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
              2 Sites
            </p>
            <div class="flex items-center gap-1" style="color: #14B8A6;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span class="text-sm font-medium">7%</span>
            </div>
          </div>
        </div>

        <!-- SSL Card -->
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <p 
              class="text-sm font-medium"
              style="font-family: 'Inter', sans-serif; color: #6B7280;"
            >
              SSL
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
              Expiring in 7d
            </p>
            <div class="flex items-center gap-1" style="color: #14B8A6;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span class="text-sm font-medium">7%</span>
            </div>
          </div>
        </div>

        <!-- Images Card -->
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
              Images
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
              18 Images Saved
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

      <!-- List of Domains Table -->
      <div 
        class="rounded-lg border"
        :class="isDarkMode ? 'bg-[#1a2f4a] border-gray-700' : 'bg-white border-gray-200'"
        :style="!isDarkMode ? 'background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px;' : ''"
      >
        <!-- Table Header -->
        <div 
          class="p-4 border-b flex items-center justify-between"
          :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'"
        >
          <h2 
            class="text-lg font-semibold"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            style="font-family: 'Inter', sans-serif; font-weight: 600;"
          >
            List of Domains
          </h2>
          <div class="flex items-center gap-3">
            <!-- Search Input -->
            <div class="relative">
              <input
                type="text"
                placeholder="Search Domains"
                class="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                :class="isDarkMode ? 'border-gray-700 bg-[#182230] text-white placeholder-gray-400' : 'border-gray-200 bg-white text-gray-900'"
                style="
                  width: 200px;
                  height: 36px;
                  border-radius: 8px;
                  font-family: 'Inter', sans-serif;
                "
              />
              <svg 
                class="absolute left-3 top-2.5 w-4 h-4" 
                :class="isDarkMode ? 'text-gray-400' : 'text-gray-400'"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <!-- Filters Button -->
            <button
              class="px-4 py-2 border rounded-lg text-sm font-medium transition-colors"
              :class="isDarkMode ? 'border-gray-700 text-gray-300 hover:bg-[#182230]' : 'border-gray-200 text-gray-700 hover:bg-gray-50'"
              style="
                height: 36px;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
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
            <thead 
              style="background: #F9FAFB;"
            >
              <tr>
                <th class="px-4 py-3 text-left">
                  <input type="checkbox" class="rounded border-gray-300" />
                </th>
                <th 
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'"
                >
                  <div class="flex items-center gap-2">
                    Name
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
                  :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'"
                >
                  <div class="flex items-center gap-2">
                    CDN Req
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
                  :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'"
                >
                  <div class="flex items-center gap-2">
                    Bandwidth
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
                  :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'"
                >
                  <div class="flex items-center gap-2">
                    Cache
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
                  :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'"
                >
                  <div class="flex items-center gap-2">
                    Expiry
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
                  :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'"
                >
                  <div class="flex items-center gap-2">
                    SSL
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
                  :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'"
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
                  :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'"
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
            <tbody 
              style="background: #FFFFFF;"
              class="divide-y divide-gray-200"
            >
              <tr 
                v-for="i in 5" 
                :key="i" 
                class="hover:bg-gray-50"
              >
                <td class="px-4 py-4">
                  <input type="checkbox" class="rounded border-gray-300" />
                </td>
                <td 
                  class="px-4 py-4 text-sm"
                  style="color: #101828;"
                >
                  Name
                </td>
                <td 
                  class="px-4 py-4 text-sm"
                  style="color: #101828;"
                >
                  218k
                </td>
                <td 
                  class="px-4 py-4 text-sm"
                  style="color: #101828;"
                >
                  12 GB
                </td>
                <td 
                  class="px-4 py-4 text-sm"
                  style="color: #101828;"
                >
                  94%
                </td>
                <td 
                  class="px-4 py-4 text-sm"
                  style="color: #101828;"
                >
                  23/09/25
                </td>
                <td class="px-4 py-4">
                  <span 
                    class="px-2 py-1 text-xs font-medium rounded-full"
                    style="background: #F3F4F6; color: #374151; border-radius: 12px;"
                  >
                    Valid
                  </span>
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
                    Manage
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div 
          class="p-4 border-t flex items-center justify-between"
          :class="isDarkMode ? 'border-gray-700' : 'border-gray-200'"
        >
          <button
            class="px-3 py-2 text-sm font-medium rounded transition-colors disabled:opacity-50"
            :class="isDarkMode ? 'text-gray-300 hover:bg-[#182230]' : 'text-gray-700 hover:bg-gray-50'"
            style="border-radius: 6px;"
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
                  ? (isDarkMode ? 'bg-[#182230] text-white' : 'bg-gray-100 text-gray-900')
                  : (isDarkMode ? 'text-gray-300 hover:bg-[#182230]' : 'text-gray-700 hover:bg-gray-50')
              ]"
              style="border-radius: 6px;"
            >
              {{ page }}
            </button>
          </div>
          <button
            class="px-3 py-2 text-sm font-medium rounded transition-colors"
            :class="isDarkMode ? 'text-gray-300 hover:bg-[#182230]' : 'text-gray-700 hover:bg-gray-50'"
            style="border-radius: 6px;"
          >
            Next →
          </button>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Performance Chart -->
        <div 
          class="rounded-lg border p-6"
          :class="isDarkMode ? 'bg-[#1a2f4a] border-gray-700' : 'bg-white border-gray-200'"
          :style="!isDarkMode ? 'background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px;' : 'border-radius: 8px;'"
        >
          <div class="flex items-center justify-between mb-6">
            <h3 
              class="text-lg font-semibold"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              style="font-family: 'Inter', sans-serif; font-weight: 600;"
            >
              Performance
            </h3>
            <div class="flex items-center gap-2">
              <button
                v-for="period in ['1H', '1D', '7D', '1M']"
                :key="period"
                :class="[
                  'px-3 py-1 text-sm font-medium rounded transition-colors',
                  period === '1H'
                    ? (isDarkMode ? 'bg-[#182230] text-white' : 'bg-gray-900 text-white')
                    : (isDarkMode ? 'text-gray-400 hover:bg-[#182230]' : 'text-gray-600 hover:bg-gray-100')
                ]"
                style="border-radius: 6px; font-family: 'Inter', sans-serif;"
              >
                {{ period }}
              </button>
            </div>
          </div>
          <div class="h-64">
            <canvas ref="performanceChart"></canvas>
          </div>
        </div>

        <!-- Cache Split Chart -->
        <div 
          class="rounded-lg border p-6"
          :class="isDarkMode ? 'bg-[#1a2f4a] border-gray-700' : 'bg-white border-gray-200'"
          :style="!isDarkMode ? 'background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px;' : 'border-radius: 8px;'"
        >
          <div class="flex items-center justify-between mb-6">
            <h3 
              class="text-lg font-semibold"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              style="font-family: 'Inter', sans-serif; font-weight: 600;"
            >
              Cache Split
            </h3>
            <div class="flex items-center gap-2">
              <button
                v-for="period in ['30 Day', '7 Day']"
                :key="period"
                :class="[
                  'px-3 py-1 text-sm font-medium rounded transition-colors',
                  period === '30 Day'
                    ? (isDarkMode ? 'bg-[#182230] text-white' : 'bg-gray-900 text-white')
                    : (isDarkMode ? 'text-gray-400 hover:bg-[#182230]' : 'text-gray-600 hover:bg-gray-100')
                ]"
                style="border-radius: 6px; font-family: 'Inter', sans-serif;"
              >
                {{ period }}
              </button>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <div class="relative w-64 h-64">
              <canvas ref="cacheSplitChart"></canvas>
              <div class="absolute inset-0 flex items-center justify-center flex-col">
                <span 
                  class="text-3xl font-bold"
                  :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                >
                  25%
                </span>
                <span 
                  class="text-sm"
                  :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                >
                  Hit
                </span>
              </div>
            </div>
            <div class="ml-8 space-y-4">
              <div class="flex items-center gap-2">
                <div class="w-4 h-4 rounded-full" style="background: #14B8A6;"></div>
                <span 
                  class="text-sm"
                  :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                >
                  Hit 25%
                </span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-4 h-4 rounded-full" style="background: #F97316;"></div>
                <span 
                  class="text-sm"
                  :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                >
                  Miss 75%
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
import { Chart, registerables, ArcElement, type Chart as ChartType } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables, ArcElement);

// Set page title
useHead({
  title: "Domains - Varnish Dashboard",
});

// Dark mode disabled - always use light mode colors
const isDarkMode = computed(() => {
  return false; // Always return false to keep light mode colors
});

// Chart refs
const performanceChart = ref<HTMLCanvasElement | null>(null);
const cacheSplitChart = ref<HTMLCanvasElement | null>(null);

// Chart instances
let performanceChartInstance: ChartType | null = null;
let cacheSplitChartInstance: ChartType | null = null;

// Create Performance Line Chart
const createPerformanceChart = () => {
  if (performanceChart.value) {
    const existingChart = Chart.getChart(performanceChart.value);
    if (existingChart) {
      existingChart.destroy();
    }
    
    const ctx = performanceChart.value.getContext('2d');
    if (!ctx) return;
    
    // Sample data matching the image (decreasing trend from ~65 to ~35)
    const data = [65, 60, 55, 50, 45, 40, 35];
    const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    performanceChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Performance',
          data: data,
          borderColor: '#3B82F6',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
          pointRadius: 0,
          pointHoverRadius: 4
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
            max: 90,
            ticks: {
              stepSize: 10
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

// Create Cache Split Donut Chart
const createCacheSplitChart = () => {
  if (cacheSplitChart.value) {
    const existingChart = Chart.getChart(cacheSplitChart.value);
    if (existingChart) {
      existingChart.destroy();
    }
    
    const ctx = cacheSplitChart.value.getContext('2d');
    if (!ctx) return;
    
    cacheSplitChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Hit', 'Miss'],
        datasets: [{
          data: [25, 75],
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
    createCacheSplitChart();
  });
});

// Cleanup on unmount
onUnmounted(() => {
  if (performanceChartInstance) performanceChartInstance.destroy();
  if (cacheSplitChartInstance) cacheSplitChartInstance.destroy();
});
</script>

