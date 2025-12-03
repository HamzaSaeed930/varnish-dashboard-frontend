<template>
  <DashboardLayout>
    <div class="space-y-6" style="height: 93vh;">
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
            Add Payment Method
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
          <!-- Card Details Section -->
          <div style="width: 100%;">
            <h2 
              class="text-lg font-semibold mb-4"
              style="font-family: 'Inter', sans-serif; font-weight: 600; color: #101828;"
            >
              Card Details
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4" style="width: 100%; display: flex; justify-content: center;">
              <!-- Name on card -->
              <div style="width: 30%;">
                <label 
                  class="block text-sm font-medium text-gray-700 mb-2"
                  style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151;"
                >
                  Name on card
                </label>
                <input
                  v-model="formData.nameOnCard"
                  type="text"
                  placeholder="Nick Jonas"
                  class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style="
                    height: 44px;
                    border-radius: 8px;
                    font-family: 'Inter', sans-serif;
                    border: 1px solid #D0D5DD;
                    background: #FFFFFF;
                    color: #101828;
                  "
                  :class="{ 'border-red-500': errors.nameOnCard }"
                />
                <p v-if="errors.nameOnCard" class="mt-1 text-sm text-red-600">{{ errors.nameOnCard }}</p>
              </div>

              <!-- Expiry -->
              <div>
                <label 
                  class="block text-sm font-medium text-gray-700 mb-2"
                  style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151;"
                >
                  Expiry
                </label>
                <input
                  v-model="formData.expiry"
                  type="text"
                  placeholder="06 / 2026"
                  class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style="
                    height: 44px;
                    border-radius: 8px;
                    font-family: 'Inter', sans-serif;
                    border: 1px solid #D0D5DD;
                    background: #FFFFFF;
                    color: #101828;
                  "
                  :class="{ 'border-red-500': errors.expiry }"
                />
                <p v-if="errors.expiry" class="mt-1 text-sm text-red-600">{{ errors.expiry }}</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"  style="width: 100%; display: flex; justify-content: center;">
              <!-- Card number -->
              <div style="width: 30%;">
                <label 
                  class="block text-sm font-medium text-gray-700 mb-2"
                  style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151;"
                >
                  Card number
                </label>
                <input
                  v-model="formData.cardNumber"
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style="
                    height: 44px;
                    border-radius: 8px;
                    font-family: 'Inter', sans-serif;
                    border: 1px solid #D0D5DD;
                    background: #FFFFFF;
                    color: #101828;
                  "
                  :class="{ 'border-red-500': errors.cardNumber }"
                />
                <p v-if="errors.cardNumber" class="mt-1 text-sm text-red-600">{{ errors.cardNumber }}</p>
              </div>

              <!-- CVC -->
              <div>
                <label 
                  class="block text-sm font-medium text-gray-700 mb-2"
                  style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151;"
                >
                  CVC
                </label>
                <input
                  v-model="formData.cvc"
                  type="password"
                  placeholder="***"
                  class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style="
                    height: 44px;
                    border-radius: 8px;
                    font-family: 'Inter', sans-serif;
                    border: 1px solid #D0D5DD;
                    background: #FFFFFF;
                    color: #101828;
                  "
                  :class="{ 'border-red-500': errors.cvc }"
                />
                <p v-if="errors.cvc" class="mt-1 text-sm text-red-600">{{ errors.cvc }}</p>
              </div>
            </div>
          </div>

          <!-- Save as default Toggle -->
          <div class="flex items-center gap-4 pt-4" style="border-top: 1px solid #E5E7EB;">
            <label 
              class="text-sm font-medium text-gray-700"
              style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151;"
            >
              Save as default
            </label>
            <label class="relative inline-flex items-center cursor-pointer">
              <input
                v-model="formData.saveAsDefault"
                type="checkbox"
                class="sr-only peer"
              />
              <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gray-600"></div>
            </label>
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
              <span v-else>Save card</span>
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
  title: "Add Payment Method - Varnish Dashboard",
});

const router = useRouter();

// Form data
const formData = ref({
  nameOnCard: 'Nick Jonas',
  expiry: '06 / 2026',
  cardNumber: '1234 1234 1234 1234',
  cvc: '',
  saveAsDefault: false,
});

// Form state
const errors = ref({
  nameOnCard: '',
  expiry: '',
  cardNumber: '',
  cvc: '',
});

const isLoading = ref(false);

// Form validation
const isFormValid = computed(() => {
  return formData.value.nameOnCard.trim().length > 0 && 
         formData.value.expiry.trim().length > 0 && 
         formData.value.cardNumber.trim().length > 0 && 
         formData.value.cvc.trim().length > 0 &&
         !errors.value.nameOnCard && 
         !errors.value.expiry && 
         !errors.value.cardNumber && 
         !errors.value.cvc;
});

// Handle form submission
const handleSubmit = async () => {
  // Validate form
  errors.value.nameOnCard = formData.value.nameOnCard.trim() ? '' : 'Name on card is required';
  errors.value.expiry = formData.value.expiry.trim() ? '' : 'Expiry is required';
  errors.value.cardNumber = formData.value.cardNumber.trim() ? '' : 'Card number is required';
  errors.value.cvc = formData.value.cvc.trim() ? '' : 'CVC is required';
  
  if (!isFormValid.value) {
    return;
  }
  
  isLoading.value = true;
  
  try {
    // TODO: Add API call to save payment method
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirect to billing list
    router.push('/dashboard/billings');
  } catch (error: any) {
    console.error('Error adding payment method:', error);
    errors.value.nameOnCard = error.message || 'Failed to add payment method';
  } finally {
    isLoading.value = false;
  }
};
</script>

