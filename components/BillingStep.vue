<template>
  <div class="w-full max-w-sm mx-auto" style="min-height: 500px;">
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
      Billing
    </h1>

    <!-- Form -->
    <form @submit.prevent="$emit('submit')" class="space-y-6">
      <!-- Payment Method -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Payment Method
        </label>
        <UiInput
          :model-value="formData.paymentMethod"
          @update:model-value="updateField('paymentMethod', $event)"
          type="text"
          placeholder="Select Method"
          :error="errors.paymentMethod"
          :disabled="isLoading"
          class="w-full"
          :input-style="{
            width: '100%',
            height: '44px',
            borderRadius: '6px',
            border: '1px solid #D0D5DD',
            opacity: 1,
            gap: '8px',
            padding: '10px 14px',
            background: '#FFFFFF',
            boxShadow: '0px 1px 2px 0px #1018280D',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0%',
            color: '#101828'
          }"
        />
      </div>

      <!-- Card Holder Name -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Card Holder Name*
        </label>
        <UiInput
          :model-value="formData.cardHolderName"
          @update:model-value="updateField('cardHolderName', $event)"
          type="text"
          placeholder="Enter your name"
          :error="errors.cardHolderName"
          :disabled="isLoading"
          class="w-full"
          :input-style="{
            width: '100%',
            height: '44px',
            borderRadius: '6px',
            border: '1px solid #D0D5DD',
            opacity: 1,
            gap: '8px',
            padding: '10px 14px',
            background: '#FFFFFF',
            boxShadow: '0px 1px 2px 0px #1018280D',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0%',
            color: '#101828'
          }"
        />
      </div>

      <!-- Card Number -->
      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Card Number*
        </label>
        <UiInput
          :model-value="formData.cardNumber"
          @update:model-value="updateField('cardNumber', $event)"
          type="text"
          placeholder="Enter your email"
          :error="errors.cardNumber"
          :disabled="isLoading"
          class="w-full"
          :input-style="{
            width: '100%',
            height: '44px',
            borderRadius: '6px',
            border: '1px solid #D0D5DD',
            opacity: 1,
            gap: '8px',
            padding: '10px 14px',
            background: '#FFFFFF',
            boxShadow: '0px 1px 2px 0px #1018280D',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0%',
            color: '#101828'
          }"
        />
      </div>

      <!-- CVC and Expiry Date Row -->
      <div class="grid mb-4">
        <!-- CVC -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            CVC*
          </label>
          <UiInput
            :model-value="formData.cvc"
            @update:model-value="updateField('cvc', $event)"
            type="text"
            placeholder="Create a password"
            :error="errors.cvc"
            :disabled="isLoading"
            class="w-full"
            :input-style="{
              width: '100%',
              height: '44px',
              borderRadius: '6px',
              border: '1px solid #D0D5DD',
              opacity: 1,
              gap: '8px',
              padding: '10px 14px',
              background: '#FFFFFF',
              boxShadow: '0px 1px 2px 0px #1018280D',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '0%',
              color: '#101828'
            }"
          />
        </div>

        <!-- Expiry Date -->
        <div class="mt-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Expiry Date
          </label>
          <UiInput
            :model-value="formData.expiryDate"
            @update:model-value="updateField('expiryDate', $event)"
            type="text"
            placeholder="DD MM YYYY"
            :error="errors.expiryDate"
            :disabled="isLoading"
            class="w-full"
            :input-style="{
              width: '100%',
              height: '44px',
              borderRadius: '6px',
              border: '1px solid #D0D5DD',
              opacity: 1,
              gap: '8px',
              padding: '10px 14px',
              background: '#FFFFFF',
              boxShadow: '0px 1px 2px 0px #1018280D',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '24px',
              letterSpacing: '0%',
              color: '#101828'
            }"
          />
        </div>
      </div>

      <!-- Next Button -->
      <UiButton
        type="submit"
        variant="primary"
        size="lg"
        :disabled="isLoading || !isFormValid"
        class="w-full mt-8 hover:opacity-90 transition-opacity"
        style="
          width: 100%;
          height: 44px;
          border-radius: 6px;
          border: 1px solid #182230;
          opacity: 1;
          padding: 0px 0px;
          gap: 6px;
          background: #182230;
          box-shadow: 0px 1px 2px 0px #1018280D;
        "
        :style="
          isLoading || !isFormValid
            ? `
              width: 100%;
              height: 44px;
              border-radius: 6px;
              border: 1px solid #182230;
              opacity: 0.6;
              padding: 0px 0px;
              gap: 6px;
              background: #182230;
              box-shadow: 0px 1px 2px 0px #1018280D;
            `
            : `
              width: 100%;
              height: 44px;
              border-radius: 6px;
              border: 1px solid #182230;
              opacity: 1;
              padding: 0px 0px;
              gap: 6px;
              background: #182230;
              box-shadow: 0px 1px 2px 0px #1018280D;
            `
        "
      >
        <span
          v-if="isLoading"
          class="flex items-center justify-center"
        >
          <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span
            style="
              font-family: 'Inter', sans-serif;
              font-weight: 600;
              font-size: 16px;
              line-height: 24px;
              letter-spacing: 0%;
              color: #FFFFFF;
              opacity: 1;
            "
          >
            Saving...
          </span>
        </span>
        <span
          v-else
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0%;
            color: #FFFFFF;
            opacity: 1;
          "
        >
          Next
        </span>
      </UiButton>

      <!-- Back Link -->
      <div class="text-center mt-4">
        <button
          type="button"
          @click="$emit('go-back')"
          class="text-gray-600 hover:text-gray-800 transition-colors flex items-center justify-center mx-auto"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            letter-spacing: 0%;
          "
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Services
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
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
});

const emit = defineEmits(["submit", "update:form-data", "go-back"]);

const updateField = (field, value) => {
  emit("update:form-data", { [field]: value });
};
</script>

