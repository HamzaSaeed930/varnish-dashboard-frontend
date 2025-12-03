<template>
  <DashboardLayout>
    <div class="space-y-6" style="height: 93vh;">
      <!-- Page Header -->


      <!-- Form Card -->
      <div class="bg-white p-6" style="background: #FFFFFF;">
        <div class="flex flex-row items-center justify-between w-full gap-4 mb-4">
        <div class="flex-1 min-w-0">
          <h1 
            class="text-2xl sm:text-3xl font-bold mb-1"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 700;
              color: #101828;
            "
          >
            Add Optimization Rule
          </h1>
        </div>
        <div class="flex items-center gap-3">
          <!-- Back Button -->
          <button
            @click="$router.back()"
            class="px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
            style="
              background: #182230;
              color: #FFFFFF;
              border-radius: 8px;
              font-family: 'Inter', sans-serif;
              font-weight: 600;
              font-size: 14px;
            "
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        </div>
      </div>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Domain Input -->
          <div class="flex items-flex-start gap-4 pb-5" style="border-bottom: 1px solid #E5E7EB;">
            <label 
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151; min-width: 120px;"
            >
              Domain
            </label>
            <div class="flex-1 relative">
              <input
                v-model="formData.domain"
                type="text"
                placeholder="www.mynet.com"
                class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                style="
                  height: 44px;
                  border-radius: 8px;
                  font-family: 'Inter', sans-serif;
                  border: 1px solid #D0D5DD;
                  background: #FFFFFF;
                  color: #101828;
                  width: 50%;
                  display: flex;
                  margin: 0 auto;
                "
                :class="{ 'border-red-500': errors.domain }"
              />
              <svg class="absolute right-3 top-3.5 w-4 h-4" style="color: #6B7280;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <p v-if="errors.domain" class="mt-1 text-sm text-red-600">{{ errors.domain }}</p>
            </div>
          </div>

          <!-- Source Format -->
          <div class="flex items-flex-start gap-4 pb-5" style="border-bottom: 1px solid #E5E7EB;">
            <label 
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151; min-width: 120px;"
            >
              Source Format
            </label>
            <div class="flex-1 relative">
              <input
                v-model="formData.sourceFormat"
                type="text"
                placeholder="Select"
                class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                style="
                  height: 44px;
                  border-radius: 8px;
                  font-family: 'Inter', sans-serif;
                  border: 1px solid #D0D5DD;
                  background: #FFFFFF;
                  color: #101828;
                  width: 50%;
                  display: flex;
                  margin: 0 auto;
                "
              />
              <svg class="absolute right-3 top-3.5 w-4 h-4" style="color: #6B7280;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <!-- Target Format -->
          <div class="flex items-flex-start gap-4 pb-5" style="border-bottom: 1px solid #E5E7EB;">
            <label 
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151; min-width: 120px;"
            >
              Target Format
            </label>
            <div class="flex-1 relative">
              <input
                v-model="formData.targetFormat"
                type="text"
                placeholder="Select"
                class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                style="
                  height: 44px;
                  border-radius: 8px;
                  font-family: 'Inter', sans-serif;
                  border: 1px solid #D0D5DD;
                  background: #FFFFFF;
                  color: #101828;
                  width: 50%;
                  display: flex;
                  margin: 0 auto;
                "
              />
              <svg class="absolute right-3 top-3.5 w-4 h-4" style="color: #6B7280;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <!-- Quality Slider -->
          <div class="flex items-flex-start gap-4 pb-5" style="border-bottom: 1px solid #E5E7EB;">
            <label 
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151; min-width: 120px;"
            >
              Quality
            </label>
            <div class="flex-1">
              <div class="relative">
                <input
                  v-model="formData.quality"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style="background: #E5E7EB; width: 50%; display: flex; margin: 0 auto;"
                />
                <div class="flex justify-between mt-2">
                  <span class="text-xs" style="color: #6B7280; font-family: 'Inter', sans-serif;">0%</span>
                  <span class="text-xs font-medium" style="color: #101828; font-family: 'Inter', sans-serif;">{{ formData.quality }}%</span>
                  <span class="text-xs" style="color: #6B7280; font-family: 'Inter', sans-serif;">100%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Max Width -->
          <div class="flex items-flex-start gap-4 pb-5" style="border-bottom: 1px solid #E5E7EB;">
            <label 
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151; min-width: 120px;"
            >
              Max Width
            </label>
            <div class="flex-1">
              <div class="relative">
                <input
                  v-model="formData.maxWidth"
                  type="text"
                  placeholder="1920 px"
                  class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                  style="
                    height: 44px;
                    border-radius: 8px;
                    font-family: 'Inter', sans-serif;
                    border: 1px solid #D0D5DD;
                    background: #FFFFFF;
                    color: #101828;
                    width: 50%;
                    display: flex;
                    margin: 0 auto;
                  "
                />
                <svg class="absolute right-3 top-3.5 w-4 h-4" style="color: #6B7280;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p class="mt-1 text-xs" style="color: #6B7280; font-family: 'Inter', sans-serif;">
                Optional
              </p>
            </div>
          </div>

          <!-- Enable Rule Toggle -->
          <div class="flex items-flex-start gap-4">
            <label 
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151; min-width: 120px;"
            >
              Enable Rule
            </label>
            <div class="flex-1">
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="formData.enableRule"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
              </label>
            </div>
          </div>

          <!-- Form Actions -->
          <div class="flex items-center justify-end gap-3 pt-4 border-t" style="border-top: 1px solid #E5E7EB;">
            <button
              type="button"
              @click="$router.back()"
              class="px-6 py-2 rounded-lg font-medium transition-colors"
              style="
                background: #F9FAFB;
                color: #374151;
                border: 1px solid #D0D5DD;
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
              class="px-6 py-2 rounded-lg font-medium text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style="
                background: #182230;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                font-size: 14px;
              "
            >
              <span v-if="isLoading">Saving...</span>
              <span v-else>Save Rule</span>
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
  title: "Add Optimization Rule - Varnish Dashboard",
});

const router = useRouter();

// Form data
const formData = ref({
  domain: 'www.mynet.com',
  sourceFormat: 'Select',
  targetFormat: 'Select',
  quality: 25,
  maxWidth: '1920 px',
  enableRule: true,
});

// Form state
const errors = ref({
  domain: '',
});

const isLoading = ref(false);

// Form validation
const isFormValid = computed(() => {
  return formData.value.domain.trim().length > 0 && !errors.value.domain;
});

// Handle form submission
const handleSubmit = async () => {
  isLoading.value = true;
  
  try {
    // TODO: Add API call to create optimization rule
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirect to images list
    router.push('/dashboard/images');
  } catch (error: any) {
    console.error('Error adding optimization rule:', error);
    errors.value.domain = error.message || 'Failed to add optimization rule';
  } finally {
    isLoading.value = false;
  }
};
</script>

