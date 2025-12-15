<template>
  <div class="min-h-screen bg-gray-50 dark:bg-[#0C1E35]">
    <!-- Mobile/Tablet Header -->
    <header
      class="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-white dark:bg-[#1a2f4a] border-b border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <!-- Left Side: Logo and Name -->
      <div class="flex items-center gap-2">
        <img
          src="/logo/Logomark.svg"
          alt="Varnish Logo"
          class="h-8 w-8 sm:h-10 sm:w-10"
        />
        <div class="flex flex-col items-start">
          <h1
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            style="
              font-family: Geist, sans-serif;
              font-weight: 600;
              font-style: SemiBold;
              font-size: 16px;
            "
          >
            Varnish
          </h1>
          <p
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            style="
              font-family: Geist, sans-serif;
              font-weight: 400;
              font-style: Regular;
              font-size: 9px;
              vertical-align: middle;
            "
          >
            Enterprise
          </p>
        </div>
      </div>

      <!-- Right Side: Sidebar Toggle Button -->
      <button
        @click="toggleSidebar"
        class="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#0C1E35] transition-colors"
      >
        <PanelLeft class="h-6 w-6 text-gray-700 dark:text-white" />
      </button>
    </header>

    <!-- Mobile Backdrop -->
    <div
      v-if="!sidebarCollapsed && isMobile"
      @click="toggleSidebar"
      class="lg:hidden fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity"
    ></div>

    <!-- Sidebar -->
    <div
      :class="[
        sidebarClasses,
        'lg:inset-y-0 lg:top-0',
        isMobile ? 'top-16 bottom-0' : ''
      ]"
      class="fixed left-0 z-40 transition-all duration-300 ease-in-out flex flex-col"
      :style="
        isDarkMode
          ? 'background: #0C1E35; padding: 0% 1%;'
          : 'background: #F3F2F0; padding: 0% 1%;'
      "
    >
      <!-- Logo -->
      <div style="margin: 10% 0% 15% 0%" class="hidden lg:flex flex-col items-start">
        <div class="flex items-center gap-2 mb-1">
          <img
            src="/logo/Logomark.svg"
            alt="Varnish Logo"
            style="height: 45px; width: 45px"
          />
          <div class="flex flex-col items-start">
            <h1
              :style="
                isDarkMode
                  ? 'font-family: Geist, sans-serif; font-weight: 600; font-style: SemiBold; font-size: 19px; color: #FFFFFF;'
                  : 'font-family: Geist, sans-serif; font-weight: 600; font-style: SemiBold; font-size: 19px; color: #101828;'
              "
            >
              Varnish
            </h1>
            <p
              :style="
                isDarkMode
                  ? 'font-family: Geist, sans-serif; font-weight: 400; font-style: Regular; font-size: 10px; vertical-align: middle; color: #FFFFFF;'
                  : 'font-family: Geist, sans-serif; font-weight: 400; font-style: Regular; font-size: 10px; vertical-align: middle; color: #101828;'
              "
            >
              Enterprise
            </p>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav
        :class="sidebarCollapsed ? 'px-2' : 'px-4'"
        style="
          padding: 16px 0px;
          flex: 1;
          display: flex;
          flex-direction: column;
        "
      >
        <!-- MENU Heading -->
        <div v-if="!sidebarCollapsed" class="px-4 mb-4">
          <h2
            class="text-xs font-medium uppercase tracking-wider"
            :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'"
            :style="
              isDarkMode
                ? 'font-family: Inter, sans-serif; font-weight: 500; font-size: 12px; color: #9CA3AF;'
                : 'font-family: Inter, sans-serif; font-weight: 500; font-size: 12px; color: #6B7280;'
            "
          >
            MENU
          </h2>
        </div>
        <div class="space-y-1 flex-1">
          <!-- Dashboard -->
          <a
            href="/dashboard"
            @click="isMobile && !sidebarCollapsed && (sidebarCollapsed = true)"
            class="group flex items-center py-2 text-sm font-medium transition-colors"
            :class="[
              sidebarCollapsed ? 'justify-center px-2' : 'px-3',
              isDashboardActive
                ? isDarkMode
                  ? 'text-white bg-white bg-opacity-10'
                  : 'text-gray-900 bg-gray-200'
                : isDarkMode
                ? 'text-white hover:text-white'
                : 'text-gray-700 hover:text-gray-900',
            ]"
            style="border-radius: 6px"
          >
            <Dashboard
              class="h-4 w-4"
              :class="[
                sidebarCollapsed ? '' : 'mr-3',
                isDarkMode ? 'text-white' : 'text-gray-700',
              ]"
            />
            <span v-show="!sidebarCollapsed" class="truncate">Dashboard</span>
          </a>

          <!-- Domains -->
          <div>
            <button
              @click="toggleDomains"
              class="group flex items-center w-full py-2 text-sm font-medium transition-colors"
              :class="[
                sidebarCollapsed ? 'justify-center px-2' : 'px-3',
                isDomainsActive
                  ? isDarkMode
                    ? 'text-white'
                    : 'text-gray-900'
                  : isDarkMode
                  ? 'text-white hover:text-white'
                  : 'text-gray-700 hover:text-gray-900',
              ]"
              style="border-radius: 6px"
            >
              <Network
                class="h-4 w-4"
                :class="[
                  sidebarCollapsed ? '' : 'mr-3',
                  isDarkMode ? 'text-white' : 'text-gray-700',
                ]"
              />
              <span v-show="!sidebarCollapsed" class="truncate">Domains</span>
              <ChevronDown
                v-show="!sidebarCollapsed"
                :class="[
                  domainsOpen ? 'rotate-180' : '',
                  isDarkMode ? 'text-white' : 'text-gray-700',
                ]"
                class="ml-auto h-4 w-4 transition-transform"
              />
            </button>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 transform -translate-y-2"
              enter-to-class="opacity-100 transform translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 transform translate-y-0"
              leave-to-class="opacity-0 transform -translate-y-2"
            >
              <div
                v-if="domainsOpen && !sidebarCollapsed"
                class="ml-4 mt-1 space-y-1 border-l pl-3"
                :class="isDarkMode ? 'border-gray-700' : 'border-gray-300'"
                :style="
                  isDarkMode
                    ? 'border-left: 1px solid rgba(255, 255, 255, 0.1);'
                    : 'border-left: 1px solid rgba(0, 0, 0, 0.1);'
                "
              >
                <a
                  href="/dashboard/domains"
                  @click="isMobile && !sidebarCollapsed && (sidebarCollapsed = true)"
                  :class="[
                    'block px-3 py-1.5 text-sm transition-colors',
                    isDomainsListActive
                      ? isDarkMode
                        ? 'text-black bg-white'
                        : 'text-gray-900 bg-gray-200'
                      : isDarkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900',
                  ]"
                  style="border-radius: 6px"
                  >List of Domains</a
                >
                <a
                  href="/dashboard/domains/add"
                  @click="isMobile && !sidebarCollapsed && (sidebarCollapsed = true)"
                  :class="[
                    'block px-3 py-1.5 text-sm transition-colors',
                    isDomainsAddActive
                      ? isDarkMode
                        ? 'text-black bg-white'
                        : 'text-gray-900 bg-gray-200'
                      : isDarkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900',
                  ]"
                  style="border-radius: 6px"
                  >Add New Domains</a
                >
              </div>
            </Transition>
          </div>

          <!-- Hosting -->
          <div>
            <button
              @click="toggleHosting"
              class="group flex items-center w-full py-2 text-sm font-medium transition-colors"
              :class="[
                sidebarCollapsed ? 'justify-center px-2' : 'px-3',
                isHostingActive
                  ? isDarkMode
                    ? 'text-white'
                    : 'text-gray-900'
                  : isDarkMode
                  ? 'text-white hover:text-white'
                  : 'text-gray-700 hover:text-gray-900',
              ]"
              style="border-radius: 6px"
            >
              <Box
                class="h-4 w-4"
                :class="[
                  sidebarCollapsed ? '' : 'mr-3',
                  isDarkMode ? 'text-white' : 'text-gray-700',
                ]"
              />
              <span v-show="!sidebarCollapsed" class="truncate">Hosting</span>
              <ChevronDown
                v-show="!sidebarCollapsed"
                :class="[
                  hostingOpen ? 'rotate-180' : '',
                  isDarkMode ? 'text-white' : 'text-gray-700',
                ]"
                class="ml-auto h-4 w-4 transition-transform"
              />
            </button>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 transform -translate-y-2"
              enter-to-class="opacity-100 transform translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 transform translate-y-0"
              leave-to-class="opacity-0 transform -translate-y-2"
            >
              <div
                v-if="hostingOpen && !sidebarCollapsed"
                class="ml-4 mt-1 space-y-1 border-l pl-3"
                :class="isDarkMode ? 'border-gray-700' : 'border-gray-300'"
                :style="
                  isDarkMode
                    ? 'border-left: 1px solid rgba(255, 255, 255, 0.1);'
                    : 'border-left: 1px solid rgba(0, 0, 0, 0.1);'
                "
              >
                <a
                  href="/dashboard/hostings"
                  @click="isMobile && !sidebarCollapsed && (sidebarCollapsed = true)"
                  :class="[
                    'block px-3 py-1.5 text-sm transition-colors',
                    isHostingListActive
                      ? isDarkMode
                        ? 'text-black bg-white'
                        : 'text-gray-900 bg-gray-200'
                      : isDarkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900',
                  ]"
                  style="border-radius: 6px"
                  >List of Domains</a
                >
                <a
                  href="/dashboard/hostings/add"
                  @click="isMobile && !sidebarCollapsed && (sidebarCollapsed = true)"
                  :class="[
                    'block px-3 py-1.5 text-sm transition-colors',
                    isHostingAddActive
                      ? isDarkMode
                        ? 'text-black bg-white'
                        : 'text-gray-900 bg-gray-200'
                      : isDarkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900',
                  ]"
                  style="border-radius: 6px"
                  >Add New Domain</a
                >
              </div>
            </Transition>
          </div>

          <!-- Varnish -->
          <!-- <div>
            <button
              class="group flex items-center w-full py-2 text-sm font-medium transition-colors"
              :class="[
                sidebarCollapsed ? 'justify-center px-2' : 'px-3',
                isDarkMode
                  ? 'text-white hover:text-white'
                  : 'text-gray-700 hover:text-gray-900',
              ]"
              style="border-radius: 6px"
            >
              <Columns
                class="h-4 w-4"
                :class="[
                  sidebarCollapsed ? '' : 'mr-3',
                  isDarkMode ? 'text-white' : 'text-gray-700',
                ]"
              />
              <span v-show="!sidebarCollapsed" class="truncate">Varnish</span>
              <ChevronDown
                v-show="!sidebarCollapsed"
                :class="isDarkMode ? 'text-white' : 'text-gray-700'"
                class="ml-auto h-4 w-4"
              />
            </button>
          </div> -->

          <!-- SSL -->
          <div>
            <button
              @click="toggleSSL"
              class="group flex items-center w-full py-2 text-sm font-medium transition-colors"
              :class="[
                sidebarCollapsed ? 'justify-center px-2' : 'px-3',
                isSSLActive
                  ? isDarkMode
                    ? 'text-white'
                    : 'text-gray-900'
                  : isDarkMode
                  ? 'text-white hover:text-white'
                  : 'text-gray-700 hover:text-gray-900',
              ]"
              style="border-radius: 6px"
            >
              <Key
                class="h-4 w-4"
                :class="[
                  sidebarCollapsed ? '' : 'mr-3',
                  isDarkMode ? 'text-white' : 'text-gray-700',
                ]"
              />
              <span v-show="!sidebarCollapsed" class="truncate">SSL</span>
              <ChevronDown
                v-show="!sidebarCollapsed"
                :class="[
                  sslOpen ? 'rotate-180' : '',
                  isDarkMode ? 'text-white' : 'text-gray-700',
                ]"
                class="ml-auto h-4 w-4 transition-transform"
              />
            </button>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 transform -translate-y-2"
              enter-to-class="opacity-100 transform translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 transform translate-y-0"
              leave-to-class="opacity-0 transform -translate-y-2"
            >
              <div
                v-if="sslOpen && !sidebarCollapsed"
                class="ml-4 mt-1 space-y-1 border-l pl-3"
                :class="isDarkMode ? 'border-gray-700' : 'border-gray-300'"
                :style="
                  isDarkMode
                    ? 'border-left: 1px solid rgba(255, 255, 255, 0.1);'
                    : 'border-left: 1px solid rgba(0, 0, 0, 0.1);'
                "
              >
                <a
                  href="/dashboard/ssl"
                  :class="[
                    'block px-3 py-1.5 text-sm transition-colors',
                    isSSLListActive
                      ? isDarkMode
                        ? 'text-black bg-white'
                        : 'text-gray-900 bg-gray-200'
                      : isDarkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900',
                  ]"
                  style="border-radius: 6px"
                  >List of SSL</a
                >
                <a
                  href="/dashboard/ssl/add"
                  :class="[
                    'block px-3 py-1.5 text-sm transition-colors',
                    isSSLAddActive
                      ? isDarkMode
                        ? 'text-black bg-white'
                        : 'text-gray-900 bg-gray-200'
                      : isDarkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900',
                  ]"
                  style="border-radius: 6px"
                  >Add New SSL</a
                >
              </div>
            </Transition>
          </div>

          <!-- Images -->
          <div>
            <button
              @click="toggleImages"
              class="group flex items-center w-full py-2 text-sm font-medium transition-colors"
              :class="[
                sidebarCollapsed ? 'justify-center px-2' : 'px-3',
                isImagesActive
                  ? isDarkMode
                    ? 'text-white'
                    : 'text-gray-900'
                  : isDarkMode
                  ? 'text-white hover:text-white'
                  : 'text-gray-700 hover:text-gray-900',
              ]"
              style="border-radius: 6px"
            >
              <Image
                class="h-4 w-4"
                :class="[
                  sidebarCollapsed ? '' : 'mr-3',
                  isDarkMode ? 'text-white' : 'text-gray-700',
                ]"
              />
              <span v-show="!sidebarCollapsed" class="truncate">Images</span>
              <ChevronDown
                v-show="!sidebarCollapsed"
                :class="[
                  imagesOpen ? 'rotate-180' : '',
                  isDarkMode ? 'text-white' : 'text-gray-700',
                ]"
                class="ml-auto h-4 w-4 transition-transform"
              />
            </button>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 transform -translate-y-2"
              enter-to-class="opacity-100 transform translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100 transform translate-y-0"
              leave-to-class="opacity-0 transform -translate-y-2"
            >
              <div
                v-if="imagesOpen && !sidebarCollapsed"
                class="ml-4 mt-1 space-y-1 border-l pl-3"
                :class="isDarkMode ? 'border-gray-700' : 'border-gray-300'"
                :style="
                  isDarkMode
                    ? 'border-left: 1px solid rgba(255, 255, 255, 0.1);'
                    : 'border-left: 1px solid rgba(0, 0, 0, 0.1);'
                "
              >
                <a
                  href="/dashboard/images"
                  :class="[
                    'block px-3 py-1.5 text-sm transition-colors',
                    isImagesListActive
                      ? isDarkMode
                        ? 'text-black bg-white'
                        : 'text-gray-900 bg-gray-200'
                      : isDarkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900',
                  ]"
                  style="border-radius: 6px"
                  >List of Images</a
                >
                <a
                  href="/dashboard/images/add"
                  :class="[
                    'block px-3 py-1.5 text-sm transition-colors',
                    isImagesAddActive
                      ? isDarkMode
                        ? 'text-black bg-white'
                        : 'text-gray-900 bg-gray-200'
                      : isDarkMode
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900',
                  ]"
                  style="border-radius: 6px"
                  >Add Rule</a
                >
              </div>
            </Transition>
          </div>

          <!-- Billings -->
          <div>
            <NuxtLink
              to="/dashboard/billings"
              class="group flex items-center w-full py-2 text-sm font-medium transition-colors"
              :class="[
                sidebarCollapsed ? 'justify-center px-2' : 'px-3',
                isBillingsActive
                  ? isDarkMode
                    ? 'text-white bg-white bg-opacity-10'
                    : 'text-gray-900 bg-gray-200'
                  : isDarkMode
                  ? 'text-white hover:text-white'
                  : 'text-gray-700 hover:text-gray-900',
              ]"
              style="border-radius: 6px; text-decoration: none"
            >
              <CreditCard
                class="h-4 w-4"
                :class="[
                  sidebarCollapsed ? '' : 'mr-3',
                  isDarkMode ? 'text-white' : 'text-gray-700',
                ]"
              />
              <span v-show="!sidebarCollapsed" class="truncate">Billings</span>
            </NuxtLink>
          </div>

          <!-- Bottom Section: Support and Settings -->
          <div
            class="absolute bottom-0 left-0 right-0"
            style="padding: 16px 8px"
          >
            <!-- Support -->
            <div>
              <button
                @click="toggleSupport"
                class="group flex items-center w-full py-2 text-sm font-medium transition-colors"
                :class="[
                  sidebarCollapsed ? 'justify-center px-2' : 'px-3',
                  isSupportActive
                    ? isDarkMode
                      ? 'text-white'
                      : 'text-gray-900'
                    : isDarkMode
                    ? 'text-white hover:text-white'
                    : 'text-gray-700 hover:text-gray-900',
                ]"
                style="border-radius: 6px"
              >
                <Clock
                  class="h-4 w-4"
                  :class="[
                    sidebarCollapsed ? '' : 'mr-3',
                    isDarkMode ? 'text-white' : 'text-gray-700',
                  ]"
                />
                <span
                  v-show="!sidebarCollapsed"
                  class="truncate"
                  :class="isDarkMode ? 'text-white' : 'text-gray-700'"
                  >Support</span
                >
                <ChevronDown
                  v-show="!sidebarCollapsed"
                  :class="[
                    supportOpen ? 'rotate-180' : '',
                    isDarkMode ? 'text-white' : 'text-gray-700',
                  ]"
                  class="ml-auto h-4 w-4 transition-transform"
                />
              </button>
              <Transition
                enter-active-class="transition-all duration-300 ease-out"
                enter-from-class="opacity-0 transform -translate-y-2"
                enter-to-class="opacity-100 transform translate-y-0"
                leave-active-class="transition-all duration-200 ease-in"
                leave-from-class="opacity-100 transform translate-y-0"
                leave-to-class="opacity-0 transform -translate-y-2"
              >
                <div
                  v-if="supportOpen && !sidebarCollapsed"
                  class="ml-4 mt-1 space-y-1 border-l pl-3"
                  :class="isDarkMode ? 'border-gray-700' : 'border-gray-300'"
                  :style="
                    isDarkMode
                      ? 'border-left: 1px solid rgba(255, 255, 255, 0.1);'
                      : 'border-left: 1px solid rgba(0, 0, 0, 0.1);'
                  "
                >
                  <NuxtLink
                    to="/dashboard/support"
                    @click="supportOpen = true"
                    :class="[
                      'block px-3 py-1.5 text-sm transition-colors',
                      isSupportListActive
                        ? isDarkMode
                          ? 'text-white bg-white bg-opacity-10'
                          : 'text-gray-900 bg-gray-200'
                        : isDarkMode
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900',
                    ]"
                    style="border-radius: 6px; text-decoration: none"
                    >List of Tickets</NuxtLink
                  >
                  <NuxtLink
                    to="/dashboard/support/add"
                    @click="supportOpen = true"
                    :class="[
                      'block px-3 py-1.5 text-sm transition-colors',
                      isSupportAddActive
                        ? isDarkMode
                          ? 'text-white bg-white bg-opacity-10'
                          : 'text-gray-900 bg-gray-200'
                        : isDarkMode
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900',
                    ]"
                    style="border-radius: 6px; text-decoration: none"
                    >Add New Ticket</NuxtLink
                  >
                </div>
              </Transition>
            </div>

            <!-- Settings -->
            <div>
              <NuxtLink
                to="/dashboard/settings"
                class="group flex items-center w-full py-2 text-sm font-medium transition-colors"
                :class="[
                  sidebarCollapsed ? 'justify-center px-2' : 'px-3',
                  isSettingsActive
                    ? isDarkMode
                      ? 'text-white bg-white bg-opacity-10'
                      : 'text-gray-900 bg-gray-200'
                    : isDarkMode
                    ? 'text-white hover:text-white'
                    : 'text-gray-700 hover:text-gray-900',
                ]"
                style="border-radius: 6px; text-decoration: none"
              >
                <Settings
                  class="h-4 w-4"
                  :class="[
                    sidebarCollapsed ? '' : 'mr-3',
                    isDarkMode ? 'text-white' : 'text-gray-700',
                  ]"
                />
                <span v-show="!sidebarCollapsed" class="truncate"
                  >Settings</span
                >
              </NuxtLink>
            </div>

            <!-- Logout -->
            <div>
              <button
                @click="handleSignOutClick"
                class="group flex items-center w-full py-2 text-sm font-medium transition-colors"
                :class="[
                  sidebarCollapsed ? 'justify-center px-2' : 'px-3',
                  isDarkMode
                    ? 'text-white hover:text-white'
                    : 'text-gray-700 hover:text-gray-900',
                ]"
                style="border-radius: 6px"
              >
                <LogOut
                  class="h-4 w-4"
                  :class="[
                    sidebarCollapsed ? '' : 'mr-3',
                    isDarkMode ? 'text-white' : 'text-gray-700',
                  ]"
                />
                <span v-show="!sidebarCollapsed" class="truncate"
                  >Logout</span
                >
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Main Content -->
    <div
      :class="[
        isMobile ? 'pl-0 pt-16' : (sidebarCollapsed ? 'lg:pl-16' : 'lg:pl-64'),
        'p-2 sm:p-3 lg:p-4 transition-all duration-300 dark:bg-[#0C1E35] bg-[#f4f4f6] overflow-x-hidden'
      ]"
    >
      <!-- Top Header -->

      <header
        class="bg-[#FFFFFF] border shadow-sm border-[#e4e4e8] rounded-t-xl"
        style="display: none"
      >
        <div
          class="flex h-14 items-center justify-between px-3 sm:px-4 lg:px-6 border-b border-gray-200"
        >
          <!-- Right side - Icons -->
          <div class="flex items-center space-x-1 sm:space-x-2">
            <!-- Theme Toggle -->
            <div class="relative">
              <button
                @click="toggleTheme"
                class="p-2 hover:bg-[#E4E4E8] dark:hover:bg-[#1a2f4a]"
                style="border-radius: 5px"
              >
                <Sun
                  v-if="!isDarkMode"
                  class="sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300"
                  style="height: 15px; width: 15px"
                />
                <Moon
                  v-else
                  class="sm:h-5 sm:w-5 text-gray-600 dark:text-gray-300"
                  style="height: 15px; width: 15px"
                />
              </button>
            </div>
            <!-- Settings -->
            <div class="relative">
              <!-- Settings Dropdown -->
              <div
                v-if="settingsDropdownOpen"
                class="absolute right-0 z-10 mt-2 w-80 bg-white dark:bg-[#0C1E35] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg"
                style="border-radius: 5px"
              >
                <!-- Theme Preset -->
                <div class="px-4 py-2 border-none">
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-white mb-3"
                    >Theme preset:</label
                  >
                  <div class="relative">
                    <button
                      @click.stop="toggleThemeDropdown"
                      class="w-full flex items-center justify-between px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#1a2f4a] text-sm text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-[#1a2f4a]"
                      style="border-radius: 5px; height: 36px"
                    >
                      <div class="flex items-center">
                        <div
                          class="w-3 h-3 rounded-full mr-2"
                          :style="{
                            backgroundColor: getSelectedThemeColor(),
                          }"
                        ></div>
                        <span>{{ selectedTheme }}</span>
                      </div>
                      <ChevronDown class="h-4 w-4 text-gray-400" />
                    </button>

                    <!-- Custom Dropdown -->
                    <div
                      v-if="themeDropdownOpen"
                      @click.stop
                      class="absolute left-0 right-0 z-10 mt-2 bg-white dark:bg-[#1a2f4a] border border-gray-200 dark:border-gray-600 rounded-md shadow-lg"
                      style="border-radius: 5px"
                    >
                      <div class="py-1">
                        <button
                          v-for="theme in themeOptions"
                          :key="theme.value"
                          @click.stop="
                            setTheme(theme.label);
                            themeDropdownOpen = false;
                          "
                          :class="[
                            'w-full flex items-center justify-between px-3 py-2 text-sm text-left text-gray-900 dark:text-white',
                            selectedTheme === theme.label
                              ? 'bg-gray-100 dark:bg-[#1a2f4a]'
                              : 'hover:bg-gray-50 dark:hover:bg-[#1a2f4a]',
                          ]"
                        >
                          <div class="flex items-center">
                            <div
                              class="w-3 h-3 rounded-full mr-2"
                              :style="{ backgroundColor: theme.color }"
                            ></div>
                            <span>{{ theme.label }}</span>
                          </div>
                          <div
                            v-if="selectedTheme === theme.label"
                            class="text-gray-600"
                          >
                            <svg
                              class="h-4 w-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Scale -->
                <div class="px-4 py-2 border-none">
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-white mb-3"
                    >Scale:</label
                  >
                  <div
                    class="flex gap-2 justify-center dark:text-white dark:bg-[#0C1E35]"
                  >
                    <button
                      v-for="scale in scaleOptions"
                      :key="scale.value"
                      @click="selectedScale = scale.value"
                      :class="[
                        'px-3 py-2 text-sm border transition-colors flex items-center justify-center flex-1 dark:text-white dark:bg-[#1a2f4a] dark:border-gray-600',
                        selectedScale === scale.value
                          ? 'bg-gray-100 border-gray-300 text-gray-900 dark:text-white'
                          : 'bg-white border-gray-300 text-gray-700 dark:text-white hover:bg-gray-50',
                      ]"
                      :style="{
                        'border-radius': '5px',
                        height: '36px',
                      }"
                    >
                      <span v-if="scale.value === 'none'" class="text-lg"
                        >⊘</span
                      >
                      <span v-else>{{ scale.label }}</span>
                    </button>
                  </div>
                </div>

                <!-- Radius -->
                <div class="px-4 py-2 border-none">
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-white mb-3"
                    >Radius:</label
                  >
                  <div class="flex gap-2 justify-center">
                    <button
                      v-for="radius in radiusOptions"
                      :key="radius.value"
                      @click="selectedRadius = radius.value"
                      :class="[
                        'px-3 py-2 text-sm border transition-colors flex items-center justify-center flex-1 dark:text-white dark:bg-[#1a2f4a] dark:border-gray-600',
                        selectedRadius === radius.value
                          ? 'bg-gray-100 border-gray-300 text-gray-900 dark:text-white'
                          : 'bg-white border-gray-300 text-gray-700 dark:text-white hover:bg-gray-50',
                      ]"
                      :style="{
                        'border-radius': '5px',
                        height: '36px',
                      }"
                    >
                      <span v-if="radius.value === 'none'" class="text-lg"
                        >⊘</span
                      >
                      <span v-else>{{ radius.label }}</span>
                    </button>
                  </div>
                </div>

                <!-- Color Mode -->
                <div class="px-4 py-2 border-none">
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-white mb-3"
                    >Color mode:</label
                  >
                  <div class="flex gap-2 justify-center">
                    <button
                      v-for="mode in colorModes"
                      :key="mode.value"
                      @click="selectedColorMode = mode.value"
                      :class="[
                        'px-3 py-2 text-sm border transition-colors flex items-center justify-center flex-1 dark:text-white dark:bg-[#1a2f4a] dark:border-gray-600',
                        selectedColorMode === mode.value
                          ? 'bg-gray-100 border-gray-300 text-gray-900 dark:text-white'
                          : 'bg-white border-gray-300 text-gray-700 dark:text-white hover:bg-gray-50',
                      ]"
                      :style="{
                        'border-radius': '5px',
                        height: '36px',
                      }"
                    >
                      {{ mode.label }}
                    </button>
                  </div>
                </div>

                <!-- Content Layout -->
                <div class="px-4 py-2 border-none">
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-white mb-3 dark:text-white dark:bg-[#1a2f4a] dark:border-gray-600"
                    >Content layout:</label
                  >
                  <div class="flex gap-2 justify-center">
                    <button
                      v-for="layout in contentLayouts"
                      :key="layout.value"
                      @click="selectedContentLayout = layout.value"
                      :class="[
                        'px-3 py-2 text-sm border transition-colors flex items-center justify-center flex-1 dark:text-white dark:bg-[#1a2f4a] dark:border-gray-600',
                        selectedContentLayout === layout.value
                          ? 'bg-gray-100 border-gray-300 text-gray-900 dark:text-white'
                          : 'bg-white border-gray-300 text-gray-700 dark:text-white hover:bg-gray-50',
                      ]"
                      :style="{
                        'border-radius': '5px',
                        height: '36px',
                      }"
                    >
                      {{ layout.label }}
                    </button>
                  </div>
                </div>

                <!-- Sidebar Mode -->
                <div class="px-4 py-2 border-none">
                  <label
                    class="block text-sm font-medium text-gray-700 dark:text-white mb-3"
                    >Sidebar mode:</label
                  >
                  <div class="flex gap-2 justify-center">
                    <button
                      v-for="mode in sidebarModes"
                      :key="mode.value"
                      @click="selectedSidebarMode = mode.value"
                      :class="[
                        'px-3 py-2 text-sm border transition-colors flex items-center justify-center flex-1 dark:text-white dark:bg-[#1a2f4a] dark:border-gray-600',
                        selectedSidebarMode === mode.value
                          ? 'bg-gray-100 border-gray-300 text-gray-900 dark:text-white'
                          : 'bg-white border-gray-300 text-gray-700 dark:text-white hover:bg-gray-50',
                      ]"
                      :style="{
                        'border-radius': '5px',
                        height: '36px',
                      }"
                    >
                      {{ mode.label }}
                    </button>
                  </div>
                </div>

                <!-- Reset Button -->
                <div class="px-4 py-4">
                  <button
                    @click="resetToDefault"
                    class="w-full bg-red-600 text-white py-2 px-4 hover:bg-red-700 transition-colors text-sm font-medium"
                    style="border-radius: 5px; height: 36px"
                  >
                    Reset to Default
                  </button>
                </div>
              </div>
            </div>

            <!-- User Avatar -->
            <div class="relative">
              <button
                @click="toggleUserDropdown"
                class="h-7 w-7 sm:h-8 sm:w-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <span class="text-white font-medium text-xs sm:text-sm"
                  >TB</span
                >
              </button>

              <!-- User Dropdown -->
              <div
                v-if="userDropdownOpen"
                class="absolute right-0 z-10 mt-2 w-56 bg-white dark:bg-[#0C1E35] border border-gray-200 dark:border-gray-700 rounded-md shadow-lg"
                style="border-radius: 5px"
              >
                <button
                  @click="handleSignOutClick"
                  class="w-full flex items-center px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 text-left"
                >
                  <LogOut class="h-4 w-4 text-gray-400 mr-3" />
                  <span>Log out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>


      <!-- Page Content -->
      <main
        class="p-3 sm:p-4 lg:p-6 border border-[#e4e4e8] dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-[#0C1E35] min-h-[calc(100vh-2rem)] overflow-x-hidden w-full transition-colors duration-200"
      >
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import {
  Plus,
  Columns,
  Search,
  ChevronUp,
  ChevronDown,
  MoreVertical,
  MoreHorizontal,
  Home,
  ShoppingCart,
  TrendingUp,
  Users,
  User,
  Bell,
  Sun,
  Moon,
  Settings,
  MessageCircle,
  Image,
  Volume2,
  Handshake,
  Box,
  ChevronRight,
  DollarSign,
  Key,
  AlertCircle,
  PanelLeft,
  CreditCard,
  LogOut,
  BarChart3,
  Building,
  Calendar,
  FileCheck,
  Wrench,
  Wallet,
  PieChart,
  MessageSquare,
  Send,
  Folder,
  Network,
  Clock,
} from "lucide-vue-next";
import Countries from "./svg/countries.vue";
import VisaProducts from "./svg/visaproducts.vue";
import Nationalities from "./svg/nationalities.vue";
import Embassies from "./svg/embassies.vue";
import Customers from "./svg/customers.vue";
import Applications from "./svg/applications.vue";
import Finances from "./svg/finances.vue";
import Dashboard from "./svg/dashboard.vue";
import Coupons from "./svg/coupons.vue";
import AdditionalInfo from "./svg/additionalinfo.vue";
import Guides from "./svg/guides.vue";
import UsersIcon from "./svg/users.vue";
import { usePermissions } from "~/composables/usePermissions";
import { useAuthApi } from "~/composables/useAuthApi";

const props = defineProps({
  pageTitle: {
    type: String,
    default: "Dashboard",
  },
});

// Permissions
const { hasPermission, isSuperAdmin, getUserPermissions } = usePermissions();
const { getCurrentUser, logout } = useAuthApi();
const router = useRouter();

// State management
const sidebarCollapsed = ref(false);
const isDarkMode = ref(false);

// Navigation state - Persist across page navigation
const countriesOpen = ref(false);
const visaproductsOpen = ref(false);
const nationalitiesOpen = ref(false);
const embassiesOpen = ref(false);
const couponsOpen = ref(false);
const additionalInfoOpen = ref(false);
const guidesOpen = ref(false);
const usersOpen = ref(false);
const domainsOpen = ref(false);
const hostingOpen = ref(false);
const sslOpen = ref(false);
const imagesOpen = ref(false);
const supportOpen = ref(false);

// Route detection for active states
const route = useRoute();

// Computed properties for active states
const isDashboardActive = computed(() => route.path === "/dashboard");
const isDomainsActive = computed(() =>
  route.path.startsWith("/dashboard/domains")
);
const isDomainsListActive = computed(() => route.path === "/dashboard/domains");
const isDomainsAddActive = computed(
  () => route.path === "/dashboard/domains/add"
);
const isHostingActive = computed(() =>
  route.path.startsWith("/dashboard/hostings")
);
const isHostingListActive = computed(() => route.path === "/dashboard/hostings");
const isHostingAddActive = computed(
  () => route.path === "/dashboard/hostings/add"
);
const isSSLActive = computed(() => route.path.startsWith("/dashboard/ssl"));
const isSSLListActive = computed(() => route.path === "/dashboard/ssl");
const isSSLAddActive = computed(() => route.path === "/dashboard/ssl/add");
const isImagesActive = computed(() =>
  route.path.startsWith("/dashboard/images")
);
const isImagesListActive = computed(() => route.path === "/dashboard/images");
const isImagesAddActive = computed(
  () => route.path === "/dashboard/images/add"
);
const isSupportActive = computed(() =>
  route.path.startsWith("/dashboard/support")
);
const isSupportListActive = computed(() => route.path === "/dashboard/support");
const isSupportAddActive = computed(
  () => route.path === "/dashboard/support/add"
);
const isBillingsActive = computed(() =>
  route.path.startsWith("/dashboard/billings")
);
const isCountriesActive = computed(() =>
  route.path.startsWith("/dashboard/countries")
);
const isVisaproductsActive = computed(() =>
  route.path.startsWith("/dashboard/visaproducts")
);
const isNationalitiesActive = computed(() =>
  route.path.startsWith("/dashboard/nationalities")
);
const isEmbassiesActive = computed(() =>
  route.path.startsWith("/dashboard/embassies")
);
const isCustomersActive = computed(() =>
  route.path.startsWith("/dashboard/customers")
);
const isApplicationsActive = computed(() =>
  route.path.startsWith("/dashboard/applications")
);
const isFinancesActive = computed(() =>
  route.path.startsWith("/dashboard/finances")
);
const isSettingsActive = computed(() =>
  route.path.startsWith("/dashboard/settings")
);
const isCouponsActive = computed(() =>
  route.path.startsWith("/dashboard/coupons")
);
const isCouponsListActive = computed(() => route.path === "/dashboard/coupons");
const isCouponsAddActive = computed(
  () => route.path === "/dashboard/coupons/add"
);
const isAdditionalInfoActive = computed(() =>
  route.path.startsWith("/dashboard/additional-info")
);
const isAdditionalInfoListActive = computed(
  () => route.path === "/dashboard/additional-info"
);
const isAdditionalInfoAddActive = computed(
  () => route.path === "/dashboard/additional-info/add"
);
const isGuidesActive = computed(() =>
  route.path.startsWith("/dashboard/guides")
);
const isGuidesListActive = computed(() => route.path === "/dashboard/guides");
const isGuidesAddActive = computed(
  () => route.path === "/dashboard/guides/add"
);
const isUsersActive = computed(() => route.path.startsWith("/dashboard/users"));
const isUsersListActive = computed(() => route.path === "/dashboard/users");
const isUsersAddActive = computed(() => route.path === "/dashboard/users/add");

// Individual dropdown item active states
const isCountriesListActive = computed(
  () => route.path === "/dashboard/countries"
);
const isCountriesAddActive = computed(
  () => route.path === "/dashboard/countries/add"
);
const isVisaproductsListActive = computed(
  () => route.path === "/dashboard/visaproducts"
);
const isVisaproductsAddActive = computed(
  () => route.path === "/dashboard/visaproducts/add"
);
const isNationalitiesListActive = computed(
  () => route.path === "/dashboard/nationalities"
);
const isNationalitiesAddActive = computed(
  () => route.path === "/dashboard/nationalities/add"
);
const isEmbassiesListActive = computed(
  () => route.path === "/dashboard/embassies"
);
const isEmbassiesAddActive = computed(
  () => route.path === "/dashboard/embassies/add"
);

// Initialize dropdown states from localStorage and route
onMounted(() => {
  if (process.client) {
    // Check if we should open dropdowns based on current route
    if (isDomainsActive.value) {
      domainsOpen.value = true;
      localStorage.setItem("domainsOpen", "true");
    } else {
      domainsOpen.value = localStorage.getItem("domainsOpen") === "true";
    }

    if (isHostingActive.value) {
      hostingOpen.value = true;
      localStorage.setItem("hostingOpen", "true");
    } else {
      hostingOpen.value = localStorage.getItem("hostingOpen") === "true";
    }

    if (isSSLActive.value) {
      sslOpen.value = true;
      localStorage.setItem("sslOpen", "true");
    } else {
      sslOpen.value = localStorage.getItem("sslOpen") === "true";
    }

    if (isImagesActive.value) {
      imagesOpen.value = true;
      localStorage.setItem("imagesOpen", "true");
    } else {
      imagesOpen.value = localStorage.getItem("imagesOpen") === "true";
    }

    if (isSSLActive.value) {
      sslOpen.value = true;
      localStorage.setItem("sslOpen", "true");
    } else {
      sslOpen.value = localStorage.getItem("sslOpen") === "true";
    }

    if (isImagesActive.value) {
      imagesOpen.value = true;
      localStorage.setItem("imagesOpen", "true");
    } else {
      imagesOpen.value = localStorage.getItem("imagesOpen") === "true";
    }

    if (isCountriesActive.value) {
      countriesOpen.value = true;
      localStorage.setItem("countriesOpen", "true");
    } else {
      countriesOpen.value = localStorage.getItem("countriesOpen") === "true";
    }

    if (isVisaproductsActive.value) {
      visaproductsOpen.value = true;
      localStorage.setItem("visaproductsOpen", "true");
    } else {
      visaproductsOpen.value =
        localStorage.getItem("visaproductsOpen") === "true";
    }

    if (isNationalitiesActive.value) {
      nationalitiesOpen.value = true;
      localStorage.setItem("nationalitiesOpen", "true");
    } else {
      nationalitiesOpen.value =
        localStorage.getItem("nationalitiesOpen") === "true";
    }

    if (isEmbassiesActive.value) {
      embassiesOpen.value = true;
      localStorage.setItem("embassiesOpen", "true");
    } else {
      embassiesOpen.value = localStorage.getItem("embassiesOpen") === "true";
    }
    if (isCouponsActive.value) {
      couponsOpen.value = true;
      localStorage.setItem("couponsOpen", "true");
    } else {
      couponsOpen.value = localStorage.getItem("couponsOpen") === "true";
    }
    if (isAdditionalInfoActive.value) {
      additionalInfoOpen.value = true;
      localStorage.setItem("additionalInfoOpen", "true");
    } else {
      additionalInfoOpen.value =
        localStorage.getItem("additionalInfoOpen") === "true";
    }
    if (isGuidesActive.value) {
      guidesOpen.value = true;
      localStorage.setItem("guidesOpen", "true");
    } else {
      guidesOpen.value = localStorage.getItem("guidesOpen") === "true";
    }
    if (isUsersActive.value) {
      usersOpen.value = true;
      localStorage.setItem("usersOpen", "true");
    } else {
      usersOpen.value = localStorage.getItem("usersOpen") === "true";
    }
  }
});

// Watch for route changes to maintain dropdown state
watch(
  () => route.path,
  (newPath) => {
    if (process.client) {
      // Update dropdown states based on new route
      if (newPath.startsWith("/dashboard/countries")) {
        countriesOpen.value = true;
        visaproductsOpen.value = false;
        nationalitiesOpen.value = false;
        embassiesOpen.value = false;
        localStorage.setItem("countriesOpen", "true");
        localStorage.setItem("visaproductsOpen", "false");
        localStorage.setItem("nationalitiesOpen", "false");
        localStorage.setItem("embassiesOpen", "false");
      } else if (newPath.startsWith("/dashboard/visaproducts")) {
        countriesOpen.value = false;
        visaproductsOpen.value = true;
        nationalitiesOpen.value = false;
        embassiesOpen.value = false;
        localStorage.setItem("countriesOpen", "false");
        localStorage.setItem("visaproductsOpen", "true");
        localStorage.setItem("nationalitiesOpen", "false");
        localStorage.setItem("embassiesOpen", "false");
      } else if (newPath.startsWith("/dashboard/nationalities")) {
        countriesOpen.value = false;
        visaproductsOpen.value = false;
        nationalitiesOpen.value = true;
        embassiesOpen.value = false;
        localStorage.setItem("countriesOpen", "false");
        localStorage.setItem("visaproductsOpen", "false");
        localStorage.setItem("nationalitiesOpen", "true");
        localStorage.setItem("embassiesOpen", "false");
      } else if (newPath.startsWith("/dashboard/embassies")) {
        countriesOpen.value = false;
        visaproductsOpen.value = false;
        nationalitiesOpen.value = false;
        embassiesOpen.value = true;
        localStorage.setItem("countriesOpen", "false");
        localStorage.setItem("visaproductsOpen", "false");
        localStorage.setItem("nationalitiesOpen", "false");
        localStorage.setItem("embassiesOpen", "true");
      } else if (newPath.startsWith("/dashboard/coupons")) {
        countriesOpen.value = false;
        visaproductsOpen.value = false;
        nationalitiesOpen.value = false;
        embassiesOpen.value = false;
        couponsOpen.value = true;
        additionalInfoOpen.value = false;
        localStorage.setItem("countriesOpen", "false");
        localStorage.setItem("visaproductsOpen", "false");
        localStorage.setItem("nationalitiesOpen", "false");
        localStorage.setItem("embassiesOpen", "false");
        localStorage.setItem("couponsOpen", "true");
        localStorage.setItem("additionalInfoOpen", "false");
      } else if (newPath.startsWith("/dashboard/additional-info")) {
        countriesOpen.value = false;
        visaproductsOpen.value = false;
        nationalitiesOpen.value = false;
        embassiesOpen.value = false;
        couponsOpen.value = false;
        additionalInfoOpen.value = true;
        guidesOpen.value = false;
        usersOpen.value = false;
        localStorage.setItem("countriesOpen", "false");
        localStorage.setItem("visaproductsOpen", "false");
        localStorage.setItem("nationalitiesOpen", "false");
        localStorage.setItem("embassiesOpen", "false");
        localStorage.setItem("couponsOpen", "false");
        localStorage.setItem("additionalInfoOpen", "true");
        localStorage.setItem("guidesOpen", "false");
        localStorage.setItem("usersOpen", "false");
      } else if (newPath.startsWith("/dashboard/guides")) {
        countriesOpen.value = false;
        visaproductsOpen.value = false;
        nationalitiesOpen.value = false;
        embassiesOpen.value = false;
        couponsOpen.value = false;
        additionalInfoOpen.value = false;
        guidesOpen.value = true;
        usersOpen.value = false;
        localStorage.setItem("countriesOpen", "false");
        localStorage.setItem("visaproductsOpen", "false");
        localStorage.setItem("nationalitiesOpen", "false");
        localStorage.setItem("embassiesOpen", "false");
        localStorage.setItem("couponsOpen", "false");
        localStorage.setItem("additionalInfoOpen", "false");
        localStorage.setItem("guidesOpen", "true");
        localStorage.setItem("usersOpen", "false");
      } else if (newPath.startsWith("/dashboard/users")) {
        countriesOpen.value = false;
        visaproductsOpen.value = false;
        nationalitiesOpen.value = false;
        embassiesOpen.value = false;
        couponsOpen.value = false;
        additionalInfoOpen.value = false;
        usersOpen.value = true;
        localStorage.setItem("countriesOpen", "false");
        localStorage.setItem("visaproductsOpen", "false");
        localStorage.setItem("nationalitiesOpen", "false");
        localStorage.setItem("embassiesOpen", "false");
        localStorage.setItem("couponsOpen", "false");
        localStorage.setItem("additionalInfoOpen", "false");
        localStorage.setItem("usersOpen", "true");
      } else if (newPath.startsWith("/dashboard/hostings")) {
        domainsOpen.value = false;
        hostingOpen.value = true;
        sslOpen.value = false;
        imagesOpen.value = false;
        localStorage.setItem("domainsOpen", "false");
        localStorage.setItem("hostingOpen", "true");
        localStorage.setItem("sslOpen", "false");
        localStorage.setItem("imagesOpen", "false");
      } else if (newPath.startsWith("/dashboard/support")) {
        domainsOpen.value = false;
        hostingOpen.value = false;
        sslOpen.value = false;
        imagesOpen.value = false;
        supportOpen.value = true;
        localStorage.setItem("domainsOpen", "false");
        localStorage.setItem("hostingOpen", "false");
        localStorage.setItem("sslOpen", "false");
        localStorage.setItem("imagesOpen", "false");
        localStorage.setItem("supportOpen", "true");
      } else if (newPath.startsWith("/dashboard/settings")) {
        // Settings page - no dropdown to manage
      }
    }
  },
  { immediate: true }
);

// Dropdown states
const settingsDropdownOpen = ref(false);
const userDropdownOpen = ref(false);
const themeDropdownOpen = ref(false);

// Theme and settings data
const selectedTheme = ref("Default");
const selectedScale = ref("none");
const selectedRadius = ref("none");
const selectedColorMode = ref("light");
const selectedContentLayout = ref("full");
const selectedSidebarMode = ref("default");

// Theme options
const themeOptions = [
  { label: "Default", value: "default", color: "#000000" },
  { label: "Underground", value: "underground", color: "#2D5A27" },
  { label: "Rose Garden", value: "rose-garden", color: "#DC2626" },
  { label: "Lake View", value: "lake-view", color: "#0891B2" },
  { label: "Sunset Glow", value: "sunset-glow", color: "#EA580C" },
];

const scaleOptions = [
  { label: "None", value: "none" },
  { label: "XS", value: "xs" },
  { label: "LG", value: "lg" },
];

const radiusOptions = [
  { label: "None", value: "none" },
  { label: "SM", value: "sm" },
  { label: "MD", value: "md" },
  { label: "LG", value: "lg" },
  { label: "XL", value: "xl" },
];

const colorModes = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
];

const contentLayouts = [
  { label: "Full", value: "full" },
  { label: "Centered", value: "centered" },
];

const sidebarModes = [
  { label: "Default", value: "default" },
  { label: "Icon", value: "icon" },
];

// Mobile detection
const isMobile = ref(false);

// Check if mobile on mount and resize
const checkMobile = () => {
  if (process.client) {
    isMobile.value = window.innerWidth < 1024; // lg breakpoint
    if (isMobile.value) {
      sidebarCollapsed.value = true; // Collapse sidebar on mobile by default
    }
  }
};

// Computed sidebar classes
const sidebarClasses = computed(() => {
  if (isMobile.value) {
    // On mobile: show/hide based on collapsed state
    return sidebarCollapsed.value 
      ? "w-64 -translate-x-full" 
      : "w-64 translate-x-0";
  } else {
    // On desktop: show always, adjust width based on collapsed state
    return sidebarCollapsed.value 
      ? "w-16 translate-x-0" 
      : "w-64 translate-x-0";
  }
});

// Methods
const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
};

// Close sidebar on mobile when route changes
watch(
  () => route.path,
  () => {
    if (isMobile.value && !sidebarCollapsed.value) {
      sidebarCollapsed.value = true;
    }
  }
);

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

// Handle theme toggle from Settings card
const handleThemeToggle = () => {
  toggleTheme();
  settingsDropdownOpen.value = false;
};

// Handle logout from Settings card
const handleLogoutClick = () => {
  handleSignOutClick();
  settingsDropdownOpen.value = false;
};

// Navigation toggle functions
const toggleDomains = () => {
  countriesOpen.value = false;
  visaproductsOpen.value = false;
  nationalitiesOpen.value = false;
  embassiesOpen.value = false;
  hostingOpen.value = false;
  sslOpen.value = false;
  imagesOpen.value = false;
  domainsOpen.value = !domainsOpen.value;

  // Save to localStorage
  if (process.client) {
    localStorage.setItem("domainsOpen", domainsOpen.value.toString());
    localStorage.setItem("countriesOpen", "false");
    localStorage.setItem("visaproductsOpen", "false");
    localStorage.setItem("nationalitiesOpen", "false");
    localStorage.setItem("embassiesOpen", "false");
    localStorage.setItem("hostingOpen", "false");
    localStorage.setItem("sslOpen", "false");
    localStorage.setItem("imagesOpen", "false");
  }
};

const toggleHosting = () => {
  countriesOpen.value = false;
  visaproductsOpen.value = false;
  nationalitiesOpen.value = false;
  embassiesOpen.value = false;
  domainsOpen.value = false;
  sslOpen.value = false;
  imagesOpen.value = false;
  hostingOpen.value = !hostingOpen.value;

  // Save to localStorage
  if (process.client) {
    localStorage.setItem("hostingOpen", hostingOpen.value.toString());
    localStorage.setItem("countriesOpen", "false");
    localStorage.setItem("visaproductsOpen", "false");
    localStorage.setItem("nationalitiesOpen", "false");
    localStorage.setItem("embassiesOpen", "false");
    localStorage.setItem("domainsOpen", "false");
    localStorage.setItem("sslOpen", "false");
    localStorage.setItem("imagesOpen", "false");
  }
};

const toggleSSL = () => {
  domainsOpen.value = false;
  hostingOpen.value = false;
  countriesOpen.value = false;
  visaproductsOpen.value = false;
  nationalitiesOpen.value = false;
  embassiesOpen.value = false;
  imagesOpen.value = false;
  sslOpen.value = !sslOpen.value;

  // Save to localStorage
  if (process.client) {
    localStorage.setItem("sslOpen", sslOpen.value.toString());
    localStorage.setItem("domainsOpen", "false");
    localStorage.setItem("hostingOpen", "false");
    localStorage.setItem("countriesOpen", "false");
    localStorage.setItem("visaproductsOpen", "false");
    localStorage.setItem("nationalitiesOpen", "false");
    localStorage.setItem("embassiesOpen", "false");
    localStorage.setItem("imagesOpen", "false");
  }
};

const toggleImages = () => {
  domainsOpen.value = false;
  hostingOpen.value = false;
  countriesOpen.value = false;
  visaproductsOpen.value = false;
  nationalitiesOpen.value = false;
  embassiesOpen.value = false;
  sslOpen.value = false;
  supportOpen.value = false;
  imagesOpen.value = !imagesOpen.value;

  // Save to localStorage
  if (process.client) {
    localStorage.setItem("imagesOpen", imagesOpen.value.toString());
    localStorage.setItem("domainsOpen", "false");
    localStorage.setItem("hostingOpen", "false");
    localStorage.setItem("countriesOpen", "false");
    localStorage.setItem("visaproductsOpen", "false");
    localStorage.setItem("nationalitiesOpen", "false");
    localStorage.setItem("embassiesOpen", "false");
    localStorage.setItem("sslOpen", "false");
    localStorage.setItem("supportOpen", "false");
  }
};

const toggleSupport = () => {
  domainsOpen.value = false;
  hostingOpen.value = false;
  countriesOpen.value = false;
  visaproductsOpen.value = false;
  nationalitiesOpen.value = false;
  embassiesOpen.value = false;
  sslOpen.value = false;
  imagesOpen.value = false;
  settingsDropdownOpen.value = false;
  supportOpen.value = !supportOpen.value;

  // Save to localStorage
  if (process.client) {
    localStorage.setItem("supportOpen", supportOpen.value.toString());
    localStorage.setItem("domainsOpen", "false");
    localStorage.setItem("hostingOpen", "false");
    localStorage.setItem("countriesOpen", "false");
    localStorage.setItem("visaproductsOpen", "false");
    localStorage.setItem("nationalitiesOpen", "false");
    localStorage.setItem("embassiesOpen", "false");
    localStorage.setItem("sslOpen", "false");
    localStorage.setItem("imagesOpen", "false");
  }
};

const toggleCountries = () => {
  domainsOpen.value = false;
  visaproductsOpen.value = false;
  nationalitiesOpen.value = false;
  embassiesOpen.value = false;
  countriesOpen.value = !countriesOpen.value;

  // Save to localStorage
  if (process.client) {
    localStorage.setItem("countriesOpen", countriesOpen.value.toString());
    localStorage.setItem("visaproductsOpen", "false");
    localStorage.setItem("nationalitiesOpen", "false");
    localStorage.setItem("embassiesOpen", "false");
  }
};

const toggleVisaproducts = () => {
  countriesOpen.value = false;
  nationalitiesOpen.value = false;
  embassiesOpen.value = false;
  visaproductsOpen.value = !visaproductsOpen.value;

  // Save to localStorage
  if (process.client) {
    localStorage.setItem("visaproductsOpen", visaproductsOpen.value.toString());
    localStorage.setItem("countriesOpen", "false");
    localStorage.setItem("nationalitiesOpen", "false");
    localStorage.setItem("embassiesOpen", "false");
  }
};

const toggleNationalities = () => {
  countriesOpen.value = false;
  visaproductsOpen.value = false;
  embassiesOpen.value = false;
  nationalitiesOpen.value = !nationalitiesOpen.value;

  // Save to localStorage
  if (process.client) {
    localStorage.setItem(
      "nationalitiesOpen",
      nationalitiesOpen.value.toString()
    );
    localStorage.setItem("countriesOpen", "false");
    localStorage.setItem("visaproductsOpen", "false");
    localStorage.setItem("embassiesOpen", "false");
  }
};

const toggleEmbassies = () => {
  countriesOpen.value = false;
  visaproductsOpen.value = false;
  nationalitiesOpen.value = false;
  embassiesOpen.value = !embassiesOpen.value;

  // Save to localStorage
  if (process.client) {
    localStorage.setItem("embassiesOpen", embassiesOpen.value.toString());
    localStorage.setItem("countriesOpen", "false");
    localStorage.setItem("visaproductsOpen", "false");
    localStorage.setItem("nationalitiesOpen", "false");
  }
};

const toggleCoupons = () => {
  countriesOpen.value = false;
  visaproductsOpen.value = false;
  nationalitiesOpen.value = false;
  embassiesOpen.value = false;
  additionalInfoOpen.value = false;
  couponsOpen.value = !couponsOpen.value;

  // Save to localStorage
  if (process.client) {
    localStorage.setItem("couponsOpen", couponsOpen.value.toString());
    localStorage.setItem("countriesOpen", "false");
    localStorage.setItem("visaproductsOpen", "false");
    localStorage.setItem("nationalitiesOpen", "false");
    localStorage.setItem("embassiesOpen", "false");
    localStorage.setItem("additionalInfoOpen", "false");
  }
};

const toggleAdditionalInfo = () => {
  countriesOpen.value = false;
  visaproductsOpen.value = false;
  nationalitiesOpen.value = false;
  embassiesOpen.value = false;
  couponsOpen.value = false;
  guidesOpen.value = false;
  usersOpen.value = false;
  additionalInfoOpen.value = !additionalInfoOpen.value;

  // Save to localStorage
  if (process.client) {
    localStorage.setItem(
      "additionalInfoOpen",
      additionalInfoOpen.value.toString()
    );
    localStorage.setItem("countriesOpen", "false");
    localStorage.setItem("visaproductsOpen", "false");
    localStorage.setItem("nationalitiesOpen", "false");
    localStorage.setItem("embassiesOpen", "false");
    localStorage.setItem("couponsOpen", "false");
    localStorage.setItem("guidesOpen", "false");
    localStorage.setItem("usersOpen", "false");
  }
};

const toggleGuides = () => {
  countriesOpen.value = false;
  visaproductsOpen.value = false;
  nationalitiesOpen.value = false;
  embassiesOpen.value = false;
  couponsOpen.value = false;
  additionalInfoOpen.value = false;
  usersOpen.value = false;
  guidesOpen.value = !guidesOpen.value;

  // Save to localStorage
  if (process.client) {
    localStorage.setItem("guidesOpen", guidesOpen.value.toString());
    localStorage.setItem("countriesOpen", "false");
    localStorage.setItem("visaproductsOpen", "false");
    localStorage.setItem("nationalitiesOpen", "false");
    localStorage.setItem("embassiesOpen", "false");
    localStorage.setItem("couponsOpen", "false");
    localStorage.setItem("additionalInfoOpen", "false");
    localStorage.setItem("usersOpen", "false");
  }
};

const toggleUsers = () => {
  countriesOpen.value = false;
  visaproductsOpen.value = false;
  nationalitiesOpen.value = false;
  embassiesOpen.value = false;
  couponsOpen.value = false;
  additionalInfoOpen.value = false;
  guidesOpen.value = false;
  usersOpen.value = !usersOpen.value;

  // Save to localStorage
  if (process.client) {
    localStorage.setItem("usersOpen", usersOpen.value.toString());
    localStorage.setItem("countriesOpen", "false");
    localStorage.setItem("visaproductsOpen", "false");
    localStorage.setItem("nationalitiesOpen", "false");
    localStorage.setItem("embassiesOpen", "false");
    localStorage.setItem("couponsOpen", "false");
    localStorage.setItem("additionalInfoOpen", "false");
    localStorage.setItem("guidesOpen", "false");
  }
};

// Dropdown toggle functions
const toggleSettingsDropdown = () => {
  userDropdownOpen.value = false;
  supportOpen.value = false;
  settingsDropdownOpen.value = !settingsDropdownOpen.value;

  // Save to localStorage
  if (process.client) {
    localStorage.setItem("supportOpen", "false");
  }
};

const toggleUserDropdown = () => {
  settingsDropdownOpen.value = false;
  userDropdownOpen.value = !userDropdownOpen.value;
};

// Theme dropdown toggle
const toggleThemeDropdown = () => {
  themeDropdownOpen.value = !themeDropdownOpen.value;
};

// User dropdown menu handlers
const handleSignOutClick = () => {
  logout();
  userDropdownOpen.value = false;
  router.push("/login");
};

// Theme management
const setTheme = (theme) => {
  selectedTheme.value = theme;
};

const getSelectedThemeColor = () => {
  const theme = themeOptions.find((t) => t.label === selectedTheme.value);
  return theme ? theme.color : "#000000";
};

const resetToDefault = () => {
  selectedTheme.value = "Default";
  selectedScale.value = "none";
  selectedRadius.value = "none";
  selectedColorMode.value = "light";
  selectedContentLayout.value = "full";
  selectedSidebarMode.value = "default";
  settingsDropdownOpen.value = false;
};

// Click outside handling
const handleClickOutside = (event) => {
  // Close Settings dropdown when clicking outside
  const settingsDropdown = event.target.closest("[data-settings-dropdown]");
  const settingsButton = event.target.closest("[data-settings-button]");

  if (!settingsDropdown && !settingsButton) {
    settingsDropdownOpen.value = false;
  }

  // Close other dropdowns when clicking outside
  if (!event.target.closest(".relative")) {
    userDropdownOpen.value = false;
    themeDropdownOpen.value = false;
  }
};

// Component mounted
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    isDarkMode.value = true;
    document.documentElement.classList.add("dark");
  } else {
    isDarkMode.value = false;
    document.documentElement.classList.remove("dark");
  }

  // Check mobile on mount
  checkMobile();
  
  // Add resize listener for mobile detection
  if (process.client) {
    window.addEventListener("resize", checkMobile);
  }

  // Add click outside listener
  document.addEventListener("click", handleClickOutside);
});

// Component unmounted
onUnmounted(() => {
  if (process.client) {
    window.removeEventListener("resize", checkMobile);
  }
  document.removeEventListener("click", handleClickOutside);
});
</script>
