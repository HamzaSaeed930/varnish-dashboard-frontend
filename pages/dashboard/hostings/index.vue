<template>
  <DashboardLayout>
    <div class="space-y-6 transition-colors duration-200">
      <!-- Page Header -->
      <div
        class="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4"
      >
        <div class="flex-1 min-w-0">
          <h1
            class="mb-1 text-gray-900 dark:text-white transition-colors duration-200"
            style="
              font-family: 'Geist', sans-serif;
              font-weight: 600;
              font-style: SemiBold;
              font-size: 22px;
              line-height: 32px;
              letter-spacing: -0.6%;
            "
          >
            Hostings
          </h1>
          <p
            class="text-gray-600 dark:text-gray-400 transition-colors duration-200"
            style="
              font-family: 'Geist', sans-serif;
              font-weight: 400;
              font-style: Regular;
              font-size: 14px;
              line-height: 20px;
              letter-spacing: 0%;
            "
          >
            Manage, connect and monitor all your domains.
          </p>
        </div>
        <div class="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <!-- Refresh Button -->
          <button
            class="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border transition-colors flex-shrink-0 hover:bg-gray-50 dark:hover:bg-gray-800 dark:border-gray-700 dark:bg-gray-800"
            style="
              border-radius: 12px;
            "
          >
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 dark:text-white transition-colors duration-200"
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
          <!-- Add Domain Button -->
          <button
            @click="$router.push('/dashboard/hostings/add')"
            class="px-3 sm:px-4 py-2 rounded-lg transition-colors hover:opacity-90 flex-1 sm:flex-initial flex items-center gap-1.5 sm:gap-2"
            style="
              background: #182230;
              border-radius: 8px;
              font-family: 'Geist', sans-serif;
              font-weight: 500;
              font-style: Medium;
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
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span class="hidden sm:inline">Domain</span>
            <span class="sm:hidden">Add</span>
          </button>
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Hosting Card -->
        <div
          class="rounded-lg p-4"
          style="
            border-radius: 8px;
            background: #f9fafb;
            border: 1px solid #e5e7eb;
          "
        >
          <div class="flex items-center gap-3 mb-3">
            <div
              class="w-10 h-10 flex items-center justify-center rounded-lg"
              style="background: #e5e7eb"
            >
              <svg
                class="w-5 h-5"
                style="color: #6b7280"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <p
              class="text-sm font-medium"
              style="
                font-family: 'Geist', sans-serif;
                font-weight: 600;
                font-style: SemiBold;
                font-size: 14px;
                line-height: 22px;
                letter-spacing: -2.6%;
                color: #80838a;
              "
            >
              Hosting
            </p>
          </div>
          <div
            class="rounded-lg p-4"
            style="background: #ffffff; border-radius: 8px"
          >
            <div class="flex items-center gap-2">
              <span
                class="font-medium"
                style="
                  font-family: 'Geist', sans-serif;
                  font-weight: 500;
                  font-style: Medium;
                  font-size: 22px;
                  line-height: 32px;
                  letter-spacing: -5.6%;
                  color: #020617;
                "
              >
                2 Sites
              </span>
              <svg
                class="w-3 h-3 flex-shrink-0"
                style="color: #299d8f"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              <span
                class="font-medium"
                style="
                  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont,
                    sans-serif;
                  font-weight: 500;
                  font-style: Medium;
                  font-size: 12px;
                  line-height: 16px;
                  letter-spacing: 0px;
                  color: #299d8f;
                "
              >
                7%
              </span>
            </div>
          </div>
        </div>

        <!-- SSL Card -->
        <div
          class="rounded-lg p-4"
          style="
            border-radius: 8px;
            background: #f9fafb;
            border: 1px solid #e5e7eb;
          "
        >
          <div class="flex items-center gap-3 mb-3">
            <div
              class="w-10 h-10 flex items-center justify-center rounded-lg"
              style="background: #e5e7eb"
            >
              <svg
                class="w-5 h-5"
                style="color: #6b7280"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <p
              class="text-sm font-medium"
              style="
                font-family: 'Geist', sans-serif;
                font-weight: 600;
                font-style: SemiBold;
                font-size: 14px;
                line-height: 22px;
                letter-spacing: -2.6%;
                color: #80838a;
              "
            >
              SSL
            </p>
          </div>
          <div
            class="rounded-lg p-4"
            style="background: #ffffff; border-radius: 8px"
          >
            <div class="flex items-center gap-2">
              <span
                class="font-medium"
                style="
                  font-family: 'Geist', sans-serif;
                  font-weight: 500;
                  font-style: Medium;
                  font-size: 22px;
                  line-height: 32px;
                  letter-spacing: -5.6%;
                  color: #020617;
                "
              >
                Expiring in 7d
              </span>
              <svg
                class="w-3 h-3 flex-shrink-0"
                style="color: #299d8f"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              <span
                class="font-medium"
                style="
                  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont,
                    sans-serif;
                  font-weight: 500;
                  font-style: Medium;
                  font-size: 12px;
                  line-height: 16px;
                  letter-spacing: 0px;
                  color: #299d8f;
                "
              >
                7%
              </span>
            </div>
          </div>
        </div>

        <!-- Images Card -->
        <div
          class="rounded-lg p-4"
          style="
            border-radius: 8px;
            background: #f9fafb;
            border: 1px solid #e5e7eb;
          "
        >
          <div class="flex items-center gap-3 mb-3">
            <div
              class="w-10 h-10 flex items-center justify-center rounded-lg"
              style="background: #e5e7eb"
            >
              <svg
                class="w-5 h-5"
                style="color: #6b7280"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p
              class="text-sm font-medium"
              style="
                font-family: 'Geist', sans-serif;
                font-weight: 600;
                font-style: SemiBold;
                font-size: 14px;
                line-height: 22px;
                letter-spacing: -2.6%;
                color: #80838a;
              "
            >
              Images
            </p>
          </div>
          <div
            class="rounded-lg p-4"
            style="background: #ffffff; border-radius: 8px"
          >
            <div class="flex items-center gap-2">
              <span
                class="font-medium"
                style="
                  font-family: 'Geist', sans-serif;
                  font-weight: 500;
                  font-style: Medium;
                  font-size: 22px;
                  line-height: 32px;
                  letter-spacing: -5.6%;
                  color: #020617;
                "
              >
                18 Images Saved
              </span>
              <svg
                class="w-3 h-3 flex-shrink-0"
                style="color: #299d8f"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
              <span
                class="font-medium"
                style="
                  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont,
                    sans-serif;
                  font-weight: 500;
                  font-style: Medium;
                  font-size: 12px;
                  line-height: 16px;
                  letter-spacing: 0px;
                  color: #299d8f;
                "
              >
                7%
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- List of Domains Table -->
      <div
        class="rounded-lg border"
        style="
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
        "
      >
        <!-- Table Header -->
        <div
          class="p-3 sm:p-4 border-b flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0"
          style="border-bottom: 1px solid #e5e7eb"
        >
          <h2
            class="text-base sm:text-lg font-semibold"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 600;
              color: #101828;
            "
          >
            List of Domains
          </h2>
          <div class="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <!-- Search Input -->
            <div class="relative flex-1 sm:flex-initial">
              <input
                type="text"
                placeholder="Search Domains"
                class="pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 border rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
                style="
                  min-width: 120px;
                  max-width: 200px;
                  height: 36px;
                  border-radius: 8px;
                  border: 1px solid #e5e7eb;
                  background: #ffffff;
                  color: #101828;
                  font-family: 'Inter', sans-serif;
                "
              />
              <svg
                class="absolute left-2.5 sm:left-3 top-2.5 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400"
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
              class="px-3 sm:px-4 py-2 border rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap"
              style="
                height: 36px;
                border-radius: 8px;
                border: 1px solid #e5e7eb;
                background: #ffffff;
                color: #374151;
                font-family: 'Inter', sans-serif;
              "
            >
              Filters
            </button>
            <!-- Manage Button -->
            <button
              class="px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium text-white transition-colors whitespace-nowrap"
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
        <div class="overflow-x-auto -mx-3 sm:mx-0">
          <table class="w-full min-w-[1000px] sm:min-w-0">
            <thead style="background: #f9fafb">
              <tr>
                <th class="px-4 py-3 text-left">
                  <input type="checkbox" class="rounded border-gray-300" />
                </th>
                <th
                  class="px-4 py-3 text-left uppercase tracking-wider"
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 500;
                    font-style: Medium;
                    font-size: 14px;
                    line-height: 16px;
                    letter-spacing: -0.6%;
                    vertical-align: middle;
                    background: #f8fafc;
                    color: #020617;
                  "
                >
                  <div class="flex items-center gap-2">
                    Domain
                    <div class="flex flex-col">
                      <svg
                        class="w-3 h-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                      <svg
                        class="w-3 h-3 text-gray-400 -mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style="color: #6b7280"
                >
                  <div class="flex items-center gap-2">
                    CPU
                    <div class="flex flex-col">
                      <svg
                        class="w-3 h-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                      <svg
                        class="w-3 h-3 text-gray-400 -mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style="color: #6b7280"
                >
                  <div class="flex items-center gap-2">
                    Ram
                    <div class="flex flex-col">
                      <svg
                        class="w-3 h-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                      <svg
                        class="w-3 h-3 text-gray-400 -mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style="color: #6b7280"
                >
                  <div class="flex items-center gap-2">
                    Disk
                    <div class="flex flex-col">
                      <svg
                        class="w-3 h-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                      <svg
                        class="w-3 h-3 text-gray-400 -mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style="color: #6b7280"
                >
                  <div class="flex items-center gap-2">
                    Bandwidth
                    <div class="flex flex-col">
                      <svg
                        class="w-3 h-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                      <svg
                        class="w-3 h-3 text-gray-400 -mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style="color: #6b7280"
                >
                  <div class="flex items-center gap-2">
                    Uptime
                    <div class="flex flex-col">
                      <svg
                        class="w-3 h-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                      <svg
                        class="w-3 h-3 text-gray-400 -mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style="color: #6b7280"
                >
                  <div class="flex items-center gap-2">
                    Plan
                    <div class="flex flex-col">
                      <svg
                        class="w-3 h-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                      <svg
                        class="w-3 h-3 text-gray-400 -mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style="color: #6b7280"
                >
                  <div class="flex items-center gap-2">
                    Status
                    <div class="flex flex-col">
                      <svg
                        class="w-3 h-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 15l7-7 7 7"
                        />
                      </svg>
                      <svg
                        class="w-3 h-3 text-gray-400 -mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </th>
                <th
                  class="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  style="color: #6b7280"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody style="background: #ffffff" class="divide-y divide-gray-200">
              <tr
                v-for="(domain, index) in domains"
                :key="index"
                class="hover:bg-gray-50"
              >
                <td class="px-4 py-4">
                  <input type="checkbox" class="rounded border-gray-300" />
                </td>
                <td
                  class="px-4 py-4 text-sm font-medium"
                  style="color: #101828"
                >
                  {{ domain.domain }}
                </td>
                <td class="px-4 py-4 text-sm" style="color: #101828">
                  {{ domain.cpu }}
                </td>
                <td class="px-4 py-4 text-sm" style="color: #101828">
                  {{ domain.ram }}
                </td>
                <td class="px-4 py-4 text-sm" style="color: #101828">
                  {{ domain.disk }}
                </td>
                <td class="px-4 py-4 text-sm" style="color: #101828">
                  {{ domain.bandwidth || "-" }}
                </td>
                <td class="px-4 py-4 text-sm" style="color: #101828">
                  {{ domain.uptime || "-" }}
                </td>
                <td class="px-4 py-4 text-sm" style="color: #101828">
                  {{ domain.plan }}
                </td>
                <td class="px-4 py-4">
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
                      class="text-sm"
                      style="color: #101828; font-family: 'Geist', sans-serif"
                    >
                      {{ domain.status }}
                    </span>
                  </span>
                </td>
                <td class="px-4 py-4">
                  <button
                    v-if="domain.status === 'Approved'"
                    class="px-3 py-1 text-sm font-medium rounded transition-colors border"
                    style="
                      border-radius: 6px;
                      color: #374151;
                      background: #ffffff;
                      border-color: #e5e7eb;
                      font-family: 'Geist', sans-serif;
                    "
                  >
                    Manage
                  </button>
                  <button
                    v-else-if="domain.status === 'Pending'"
                    class="px-3 py-1 text-sm font-medium rounded transition-colors border"
                    style="
                      border-radius: 6px;
                      color: #374151;
                      background: #ffffff;
                      border-color: #e5e7eb;
                      font-family: 'Geist', sans-serif;
                    "
                  >
                    Activate
                  </button>
                  <button
                    v-else-if="domain.status === 'Expired'"
                    class="px-3 py-1 text-sm font-medium rounded transition-colors border"
                    style="
                      border-radius: 6px;
                      color: #374151;
                      background: #ffffff;
                      border-color: #e5e7eb;
                      font-family: 'Geist', sans-serif;
                    "
                  >
                    Renew
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div
          class="p-3 sm:p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0"
          style="border-top: 1px solid #e5e7eb"
        >
          <button
            class="px-3 py-2 text-xs sm:text-sm font-medium rounded transition-colors border w-full sm:w-auto"
            style="
              border-radius: 6px;
              color: #374151;
              background: #ffffff;
              border-color: #e5e7eb;
              font-family: 'Geist', sans-serif;
            "
          >
            <span class="flex items-center gap-1">
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
            </span>
          </button>
          <div
            class="flex items-center gap-1 sm:gap-2 flex-wrap justify-center"
          >
            <button
              v-for="page in [1, 2, 3, '...', 8, 9, 10]"
              :key="page"
              :class="[
                'px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded transition-colors',
                page === 1 ? 'border shadow-sm' : '',
              ]"
              :style="
                page === 1
                  ? 'border-radius: 6px; color: #101828; background: #FFFFFF; border-color: #E5E7EB; font-family: Geist, sans-serif;'
                  : page === '...'
                  ? 'border-radius: 6px; color: #6B7280; font-family: Geist, sans-serif;'
                  : 'border-radius: 6px; color: #6B7280; font-family: Geist, sans-serif;'
              "
            >
              {{ page }}
            </button>
          </div>
          <button
            class="px-3 py-2 text-xs sm:text-sm font-medium rounded transition-colors border w-full sm:w-auto"
            style="
              border-radius: 6px;
              color: #374151;
              background: #ffffff;
              border-color: #e5e7eb;
              font-family: 'Geist', sans-serif;
            "
          >
            <span class="flex items-center gap-1">
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
            </span>
          </button>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <!-- Usage Overview Chart -->
        <div
          class="md:col-span-2"
          style="
            background: #F5F5F5;
            border: 1px solid #d8d8d8;
            border-radius: 10px;
            border-width: 1px;
            padding: 10px;
            gap: 10px;
          "
        >
          <div class="flex items-center justify-between mb-2">
            <h3
              style="
                font-family: 'Geist', sans-serif;
                font-weight: 600;
                font-size: 14px;
                line-height: 22px;
                letter-spacing: -2.6%;
                color: #80838a;
              "
            >
              Usage Overview
            </h3>
            <div
              class="flex items-center gap-1 bg-gray-100 rounded-lg p-1 "
              style="border-radius: 8px; background: #E3E3E3;"
            >
              <button
                v-for="period in ['1H', '1D', '7D', '1M']"
                :key="period"
                :class="[
                  'px-3 py-1 rounded transition-colors',
                  period === '1H'
                    ? 'bg-white font-semibold'
                    : 'hover:text-gray-700',
                ]"
                style="
                  border-radius: 6px;
                  font-family: 'Geist', sans-serif;
                  font-weight: 500;
                  font-size: 12px;
                  line-height: 20px;
                  letter-spacing: -0.6%;
                  color: #020617;
                "
              >
                {{ period }}
              </button>
            </div>
          </div>
          <div class=" bg-white" style="position: relative; border-radius: 8px; border: 1px solid #e5e7eb; height: 30vh;">
            <canvas 
              ref="usageChart"
              style="display: block; box-sizing: border-box; height: 250px; width: 650px; margin: 2%;"
            ></canvas>
          </div>
        </div>

        <!-- Cache Split Chart -->
        <div
          class="md:col-span-1"
          style="
            background: #f6f6f6;
            border: 1px solid #d8d8d8;
            border-radius: 10px;
            border-width: 1px;
            padding: 10px;
          "
        >
          <div class="flex items-center justify-between mb-2">
            <h3
              style="
                font-family: 'Geist', sans-serif;
                font-weight: 600;
                font-size: 14px;
                line-height: 22px;
                letter-spacing: -2.6%;
                color: #80838a;
              "
            >
              Cache Split
            </h3>
            <div
              class="flex items-center gap-1 bg-gray-100 rounded-lg p-1"
              style="border-radius: 8px; background: #f3f4f6"
            >
              <button
                v-for="period in ['30 Day', '7 Day']"
                :key="period"
                :class="[
                  'px-3 py-1 rounded transition-colors',
                  period === '30 Day'
                    ? 'bg-white font-semibold'
                    : 'hover:text-gray-700',
                ]"
                style="
                  border-radius: 6px;
                  font-family: 'Geist', sans-serif;
                  font-weight: 500;
                  font-size: 12px;
                  line-height: 20px;
                  letter-spacing: -0.6%;
                  color: #020617;
                "
              >
                {{ period }}
              </button>
            </div>
          </div>
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 bg-white"
            style="border-radius: 8px; border: 1px solid #e5e7eb; height: 30vh"
          >
            <div
              class="relative flex items-center justify-center"
              style="width: 146px; height: 146px"
            >
              <canvas
                ref="cacheSplitChart"
                style="width: 146px; height: 146px"
              ></canvas>
              <div
                class="absolute inset-0 flex items-center justify-center flex-col"
              >
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 600;
                    font-size: 30px;
                    line-height: 36px;
                    letter-spacing: -0.75%;
                    text-align: center;
                    color: #020617;
                  "
                >
                  10%
                </span>
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 16px;
                    letter-spacing: -0.6%;
                    text-align: center;
                    color: #64748b;
                    margin-top: 4px;
                  "
                >
                  available
                </span>
              </div>
            </div>
            <div class="sm:ml-8 space-y-0">
              <div
                class="flex items-center gap-2 border-b"
                style="border-bottom: 1px solid #e5e7eb"
              >
                <div
                  class="w-4 h-4 rounded-full flex-shrink-0 m-auto"
                  style="background: #299d8f"
                ></div>

                <div class="flex flex-col  gap-2 pb-3">
                  <span
                    class="text-sm"
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 20px;
                      letter-spacing: 0%;
                      color: #64748b;
                      vertical-align: middle;
                    "
                  >
                    Available
                  </span>
                  <span
                    class="text-sm"
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 20px;
                      letter-spacing: 0%;
                      color: #64748b;
                      vertical-align: middle;
                    "
                  >
                    10%
                  </span>
                </div>
              </div>
              <div
                class="flex items-center gap-2 pb-3 pt-3 border-b"
                style="border-bottom: 1px solid #e5e7eb"
              >
                <div
                  class="w-4 h-4 rounded-full flex-shrink-0"
                  style="background: #f4a361"
                ></div>

                <div class="flex flex-col gap-2 pb-3">
                  <span
                    class="text-sm"
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 20px;
                      letter-spacing: 0%;
                      color: #64748b;
                      vertical-align: middle;
                    "
                  >
                    Used
                  </span>
                  <span
                    class="text-sm"
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 20px;
                      letter-spacing: 0%;
                      color: #64748b;
                      vertical-align: middle;
                    "
                  >
                    90%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import {
  Chart,
  registerables,
  ArcElement,
  type Chart as ChartType,
} from "chart.js";

// Register Chart.js components
Chart.register(...registerables, ArcElement);

// Set page title
useHead({
  title: "Hostings - Varnish Dashboard",
});

// Domain data
const domains = ref([
  {
    domain: "example.com",
    cpu: "2v cores",
    ram: "4 GB",
    disk: "80 GB",
    bandwidth: "120 GB",
    uptime: "99.9%",
    plan: "Basic",
    status: "Approved",
  },
  {
    domain: "my shop.net",
    cpu: "4v cores",
    ram: "8 GB",
    disk: "160 GB",
    bandwidth: "-",
    uptime: "-",
    plan: "Pro",
    status: "Approved",
  },
  {
    domain: "cdn-site.io",
    cpu: "8v cores",
    ram: "16 GB",
    disk: "320 GB",
    bandwidth: "1.2 TB",
    uptime: "99.7%",
    plan: "Enterprise",
    status: "Approved",
  },
  {
    domain: "cdn-site.io",
    cpu: "8v cores",
    ram: "16 GB",
    disk: "320 GB",
    bandwidth: "1.2 TB",
    uptime: "99.7%",
    plan: "Enterprise",
    status: "Pending",
  },
  {
    domain: "cdn-site.io",
    cpu: "8v cores",
    ram: "16 GB",
    disk: "320 GB",
    bandwidth: "1.2 TB",
    uptime: "99.7%",
    plan: "Enterprise",
    status: "Expired",
  },
]);

// Get status color
const getStatusColor = (status: string) => {
  switch (status) {
    case "Approved":
      return "#10B981"; // green
    case "Pending":
      return "#F59E0B"; // yellow
    case "Expired":
      return "#EF4444"; // red
    default:
      return "#6B7280"; // gray
  }
};

// Chart refs
const usageChart = ref<HTMLCanvasElement | null>(null);
const cacheSplitChart = ref<HTMLCanvasElement | null>(null);

// Chart instances
let usageChartInstance: ChartType | null = null;
let cacheSplitChartInstance: ChartType | null = null;

// Create Usage Overview Line Chart
const createUsageChart = () => {
  if (usageChart.value) {
    const existingChart = Chart.getChart(usageChart.value);
    if (existingChart) {
      existingChart.destroy();
    }

    const ctx = usageChart.value.getContext("2d");
    if (!ctx) return;

    // Data matching the image exactly: starts ~38-39, rises to ~47, peaks ~53-54 before 2am, dips ~47-48 near 3am, peaks ~52-53 at 4am, crosses 60 before 5:30am, peaks ~63-64 before 6am, ends ~62
    const data = [39, 47, 53, 48, 52, 60, 62];
    const labels = ["12 am", "1 am", "2 am", "3 am", "4 am", "5 am", "6 am"];

    usageChartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Usage",
            data: data,
            borderColor: "#3B82F6",
            backgroundColor: "rgba(59, 130, 246, 0.15)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 4,
            pointBackgroundColor: "#3B82F6",
            pointBorderColor: "#3B82F6",
            pointBorderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            mode: "index",
            intersect: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 90,
            ticks: {
              stepSize: 10,
              callback: function (value) {
                return value;
              },
              font: {
                size: 11,
                family: "Geist, sans-serif",
              },
              color: "#6B7280",
            },
            grid: {
              color: "#E5E7EB",
              drawOnChartArea: true,
              drawTicks: false,
              lineWidth: 1,
            },
            border: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 11,
                family: "Geist, sans-serif",
              },
              color: "#6B7280",
            },
            border: {
              display: false,
            },
          },
        },
      },
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

    const ctx = cacheSplitChart.value.getContext("2d");
    if (!ctx) return;

    cacheSplitChartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Available", "Used"],
        datasets: [
          {
            data: [10, 90],
            backgroundColor: ["#299D8F", "#F4A361"],
            borderWidth: 0,
          },
        ],
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
              },
            },
          },
        },
        cutout: "75%",
      },
    });
  }
};

// Initialize charts on mount
onMounted(() => {
  nextTick(() => {
    createUsageChart();
    createCacheSplitChart();
  });
});

// Cleanup on unmount
onUnmounted(() => {
  if (usageChartInstance) usageChartInstance.destroy();
  if (cacheSplitChartInstance) cacheSplitChartInstance.destroy();
});
</script>
