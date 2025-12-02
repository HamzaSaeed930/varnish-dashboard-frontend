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
            Log in to your account
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
            Welcome back! Please enter your details.
          </p>
        </div>

        <!-- Error Message -->
        <div
          v-if="errorMessage"
          class="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg"
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

          <!-- Password Field -->
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
              Password
            </label>
            <input
              v-model="password"
              type="password"
              placeholder="Enter your password"
              :disabled="isLoading"
              style="
                width: 100%;
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
              :class="passwordError ? 'border-red-500' : ''"
            />
            <div class="h-4 mt-1">
              <p v-if="passwordError" class="text-sm text-red-300">
                {{ passwordError }}
              </p>
            </div>
          </div>

          <!-- Remember me and Forgot password -->
          <div class="flex items-center justify-between">
            <label class="flex items-center cursor-pointer">
              <input
                type="checkbox"
                v-model="rememberMe"
                class="w-4 h-4 rounded border-white/20 bg-white/10 text-white focus:ring-white/20 focus:ring-2"
              />
              <span
                style="
                  font-family: 'Geist', sans-serif;
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 20px;
                  letter-spacing: -2%;
                  color: #979ba2;
                "
                class="ml-2"
                >Remember for 30 days</span
              >
            </label>
            <NuxtLink
              to="/forgot-password"
              style="
                font-family: 'Geist', sans-serif;
                font-weight: 600;
                font-size: 14px;
                line-height: 20px;
                letter-spacing: 0%;
                color: #ffffff;
              "
              class="hover:opacity-80 transition-opacity duration-200"
            >
              Forgot password
            </NuxtLink>
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
                padding: 9px 153px;
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
                Signing in...
              </span>
              <span v-else class="relative z-10"> Sign in </span>
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
            Don't have an account?
            <NuxtLink
              to="/signup"
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
              Sign up
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/// <reference types="nuxt/app" />
import { ref, computed, watch } from 'vue'

// Type declarations for Nuxt auto-imports (Vetur-compatible)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const useHead: any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const useRouter: any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const useCookie: any

// Page metadata
useHead({
  title: "Sign In - Varnish Dashboard",
  meta: [
    {
      name: "description",
      content: "Sign in to your Varnish Dashboard account",
    },
    {
      name: "keywords",
      content: "Varnish Dashboard, Project Management, Login, Sign In",
    },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "icon", type: "image/svg+xml", href: "/favicon.ico" },
  ],
});

const router = useRouter();

// Reactive data
const email = ref("");
const password = ref("");
const emailError = ref("");
const passwordError = ref("");
const isLoading = ref(false);
const errorMessage = ref("");
const rememberMe = ref(false);

// Computed properties
const isFormValid = computed(() => {
  return (
    email.value && password.value && !emailError.value && !passwordError.value
  );
});

// Form validation
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password: string) => {
  return password.length >= 6;
};

// Watch for changes to validate in real-time
watch(email, (newEmail) => {
  if (newEmail && !validateEmail(newEmail)) {
    emailError.value = "Please enter a valid email address";
  } else {
    emailError.value = "";
  }
});

watch(password, (newPassword) => {
  if (newPassword && !validatePassword(newPassword)) {
    passwordError.value = "Password must be at least 6 characters";
  } else {
    passwordError.value = "";
  }
});

// Handle form submission
const handleSubmit = async () => {
  // Reset errors
  emailError.value = "";
  passwordError.value = "";
  errorMessage.value = "";

  // Validate form
  if (!email.value) {
    emailError.value = "Email is required";
    return;
  }

  if (!password.value) {
    passwordError.value = "Password is required";
    return;
  }

  if (!validateEmail(email.value)) {
    emailError.value = "Please enter a valid email address";
    return;
  }

  if (!validatePassword(password.value)) {
    passwordError.value = "Password must be at least 6 characters";
    return;
  }

  // UI only - no backend integration
  isLoading.value = true;

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  try {
    // Mock authentication - set token cookie
    const mockToken = "mock_auth_token_" + Date.now();
    const mockUser = {
      id: "1",
      email: email.value.trim(),
      name: email.value.trim().split("@")[0],
      isSuperAdmin: true,
      permissions: {
        countries: true,
        visaProducts: true,
        nationalities: true,
        embassies: true,
        coupons: true,
        additionalInfo: true,
        customers: true,
        applications: true,
        finances: true,
      },
    };

    // Set cookies
    const tokenCookie = useCookie("admin_auth_token", {
      maxAge: rememberMe.value ? 60 * 60 * 24 * 30 : 60 * 60 * 24 * 7,
      secure: false,
      sameSite: "lax",
      httpOnly: false,
    });
    const userCookie = useCookie("admin_user_info", {
      maxAge: rememberMe.value ? 60 * 60 * 24 * 30 : 60 * 60 * 24 * 7,
      secure: false,
      sameSite: "lax",
      httpOnly: false,
    });

    tokenCookie.value = mockToken;
    userCookie.value = mockUser;

    // Redirect to dashboard
    await router.push("/dashboard/countries");
  } catch (error) {
    errorMessage.value = "Something went wrong. Please try again.";
  } finally {
    isLoading.value = false;
  }
};

// Handle social login
const handleSocialLogin = async (provider: string) => {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    // TODO: Implement social login OAuth flow
    console.log(`Social login with ${provider}`);
    errorMessage.value = `${provider} login is not yet implemented`;
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : `Failed to login with ${provider}`;
    console.error(`Social login error with ${provider}:`, error);
  } finally {
    isLoading.value = false;
  }
};
</script>
