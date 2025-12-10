<template>
  <DashboardLayout>
    <div class="space-y-6" style="height: 93vh;">
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
            SSL Certificates
          </h1>
          <p 
            class="text-xs sm:text-sm"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              color: #475467;
            "
          >
            Manage, renew or install SSL Certificates for your domain services.
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
          <!-- Add SSL Button -->
          <button
            @click="$router.push('/dashboard/ssl/add')"
            class="px-3 sm:px-4 py-2 rounded-lg font-medium text-white transition-colors hover:opacity-90 flex-1 sm:flex-initial text-sm sm:text-base"
            style="
              background: #182230;
              border-radius: 8px;
              font-family: 'Inter', sans-serif;
              font-weight: 600;
            "
          >
            <span class="hidden sm:inline">+ Add SSL</span>
            <span class="sm:hidden">+ Add</span>
          </button>
        </div>
      </div>

      <!-- Alert Box -->
      <div 
        class="rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        style="background: #F9FAFB; border: 1px solid #E5E7EB; border-radius: 8px;"
      >
        <div class="flex items-center gap-2 sm:gap-3 flex-1">
          <div class="w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0" style="background: #E5E7EB;">
            <svg class="w-3 h-3" style="color: #6B7280;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p class="text-xs sm:text-sm font-medium" style="color: #374151; font-family: 'Inter', sans-serif;">
            Certificate Certificate expiring within 7 days
          </p>
        </div>
        <div class="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            class="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors flex-1 sm:flex-initial"
            style="color: #374151; font-family: 'Inter', sans-serif;"
          >
            Dismiss
          </button>
          <button
            class="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-white transition-colors flex-1 sm:flex-initial"
            style="background: #182230; border-radius: 8px; font-family: 'Inter', sans-serif;"
          >
            <span class="hidden sm:inline">Renew all expiring SSLs</span>
            <span class="sm:hidden">Renew All</span>
          </button>
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Total Card -->
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p 
              class="text-sm font-medium"
              style="font-family: 'Inter', sans-serif; color: #6B7280;"
            >
              Total
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
              3
            </p>
            <div class="flex items-center gap-1" style="color: #14B8A6;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span class="text-sm font-medium">7%</span>
            </div>
          </div>
        </div>

        <!-- Active Card -->
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p 
              class="text-sm font-medium"
              style="font-family: 'Inter', sans-serif; color: #6B7280;"
            >
              Active
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
              3
            </p>
            <div class="flex items-center gap-1" style="color: #14B8A6;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span class="text-sm font-medium">7%</span>
            </div>
          </div>
        </div>

        <!-- Images Card 1 -->
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

        <!-- Images Card 2 -->
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

      <!-- List of SSL Certificates Table -->
      <div 
        class="rounded-lg border"
        style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px;"
      >
        <!-- Table Header -->
        <div 
          class="p-3 lg:p-4 border-b flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3"
          style="border-bottom: 1px solid #E5E7EB;"
        >
          <h2 
            class="text-base lg:text-lg font-semibold"
            style="font-family: 'Inter', sans-serif; font-weight: 600; color: #101828;"
          >
            List of SSL Certificates
          </h2>
          <div class="flex items-center gap-2 lg:gap-3 w-full lg:w-auto">
            <!-- Search Input -->
            <div class="relative flex-1 lg:flex-initial">
              <input
                type="text"
                placeholder="Search SSL"
                class="pl-9 lg:pl-10 pr-3 lg:pr-4 py-2 border rounded-lg text-xs lg:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-auto"
                style="
                  min-width: 120px;
                  max-width: 200px;
                  height: 36px;
                  border-radius: 8px;
                  font-family: 'Inter', sans-serif;
                  border: 1px solid #D0D5DD;
                  background: #FFFFFF;
                  color: #101828;
                "
              />
              <svg 
                class="absolute left-2.5 lg:left-3 top-2.5 w-3.5 h-3.5 lg:w-4 lg:h-4" 
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
              class="px-3 lg:px-4 py-2 border rounded-lg text-xs lg:text-sm font-medium transition-colors hover:bg-gray-50 whitespace-nowrap"
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
              class="px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm font-medium text-white transition-colors whitespace-nowrap"
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
        <div class="overflow-x-auto -mx-3 lg:mx-0">
          <table class="w-full min-w-[800px] lg:min-w-0">
            <thead style="background: #F9FAFB;">
              <tr>
                <th class="px-2 lg:px-4 py-3 text-left">
                  <input type="checkbox" class="rounded border-gray-300" />
                </th>
                <th 
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
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
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  style="color: #6B7280; font-family: 'Inter', sans-serif;"
                >
                  <div class="flex items-center gap-2">
                    CPU
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
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  style="color: #6B7280; font-family: 'Inter', sans-serif;"
                >
                  <div class="flex items-center gap-2">
                    Ram
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
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  style="color: #6B7280; font-family: 'Inter', sans-serif;"
                >
                  <div class="flex items-center gap-2">
                    Disk
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
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  style="color: #6B7280; font-family: 'Inter', sans-serif;"
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
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  style="color: #6B7280; font-family: 'Inter', sans-serif;"
                >
                  <div class="flex items-center gap-2">
                    Uptime
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
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
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
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
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
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
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
                v-for="(row, index) in sslData" 
                :key="index" 
                class="hover:bg-gray-50"
              >
                <td class="px-2 lg:px-4 py-4">
                  <input type="checkbox" class="rounded border-gray-300" />
                </td>
                <td 
                  class="px-2 lg:px-4 py-4 text-xs lg:text-sm whitespace-nowrap"
                  style="color: #101828;"
                >
                  {{ row.domain }}
                </td>
                <td 
                  class="px-2 lg:px-4 py-4 text-xs lg:text-sm whitespace-nowrap"
                  style="color: #101828;"
                >
                  {{ row.cpu }}
                </td>
                <td 
                  class="px-2 lg:px-4 py-4 text-xs lg:text-sm whitespace-nowrap"
                  style="color: #101828;"
                >
                  {{ row.ram }}
                </td>
                <td 
                  class="px-2 lg:px-4 py-4 text-xs lg:text-sm whitespace-nowrap"
                  style="color: #101828;"
                >
                  {{ row.disk }}
                </td>
                <td 
                  class="px-2 lg:px-4 py-4 text-xs lg:text-sm whitespace-nowrap"
                  style="color: #101828;"
                >
                  {{ row.bandwidth }}
                </td>
                <td 
                  class="px-2 lg:px-4 py-4 text-xs lg:text-sm whitespace-nowrap"
                  style="color: #101828;"
                >
                  {{ row.uptime }}
                </td>
                <td 
                  class="px-2 lg:px-4 py-4 text-xs lg:text-sm whitespace-nowrap"
                  style="color: #101828;"
                >
                  {{ row.plan }}
                </td>
                <td class="px-2 lg:px-4 py-4">
                  <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full bg-green-500"></div>
                    <span 
                      class="text-xs lg:text-sm whitespace-nowrap"
                      style="color: #101828;"
                    >
                      Approved
                    </span>
                  </div>
                </td>
                <td class="px-2 lg:px-4 py-4">
                  <button
                    class="px-2 lg:px-3 py-1 text-xs lg:text-sm font-medium rounded transition-colors hover:bg-gray-100 whitespace-nowrap"
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
          class="p-3 lg:p-4 border-t flex flex-col lg:flex-row items-center justify-between gap-3"
          style="border-top: 1px solid #E5E7EB;"
        >
          <button
            class="px-3 py-2 text-xs lg:text-sm font-medium rounded transition-colors disabled:opacity-50 hover:bg-gray-50 w-full lg:w-auto"
            style="border-radius: 6px; color: #374151;"
            disabled
          >
            ← Previous
          </button>
          <div class="flex items-center gap-1 lg:gap-2 flex-wrap justify-center">
            <button
              v-for="page in [1, 2, 3, '...', 8, 9, 10]"
              :key="page"
              :class="[
                'px-2 lg:px-3 py-1 text-xs lg:text-sm font-medium rounded transition-colors',
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
            class="px-3 py-2 text-xs lg:text-sm font-medium rounded transition-colors hover:bg-gray-50 w-full lg:w-auto"
            style="border-radius: 6px; color: #374151;"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
// Set page title
useHead({
  title: "SSL Certificates - Varnish Dashboard",
});

// Mock SSL data
const sslData = ref([
  { domain: 'example.com', cpu: '2v cores', ram: '4 GB', disk: '80 GB', bandwidth: '120 GB', uptime: '99.9%', plan: 'Basic' },
  { domain: 'my shop.net', cpu: '4v cores', ram: '8 GB', disk: '160 GB', bandwidth: '-', uptime: '-', plan: 'Pro' },
  { domain: 'cdn-site.io', cpu: '8v cores', ram: '16 GB', disk: '320 GB', bandwidth: '1.2 TB', uptime: '99.7%', plan: 'Enterprise' },
  { domain: 'cdn-site.io', cpu: '8v cores', ram: '16 GB', disk: '320 GB', bandwidth: '1.2 TB', uptime: '99.7%', plan: 'Enterprise' },
  { domain: 'cdn-site.io', cpu: '8v cores', ram: '16 GB', disk: '320 GB', bandwidth: '1.2 TB', uptime: '99.7%', plan: 'Enterprise' },
]);
</script>

