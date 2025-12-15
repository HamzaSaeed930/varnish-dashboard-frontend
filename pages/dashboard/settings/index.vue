<template>
  <DashboardLayout>
    <div class="space-y-6 transition-colors duration-200">
      <!-- Page Header -->
      <div
        class="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4"
      >
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
          Settings
        </h1>
        <!-- Back Button -->
        <button
          @click="$router.back()"
          class="px-4 py-2 rounded-lg text-sm font-medium text-white transition-colors flex items-center gap-2"
          style="
            background: #182230;
            border-radius: 8px;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
          "
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
          Back
        </button>
        </div>

      <!-- Navigation Tabs -->
      <div class="flex items-center gap-1 p-1 rounded-lg" style="background: #f3f4f6; border-radius: 8px; width: 40%;">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          class=" py-2 text-sm font-medium rounded-lg transition-colors flex-1 text-center"
          :style="
            activeTab === tab.id
              ? 'background: #ffffff; color: #000000; font-family: Geist, sans-serif; font-weight: 500;'
              : 'background: transparent; color: #475467; font-family: Geist, sans-serif; font-weight: 500;'
          "
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Tab Content -->
      <div class="space-y-6">
        <!-- Profile Tab -->
        <div v-if="activeTab === 'profile'" class="space-y-6">
          <div>
            <h2
              class="text-lg font-semibold mb-1"
              style="
                font-family: 'Geist', sans-serif;
                color: #101828;
              "
            >
              Personal info
            </h2>
            <p
              class="text-sm"
              style="
                font-family: 'Geist', sans-serif;
                color: #6b7280;
              "
            >
              Update your photo and personal details here.
            </p>
          </div>

          <!-- Your Photo -->
          <div class="flex items-start gap-4 pb-5" style="border-bottom: 1px solid rgb(229, 231, 235)">
            <label
              class="text-sm font-medium whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 120px;
              "
            >
              Your photo
              <span class="text-gray-400">?</span>
            </label>
            <div class="flex-1">
              <p
                class="text-xs mb-3"
                style="
                  font-family: Inter, sans-serif;
                  color: #6b7280;
                "
              >
                This will be displayed on your profile.
              </p>
              <div
                class="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition-colors"
                style="
                  border-color: #d1d5db;
                  border-radius: 8px;
                  background: #f9fafb;
                "
                @click="triggerFileUpload"
              >
                <input
                  ref="fileInput"
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change="handleFileUpload"
                />
                <svg
                  class="w-12 h-12 mx-auto mb-2"
                  style="color: #6b7280"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p
                  class="text-sm font-medium mb-1"
                  style="
                    font-family: Inter, sans-serif;
                    color: #101828;
                  "
                >
                  Click to upload or drag and drop
                </p>
                <p
                  class="text-xs"
                  style="
                    font-family: Inter, sans-serif;
                    color: #6b7280;
                  "
                >
                  SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
              </div>
            </div>
          </div>

          <!-- Name -->
          <div class="flex items-center gap-4 pt-5 pb-5" style="border-bottom: 1px solid rgb(229, 231, 235)">
            <label
              class="text-sm font-medium whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 120px;
              "
            >
              Name
            </label>
            <div class="flex-1 flex gap-3">
              <input
                v-model="profileData.firstName"
                type="text"
                placeholder="Nick"
                class="flex-1 px-4 py-3 border rounded-lg text-sm focus:outline-none form-input"
                style="
                  height: 44px;
                  border-radius: 8px;
                  font-family: Inter, sans-serif;
                  border: 1px solid rgb(208, 213, 221);
                  background: rgb(255, 255, 255);
                  color: rgb(16, 24, 40);
                "
              />
              <input
                v-model="profileData.lastName"
                type="text"
                placeholder="Jonas"
                class="flex-1 px-4 py-3 border rounded-lg text-sm focus:outline-none form-input"
                style="
                  height: 44px;
                  border-radius: 8px;
                  font-family: Inter, sans-serif;
                  border: 1px solid rgb(208, 213, 221);
                  background: rgb(255, 255, 255);
                  color: rgb(16, 24, 40);
                "
              />
            </div>
          </div>

          <!-- Email Address -->
          <div class="flex items-center gap-4 pt-5 pb-5" style="border-bottom: 1px solid rgb(229, 231, 235)">
            <label
              class="text-sm font-medium whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 120px;
              "
            >
              Email address
            </label>
            <div class="flex-1">
              <input
                v-model="profileData.email"
                type="email"
                placeholder="Nickj@gmail.com"
                class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none form-input"
                style="
                  height: 44px;
                  border-radius: 8px;
                  font-family: Inter, sans-serif;
                  border: 1px solid rgb(208, 213, 221);
                  background: rgb(255, 255, 255);
                  color: rgb(16, 24, 40);
                "
              />
            </div>
          </div>

          <!-- Company Name -->
          <div class="flex items-center gap-4 pt-5 pb-5" style="border-bottom: 1px solid rgb(229, 231, 235)">
            <label
              class="text-sm font-medium whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 120px;
              "
            >
              Company Name
            </label>
            <div class="flex-1">
              <input
                v-model="profileData.companyName"
                type="text"
                placeholder="NickJonasLLC"
                class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none form-input"
                style="
                  height: 44px;
                  border-radius: 8px;
                  font-family: Inter, sans-serif;
                  border: 1px solid rgb(208, 213, 221);
                  background: rgb(255, 255, 255);
                  color: rgb(16, 24, 40);
                "
              />
            </div>
          </div>

          <!-- Country -->
          <div class="flex items-center gap-4 pt-5">
            <label
              class="text-sm font-medium whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 120px;
              "
            >
              Country
            </label>
            <div class="flex-1">
              <div class="relative">
                <select
                  v-model="profileData.country"
                  class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none form-input pr-10"
                  style="
                    height: 44px;
                    border-radius: 8px;
                    font-family: Inter, sans-serif;
                    border: 1px solid rgb(208, 213, 221);
                    background: rgb(255, 255, 255);
                    color: rgb(16, 24, 40);
                  "
                >
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
                <svg
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
                  style="color: rgb(107, 114, 128)"
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
          </div>
        </div>

        <!-- Password & Security Tab -->
        <div v-if="activeTab === 'password'" class="space-y-6">
          <div>
            <h2
              class="text-lg font-semibold mb-1"
              style="
                font-family: 'Geist', sans-serif;
                color: #101828;
              "
            >
              Password
            </h2>
            <p
              class="text-sm"
              style="
                font-family: 'Geist', sans-serif;
                color: #6b7280;
              "
            >
              Please enter your current password to change your password.
            </p>
          </div>

          <!-- Current Password -->
          <div class="flex items-center gap-4 pt-5 pb-5" style="border-bottom: 1px solid rgb(229, 231, 235)">
            <label
              class="text-sm font-medium whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 120px;
              "
            >
              Current Password
            </label>
            <div class="flex-1">
              <input
                v-model="passwordData.currentPassword"
                type="password"
                placeholder="........"
                class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none form-input"
                style="
                  height: 44px;
                  border-radius: 8px;
                  font-family: Inter, sans-serif;
                  border: 1px solid rgb(208, 213, 221);
                  background: rgb(255, 255, 255);
                  color: rgb(16, 24, 40);
                "
              />
            </div>
          </div>

          <!-- New Password -->
          <div class="flex items-center gap-4 pt-5 pb-5" style="border-bottom: 1px solid rgb(229, 231, 235)">
            <label
              class="text-sm font-medium whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 120px;
              "
            >
              New Password
            </label>
            <div class="flex-1">
              <input
                v-model="passwordData.newPassword"
                type="password"
                placeholder="........"
                class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none form-input"
                style="
                  height: 44px;
                  border-radius: 8px;
                  font-family: Inter, sans-serif;
                  border: 1px solid rgb(208, 213, 221);
                  background: rgb(255, 255, 255);
                  color: rgb(16, 24, 40);
                "
              />
            </div>
          </div>

          <!-- Confirm New Password -->
          <div class="flex items-center gap-4 pt-5 pb-5" style="border-bottom: 1px solid rgb(229, 231, 235)">
            <label
              class="text-sm font-medium whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 120px;
              "
            >
              Confirm New Password
            </label>
            <div class="flex-1">
              <input
                v-model="passwordData.confirmPassword"
                type="password"
                placeholder="........"
                class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none form-input"
                style="
                  height: 44px;
                  border-radius: 8px;
                  font-family: Inter, sans-serif;
                  border: 1px solid rgb(208, 213, 221);
                  background: rgb(255, 255, 255);
                  color: rgb(16, 24, 40);
                "
              />
            </div>
          </div>

          <!-- Two-Factor Authentication -->
          <div class="flex items-center gap-4 pt-5">
            <label
              class="text-sm font-medium whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 120px;
              "
            >
              Enable 2-factor authentication
            </label>
            <div class="flex-1">
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="passwordData.twoFactorEnabled"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div
                  class="w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black bg-gray-300"
                ></div>
              </label>
            </div>
          </div>
        </div>

        <!-- Notifications Tab -->
        <div v-if="activeTab === 'notifications'" class="space-y-6">
          <div>
            <h2
              class="text-lg font-semibold mb-1"
              style="
                font-family: 'Geist', sans-serif;
                color: #101828;
              "
            >
              Email notifications
            </h2>
            <p
              class="text-sm"
              style="
                font-family: 'Geist', sans-serif;
                color: #6b7280;
              "
            >
              Get emails to find out what's going on when you're not online. You can turn them off anytime.
            </p>
          </div>

          <!-- Notifications from us -->
          <div class="space-y-4">
            <div>
              <h3
                class="text-base font-semibold mb-1"
                style="
                  font-family: 'Geist', sans-serif;
                  color: #101828;
                "
              >
                Notifications from us
              </h3>
              <p
                class="text-sm"
                style="
                  font-family: 'Geist', sans-serif;
                  color: #6b7280;
                "
              >
                Receive the latest updates.
              </p>
            </div>
            <div class="flex items-center gap-3">
              <input
                v-model="notificationData.productUpdates"
                type="checkbox"
                id="product-updates"
                class="w-4 h-4 rounded border-gray-300 focus:ring-black product-checkbox"
                style="border-color: #d1d5db; accent-color: #3b82f6;"
              />
              <label
                for="product-updates"
                class="flex-1 cursor-pointer"
              >
                <span
                  class="text-sm font-medium block"
                  style="
                    font-family: 'Geist', sans-serif;
                    color: #101828;
                  "
                >
                  Product Updates
                </span>
                <span
                  class="text-xs"
                  style="
                    font-family: 'Geist', sans-serif;
                    color: #6b7280;
                  "
                >
                  Emails about new features.
                </span>
              </label>
            </div>
          </div>

          <!-- Reminders & Alerts -->
          <div class="space-y-4 pt-6">
            <div>
              <h3
                class="text-base font-semibold mb-1"
                style="
                  font-family: 'Geist', sans-serif;
                  color: #101828;
                "
              >
                Reminders & Alerts
              </h3>
              <p
                class="text-sm"
                style="
                  font-family: 'Geist', sans-serif;
                  color: #6b7280;
                "
              >
                These are notifications to remind you of updates you might have missed.
              </p>
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <input
                  :checked="notificationData.selectedReminders.includes('billing')"
                  @change="toggleReminder('billing')"
                  type="checkbox"
                  id="billing-reminders"
                  class="w-4 h-4 border-gray-300 focus:ring-black reminder-checkbox"
                  style="border-color: #d1d5db;"
                />
                <label
                  for="billing-reminders"
                  class="flex-1 cursor-pointer"
                >
                  <span
                    class="text-sm font-medium block"
                    style="
                      font-family: 'Geist', sans-serif;
                      color: #101828;
                    "
                  >
                    Billing Reminders
                  </span>
                  <span
                    class="text-xs"
                    style="
                      font-family: 'Geist', sans-serif;
                      color: #6b7280;
                    "
                  >
                    invoices, failed paymenys.
                  </span>
                </label>
              </div>
              <div class="flex items-center gap-3">
                <input
                  :checked="notificationData.selectedReminders.includes('service')"
                  @change="toggleReminder('service')"
                  type="checkbox"
                  id="service-alerts"
                  class="w-4 h-4 border-gray-300 focus:ring-black reminder-checkbox"
                  style="border-color: #d1d5db;"
                />
                <label
                  for="service-alerts"
                  class="flex-1 cursor-pointer"
                >
                  <span
                    class="text-sm font-medium block"
                    style="
                      font-family: 'Geist', sans-serif;
                      color: #101828;
                    "
                  >
                    Service Alerts
                  </span>
                  <span
                    class="text-xs"
                    style="
                      font-family: 'Geist', sans-serif;
                      color: #6b7280;
                    "
                  >
                    uptime, SSL expiry etc.
                  </span>
                </label>
            </div>
              <div class="flex items-center gap-3">
                <input
                  :checked="notificationData.selectedReminders.includes('security')"
                  @change="toggleReminder('security')"
                  type="checkbox"
                  id="security-alerts"
                  class="w-4 h-4 border-gray-300 focus:ring-black reminder-checkbox"
                  style="border-color: #d1d5db;"
                />
                <label
                  for="security-alerts"
                  class="flex-1 cursor-pointer"
                >
                  <span
                    class="text-sm font-medium block"
                    style="
                      font-family: 'Geist', sans-serif;
                      color: #101828;
                    "
                  >
                    Security Alerts
                  </span>
                  <span
                    class="text-xs"
                    style="
                      font-family: 'Geist', sans-serif;
                      color: #6b7280;
                    "
                  >
                    unusual login attempts.
                  </span>
                </label>
            </div>
            </div>
          </div>
        </div>

        <!-- API Tab -->
        <div v-if="activeTab === 'api'" class="space-y-6">
            <div>
            <h2
              class="text-lg font-semibold mb-1"
              style="
                font-family: 'Geist', sans-serif;
                color: #101828;
              "
            >
              API Keys
            </h2>
            <p
              class="text-sm"
              style="
                font-family: 'Geist', sans-serif;
                color: #6b7280;
              "
            >
              Manage your API keys for accessing the Varnish Dashboard API.
            </p>
          </div>

          <!-- API Keys Table -->
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
              class="p-4 border-b flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0"
              style="border-bottom: 1px solid #e5e7eb"
            >
              <h3
                class="text-base font-semibold"
                style="
                  font-family: 'Inter', sans-serif;
                  color: #101828;
                "
              >
                API Keys
              </h3>
              <div class="relative">
                <input
                  type="text"
                  placeholder="Search key"
                  class="pl-9 pr-3 py-2 border rounded-lg text-sm focus:outline-none"
                  style="
                    height: 36px;
                    border-radius: 8px;
                    border: 1px solid #e5e7eb;
                    background: #ffffff;
                    color: #101828;
                    font-family: 'Inter', sans-serif;
                  "
                />
                <svg
                  class="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400"
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
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead style="background: #f9fafb">
                  <tr>
                    <th class="px-4 py-3 text-left">
                      <input type="checkbox" class="rounded border-gray-300" />
                    </th>
                    <th
                      class="px-4 py-3 text-left text-sm font-medium uppercase"
                      style="
                        font-family: 'Geist', sans-serif;
                        color: #6b7280;
                      "
                    >
                      <div class="flex items-center gap-2">
                        Keys
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
                      class="px-4 py-3 text-left text-sm font-medium uppercase"
                      style="
                        font-family: 'Geist', sans-serif;
                        color: #6b7280;
                      "
                    >
                      <div class="flex items-center gap-2">
                        Created Date
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
                      class="px-4 py-3 text-left text-sm font-medium uppercase"
                      style="
                        font-family: 'Geist', sans-serif;
                        color: #6b7280;
                      "
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
                    v-for="(key, index) in apiKeys"
                    :key="index"
                    class="hover:bg-gray-50"
                  >
                    <td class="px-4 py-4">
                      <input type="checkbox" class="rounded border-gray-300" />
                    </td>
                    <td
                      class="px-4 py-4 text-sm"
                      style="
                        font-family: 'Inter', sans-serif;
                        color: #101828;
                      "
                    >
                      {{ key.name }}
                    </td>
                    <td
                      class="px-4 py-4 text-sm"
                      style="
                        font-family: 'Inter', sans-serif;
                        color: #101828;
                      "
                    >
                      {{ key.createdDate }}
                    </td>
                    <td class="px-4 py-4">
                      <div class="flex items-center gap-2">
                        <button
                          class="px-3 py-1 text-xs font-medium rounded transition-colors border"
                          style="
                            border-radius: 6px;
                            color: #374151;
                            background: #ffffff;
                            border-color: #e5e7eb;
                            font-family: 'Geist', sans-serif;
                          "
                        >
                          Revoke
                        </button>
                        <button
                          class="px-3 py-1 text-xs font-medium rounded transition-colors border"
                          style="
                            border-radius: 6px;
                            color: #374151;
                            background: #ffffff;
                            border-color: #e5e7eb;
                            font-family: 'Geist', sans-serif;
                          "
                        >
                          Copy
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
      </div>

      <!-- Action Buttons -->
      <div class="flex items-center justify-end gap-3 pt-6">
        <button
          class="px-4 py-2 text-sm font-medium rounded-lg transition-colors border"
          style="
            border-radius: 8px;
            color: #374151;
            background: #ffffff;
            border-color: #e5e7eb;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
          "
        >
          Cancel
        </button>
        <button
          class="px-4 py-2 text-sm font-medium rounded-lg text-white transition-colors"
          style="
            background: #182230;
            border-radius: 8px;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
          "
        >
          Save
        </button>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
/// <reference types="nuxt/app" />
import { ref } from "vue";

declare const useRouter: any;
declare const useHead: any;

const router = useRouter();
// Logout functionality is handled in DashboardLayout

// Tabs
const tabs = [
  { id: "profile", label: "Profile" },
  { id: "password", label: "Password & Security" },
  { id: "notifications", label: "Notifications" },
  { id: "api", label: "API" },
];

const activeTab = ref("profile");

// Profile Data
const profileData = ref({
  firstName: "Nick",
  lastName: "Jonas",
  email: "Nickj@gmail.com",
  companyName: "NickJonasLLC",
  country: "us",
});

// Password Data
const passwordData = ref({
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
  twoFactorEnabled: false,
});

// Notification Data
const notificationData = ref({
  productUpdates: true,
  selectedReminders: ["service", "security"], // Array to allow multiple selections
});

// Toggle reminder selection
const toggleReminder = (value: string) => {
  const index = notificationData.value.selectedReminders.indexOf(value);
  if (index > -1) {
    notificationData.value.selectedReminders.splice(index, 1);
  } else {
    notificationData.value.selectedReminders.push(value);
  }
};

// API Keys Data
const apiKeys = ref([
  { name: "Key - 01", createdDate: "Dec 1, 2025" },
  { name: "Key - 02", createdDate: "Dec 1, 2025" },
  { name: "Key - 03", createdDate: "Dec 1, 2025" },
  { name: "Key - 04", createdDate: "Dec 1, 2025" },
  { name: "Key - 05", createdDate: "Dec 1, 2025" },
]);

// File Upload
const fileInput = ref<HTMLInputElement | null>(null);

const triggerFileUpload = () => {
  fileInput.value?.click();
};

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    // Handle file upload
    console.log("File selected:", target.files[0]);
  }
};

// Set page title
useHead({
  title: "Settings - Varnish Dashboard",
});
</script>

<style scoped>
.form-input:focus {
  border: 1px solid #000000 !important;
  outline: none;
}

/* Product Updates checkbox - blue when checked */
.product-checkbox:checked {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

/* Reminder checkboxes styled as circular radio buttons */
.reminder-checkbox {
  border-radius: 50%;
  appearance: none;
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #d1d5db;
  background-color: #ffffff;
  cursor: pointer;
  position: relative;
}

.reminder-checkbox:checked {
  background-color: #000000;
  border-color: #000000;
}

.reminder-checkbox:checked::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #ffffff;
}
</style>
