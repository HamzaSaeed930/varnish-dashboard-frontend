<template>
  <DashboardLayout>
    <div class="space-y-6">
      <!-- Page Header -->
      <div
        class="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4"
      >
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
            Billing
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
            View Invoices, Manage subscriptions, and update payment methods.
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
          <!-- Add Payment Method Button -->
          <button
            @click="$router.push('/dashboard/billings/add')"
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
            <span class="hidden sm:inline">Add Payment Method</span>
            <span class="sm:hidden">Add Method</span>
          </button>
        </div>
      </div>

      <!-- Pro Plan Card -->
      <div
        class="rounded-lg border p-4 sm:p-6"
        style="
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
        "
      >
        <div
          class="flex flex-col sm:flex-row items-start justify-between gap-4"
        >
          <div class="flex-1">
            <div class="flex items-center gap-3 mb-2">
              <h2
                class=""
                style="
                  font-family: 'Geist', sans-serif;
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 28px;
                  letter-spacing: 0%;
                  color: #101828;
                "
              >
                Pro Plan
              </h2>
              <span
                class="px-2 py-1 rounded"
                style="
                  background: #f3f4f6;
                  color: #344054;
                  border-radius: 4px;
                  font-family: 'Geist', sans-serif;
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 20px;
                  text-align: center;
                "
              >
                Monthly
              </span>
            </div>
            <p
              class="mb-4"
              style="
                font-family: 'Geist', sans-serif;
                font-weight: 400;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: 0%;
                color: #475467;
              "
            >
              Our most popular plan for small teams.
            </p>
            <div class="space-y-2 mb-4">
              <div class="flex items-center gap-2">
                <span
                  class=""
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: 0%;
                    color: #101828;
                  "
                >
                  Renewal: 12 Nov 2025
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span
                  class=""
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: 0%;
                    color: #101828;
                  "
                >
                  Total Due: $146
                </span>
              </div>
              <div class="flex items-center gap-2">
                <span
                  class=""
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    letter-spacing: 0%;
                    color: #101828;
                  "
                >
                  Payment method: VISA ending in 1234
                </span>
              </div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <p
              class="mb-1"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                font-size: 48px;
                line-height: 60px;
                letter-spacing: -2%;
                color: #101828;
              "
            >
              $99
            </p>
            <p
              class=""
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0%;
                color: #475467;
              "
            >
              /month + usage
            </p>
          </div>
        </div>
        <!-- Action Links Section -->
        <div
          class="pt-4 mt-4 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 -mx-4 sm:-mx-6 px-4 sm:px-6"
          style="border-top: 1px solid #e5e7eb"
        >
          <button
            class="transition-colors hover:underline"
            style="
              font-family: 'Geist', sans-serif;
              font-weight: 600;
              font-size: 14px;
              line-height: 20px;
              letter-spacing: 0%;
              color: #475467;
            "
          >
            View Subscription Details
          </button>
          <button
            class="transition-colors hover:underline flex items-center gap-1"
            style="
              font-family: 'Geist', sans-serif;
              font-weight: 600;
              font-size: 14px;
              line-height: 20px;
              letter-spacing: 0%;
              color: #000000;
            "
          >
            Upgrade plan
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
                d="M7 17L17 7M7 7h10v10"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Invoices Table -->
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
            Invoices
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
                <th class="px-2 lg:px-4 py-3 text-left">
                  <input type="checkbox" class="rounded border-gray-300" />
                </th>
                <th
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  style="color: #6b7280; font-family: 'Inter', sans-serif"
                >
                  <div class="flex items-center gap-2">
                    Invoice
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
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  style="color: #6b7280; font-family: 'Inter', sans-serif"
                >
                  <div class="flex items-center gap-2">
                    Billing Date
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
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  style="color: #6b7280; font-family: 'Inter', sans-serif"
                >
                  <div class="flex items-center gap-2">
                    Amount
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
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  style="color: #6b7280; font-family: 'Inter', sans-serif"
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
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  style="color: #6b7280; font-family: 'Inter', sans-serif"
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
                  class="px-2 lg:px-4 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
                  style="color: #6b7280; font-family: 'Inter', sans-serif"
                >
                  <div class="flex items-center gap-2">
                    Actions
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
              </tr>
            </thead>
            <tbody style="background: #ffffff" class="divide-y divide-gray-200">
              <tr
                v-for="(row, index) in invoicesData"
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
                  {{ row.invoice }}
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
                  {{ row.billingDate }}
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
                  {{ row.amount }}
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
                    Download
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

      <!-- Payment Method Section -->
      <div
        class="rounded-lg border p-4 lg:p-6"
        style="
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
        "
      >
        <h2
          class="text-base lg:text-lg font-semibold mb-1"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            color: #101828;
          "
        >
          Payment Method
        </h2>
        <p
          class="text-xs lg:text-sm mb-4"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            color: #6b7280;
          "
        >
          Choose what you want to be notified about.
        </p>
        <div class="space-y-3">
          <div
            @click="selectedPaymentMethod = 'visa'"
            class="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors"
            :style="
              selectedPaymentMethod === 'visa'
                ? 'background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px;'
                : 'background: #FFFFFF; border: 1px solid transparent; border-radius: 8px;'
            "
          >
            <div class="flex-shrink-0">
              <svg
                class="w-10 h-7"
                viewBox="0 0 40 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="38"
                  height="24"
                  rx="3"
                  fill="white"
                  stroke="#E5E7EB"
                  stroke-width="1"
                />
                <rect
                  x="4"
                  y="6"
                  width="10"
                  height="14"
                  rx="1.5"
                  fill="#1A1F71"
                />
              </svg>
            </div>
            <div class="flex-1">
              <p
                class="text-sm font-medium"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  color: #101828;
                "
              >
                Visa
              </p>
              <p
                class="text-xs"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  color: #6b7280;
                "
              >
                Expiry 02/2026
              </p>
            </div>
          </div>
          <div
            @click="selectedPaymentMethod = 'mastercard'"
            class="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors"
            :style="
              selectedPaymentMethod === 'mastercard'
                ? 'background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 8px;'
                : 'background: #FFFFFF; border: 1px solid transparent; border-radius: 8px;'
            "
          >
            <div class="flex-shrink-0">
              <svg
                class="w-10 h-7"
                viewBox="0 0 40 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="38"
                  height="24"
                  rx="3"
                  fill="white"
                  stroke="#E5E7EB"
                  stroke-width="1"
                />
                <circle cx="14" cy="13" r="5" fill="#EB001B" />
                <circle cx="26" cy="13" r="5" fill="#F79E1B" />
                <path
                  d="M20 8.5C18.8 9.5 18 10.8 18 12.2C18 13.6 18.8 14.9 20 15.9C21.2 14.9 22 13.6 22 12.2C22 10.8 21.2 9.5 20 8.5Z"
                  fill="#FF5F00"
                />
              </svg>
            </div>
            <div class="flex-1">
              <p
                class="text-sm font-medium"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  color: #101828;
                "
              >
                Mastercard
              </p>
              <p
                class="text-xs"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  color: #6b7280;
                "
              >
                Expiry 02/2026
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <!-- Charts Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <!-- Usage Summary Chart -->
        <div
          class="rounded-lg border p-3 md:col-span-2"
          style="
            background: #f6f6f6;
            border: 1px solid #d8d8d8;
            border-radius: 8px;
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
              Usage Summary
            </h3>
            <div
              class="flex items-center gap-1 bg-gray-100 rounded-lg p-1"
              style="border-radius: 8px; background: #e3e3e3"
            >
              <button
                v-for="period in ['1H', '1D', '7D', '1M']"
                :key="period"
                :class="[
                  'px-3 py-1 rounded transition-colors',
                  period === '7D' ? 'bg-white font-semibold' : '',
                ]"
                :style="
                  period === '7D'
                    ? 'border-radius: 6px; font-family: Geist, sans-serif; font-weight: 600; font-size: 12px; line-height: 20px; letter-spacing: -0.6%; color: #020617; background: #FFFFFF;'
                    : 'border-radius: 6px; font-family: Geist, sans-serif; font-weight: 500; font-size: 12px; line-height: 20px; letter-spacing: -0.6%; color: #6B7280;'
                "
              >
                {{ period }}
              </button>
            </div>
          </div>
          <div
            class="bg-white p-4"
            style="
              border-radius: 8px;
              border: 1px solid #e5e7eb;
              background: #ffffff;
            "
          >
            <div class="mb-4">
              <h4
                class="text-xs sm:text-sm font-medium mb-2"
                style="color: #101828; font-family: 'Inter', sans-serif"
              >
                Bar Chart
              </h4>
              <p
                class="text-xs"
                style="color: #6b7280; font-family: 'Inter', sans-serif"
              >
                January - June 2024
              </p>
            </div>
            <div style="height: 250px; position: relative">
              <canvas
                ref="usageChart"
                style="
                  display: block;
                  box-sizing: border-box;
                  height: 100%;
                  width: 100%;
                "
              ></canvas>
            </div>
            <div class="mt-4 space-y-1">
              <p
                class="text-sm font-medium flex items-center gap-1"
                style="color: #101828; font-family: 'Inter', sans-serif"
              >
                Trending up by 5.2% this month
                <span class="w-1.5 h-1.5 rounded-full bg-black"></span>
              </p>
              <p
                class="text-xs"
                style="color: #6b7280; font-family: 'Inter', sans-serif"
              >
                Showing Performance for the last 7 days
              </p>
            </div>
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
              Cost Breakdown
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
            style="border-radius: 8px; border: 1px solid #e5e7eb; height: 42vh"
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
                  90
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
                  TB Data Saved
                </span>
              </div>
            </div>
            <div class="sm:ml-8 space-y-0">
              <div
                class="flex items-center gap-2 pb-3 pt-3 border-b"
                style="border-bottom: 1px solid #e5e7eb"
              >
                <div
                  class="w-4 h-4 rounded-full flex-shrink-0 m-auto"
                  style="background: #299d8f"
                ></div>

                <div class="flex flex-col gap-2">
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
                    Domain
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

                <div class="flex flex-col gap-2">
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
                    Hosting
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
/// <reference types="nuxt/app" />
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import {
  Chart,
  registerables,
  ArcElement,
  type Chart as ChartType,
} from "chart.js";

// Type declarations for Nuxt auto-imports
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const useHead: any;

// Register Chart.js components
Chart.register(...registerables, ArcElement);

// Set page title
useHead({
  title: "Billing - Varnish Dashboard",
});

// Chart refs
const usageChart = ref<HTMLCanvasElement | null>(null);
const cacheSplitChart = ref<HTMLCanvasElement | null>(null);

// Payment method selection
const selectedPaymentMethod = ref<string>("mastercard");

// Mock invoices data
const invoicesData = ref([
  {
    invoice: "Invoice #007",
    billingDate: "Dec 1, 2025",
    amount: "USD $99.00",
    plan: "Basic Plan",
  },
  {
    invoice: "Invoice #007",
    billingDate: "Dec 1, 2025",
    amount: "USD $99.00",
    plan: "Basic Plan",
  },
  {
    invoice: "Invoice #007",
    billingDate: "Dec 1, 2025",
    amount: "USD $99.00",
    plan: "Basic Plan",
  },
  {
    invoice: "Invoice #007",
    billingDate: "Dec 1, 2025",
    amount: "USD $99.00",
    plan: "Basic Plan",
  },
  {
    invoice: "Invoice #007",
    billingDate: "Dec 1, 2025",
    amount: "USD $99.00",
    plan: "Basic Plan",
  },
]);

// Chart instances
let usageChartInstance: ChartType | null = null;
let cacheSplitChartInstance: ChartType | null = null;

// Create Usage Summary Bar Chart
const createUsageChart = () => {
  if (usageChart.value) {
    const existingChart = Chart.getChart(usageChart.value);
    if (existingChart) {
      existingChart.destroy();
    }

    const ctx = usageChart.value.getContext("2d");
    if (!ctx) return;

    // Sample data matching the image (bar chart for Jan-Jun)
    // Feb is tallest, Mar is shortest, Jun has no bar
    const data = [40, 80, 20, 60, 55, 0];
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

    usageChartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Usage",
            data: data,
            backgroundColor: "#14B8A6",
            borderWidth: 0,
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              display: false,
            },
            grid: {
              color: "#E5E7EB",
            },
            border: {
              display: false,
            },
          },
          x: {
            grid: {
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
            data: [10, 90], // 10% Available, 90% Used
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
