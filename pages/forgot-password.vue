<template>
  <div
    class="h-screen flex"
    style="background: linear-gradient(180deg, #0c1e35 0%, #0c1e35 100%)"
  >
    <!-- Background Pattern -->
    <!-- <div
      class="absolute inset-0 opacity-100"
      style="
        background-image: url('/images/Background_pattern_decorative.svg');
        background-repeat: no-repeat;
        background-position: center;
        pointer-events: none;
      "
    ></div> -->
    <!-- Centered Form Container -->
    <div class="mx-auto flex flex-col relative z-10" style="margin-top: 100px;">
      <!-- Logo -->
      <div class="flex flex-col items-center" style="margin-bottom: 32px">
        <div class="mb-2">
          <img src="/images/Vector.svg" alt="Varnish Logo" class="w-8 h-8" />
        </div>
        <h1
          style="
            font-family: 'Geist', sans-serif;
            font-weight: 600;
            font-size: 16px;
            line-height: 100%;
            letter-spacing: -0.6%;
            text-align: center;
            color: #ffffff;
          "
        >
          Varnish
        </h1>
      </div>

      <!-- Form Card -->
      <div class="w-full">
        <!-- Header Text -->
        <div class="text-center mb-8">
          <h2
            style="
              font-family: 'Geist', sans-serif;
              font-weight: 600;
              font-size: 30px;
              line-height: 38px;
              letter-spacing: -5%;
              text-align: center;
              text-transform: capitalize;
              color: #e2e2e2;
              margin-bottom: 8px;
            "
          >
            Forgot Password
          </h2>
          <p
            style="
              font-family: 'Geist', sans-serif;
              font-weight: 400;
              font-size: 16px;
              line-height: 24px;
              letter-spacing: 0%;
              text-align: center;
              color: #adadad;
            "
          >
            Reset your password
          </p>
        </div>

        <!-- Error Message -->
        <div
          v-if="errorMessage"
          class="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg max-w-[360px] mx-auto"
        >
          <p class="text-sm text-red-300">{{ errorMessage }}</p>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-6 w-full">
          <!-- Email Field -->
          <div class="flex flex-col items-center">
            <label
              style="
                font-family: 'Geist', sans-serif;
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: 0%;
                color: #ffffff;
              "
              class="block mb-2 w-full max-w-[360px]"
            >
              Email
            </label>
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              :disabled="isLoading"
              style="
                width: 100%;
                max-width: 360px;
                height: 44px;
                padding: 10px 14px;
                border-radius: 6px;
                border: 1px solid #5c5c5c;
                background: #2f3641;
                color: #ffffff;
                box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
                transition: all 0.2s;
              "
              class="focus:outline-none focus:border-white/40 transition-all placeholder-gray-400"
              :class="emailError ? 'border-red-500' : ''"
            />
            <div class="h-4 mt-1">
              <p v-if="emailError" class="text-sm text-red-300">
                {{ emailError }}
              </p>
            </div>
          </div>

          <!-- Sign In Button -->
          <div class="flex justify-center">
            <button
              type="submit"
              :disabled="isLoading || !isFormValid"
              style="
                font-family: 'Geist', sans-serif;
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0%;
                color: #ffffff;
                width: 360px;
                height: 43px;
                /* padding: 9px 153px; */
                border-radius: 6px;
                background: #182230;
                border: 2px solid transparent;
                background-clip: padding-box;
                position: relative;
                box-shadow: 0px -3px 3px 0px rgba(0, 0, 0, 0.1) inset,
                  0px 3px 3px 0px rgba(255, 255, 255, 0.1) inset,
                  0px 0px 0px 1px rgba(16, 24, 40, 0.24) inset,
                  0px 1px 9px 3px rgba(0, 0, 0, 0.13);
                transition: all 0.2s;
              "
              class="disabled:opacity-50 disabled:cursor-not-allowed"
              :class="
                isLoading || !isFormValid ? 'opacity-50' : 'hover:opacity-90'
              "
            >
              <span
                style="
                  position: absolute;
                  inset: 0;
                  border-radius: 6px;
                  padding: 2px;
                  background: linear-gradient(
                    180deg,
                    rgba(255, 255, 255, 0.12) 0%,
                    rgba(255, 255, 255, 0) 100%
                  );
                  -webkit-mask: linear-gradient(#fff 0 0) content-box,
                    linear-gradient(#fff 0 0);
                  -webkit-mask-composite: xor;
                  mask: linear-gradient(#fff 0 0) content-box,
                    linear-gradient(#fff 0 0);
                  mask-composite: exclude;
                  pointer-events: none;
                "
              ></span>
              <span
                v-if="isLoading"
                class="flex items-center justify-center relative z-10"
              >
                <svg
                  class="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
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
                Sending...
              </span>
              <span v-else class="relative z-10"> Send Reset Link </span>
            </button>
          </div>
        </form>

        <!-- Sign Up Link -->
        <div class="mt-6 text-center">
          <p
            style="
              font-family: 'Geist', sans-serif;
              font-weight: 400;
              font-size: 14px;
              line-height: 20px;
              letter-spacing: 0%;
              color: #7d7d7d;
            "
          >
          Remember your password?
            <NuxtLink
              to="/login"
              style="
                font-family: 'Geist', sans-serif;
                font-weight: 600;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0%;
                color: #ffffff;
              "
              class="ml-1 hover:opacity-80 transition-opacity duration-200"
            >
              Sign in
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// Page metadata
useHead({
  title: "Forgot Password - Varnish Dashboard",
  meta: [
    {
      name: "description",
      content: "Reset your Varnish Dashboard account password",
    },
  ],
});

// Reactive data
const email = ref("");
const emailError = ref("");
const errorMessage = ref("");
const isLoading = ref(false);
const isEmailSent = ref(false);

// Computed properties
const isFormValid = computed(() => {
  return email.value && !emailError.value;
});

// Form validation
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Watch for changes to validate in real-time
watch(email, (newEmail) => {
  if (newEmail && !validateEmail(newEmail)) {
    emailError.value = "Please enter a valid email address";
  } else {
    emailError.value = "";
  }
});

// Handle form submission
const handleSubmit = async () => {
  // Reset errors
  emailError.value = "";
  errorMessage.value = "";

  // Validate email
  if (!email.value) {
    emailError.value = "Email is required";
    return;
  }

  if (!validateEmail(email.value)) {
    emailError.value = "Please enter a valid email address";
    return;
  }

  // Simulate API call
  isLoading.value = true;

  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulate success
    isEmailSent.value = true;

    // Reset form
    email.value = "";
  } catch (error) {
    errorMessage.value = "Something went wrong. Please try again.";
  } finally {
    isLoading.value = false;
  }
};
</script>
