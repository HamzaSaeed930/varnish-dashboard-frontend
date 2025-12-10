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
              class="text-xl lg:text-2xl xl:text-3xl font-bold mb-1"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 700;
                color: #101828;
              "
            >
              Add Domain
            </h1>
          </div>
          <div class="flex items-center gap-2 lg:gap-3 w-full lg:w-auto">
            <!-- Back Button -->
            <button
              @click="$router.back()"
              class="px-3 lg:px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm lg:text-base w-full lg:w-auto"
              style="
                background: #182230;
                color: #ffffff;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                font-weight: 600;
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
        </div>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Domain Input -->
          <div>
            <div>
              <label
                class="block text-sm font-medium text-gray-700 mb-2"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 500;
                  color: #374151;
                "
              >
                Domain
              </label>
            </div>
            <div class="flex w-full lg:w-auto">
              <input
                v-model="formData.domain"
                type="text"
                placeholder="www.mynet.com"
                class="w-full lg:w-[50%] px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto lg:mx-0"
                style="
                  height: 44px;
                  border-radius: 8px;
                  font-family: 'Inter', sans-serif;
                  border: 1px solid #d0d5dd;
                  background: #ffffff;
                  color: #101828;
                "
                :class="{ 'border-red-500': errors.domain }"
              />
              <p v-if="errors.domain" class="mt-1 text-sm text-red-600">
                {{ errors.domain }}
              </p>
            </div>
          </div>

          <!-- Checkboxes -->
          <div
            class="space-y-4 w-full lg:w-[50%] mx-auto lg:mx-0"
            style="padding-top: 20px"
          >
            <!-- Use Varnish edge caching -->
            <div
              class="bg-white rounded-lg border p-4"
              style="
                background: #ffffff;
                border: 1px solid #d0d5dd;
                border-radius: 8px;
              "
            >
              <div class="flex items-center">
                <input
                  v-model="formData.useVarnishCaching"
                  type="checkbox"
                  id="varnish-caching"
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  style="
                    border-radius: 4px;
                    border: 1px solid #d0d5dd;
                    width: 16px;
                    height: 16px;
                  "
                />
                <label
                  for="varnish-caching"
                  class="ml-3 cursor-pointer"
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: #344054;
                  "
                >
                  Use Varnish edge caching
                </label>
              </div>
            </div>

            <!-- Enable SSL automatically -->
            <div
              class="bg-white rounded-lg border p-4"
              style="
                background: #ffffff;
                border: 1px solid #d0d5dd;
                border-radius: 8px;
              "
            >
              <div class="flex items-center">
                <input
                  v-model="formData.enableSSLAuto"
                  type="checkbox"
                  id="ssl-auto"
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  style="
                    border-radius: 4px;
                    border: 1px solid #d0d5dd;
                    width: 16px;
                    height: 16px;
                  "
                />
                <label
                  for="ssl-auto"
                  class="ml-3 cursor-pointer"
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: #344054;
                  "
                >
                  Enable SSL automatically
                </label>
              </div>
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
              class="px-6 py-2 rounded-lg font-medium transition-colors w-full sm:w-auto"
              style="
                background: #ffffff;
                color: #374151;
                border: 1px solid #d0d5dd;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                font-size: 14px;
              "
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="isLoading || !isFormValid"
              class="px-6 py-2 rounded-lg font-medium text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              style="
                background: #182230;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                font-size: 14px;
              "
            >
              <span v-if="isLoading">Adding...</span>
              <span v-else>Add Domain</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
// Set page title
useHead({
  title: "Add Domain - Varnish Dashboard",
});

const router = useRouter();

// Form data
const formData = ref({
  domain: "",
  useVarnishCaching: false,
  enableSSLAuto: false,
});

// Form state
const errors = ref({
  domain: "",
});

const isLoading = ref(false);

// Form validation
const isFormValid = computed(() => {
  return formData.value.domain.trim().length > 0 && !errors.value.domain;
});

// Validate domain
const validateDomain = (domain: string) => {
  if (!domain.trim()) {
    return "Domain is required";
  }

  // Basic domain validation
  const domainRegex =
    /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
  if (!domainRegex.test(domain)) {
    return "Please enter a valid domain";
  }

  return "";
};

// Watch domain input for validation
watch(
  () => formData.value.domain,
  (newDomain) => {
    errors.value.domain = validateDomain(newDomain);
  }
);

// Handle form submission
const handleSubmit = async () => {
  // Validate form
  errors.value.domain = validateDomain(formData.value.domain);

  if (!isFormValid.value) {
    return;
  }

  isLoading.value = true;

  try {
    // TODO: Add API call to create domain
    // await createDomain(formData.value);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect to domains list
    router.push("/dashboard/domains");
  } catch (error: any) {
    console.error("Error adding domain:", error);
    errors.value.domain = error.message || "Failed to add domain";
  } finally {
    isLoading.value = false;
  }
};
</script>
