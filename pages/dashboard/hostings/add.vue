<template>
  <DashboardLayout>
    <div class="space-y-4 lg:space-y-6">
      <!-- Form Card -->
      <div class="bg-white p-4 lg:p-6" style="background: #ffffff">
        <div
          class="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full gap-3 lg:gap-4 mb-4"
        >
          <div class="flex-1 min-w-0">
            <h1
              class="mb-1"
              style="
                font-family: 'Geist', sans-serif;
                font-weight: 600;
                font-size: 22px;
                line-height: 38px;
                letter-spacing: 0%;
                color: #101828;
              "
            >
              Add New Hosting Plan
            </h1>
          </div>
          <div class="flex items-center gap-2 lg:gap-3 w-full lg:w-auto">
            <!-- Back Button -->
            <button
              @click="$router.back()"
              class="px-3 lg:px-4 py-2 rounded-lg transition-colors flex items-center gap-2 w-full lg:w-auto"
              style="
                background: #182230;
                color: #ffffff;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: -0.6%;
                vertical-align: middle;
              "
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style="color: #ffffff"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back
            </button>
          </div>
        </div>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Plan Input -->
          <div
            class="flex items-center gap-4 pb-5"
            style="border-bottom: 1px solid rgb(229, 231, 235)"
          >
            <label
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 80px;
              "
            >
              Plan
            </label>
            <div class="flex-1">
              <input
                v-model="formData.plan"
                type="text"
                placeholder="Plan name e.g basic"
                class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none form-input"
                style="
                  height: 44px;
                  border-radius: 8px;
                  font-family: Inter, sans-serif;
                  border: 1px solid rgb(208, 213, 221);
                  background: rgb(255, 255, 255);
                  color: rgb(16, 24, 40);
                  width: 50%;
                  display: flex;
                  margin: 0px auto;
                "
              />
            </div>
          </div>

          <!-- Domain Dropdown -->
          <div
            class="flex items-center gap-4 pt-5 pb-5"
            style="border-bottom: 1px solid rgb(229, 231, 235)"
          >
            <label
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 80px;
              "
            >
              Domain
            </label>
            <div class="flex-1">
              <div
                class="relative domain-dropdown"
                style="width: 50%; margin: 0px auto"
              >
                <button
                  type="button"
                  @click.stop="domainDropdownOpen = !domainDropdownOpen"
                  class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none form-input pr-2 flex items-center justify-between"
                  style="
                    height: 44px;
                    border-radius: 8px;
                    font-family: Inter, sans-serif;
                    border: 1px solid rgb(208, 213, 221);
                    background: rgb(255, 255, 255);
                    color: rgb(16, 24, 40);
                    text-align: left;
                  "
                >
                  <span>{{ getDomainLabel(formData.domain) }}</span>
                  <svg
                    class="w-4 h-4 pointer-events-none"
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
                </button>
                <!-- Dropdown Menu -->
                <div
                  v-if="domainDropdownOpen"
                  @click.stop
                  class="absolute left-0 right-0 z-50 mt-1 rounded-lg shadow-lg"
                  style="
                    background: #182230;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                  "
                >
                  <div class="py-1">
                    <button
                      v-for="option in domainOptions"
                      :key="option.value"
                      type="button"
                      @click.stop="selectDomain(option.value)"
                      class="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-opacity-80 transition-colors"
                      style="
                        color: #ffffff;
                        font-family: Inter, sans-serif;
                        font-size: 14px;
                      "
                    >
                      <span>{{ option.label }}</span>
                      <svg
                        v-if="formData.domain === option.value"
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style="color: #ffffff"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- CPU Dropdown -->
          <div
            class="flex items-center gap-4"
          >
            <label
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 80px;
              "
            >
              CPU
            </label>
            <div class="flex-1">
              <div
                class="relative cpu-dropdown"
                style="width: 50%; margin: 0px auto"
              >
                <button
                  type="button"
                  @click.stop="cpuDropdownOpen = !cpuDropdownOpen"
                  class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none form-input pr-2 flex items-center justify-between"
                  style="
                    height: 44px;
                    border-radius: 8px;
                    font-family: Inter, sans-serif;
                    border: 1px solid rgb(208, 213, 221);
                    background: rgb(255, 255, 255);
                    color: rgb(16, 24, 40);
                    text-align: left;
                  "
                >
                  <span>{{ getCPULabel(formData.cpu) }}</span>
                  <svg
                    class="w-4 h-4 pointer-events-none"
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
                </button>
                <!-- Dropdown Menu -->
                <div
                  v-if="cpuDropdownOpen"
                  @click.stop
                  class="absolute left-0 right-0 z-50 mt-1 rounded-lg shadow-lg"
                  style="
                    background: #182230;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                  "
                >
                  <div class="py-1">
                    <button
                      v-for="option in cpuOptions"
                      :key="option.value"
                      type="button"
                      @click.stop="selectCPU(option.value)"
                      class="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-opacity-80 transition-colors"
                      style="
                        color: #ffffff;
                        font-family: Inter, sans-serif;
                        font-size: 14px;
                      "
                    >
                      <span>{{ option.label }}</span>
                      <svg
                        v-if="formData.cpu === option.value"
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style="color: #ffffff"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- RAM Dropdown -->
          <div
            class="flex items-center gap-4"
          >
            <label
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 80px;
              "
            >
              RAM
            </label>
            <div class="flex-1">
              <div
                class="relative ram-dropdown"
                style="width: 50%; margin: 0px auto"
              >
                <button
                  type="button"
                  @click.stop="ramDropdownOpen = !ramDropdownOpen"
                  class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none form-input pr-2 flex items-center justify-between"
                  style="
                    height: 44px;
                    border-radius: 8px;
                    font-family: Inter, sans-serif;
                    border: 1px solid rgb(208, 213, 221);
                    background: rgb(255, 255, 255);
                    color: rgb(16, 24, 40);
                    text-align: left;
                  "
                >
                  <span>{{ getRAMLabel(formData.ram) }}</span>
                  <svg
                    class="w-4 h-4 pointer-events-none"
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
                </button>
                <!-- Dropdown Menu -->
                <div
                  v-if="ramDropdownOpen"
                  @click.stop
                  class="absolute left-0 right-0 z-50 mt-1 rounded-lg shadow-lg"
                  style="
                    background: #182230;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                  "
                >
                  <div class="py-1">
                    <button
                      v-for="option in ramOptions"
                      :key="option.value"
                      type="button"
                      @click.stop="selectRAM(option.value)"
                      class="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-opacity-80 transition-colors"
                      style="
                        color: #ffffff;
                        font-family: Inter, sans-serif;
                        font-size: 14px;
                      "
                    >
                      <span>{{ option.label }}</span>
                      <svg
                        v-if="formData.ram === option.value"
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style="color: #ffffff"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Disk Dropdown -->
          <div
            class="flex items-center gap-4"
          >
            <label
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 80px;
              "
            >
              Disk
            </label>
            <div class="flex-1">
              <div
                class="relative disk-dropdown"
                style="width: 50%; margin: 0px auto"
              >
                <button
                  type="button"
                  @click.stop="diskDropdownOpen = !diskDropdownOpen"
                  class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none form-input pr-2 flex items-center justify-between"
                  style="
                    height: 44px;
                    border-radius: 8px;
                    font-family: Inter, sans-serif;
                    border: 1px solid rgb(208, 213, 221);
                    background: rgb(255, 255, 255);
                    color: rgb(16, 24, 40);
                    text-align: left;
                  "
                >
                  <span>{{ getDiskLabel(formData.disk) }}</span>
                  <svg
                    class="w-4 h-4 pointer-events-none"
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
                </button>
                <!-- Dropdown Menu -->
                <div
                  v-if="diskDropdownOpen"
                  @click.stop
                  class="absolute left-0 right-0 z-50 mt-1 rounded-lg shadow-lg"
                  style="
                    background: #182230;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                  "
                >
                  <div class="py-1">
                    <button
                      v-for="option in diskOptions"
                      :key="option.value"
                      type="button"
                      @click.stop="selectDisk(option.value)"
                      class="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-opacity-80 transition-colors"
                      style="
                        color: #ffffff;
                        font-family: Inter, sans-serif;
                        font-size: 14px;
                      "
                    >
                      <span>{{ option.label }}</span>
                      <svg
                        v-if="formData.disk === option.value"
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style="color: #ffffff"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bandwidth Dropdown -->
          <div
            class="flex items-center gap-4 pt-5 pb-5"
            style="border-bottom: 1px solid rgb(229, 231, 235)"
          >
            <label
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 80px;
              "
            >
              Bandwidth
            </label>
            <div class="flex-1">
              <div
                class="relative bandwidth-dropdown"
                style="width: 50%; margin: 0px auto"
              >
                <button
                  type="button"
                  @click.stop="bandwidthDropdownOpen = !bandwidthDropdownOpen"
                  class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none form-input pr-2 flex items-center justify-between"
                  style="
                    height: 44px;
                    border-radius: 8px;
                    font-family: Inter, sans-serif;
                    border: 1px solid rgb(208, 213, 221);
                    background: rgb(255, 255, 255);
                    color: rgb(16, 24, 40);
                    text-align: left;
                  "
                >
                  <span>{{ getBandwidthLabel(formData.bandwidth) }}</span>
                  <svg
                    class="w-4 h-4 pointer-events-none"
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
                </button>
                <!-- Dropdown Menu -->
                <div
                  v-if="bandwidthDropdownOpen"
                  @click.stop
                  class="absolute left-0 right-0 z-50 mt-1 rounded-lg shadow-lg"
                  style="
                    background: #182230;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                  "
                >
                  <div class="py-1">
                    <button
                      v-for="option in bandwidthOptions"
                      :key="option.value"
                      type="button"
                      @click.stop="selectBandwidth(option.value)"
                      class="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-opacity-80 transition-colors"
                      style="
                        color: #ffffff;
                        font-family: Inter, sans-serif;
                        font-size: 14px;
                      "
                    >
                      <span>{{ option.label }}</span>
                      <svg
                        v-if="formData.bandwidth === option.value"
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style="color: #ffffff"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Enable Monitoring & Uptime Toggle -->
          <div class="flex items-center gap-4 pt-5">
            <label
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 80px;
                width: 30%;
              "
            >
              Enable Monitoring & Uptime
            </label>
            <div class="flex-1">
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="formData.enableMonitoring"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div
                  class="w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black bg-gray-300"
                ></div>
              </label>
            </div>
          </div>

          <!-- Enable auto resource scaling Toggle -->
          <div class="flex items-center gap-4">
            <label
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 80px;
                width: 30%;
              "
            >
              Enable auto resource scaling
            </label>
            <div class="flex-1">
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="formData.enableAutoScaling"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div
                  class="w-11 h-6 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black bg-gray-300"
                ></div>
              </label>
            </div>
          </div>

          <!-- Form Actions -->
          <div
            class="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-4 border-t"
            style="border-top: 1px solid #e5e7eb"
          >
            <button
              type="button"
              @click="$router.back()"
              class="px-6 py-2 rounded-lg transition-colors w-full sm:w-auto"
              style="
                background: #f8fafc;
                color: #101828;
                border: 1px solid #d0d5dd;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: -0.6%;
                vertical-align: middle;
              "
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="isLoading"
              class="px-6 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              style="
                background: #182230;
                color: #ffffff;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: -0.6%;
                vertical-align: middle;
              "
            >
              <span v-if="isLoading">Saving...</span>
              <span v-else>Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
/// <reference types="nuxt/app" />
import { ref, onMounted, onUnmounted } from "vue";

// Type declarations for Nuxt auto-imports
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const useHead: any;
declare const useRouter: any;

// Set page title
useHead({
  title: "Add New Hosting Plan - Varnish Dashboard",
});

const router = useRouter();

// Form data
const formData = ref({
  plan: "",
  domain: "",
  cpu: "2v cores",
  ram: "4 GB",
  disk: "80 GB",
  bandwidth: "120 GB",
  enableMonitoring: false,
  enableAutoScaling: false,
});

const isLoading = ref(false);

// Dropdown states
const domainDropdownOpen = ref(false);
const cpuDropdownOpen = ref(false);
const ramDropdownOpen = ref(false);
const diskDropdownOpen = ref(false);
const bandwidthDropdownOpen = ref(false);

// Dropdown options
const domainOptions = [
  { value: "", label: "Select domain" },
  { value: "example.com", label: "example.com" },
  { value: "test.com", label: "test.com" },
];

const cpuOptions = [
  { value: "2v cores", label: "2v cores" },
  { value: "4v cores", label: "4v cores" },
  { value: "8v cores", label: "8v cores" },
];

const ramOptions = [
  { value: "4 GB", label: "4 GB" },
  { value: "8 GB", label: "8 GB" },
  { value: "16 GB", label: "16 GB" },
];

const diskOptions = [
  { value: "80 GB", label: "80 GB" },
  { value: "160 GB", label: "160 GB" },
  { value: "320 GB", label: "320 GB" },
];

const bandwidthOptions = [
  { value: "120 GB", label: "120 GB" },
  { value: "240 GB", label: "240 GB" },
  { value: "480 GB", label: "480 GB" },
];

// Helper functions
const getDomainLabel = (value: string) => {
  if (!value) return "Select domain";
  const option = domainOptions.find((opt) => opt.value === value);
  return option ? option.label : value;
};

const getCPULabel = (value: string) => {
  const option = cpuOptions.find((opt) => opt.value === value);
  return option ? option.label : value;
};

const getRAMLabel = (value: string) => {
  const option = ramOptions.find((opt) => opt.value === value);
  return option ? option.label : value;
};

const getDiskLabel = (value: string) => {
  const option = diskOptions.find((opt) => opt.value === value);
  return option ? option.label : value;
};

const getBandwidthLabel = (value: string) => {
  const option = bandwidthOptions.find((opt) => opt.value === value);
  return option ? option.label : value;
};

const selectDomain = (value: string) => {
  formData.value.domain = value;
  domainDropdownOpen.value = false;
};

const selectCPU = (value: string) => {
  formData.value.cpu = value;
  cpuDropdownOpen.value = false;
};

const selectRAM = (value: string) => {
  formData.value.ram = value;
  ramDropdownOpen.value = false;
};

const selectDisk = (value: string) => {
  formData.value.disk = value;
  diskDropdownOpen.value = false;
};

const selectBandwidth = (value: string) => {
  formData.value.bandwidth = value;
  bandwidthDropdownOpen.value = false;
};

// Click outside handler
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest(".domain-dropdown")) {
    domainDropdownOpen.value = false;
  }
  if (!target.closest(".cpu-dropdown")) {
    cpuDropdownOpen.value = false;
  }
  if (!target.closest(".ram-dropdown")) {
    ramDropdownOpen.value = false;
  }
  if (!target.closest(".disk-dropdown")) {
    diskDropdownOpen.value = false;
  }
  if (!target.closest(".bandwidth-dropdown")) {
    bandwidthDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

// Handle form submission
const handleSubmit = async () => {
  isLoading.value = true;

  try {
    // TODO: Add API call to create hosting plan
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect to hostings list
    router.push("/dashboard/hostings");
  } catch (error: any) {
    console.error("Error creating hosting plan:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.form-input:focus {
  border: 1px solid #000000 !important;
  outline: none;
}
</style>
