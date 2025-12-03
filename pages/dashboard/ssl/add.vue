<template>
  <DashboardLayout>
    <div class="space-y-6" style="height: 93vh;">


      <!-- Form Card -->
      <div class="bg-white p-6" style="background: #FFFFFF;">
           <!-- Page Header -->
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
            Add SSL Certificate
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
              style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151; min-width: 80px;"
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

          <!-- Options Radio Buttons -->
          <div class="flex items-flex-start gap-4 pb-5" style="border-bottom: 1px solid #E5E7EB;">
            <label 
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151; min-width: 80px;"
            >
              Options
            </label>
            <div class="flex-1 space-y-3">
              <div class="flex items-center" style="width: 50%; margin: 0 auto;">
                <input
                  v-model="formData.option"
                  type="radio"
                  id="auto-ssl"
                  value="auto"
                  class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  style="border-radius: 4px;
                  "
                />
                <label 
                  for="auto-ssl"
                  class="ml-3 text-sm text-gray-700 cursor-pointer"
                  style="font-family: 'Inter', sans-serif; font-weight: 400; color: #374151;"
                >
                  Auto SSL
                </label>
              </div>
              <div class="flex items-center" style="width: 50%; margin: 0 auto;">
                <input
                  v-model="formData.option"
                  type="radio"
                  id="manual-upload"
                  value="manual"
                  class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  style="border-radius: 4px;"
                />
                <label 
                  for="manual-upload"
                  class="ml-3 text-sm text-gray-700 cursor-pointer"
                  style="font-family: 'Inter', sans-serif; font-weight: 400; color: #374151;"
                >
                  Upload Manual Certificate
                </label>
              </div>
            </div>
          </div>

          <!-- Manual Upload Section -->
          <div v-if="formData.option === 'manual'" class="space-y-4 pb-5" style="border-bottom: 1px solid #E5E7EB;">
            <div class="flex items-flex-start gap-4">
              <label 
                class="text-sm font-medium text-gray-700 whitespace-nowrap"
                style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151; min-width: 80px;"
              >
                Manual Upload
              </label>
              <div class="flex-1 space-y-4">
                <!-- CRT Field -->
                <div style="width: 50%; margin: 0 auto;">
                  <div class="flex items-center justify-between mb-4">
                    <label 
                      class="text-sm font-medium text-gray-700"
                      style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151;"
                    >
                      CRT
                    </label>
                    <div class="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center cursor-help">
                      <span class="text-xs font-bold" style="color: #6B7280;">?</span>
                    </div>
                  </div>
                  <input
                    v-model="formData.crt"
                    type="text"
                    placeholder="CRT"
                    class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style="
                      height: 44px;
                      border-radius: 8px;
                      font-family: 'Inter', sans-serif;
                      border: 1px solid #D0D5DD;
                      background: #FFFFFF;
                      color: #101828;
                    "
                  />
                </div>

                <!-- KEY Field -->
                <div style="width: 50%; margin: 0 auto; margin-top: 20px;">
                  <div class="flex items-center justify-between mb-4">
                    <label 
                      class="text-sm font-medium text-gray-700"
                      style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151;"
                    >
                      KEY
                    </label>
                    <div class="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center cursor-help">
                      <span class="text-xs font-bold" style="color: #6B7280;">?</span>
                    </div>
                  </div>
                  <input
                    v-model="formData.key"
                    type="text"
                    placeholder="olivia@untitledui.com"
                    class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                    style="
                      height: 44px;
                      border-radius: 8px;
                      font-family: 'Inter', sans-serif;
                      border: 1px solid #D0D5DD;
                      background: #FFFFFF;
                      color: #101828;
                    "
                  />
                </div>

                <!-- CA Bundle Field -->
                <div style="width: 50%; margin: 0 auto;">
                  <div class="flex items-center justify-between mb-4">
                    <label 
                      class="text-sm font-medium text-gray-700"
                      style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151;"
                    >
                      CA Bundle
                    </label>
                    <div class="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center cursor-help">
                      <span class="text-xs font-bold" style="color: #6B7280;">?</span>
                    </div>
                  </div>
                  <input
                    v-model="formData.caBundle"
                    type="text"
                    placeholder="olivia@untitledui.com"
                    class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style="
                      height: 44px;
                      border-radius: 8px;
                      font-family: 'Inter', sans-serif;
                      border: 1px solid #D0D5DD;
                      background: #FFFFFF;
                      color: #101828;
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Enable Auto Renewal Toggle -->
          <div class="flex items-center gap-4">
            <label 
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151; min-width: 80px;"
            >
              Enable Auto Renewal
            </label>
            <div class="flex-1">
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="formData.autoRenewal"
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
              <span v-else>Save</span>
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
  title: "Add SSL Certificate - Varnish Dashboard",
});

const router = useRouter();

// Form data
const formData = ref({
  domain: 'www.mynet.com',
  option: 'manual', // 'auto' or 'manual'
  crt: 'CRT',
  key: 'olivia@untitledui.com',
  caBundle: 'olivia@untitledui.com',
  autoRenewal: false,
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
    // TODO: Add API call to create SSL certificate
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirect to SSL list
    router.push('/dashboard/ssl');
  } catch (error: any) {
    console.error('Error adding SSL certificate:', error);
    errors.value.domain = error.message || 'Failed to add SSL certificate';
  } finally {
    isLoading.value = false;
  }
};
</script>

