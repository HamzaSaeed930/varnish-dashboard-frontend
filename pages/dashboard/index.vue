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
              font-size: 30px;
              line-height: 38px;
              letter-spacing: 0%;
            "
          >
            Dashboard
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
        <div class="flex items-center gap-3">
          <!-- Date Range Selector -->
          <div class="flex items-center gap-2 px-3 py-2 border rounded-lg">
            <svg
              class="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span
              class="text-sm"
              style="
                font-family: 'Inter', sans-serif;
                color: #101828;
              "
            >
              12 Oct 2025 - 08 Nov 2025
            </span>
          </div>
          <!-- Download Button -->
          <button
            class="px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
            style="
              background: #182230;
              border-radius: 8px;
              font-family: 'Inter', sans-serif;
              font-weight: 500;
            "
          >
            Download
          </button>
        </div>
      </div>

      <!-- Top Row - KPI Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- CDN Reqs Card -->
        <div
          class="rounded-lg p-4 sm:p-6"
          style="
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(232, 225, 225, 1);
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
          "
        >
          <p
            class="text-2xl sm:text-3xl font-bold mb-2"
            style="
              font-family: 'Geist', sans-serif;
              color: #101828;
            "
          >
            1.2 M
          </p>
          <div class="flex items-center justify-between">
            <p
              class="text-sm font-medium"
              style="
                font-family: 'Geist', sans-serif;
                color: #475467;
              "
            >
              CDN Reqs
            </p>
            <div class="flex items-center gap-1 px-2 py-1 rounded"
              style="background: rgba(16, 185, 129, 0.1);"
            >
              <svg
                class="w-3 h-3"
                style="color: #10b981"
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
                class="text-xs font-medium"
                style="
                  font-family: 'Inter', sans-serif;
                  color: #10b981;
                "
              >
                +12.7%
              </span>
            </div>
          </div>
        </div>

        <!-- Active Domains Card -->
        <div
          class="rounded-lg p-4 sm:p-6"
          style="
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(232, 225, 225, 1);
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
          "
        >
          <p
            class="text-2xl sm:text-3xl font-bold mb-2"
            style="
              font-family: 'Geist', sans-serif;
              color: #101828;
            "
          >
            3
          </p>
          <div class="flex items-center justify-between">
            <p
              class="text-sm font-medium"
              style="
                font-family: 'Geist', sans-serif;
                color: #475467;
              "
            >
              Active Domains
            </p>
            <div class="flex items-center gap-1 px-2 py-1 rounded"
              style="background: rgba(16, 185, 129, 0.1);"
            >
              <svg
                class="w-3 h-3"
                style="color: #10b981"
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
                class="text-xs font-medium"
                style="
                  font-family: 'Inter', sans-serif;
                  color: #10b981;
                "
              >
                +12.3%
              </span>
            </div>
          </div>
        </div>

        <!-- Bandwidth Card -->
        <div
          class="rounded-lg p-4 sm:p-6"
          style="
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(232, 225, 225, 1);
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
          "
        >
          <p
            class="text-2xl sm:text-3xl font-bold mb-2"
            style="
              font-family: 'Geist', sans-serif;
              color: #101828;
            "
          >
            48 GB
          </p>
          <div class="flex items-center justify-between">
            <p
              class="text-sm font-medium"
              style="
                font-family: 'Geist', sans-serif;
                color: #475467;
              "
            >
              Bandwidth
            </p>
            <div class="flex items-center gap-1 px-2 py-1 rounded"
              style="background: rgba(16, 185, 129, 0.1);"
            >
              <svg
                class="w-3 h-3"
                style="color: #10b981"
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
                class="text-xs font-medium"
                style="
                  font-family: 'Inter', sans-serif;
                  color: #10b981;
                "
              >
                +12.1%
              </span>
            </div>
          </div>
        </div>

        <!-- Cache Hit Card -->
        <div
          class="rounded-lg p-4 sm:p-6"
          style="
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(232, 225, 225, 1);
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
          "
        >
          <p
            class="text-2xl sm:text-3xl font-bold mb-2"
            style="
              font-family: 'Geist', sans-serif;
              color: #101828;
            "
          >
            92 %
          </p>
          <div class="flex items-center justify-between">
            <p
              class="text-sm font-medium"
              style="
                font-family: 'Geist', sans-serif;
                color: #475467;
              "
            >
              Cache Hit
            </p>
            <div class="flex items-center gap-1 px-2 py-1 rounded"
              style="background: rgba(239, 68, 68, 0.1);"
            >
              <svg
                class="w-3 h-3"
                style="color: #ef4444"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
              <span
                class="text-xs font-medium"
                style="
                  font-family: 'Inter', sans-serif;
                  color: #ef4444;
                "
              >
                -9.8%
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Second Row - Service Metrics Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <!-- Hosting Card -->
        <div
          class="rounded-lg p-4"
          style="
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(232, 225, 225, 1);
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
          "
        >
          <p
            class="text-sm font-medium mb-2"
            style="
              font-family: 'Geist', sans-serif;
              color: #475467;
            "
          >
            Hosting
          </p>
          <div class="flex items-center justify-between">
            <p
              class="text-lg font-semibold"
              style="
                font-family: 'Geist', sans-serif;
                color: #101828;
              "
            >
              2 sites
            </p>
            <button
              class="px-3 py-1 text-xs font-medium rounded transition-colors"
              style="
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                color: #374151;
                border-radius: 6px;
                font-family: 'Geist', sans-serif;
              "
            >
              Manage
            </button>
          </div>
        </div>

        <!-- Domains Card -->
        <div
          class="rounded-lg p-4"
          style="
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(232, 225, 225, 1);
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
          "
        >
          <p
            class="text-sm font-medium mb-2"
            style="
              font-family: 'Geist', sans-serif;
              color: #475467;
            "
          >
            Domains
          </p>
          <div class="flex items-center justify-between">
            <p
              class="text-lg font-semibold"
              style="
                font-family: 'Geist', sans-serif;
                color: #101828;
              "
            >
              3 Domains
            </p>
            <button
              class="px-3 py-1 text-xs font-medium rounded transition-colors"
              style="
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                color: #374151;
                border-radius: 6px;
                font-family: 'Geist', sans-serif;
              "
            >
              Manage
            </button>
          </div>
        </div>

        <!-- Varnish Card -->
        <div
          class="rounded-lg p-4"
          style="
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(232, 225, 225, 1);
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
          "
        >
          <p
            class="text-sm font-medium mb-2"
            style="
              font-family: 'Geist', sans-serif;
              color: #475467;
            "
          >
            Varnish
          </p>
          <div class="flex items-center justify-between">
            <p
              class="text-lg font-semibold"
              style="
                font-family: 'Geist', sans-serif;
                color: #101828;
              "
            >
              92% hit
            </p>
            <button
              class="px-3 py-1 text-xs font-medium rounded transition-colors"
              style="
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                color: #374151;
                border-radius: 6px;
                font-family: 'Geist', sans-serif;
              "
            >
              Manage
            </button>
          </div>
        </div>

        <!-- SSL Card -->
        <div
          class="rounded-lg p-4"
          style="
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(232, 225, 225, 1);
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
          "
        >
          <p
            class="text-sm font-medium mb-2"
            style="
              font-family: 'Geist', sans-serif;
              color: #475467;
            "
          >
            SSL
          </p>
          <div class="flex items-center justify-between">
            <p
              class="text-lg font-semibold"
              style="
                font-family: 'Geist', sans-serif;
                color: #101828;
              "
            >
              expiring soon
            </p>
            <button
              class="px-3 py-1 text-xs font-medium rounded transition-colors"
              style="
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                color: #374151;
                border-radius: 6px;
                font-family: 'Geist', sans-serif;
              "
            >
              Manage
            </button>
          </div>
        </div>

        <!-- Images Card -->
        <div
          class="rounded-lg p-4"
          style="
            background: rgba(255, 255, 255, 1);
            border: 1px solid rgba(232, 225, 225, 1);
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
          "
        >
          <p
            class="text-sm font-medium mb-2"
            style="
              font-family: 'Geist', sans-serif;
              color: #475467;
            "
          >
            Images
          </p>
          <div class="flex items-center justify-between">
            <p
              class="text-lg font-semibold"
              style="
                font-family: 'Geist', sans-serif;
                color: #101828;
              "
            >
              18% saved
            </p>
            <button
              class="px-3 py-1 text-xs font-medium rounded transition-colors"
              style="
                background: #f9fafb;
                border: 1px solid #e5e7eb;
                color: #374151;
                border-radius: 6px;
                font-family: 'Geist', sans-serif;
              "
            >
              Manage
            </button>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <!-- Performance Chart -->
        <div
          class="md:col-span-2"
          style="
            background: #F5F5F5;
            border: 1px solid #d8d8d8;
            border-radius: 10px;
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
              Performance
            </h3>
            <div
              class="flex items-center gap-1 bg-gray-100 rounded-lg p-1"
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
          <div class="bg-white" style="position: relative; border-radius: 8px; border: 1px solid #e5e7eb; height: 30vh;">
            <canvas 
              ref="performanceChart"
              style="display: block; box-sizing: border-box; height: 250px; width: 100%; margin: 2%;"
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
                  25%
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
                  Hit
                </span>
              </div>
            </div>
            <div class="sm:ml-8 space-y-0">
              <div
                class="flex items-center gap-2 border-b pb-3"
                style="border-bottom: 1px solid #e5e7eb"
              >
                <div
                  class="w-4 h-4 rounded-full flex-shrink-0"
                  style="background: #299d8f"
                ></div>
                <div class="flex flex-col gap-1">
                  <span
                    class="text-sm"
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 20px;
                      letter-spacing: 0%;
                      color: #64748b;
                    "
                  >
                    Hit
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
                    "
                  >
                    25%
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
                <div class="flex flex-col gap-1">
                  <span
                    class="text-sm"
                    style="
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 20px;
                      letter-spacing: 0%;
                      color: #64748b;
                    "
                  >
                    Miss
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
                    "
                  >
                    75%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Activity Feed Section -->
      <div
        class="rounded-lg border"
        style="
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
        "
      >
        <!-- Activity Feed Header -->
        <div
          class="p-4 border-b flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0"
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
            Activity Feed
          </h2>
          <button
            class="px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors"
            style="
              background: #182230;
              border-radius: 8px;
              font-family: 'Inter', sans-serif;
              font-weight: 500;
            "
          >
            View All
          </button>
        </div>

        <!-- Activity Items -->
        <div class="p-4 space-y-3">
          <div
            v-for="(activity, index) in activities"
            :key="index"
            class="flex items-start gap-3 p-3 rounded-lg border"
            style="
              background: #ffffff;
              border: 1px solid #e5e7eb;
              border-radius: 8px;
            "
          >
            <!-- Info Icon -->
            <div
              class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
              style="background: #f3f4f6"
            >
              <span
                class="text-xs font-medium"
                style="
                  font-family: 'Inter', sans-serif;
                  color: #6b7280;
                "
              >
                i
              </span>
            </div>
            <!-- Activity Content -->
            <div class="flex-1 min-w-0">
              <p
                class="text-sm font-medium mb-1"
                style="
                  font-family: 'Inter', sans-serif;
                  color: #101828;
                "
              >
                {{ activity.description }}
              </p>
              <p
                class="text-xs mb-2"
                style="
                  font-family: 'Inter', sans-serif;
                  color: #6b7280;
                "
              >
                {{ activity.timestamp }}
              </p>
              <div class="flex items-center gap-4">
                <button
                  class="text-xs font-medium"
                  style="
                    font-family: 'Inter', sans-serif;
                    color: #6b7280;
                  "
                >
                  Dismiss
                </button>
                <button
                  class="text-xs font-semibold"
                  style="
                    font-family: 'Inter', sans-serif;
                    color: #101828;
                  "
                >
                  View
                </button>
              </div>
            </div>
            <!-- Close Icon -->
            <button class="flex-shrink-0">
              <svg
                class="w-4 h-4"
                style="color: #6b7280"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Pagination -->
        <div
          class="p-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0"
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
declare const useHead: any;

// Register Chart.js components
Chart.register(...registerables, ArcElement);

// Set page title
useHead({
  title: "Dashboard - Varnish Dashboard",
});

// Activity feed data
const activities = ref([
  {
    description: "Domain example.com added",
    timestamp: "2h ago",
  },
  {
    description: "SSL renewed for mysite.net",
    timestamp: "1d ago",
  },
  {
    description: "Payment received - 49$",
    timestamp: "3d ago",
  },
  {
    description: "Payment received - 49$",
    timestamp: "3d ago",
  },
  {
    description: "Payment received - 49$",
    timestamp: "3d ago",
  },
]);

// Chart refs
const performanceChart = ref<HTMLCanvasElement | null>(null);
const cacheSplitChart = ref<HTMLCanvasElement | null>(null);

// Chart instances
let performanceChartInstance: ChartType | null = null;
let cacheSplitChartInstance: ChartType | null = null;

// Create Performance Line Chart (3 lines with shaded area)
const createPerformanceChart = () => {
  if (performanceChart.value) {
    const existingChart = Chart.getChart(performanceChart.value);
    if (existingChart) {
      existingChart.destroy();
    }

    const ctx = performanceChart.value.getContext("2d");
    if (!ctx) return;

    // Data matching the image: three lines with top two having shaded area
    const labels = ["12 am", "1 am", "2 am", "3 am", "4 am", "5 am", "6 am"];
    const topLineData = [70, 72, 75, 78, 80, 82, 80];
    const middleLineData = [50, 52, 54, 55, 58, 60, 58];
    const bottomLineData = [30, 28, 25, 27, 35, 45, 48];

    performanceChartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Top",
            data: topLineData,
            borderColor: "#3B82F6",
            backgroundColor: "rgba(59, 130, 246, 0.15)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 4,
          },
          {
            label: "Middle",
            data: middleLineData,
            borderColor: "#3B82F6",
            backgroundColor: "rgba(59, 130, 246, 0.15)",
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 4,
          },
          {
            label: "Bottom",
            data: bottomLineData,
            borderColor: "#3B82F6",
            backgroundColor: "transparent",
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointRadius: 0,
            pointHoverRadius: 4,
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
        labels: ["Hit", "Miss"],
        datasets: [
          {
            data: [25, 75],
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
