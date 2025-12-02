<template>
  <div class="w-full max-w-sm mx-auto">
    <div
      class="absolute inset-0 pointer-events-none overflow-hidden"
      style="z-index: 0"
    >
      <!-- Top Middle Background Image -->
      <!-- <img
        src="assets/images/Content.svg"
        alt=""
        class="absolute opacity-30"
        style="
          top: 0px;
          left: 50%;
          transform: translateX(-50%);
          max-width: 600px;
          width: 100%;
          height: auto;
        "
      /> -->
    </div>
    <!-- Heading -->
    <h1
      class="text-center mb-2 relative z-10 mt-0"
      style="
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 30px;
        line-height: 38px;
        letter-spacing: 0%;
        text-align: center;
        color: #101828;
        margin-top: 0px;
      "
    >
      Verify Phone
    </h1>

    <!-- Instruction Text -->
    <p
      class="text-center mb-8 relative z-10"
      style="
        font-family: 'Inter', sans-serif;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0%;
        color: #344054;
      "
    >
      Please Enter the 4 Digit Code Sent To Your Phone
    </p>

    <!-- Form -->
    <form @submit.prevent="$emit('submit')" class="space-y-6 relative z-10">
      <!-- Verification Code Field -->
      <div class="mb-4 space-y-2">
        <Input
          id="verificationCode"
          :model-value="formData.verificationCode"
          @update:model-value="updateField('verificationCode', $event)"
          type="text"
          placeholder="Enter Code"
          :disabled="isLoading"
          maxlength="4"
          :class="errors.verificationCode ? 'border-red-500 focus-visible:ring-red-500' : ''"
          class="verification-code-input text-center text-2xl font-semibold tracking-widest"
          @input="handleCodeInput"
        />
        <div
          v-if="errors.verificationCode"
          class="text-sm text-red-600 text-center"
        >
          {{ errors.verificationCode }}
        </div>
      </div>

      <!-- Resend Code Link -->
      <div class="text-center mb-6">
        <button
          type="button"
          @click="handleResendCode"
          :disabled="isResending || countdown > 0"
          class="text-sm font-medium text-[#009EFF] hover:text-[#009EFF]/80 hover:underline transition-all duration-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:no-underline"
          style="
            font-family: 'Inter', sans-serif;
            font-weight: 600;
            color: #009eff;
          "
        >
          <span v-if="countdown > 0">
            Resend Code in {{ formatCountdown(countdown) }}
          </span>
          <span v-else-if="isResending"> Sending... </span>
          <span v-else> Resend Code </span>
        </button>
      </div>

      <Button
        type="submit"
        :disabled="isLoading || !isFormValid"
        class="w-full mt-8 h-11 bg-[#06b1ff] hover:bg-[#009EFF] text-white disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed relative z-10"
      >
        <span v-if="isLoading" class="flex items-center justify-center">
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span>Saving...</span>
        </span>
        <span v-else>Complete Sign Up</span>
      </Button>

      <button
        type="button"
        @click="$emit('go-back')"
        class="text-gray-600 hover:text-gray-800 transition-colors mx-auto mt-4 block relative z-10"
        style="
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0%;
        "
      >
        Back to Plan
      </button>
    </form>
  </div>
</template>

<script setup>
import Input from "@/components/ui/Input.vue";
import Button from "@/components/ui/Button.vue";

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

const emit = defineEmits(["submit", "update:form-data", "resend-code", "go-back"]);

const countdown = ref(59); // Start at 59 seconds
const isResending = ref(false);
let countdownInterval = null;

// Format countdown as M:SS
const formatCountdown = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

// Start countdown timer
const startCountdown = () => {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  countdown.value = 59;
  countdownInterval = setInterval(() => {
    countdown.value--;
    if (countdown.value <= 0) {
      clearInterval(countdownInterval);
      countdown.value = 0;
    }
  }, 1000);
};

// Handle code input - only allow numbers
const handleCodeInput = (event) => {
  const value = event.target.value.replace(/\D/g, ""); // Remove non-digits
  updateField("verificationCode", value);
};

// Handle resend code
const handleResendCode = async () => {
  if (countdown.value > 0 || isResending.value) return;

  isResending.value = true;
  emit("resend-code");

  // Simulate API call delay
  setTimeout(() => {
    isResending.value = false;
    startCountdown();
  }, 1000);
};

// Start countdown on mount
onMounted(() => {
  startCountdown();
});

// Cleanup on unmount
onUnmounted(() => {
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }
});

const updateField = (field, value) => {
  emit("update:form-data", { [field]: value });
};
</script>

<style scoped>
.verification-code-input::placeholder {
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0%;
  color: #667085;
  text-align: left;
}

.verification-code-input:not(:placeholder-shown) {
  text-align: center;
}
</style>
