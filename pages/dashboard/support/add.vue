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
              Create New Ticket
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
          <!-- Subject Input -->
          <div class="flex items-center gap-4 pb-5" style="border-bottom: 1px solid #E5E7EB;">
            <label 
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151; min-width: 80px;"
            >
              Subject
            </label>
            <div class="flex-1">
              <input
                v-model="formData.subject"
                type="text"
                placeholder="www.mynet.com"
                class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                :class="{ 'border-red-500': errors.subject }"
              />
              <p v-if="errors.subject" class="mt-1 text-sm text-red-600">{{ errors.subject }}</p>
            </div>
          </div>

          <!-- Category Dropdown -->
          <div class="flex items-center gap-4 pt-5" style="border-top: 1px solid #E5E7EB;">
            <label 
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151; min-width: 80px;"
            >
              Category
            </label>
            <div class="flex-1 relative">
              <select
                v-model="formData.category"
                class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-10"
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
              >
                <option value="general">General</option>
                <option value="technical">Technical</option>
                <option value="billing">Billing</option>
                <option value="other">Other</option>
              </select>
              <svg class="absolute right-3 top-3.5 w-4 h-4 pointer-events-none" style="color: #6B7280;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <!-- Priority Dropdown -->
          <div class="flex items-center gap-4 pt-5" style="border-top: 1px solid #E5E7EB;">
            <label 
              class="text-sm font-medium text-gray-700 whitespace-nowrap"
              style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151; min-width: 80px;"
            >
              Priority
            </label>
            <div class="flex-1 relative">
              <select
                v-model="formData.priority"
                class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none pr-10"
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
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
              <svg class="absolute right-3 top-3.5 w-4 h-4 pointer-events-none" style="color: #6B7280;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <!-- Description Textarea -->
          <div class="flex items-start gap-4 pt-5" style="border-top: 1px solid #E5E7EB;">
            <label 
              class="text-sm font-medium text-gray-700 whitespace-nowrap pt-3"
              style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151; min-width: 80px;"
            >
              Description
            </label>
            <div class="flex-1">
              <textarea
                v-model="formData.description"
                rows="6"
                placeholder="Add Description here"
                class="w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                style="
                  border-radius: 8px;
                  font-family: 'Inter', sans-serif;
                  border: 1px solid #D0D5DD;
                  background: #FFFFFF;
                  color: #101828;
                  width: 50%;
                  display: flex;
                  margin: 0 auto;
                "
                :class="{ 'border-red-500': errors.description }"
              ></textarea>
              <p v-if="errors.description" class="mt-1 text-sm text-red-600">{{ errors.description }}</p>
            </div>
          </div>

          <!-- Attachments Section -->
          <div class="flex items-start gap-4 pt-5" style="border-top: 1px solid #E5E7EB;">
            <label 
              class="text-sm font-medium text-gray-700 whitespace-nowrap pt-3"
              style="font-family: 'Inter', sans-serif; font-weight: 500; color: #374151; min-width: 80px;"
            >
              Attachments
            </label>
            <div class="flex-1">
              <div 
                class="border-2 border-dashed rounded-lg p-8 flex items-center justify-between cursor-pointer hover:border-gray-400 transition-colors"
                style="
                  border-color: #D0D5DD;
                  border-radius: 8px;
                  background: #F9FAFB;
                  width: 50%;
                  display: flex;
                  margin: 0 auto;
                "
                @click="triggerFileInput"
                @dragover.prevent
                @drop.prevent="handleFileDrop"
              >
                <div class="flex-1 text-center">
                  <div class="flex justify-center mb-4">
                    <svg 
                      class="w-12 h-12" 
                      style="color: #9CA3AF;"
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p class="text-sm font-medium mb-1" style="color: #374151; font-family: 'Inter', sans-serif;">
                    Click to upload or drag and drop
                  </p>
                  <p class="text-xs" style="color: #6B7280; font-family: 'Inter', sans-serif;">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </p>
                </div>
                <div v-if="formData.attachments.length > 0" class="ml-4">
                  <div class="flex items-center gap-2 p-2 bg-white rounded border" style="border: 1px solid #E5E7EB;">
                    <svg class="w-5 h-5" style="color: #6B7280;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span class="text-xs font-medium" style="color: #374151; font-family: 'Inter', sans-serif;">
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
// Set page title
useHead({
  title: "Create New Ticket - Varnish Dashboard",
});

const router = useRouter();

// Form data
const formData = ref({
  subject: 'www.mynet.com',
  category: 'general',
  priority: 'normal',
  description: '',
  attachments: [] as File[],
});

// Form state
const errors = ref({
  subject: '',
  description: '',
});

const isLoading = ref(false);
const fileInput = ref<HTMLInputElement | null>(null);

// Form validation
const isFormValid = computed(() => {
  return formData.value.subject.trim().length > 0 && 
         formData.value.description.trim().length > 0 && 
         !errors.value.subject && 
         !errors.value.description;
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
  errors.value.subject = formData.value.subject.trim() ? '' : 'Subject is required';
  errors.value.description = formData.value.description.trim() ? '' : 'Description is required';
  
  if (!isFormValid.value) {
    return;
  }
  
  isLoading.value = true;
  
  try {
    // TODO: Add API call to create ticket
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirect to support list
    router.push('/dashboard/support');
  } catch (error: any) {
    console.error('Error creating ticket:', error);
    errors.value.subject = error.message || 'Failed to create ticket';
  } finally {
    isLoading.value = false;
  }
};
</script>
