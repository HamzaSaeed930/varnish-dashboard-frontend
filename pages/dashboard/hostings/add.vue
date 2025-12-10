<template>
  <DashboardLayout>
    <div class="space-y-6">
      <!-- Page Header -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
        <div class="flex-1 min-w-0">
          <h1 
            class="text-xl sm:text-2xl lg:text-3xl font-bold mb-1"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 700;
              color: #101828;
            "
          >
            Add Domain
          </h1>
          <p 
            class="text-xs sm:text-sm"
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              color: #475467;
            "
          >
            Add a new domain to your hosting account.
          </p>
        </div>
      </div>

      <!-- Form Card -->
      <div 
        class="rounded-lg border p-6"
        style="background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 8px;"
      >
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Domain Name -->
          <div>
            <label 
              class="block text-sm font-medium mb-2"
              style="font-family: 'Inter', sans-serif; color: #374151;"
            >
              Domain Name
            </label>
            <input
              v-model="formData.domain"
              type="text"
              placeholder="example.com"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              style="
                border: 1px solid #E5E7EB;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                color: #101828;
              "
            />
          </div>

          <!-- Plan Selection -->
          <div>
            <label 
              class="block text-sm font-medium mb-2"
              style="font-family: 'Inter', sans-serif; color: #374151;"
            >
              Plan
            </label>
            <select
              v-model="formData.plan"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              style="
                border: 1px solid #E5E7EB;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                color: #101828;
              "
            >
              <option value="">Select a plan</option>
              <option value="Basic">Basic</option>
              <option value="Pro">Pro</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>

          <!-- CPU -->
          <div>
            <label 
              class="block text-sm font-medium mb-2"
              style="font-family: 'Inter', sans-serif; color: #374151;"
            >
              CPU
            </label>
            <select
              v-model="formData.cpu"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              style="
                border: 1px solid #E5E7EB;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                color: #101828;
              "
            >
              <option value="">Select CPU</option>
              <option value="2v cores">2v cores</option>
              <option value="4v cores">4v cores</option>
              <option value="8v cores">8v cores</option>
            </select>
          </div>

          <!-- RAM -->
          <div>
            <label 
              class="block text-sm font-medium mb-2"
              style="font-family: 'Inter', sans-serif; color: #374151;"
            >
              RAM
            </label>
            <select
              v-model="formData.ram"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              style="
                border: 1px solid #E5E7EB;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                color: #101828;
              "
            >
              <option value="">Select RAM</option>
              <option value="4 GB">4 GB</option>
              <option value="8 GB">8 GB</option>
              <option value="16 GB">16 GB</option>
            </select>
          </div>

          <!-- Disk -->
          <div>
            <label 
              class="block text-sm font-medium mb-2"
              style="font-family: 'Inter', sans-serif; color: #374151;"
            >
              Disk
            </label>
            <select
              v-model="formData.disk"
              required
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              style="
                border: 1px solid #E5E7EB;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                color: #101828;
              "
            >
              <option value="">Select Disk</option>
              <option value="80 GB">80 GB</option>
              <option value="160 GB">160 GB</option>
              <option value="320 GB">320 GB</option>
            </select>
          </div>

          <!-- Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4">
            <button
              type="button"
              @click="$router.back()"
              class="px-4 py-2 border rounded-lg font-medium transition-colors w-full sm:w-auto"
              style="
                border: 1px solid #E5E7EB;
                border-radius: 8px;
                color: #374151;
                background: #FFFFFF;
                font-family: 'Inter', sans-serif;
              "
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="isLoading"
              class="px-4 py-2 rounded-lg font-medium text-white transition-colors hover:opacity-90 disabled:opacity-50 w-full sm:w-auto"
              style="
                background: #182230;
                border-radius: 8px;
                font-family: 'Inter', sans-serif;
                font-weight: 600;
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

// Form data
const formData = ref({
  domain: '',
  plan: '',
  cpu: '',
  ram: '',
  disk: ''
});

const isLoading = ref(false);

// Handle form submission
const handleSubmit = async () => {
  isLoading.value = true;
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Redirect to hostings list
  navigateTo('/dashboard/hostings');
  
  isLoading.value = false;
};
</script>

