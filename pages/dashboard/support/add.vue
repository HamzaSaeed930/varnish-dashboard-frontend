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
              Create New Ticket
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
          <!-- Subject Input -->
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
              Subject
            </label>
            <div class="flex-1">
              <input
                v-model="formData.subject"
                type="text"
                placeholder="www.mynet.com"
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
                :class="{ 'border-red-500': errors.subject }"
              />
              <p
                v-if="errors.subject"
                class="mt-1 text-xs lg:text-sm text-red-600"
              >
                {{ errors.subject }}
              </p>
            </div>
          </div>

          <!-- Category Dropdown -->
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
              Category
            </label>
            <div class="flex-1">
              <div
                class="relative category-dropdown"
                style="width: 50%; margin: 0px auto"
              >
                <button
                  type="button"
                  @click.stop="categoryDropdownOpen = !categoryDropdownOpen"
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
                  <span>{{ getCategoryLabel(formData.category) }}</span>
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
                  v-if="categoryDropdownOpen"
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
                      v-for="option in categoryOptions"
                      :key="option.value"
                      type="button"
                      @click.stop="selectCategory(option.value)"
                      class="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-opacity-80 transition-colors"
                      style="
                        color: #ffffff;
                        font-family: Inter, sans-serif;
                        font-size: 14px;
                      "
                    >
                      <span>{{ option.label }}</span>
                      <svg
                        v-if="formData.category === option.value"
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

          <!-- Priority Dropdown -->
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
              Priority
            </label>
            <div class="flex-1">
              <div
                class="relative priority-dropdown"
                style="width: 50%; margin: 0px auto"
              >
                <button
                  type="button"
                  @click.stop="priorityDropdownOpen = !priorityDropdownOpen"
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
                  <span>{{ getPriorityLabel(formData.priority) }}</span>
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
                  v-if="priorityDropdownOpen"
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
                      v-for="option in priorityOptions"
                      :key="option.value"
                      type="button"
                      @click.stop="selectPriority(option.value)"
                      class="w-full text-left px-3 py-2 flex items-center justify-between hover:bg-opacity-80 transition-colors"
                      style="
                        color: #ffffff;
                        font-family: Inter, sans-serif;
                        font-size: 14px;
                      "
                    >
                      <span>{{ option.label }}</span>
                      <svg
                        v-if="formData.priority === option.value"
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

          <!-- Description Textarea -->
          <div
            class="flex items-start gap-4 pt-5 pb-5"
            style="border-bottom: 1px solid rgb(229, 231, 235)"
          >
            <label
              class="text-sm font-medium text-gray-700 whitespace-nowrap pt-3"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 80px;
              "
            >
              Description
            </label>
            <div class="flex-1">
              <textarea
                v-model="formData.description"
                rows="6"
                placeholder="Add Description here"
                class="px-4 py-3 border rounded-lg text-sm focus:outline-none form-input resize-none"
                style="
                  border-radius: 8px;
                  font-family: Inter, sans-serif;
                  border: 1px solid rgb(208, 213, 221);
                  background: rgb(255, 255, 255);
                  color: rgb(16, 24, 40);
                  width: 50%;
                  display: flex;
                  margin: 0px auto;
                "
                :class="{ 'border-red-500': errors.description }"
              ></textarea>
              <p
                v-if="errors.description"
                class="mt-1 text-xs lg:text-sm text-red-600"
              >
                {{ errors.description }}
              </p>
            </div>
          </div>

          <!-- Attachments Section -->
          <div class="flex items-start gap-4 pt-5">
            <label
              class="text-sm font-medium text-gray-700 whitespace-nowrap pt-3"
              style="
                font-family: Inter, sans-serif;
                font-weight: 500;
                color: rgb(55, 65, 81);
                min-width: 80px;
              "
            >
              Attachments
            </label>
            <div class="flex-1">
              <div
                class="border rounded-lg p-8 flex flex-col items-center justify-center transition-colors upload-area"
                style="
                  border: 1px solid rgb(208, 213, 221);
                  border-radius: 8px;
                  background: rgb(243, 244, 246);
                  width: 50%;
                  display: flex;
                  margin: 0px auto;
                  cursor: pointer;
                "
                @click="triggerFileInput"
                @dragover.prevent
                @drop.prevent="handleFileDrop"
              >
                <div class="flex flex-col items-center text-center">
                  <div class="flex justify-center mb-4">
                    <div
                      class="w-12 h-12 flex items-center justify-center rounded-lg"
                      style="background: rgb(229, 231, 235); border-radius: 6px"
                    >
                      <svg
                        class="w-6 h-6"
                        style="color: rgb(75, 85, 99)"
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
                    </div>
                  </div>
                  <p
                    class="mb-1"
                    style="
                      font-family: 'Geist', sans-serif;
                      font-weight: 600;
                      font-size: 14px;
                      line-height: 20px;
                      letter-spacing: 0%;
                      color: #000000;
                    "
                  >
                    <span style="font-weight: 600">Click to upload</span>
                    <span style="font-weight: 400"> or drag and drop</span>
                  </p>
                  <p
                    class="text-xs mt-1"
                    style="
                      color: #6b7280;
                      font-family: 'Inter', sans-serif;
                      font-weight: 400;
                    "
                  >
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                </div>
                <div v-if="formData.attachments.length > 0" class="mt-4">
                  <div
                    class="flex items-center gap-2 p-2 bg-white rounded border"
                    style="border: 1px solid #e5e7eb; border-radius: 6px"
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span
                      class="text-xs font-medium"
                      style="color: #374151; font-family: 'Inter', sans-serif"
                    >
                      JPG
                    </span>
                  </div>
                </div>
              </div>
              <input
                ref="fileInput"
                type="file"
                multiple
                accept="image/svg+xml,image/png,image/jpeg,image/gif"
                class="hidden"
                @change="handleFileSelect"
              />
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
              :disabled="isLoading || !isFormValid"
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
              <span v-if="isLoading">Submitting...</span>
              <span v-else>Submit Ticket</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
/// <reference types="nuxt/app" />
import { ref, computed, onMounted, onUnmounted } from "vue";

// Type declarations for Nuxt auto-imports
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const useHead: any;
declare const useRouter: any;

// Set page title
useHead({
  title: "Create New Ticket - Varnish Dashboard",
});

const router = useRouter();

// Form data
const formData = ref({
  subject: "www.mynet.com",
  category: "general",
  priority: "normal",
  description: "",
  attachments: [] as File[],
});

// Form state
const errors = ref({
  subject: "",
  description: "",
});

const isLoading = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);

// Dropdown states
const categoryDropdownOpen = ref(false);
const priorityDropdownOpen = ref(false);

// Dropdown options
const categoryOptions = [
  { value: "general", label: "General" },
  { value: "technical", label: "Technical" },
  { value: "billing", label: "Billing" },
  { value: "other", label: "Other" },
];

const priorityOptions = [
  { value: "low", label: "Low" },
  { value: "normal", label: "Normal" },
  { value: "high", label: "High" },
  { value: "urgent", label: "Urgent" },
];

// Helper functions
const getCategoryLabel = (value: string) => {
  const option = categoryOptions.find((opt) => opt.value === value);
  return option ? option.label : value;
};

const getPriorityLabel = (value: string) => {
  const option = priorityOptions.find((opt) => opt.value === value);
  return option ? option.label : value;
};

const selectCategory = (value: string) => {
  formData.value.category = value;
  categoryDropdownOpen.value = false;
};

const selectPriority = (value: string) => {
  formData.value.priority = value;
  priorityDropdownOpen.value = false;
};

// Click outside handler
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (!target.closest(".category-dropdown")) {
    categoryDropdownOpen.value = false;
  }
  if (!target.closest(".priority-dropdown")) {
    priorityDropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

// Form validation
const isFormValid = computed(() => {
  return (
    formData.value.subject.trim().length > 0 &&
    formData.value.description.trim().length > 0 &&
    !errors.value.subject &&
    !errors.value.description
  );
});

// File handling
const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    formData.value.attachments = Array.from(target.files);
  }
};

const handleFileDrop = (event: DragEvent) => {
  if (event.dataTransfer?.files) {
    formData.value.attachments = Array.from(event.dataTransfer.files);
  }
};

// Handle form submission
const handleSubmit = async () => {
  // Validate form
  errors.value.subject = formData.value.subject.trim()
    ? ""
    : "Subject is required";
  errors.value.description = formData.value.description.trim()
    ? ""
    : "Description is required";

  if (!isFormValid.value) {
    return;
  }

  isLoading.value = true;

  try {
    // TODO: Add API call to create ticket
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect to support list
    router.push("/dashboard/support");
  } catch (error: any) {
    console.error("Error creating ticket:", error);
    errors.value.subject = error.message || "Failed to create ticket";
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.upload-area:hover {
  border: 2px solid #000000 !important;
}

.form-input:focus {
  border: 1px solid #000000 !important;
  outline: none;
}
</style>
