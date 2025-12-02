<template>
  <div class="w-full max-w-4xl mx-auto" style="min-height: 500px;">
    <!-- Heading -->
    <h1
      class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 relative z-10 text-center mt-0"
      style="
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: -0.02em;
        color: #101828;
        margin-top: 0px;
      "
    >
      Services
    </h1>

    <!-- Form -->
    <form @submit.prevent="$emit('submit')" class="space-y-6">
      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="relative cursor-pointer"
          @click="toggleService(index)"
        >
          <div
            class="rounded-lg transition-all overflow-hidden"
            style="
              background: #182230;
              border-radius: 8px;
              min-height: 200px;
              display: flex;
              flex-direction: column;
              box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.1);
            "
          >
            <!-- Card Content -->
            <div class="p-6 flex-1 flex flex-col">
              <!-- Header with Title and Checkbox -->
              <div class="flex items-start justify-between">
                <h3
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 24px;
                    color: #ffffff;
                  "
                >
                  {{ service.title }}
                </h3>
                <!-- Checkbox in dark square with white border and rounded corners -->
                <div
                  class="w-6 h-6 flex items-center justify-center flex-shrink-0 border"
                  style="
                    background: #182230;
                    border-radius: 4px;
                    border-color: #ffffff;
                    border-width: 1px;
                  "
                >
                  <svg
                    v-if="isServiceSelected(index)"
                    class="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <!-- Description Section -->
              <div class="flex-1">
                <p
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 14px;
                    line-height: 20px;
                    color: #ffffff;
                    margin-bottom: 8px;
                  "
                >
                  {{ service.description }}
                </p>
                <p
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 12px;
                    line-height: 18px;
                    color: #9CA3AF;
                    margin-top: 12px;
                  "
                >
                  {{ service.details }}
                </p>
              </div>
            </div>

            <!-- Separator Line -->
            <div style="height: 1px; background: rgba(255, 255, 255, 0.1);"></div>

            <!-- Price and Arrow Section (Bottom Bar) -->
            <div 
              class="flex items-center justify-end px-6 py-4"
              style="background: rgba(255, 255, 255, 0.05);"
            >
              <div class="flex items-baseline gap-1">
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    color: #ffffff;
                  "
                >
                  $ 500
                </span>
                <span
                  style="
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 24px;
                    color: #ffffff;
                  "
                >
                  / Per Month
                </span>
              </div>
              <svg
                class="w-5 h-5 text-white ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="errors.selectedServices" class="mb-4 text-center">
        <p class="text-sm text-red-600">{{ errors.selectedServices }}</p>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  formData: {
    type: Object,
    required: true,
  },
  errors: {
    type: Object,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  isFormValid: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['submit', 'update:form-data', 'go-back', 'next'])

// Mock services data
const services = ref([
  {
    title: 'Hosting Resell',
    description: 'Schedule sales meetings',
    details: 'Lorem Ipsum is simply dummy text of the printing and typese.',
  },
  {
    title: 'Hosting Resell',
    description: 'Schedule sales meetings',
    details: 'Lorem Ipsum is simply dummy text of the printing and typese.',
  },
  {
    title: 'Hosting Resell',
    description: 'Schedule sales meetings',
    details: 'Lorem Ipsum is simply dummy text of the printing and typese.',
  },
  {
    title: 'Hosting Resell',
    description: 'Schedule sales meetings',
    details: 'Lorem Ipsum is simply dummy text of the printing and typese.',
  },
  {
    title: 'Hosting Resell',
    description: 'Schedule sales meetings',
    details: 'Lorem Ipsum is simply dummy text of the printing and typese.',
  },
  {
    title: 'Hosting Resell',
    description: 'Schedule sales meetings',
    details: 'Lorem Ipsum is simply dummy text of the printing and typese.',
  },
])

const isServiceSelected = (index) => {
  return props.formData.selectedServices && props.formData.selectedServices.includes(index)
}

const toggleService = (index) => {
  const currentServices = props.formData.selectedServices || []
  let newServices
  
  if (currentServices.includes(index)) {
    newServices = currentServices.filter((i) => i !== index)
  } else {
    newServices = [...currentServices, index]
  }
  
  emit('update:form-data', { selectedServices: newServices })
  
  // If a service is selected (not deselected), automatically go to congrats screen
  if (!currentServices.includes(index) && newServices.length > 0) {
    // Small delay to ensure checkbox is visible
    setTimeout(() => {
      emit('next')
    }, 100)
  }
}
</script>

