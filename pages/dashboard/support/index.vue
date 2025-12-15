<template>
  <DashboardLayout>
    <div class="space-y-4 sm:space-y-6">
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
        <div class="flex-1 min-w-0">
          <h1
            class="mb-1"
            style="
              font-family: 'Geist', sans-serif;
              font-weight: 600;
              font-size: 30px;
              line-height: 38px;
              letter-spacing: 0%;
              color: #020617;
            "
          >
            Support
          </h1>
          <p
            class=""
            style="
              font-family: 'Geist', sans-serif;
              font-weight: 400;
              font-size: 14px;
              line-height: 20px;
              letter-spacing: 0%;
              color: #64748b;
            "
          >
            Get Help from our support team or track your open requests.
          </p>
        </div>
        <div class="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <!-- Refresh Button -->
          <button
            class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border transition-colors flex-shrink-0 hover:bg-gray-50 bg-white"
            style="border-radius: 12px; border: 1px solid #e5e7eb"
          >
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5 text-gray-900"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 3V8M21 8H16M21 8L18 5.5C16.7429 4.46819 15.1767 3.82137 13.5201 3.65709C11.8635 3.49282 10.1904 3.81828 8.73005 4.59077C7.26972 5.36325 6.09895 6.54555 5.37667 7.98564C4.65439 9.42573 4.41727 11.0516 4.69612 12.6329C4.97497 14.2142 5.75638 15.6707 6.93334 16.7917C8.11031 17.9127 9.62331 18.6411 11.2528 18.8765C12.8823 19.1119 14.5476 18.8428 16.0128 18.1065C17.4781 17.3703 18.6707 16.2035 19.4271 14.7634"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <!-- New Ticket Button -->
          <button
            @click="$router.push('/dashboard/support/add')"
            class="px-3 sm:px-4 py-2 rounded-lg transition-colors hover:opacity-90 flex-1 sm:flex-initial flex items-center gap-1.5 sm:gap-2"
            style="
              background: #182230;
              border-radius: 8px;
              font-family: 'Geist', sans-serif;
              font-weight: 500;
              font-size: 14px;
              line-height: 16px;
              letter-spacing: -0.6%;
              color: #ffffff;
            "
          >
            <svg
              class="w-4 h-4 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style="color: #ffffff"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span class="hidden sm:inline"> New Ticket</span>
            <span class="sm:hidden">+ New</span>
          </button>
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Open Card -->
        <div 
          class="rounded-lg p-4"
          style="border-radius: 8px; background: #F6F6F6; border: 1px solid #D8D8D8;"
        >
          <div class="flex items-center gap-3 mb-3">
            <div 
              class="w-10 h-10 flex items-center justify-center rounded-lg"
            >
              <svg 
                class="w-5 h-5" 
                style="color: #6B7280;"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p 
              class="text-sm font-medium"
              style="font-family: 'Inter', sans-serif; color: #6B7280;"
            >
              Open
            </p>
          </div>
          <div 
            class="rounded-lg p-4 flex items-center justify-between"
            style="background: #FFFFFF; border-radius: 8px; border: 1px solid #E8E1E1; box-shadow: 0px 2px 4px 0px #0000000D;"
          >
            <p 
              class="text-2xl font-bold"
              style="font-family: 'Inter', sans-serif; font-weight: 700; color: #101828;"
            >
              14.2k
            </p>
            <div class="flex items-center gap-1" style="color: #14B8A6;">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span class="text-sm font-medium">7%</span>
            </div>
          </div>
        </div>

        <!-- In Progress Card -->
        <div 
          class="rounded-lg p-4"
          style="border-radius: 8px; background: #F6F6F6; border: 1px solid #D8D8D8;"
        >
          <div class="flex items-center gap-3 mb-3">
            <div 
              class="w-10 h-10 flex items-center justify-center rounded-lg"
            >
              <svg 
                class="w-5 h-5" 
                style="color: #6B7280;"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p 
              class="text-sm font-medium"
              style="font-family: 'Inter', sans-serif; color: #6B7280;"
            >
              In Progress
            </p>
          </div>
          <div 
            class="rounded-lg p-4 flex items-center justify-between"
            style="background: #FFFFFF; border-radius: 8px; border: 1px solid #E8E1E1; box-shadow: 0px 2px 4px 0px #0000000D;"
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

        <!-- Resolved Card -->
        <div 
          class="rounded-lg p-4"
          style="border-radius: 8px; background: #F6F6F6; border: 1px solid #D8D8D8;"
        >
          <div class="flex items-center gap-3 mb-3">
            <div 
              class="w-10 h-10 flex items-center justify-center rounded-lg"
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
              Resolved
            </p>
          </div>
          <div 
            class="rounded-lg p-4 flex items-center justify-between"
            style="background: #FFFFFF; border-radius: 8px; border: 1px solid #E8E1E1; box-shadow: 0px 2px 4px 0px #0000000D;"
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
      </div>

      <!-- List of Tickets Table -->
      <div 
        class="rounded-lg border"
        style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px;"
      >
        <!-- Table Header -->
        <div
          class="p-3 lg:p-4 border-b flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3"
          style="border-bottom: 1px solid #e5e7eb"
        >
          <h2
            class="text-base lg:text-lg font-semibold"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 600;
              color: #101828;
            "
          >
            List of Tickets
          </h2>
          <div class="flex items-center gap-2 lg:gap-3 w-full lg:w-auto">
            <!-- Search Input -->
            <div class="relative flex-1 lg:flex-initial">
              <input
                type="text"
                placeholder="Search Ticket"
                class="pl-9 lg:pl-10 pr-3 lg:pr-4 py-2 border rounded-lg text-xs lg:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-auto"
                style="
                  min-width: 120px;
                  max-width: 200px;
                  height: 36px;
                  border-radius: 8px;
                  font-family: 'Inter', sans-serif;
                  border: 1px solid #d0d5dd;
                  background: #ffffff;
                  color: #101828;
                "
              />
              <svg
                class="absolute left-2.5 lg:left-3 top-2.5 w-3.5 h-3.5 lg:w-4 lg:h-4"
                style="color: #9ca3af"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <!-- Filters Button -->
            <button
              class="px-3 lg:px-4 py-2 border rounded-lg text-xs lg:text-sm font-medium transition-colors hover:bg-gray-50 whitespace-nowrap"
              style="
                height: 36px;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                border: 1px solid #d0d5dd;
                color: #374151;
                background: #ffffff;
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
          <table class="w-full min-w-[700px] lg:min-w-0">
            <thead style="background: #f9fafb">
              <tr>
                <th class="px-2 sm:px-4 py-3 text-left">
                  <input type="checkbox" class="rounded border-gray-300" />
                </th>
                <th
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  style="color: #6b7280; font-family: 'Inter', sans-serif"
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
                  style="color: #6b7280; font-family: 'Inter', sans-serif"
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
                  style="color: #6b7280; font-family: 'Inter', sans-serif"
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
                  class="px-2 sm:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
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
                  class="px-2 sm:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
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
                  class="px-2 sm:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
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
                  class="px-2 sm:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
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
                  class="px-2 sm:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
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
                  class="px-2 sm:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
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
            <tbody style="background: #ffffff" class="divide-y divide-gray-200">
              <tr
                v-for="(row, index) in ticketsData"
                :key="index"
                class="hover:bg-gray-50"
              >
                <td class="px-2 lg:px-4 py-4">
                  <input type="checkbox" class="rounded border-gray-300" />
                </td>
                <td
                  class="px-2 lg:px-4 py-4 whitespace-nowrap align-middle"
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -2.6%;
                    vertical-align: middle;
                    color: #020617;
                  "
                >
                  {{ row.domain }}
                </td>
                <td
                  class="px-2 lg:px-4 py-4 whitespace-nowrap align-middle"
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -2.6%;
                    vertical-align: middle;
                    color: #020617;
                  "
                >
                  {{ row.cpu }}
                </td>
                <td
                  class="px-2 lg:px-4 py-4 whitespace-nowrap align-middle"
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -2.6%;
                    vertical-align: middle;
                    color: #020617;
                  "
                >
                  {{ row.ram }}
                </td>
                <td
                  class="px-2 lg:px-4 py-4 whitespace-nowrap align-middle"
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -2.6%;
                    vertical-align: middle;
                    color: #020617;
                  "
                >
                  {{ row.disk }}
                </td>
                <td
                  class="px-2 lg:px-4 py-4 whitespace-nowrap align-middle"
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -2.6%;
                    vertical-align: middle;
                    color: #020617;
                  "
                >
                  {{ row.bandwidth }}
                </td>
                <td
                  class="px-2 lg:px-4 py-4 whitespace-nowrap align-middle"
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -2.6%;
                    vertical-align: middle;
                    color: #020617;
                  "
                >
                  {{ row.uptime }}
                </td>
                <td
                  class="px-2 lg:px-4 py-4 whitespace-nowrap align-middle"
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: -2.6%;
                    vertical-align: middle;
                    color: #020617;
                  "
                >
                  {{ row.plan }}
                </td>
                <td class="px-2 lg:px-4 py-4">
                  <span
                    class="inline-flex items-center gap-2 px-2 py-1 rounded border"
                    style="
                      background: #f9fafb;
                      border-color: #e5e7eb;
                      border-radius: 6px;
                    "
                  >
                    <div
                      class="w-2 h-2 rounded-full flex-shrink-0"
                      style="background: #10b981"
                    ></div>
                    <span
                      class="text-xs lg:text-sm whitespace-nowrap"
                      style="color: #101828; font-family: 'Inter', sans-serif"
                    >
                      Approved
                    </span>
                  </span>
                </td>
                <td class="px-2 lg:px-4 py-4">
                  <button
                    class="px-2 lg:px-3 py-1 text-xs lg:text-sm font-medium rounded transition-colors hover:bg-gray-50 whitespace-nowrap border"
                    style="
                      border-radius: 6px;
                      color: #374151;
                      background: #ffffff;
                      border-color: #e5e7eb;
                      font-family: 'Inter', sans-serif;
                    "
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
          style="border-top: 1px solid #e5e7eb; background: #f9fafb"
        >
          <button
            class="px-3 py-2 text-xs lg:text-sm font-medium rounded transition-colors disabled:opacity-50 hover:bg-gray-50 w-full lg:w-auto flex items-center gap-1 border"
            style="
              border-radius: 6px;
              color: #374151;
              background: #ffffff;
              border-color: #e5e7eb;
              font-family: 'Inter', sans-serif;
            "
            disabled
          >
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Previous
          </button>
          <div
            class="flex items-center gap-1 lg:gap-2 flex-wrap justify-center"
          >
            <button
              v-for="page in [1, 2, 3, '...', 8, 9, 10]"
              :key="page"
              :class="[
                'px-2 lg:px-3 py-1 text-xs lg:text-sm font-medium rounded transition-colors',
                page === 1 ? '' : '',
              ]"
              :style="
                page === 1
                  ? 'border-radius: 6px; color: #101828; background: #FFFFFF; border: 1px solid #E5E7EB; font-family: Inter, sans-serif;'
                  : page === '...'
                  ? 'border-radius: 6px; color: #6B7280; font-family: Inter, sans-serif;'
                  : 'border-radius: 6px; color: #374151; font-family: Inter, sans-serif;'
              "
            >
              {{ page }}
            </button>
          </div>
          <button
            class="px-3 py-2 text-xs lg:text-sm font-medium rounded transition-colors hover:bg-gray-50 w-full lg:w-auto flex items-center gap-1 border"
            style="
              border-radius: 6px;
              color: #374151;
              background: #ffffff;
              border-color: #e5e7eb;
              font-family: 'Inter', sans-serif;
            "
          >
            Next
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
/// <reference types="nuxt/app" />
import { ref } from "vue";

// Type declarations for Nuxt auto-imports
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const useHead: any;

// Set page title
useHead({
  title: "Support - Varnish Dashboard",
});

// Mock tickets data
const ticketsData = ref([
  { domain: 'example.com', cpu: '2v cores', ram: '4 GB', disk: '80 GB', bandwidth: '120 GB', uptime: '99.9%', plan: 'Basic' },
  { domain: 'my shop.net', cpu: '4v cores', ram: '8 GB', disk: '160 GB', bandwidth: '-', uptime: '-', plan: 'Pro' },
  { domain: 'cdn-site.io', cpu: '8v cores', ram: '16 GB', disk: '320 GB', bandwidth: '1.2 TB', uptime: '99.7%', plan: 'Enterprise' },
  { domain: 'cdn-site.io', cpu: '8v cores', ram: '16 GB', disk: '320 GB', bandwidth: '1.2 TB', uptime: '99.7%', plan: 'Enterprise' },
  { domain: 'cdn-site.io', cpu: '8v cores', ram: '16 GB', disk: '320 GB', bandwidth: '1.2 TB', uptime: '99.7%', plan: 'Enterprise' },
]);
</script>

