<template>
  <div
    class="min-h-screen flex flex-col lg:flex-row"
    style="background-color: #0c1e35"
  >
    <!-- Left Column - Blue Sidebar (Hidden on Mobile) -->
    <div
      class="hidden lg:flex flex-col justify-between px-8 relative"
      style="
        width: 440px;
        justify-content: space-between;
        opacity: 1;
        background: #0c1e35;
      "
    >
      
      <!-- Logo and Progress Steps Container -->
      <div class="text-center relative z-10" style="height: 501px; opacity: 1; gap: 80px">
        <!-- Logo -->
          <div style="margin: 10% 0% 15% 0%" class="flex flex-col items-start">
            <div class="flex items-center gap-2 mb-1">
              <img
                src="/logo/Logomark.svg"
                alt="Varnish Logo"
                style="height: 45px; width: 45px"
              />
              <div class="flex flex-col items-start">
                <h1
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 600;
                    font-style: SemiBold;
                    font-size: 19px;
                    color: #FFFFFF;
                  "
                >
                  Varnish
                </h1>
                <p
                  style="
                    font-family: 'Geist', sans-serif;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 10px;
                    vertical-align: middle;
                    color: #FFFFFF;
                  "
                >
                  Enterprise
                </p>
              </div>
            </div>
          </div>

        <!-- Progress Steps -->
        <div class="relative" style="width: 344px; height: 344px; opacity: 1">
          <!-- Dynamic Steps -->
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="flex items-start space-x-4 relative cursor-pointer hover:opacity-80 transition-opacity"
            style="
              width: 296px;
              height: 86px;
              opacity: 1;
              gap: 2px;
              padding: 4px 0px 90px 0px;
            "
            @click="goToStep(index + 1)"
          >
            <div class="relative">
               <!-- Completed step (light grey circle with black checkmark) -->
               <div
                 v-if="index + 1 < currentStep || currentStep === 5"
                 class="w-8 h-8 rounded-full flex items-center justify-center relative"
                 style="background-color: #9CA3AF;"
               >
                 <img
                   src="/images/Tick.svg"
                   alt="Tick"
                   style="
                     width: 15.995532035827637px;
                     height: 14.0059175491333px;
                     position: absolute;
                     top: 9.49px;
                     left: 8.46px;
                     opacity: 1;
                     filter: brightness(0);
                   "
                 />
               </div>
              <!-- Current step (white circle with black dot) -->
              <div
                v-else-if="index + 1 === currentStep && currentStep !== 5"
                class="w-8 h-8 rounded-full flex items-center justify-center"
                style="background: var(--Grays-White, rgba(255, 255, 255, 1)); box-shadow: 0px 0px 0px 4px rgba(158, 119, 237, 0.24); border: 2px solid var(--Grays-White, rgba(255, 255, 255, 1));"
              >
                <div
                  class="w-3 h-3 rounded-full"
                  style="background: var(--Grays-Black, rgba(0, 0, 0, 1));"
                ></div>
              </div>
              <!-- Upcoming step (light gray outlined circle with dark gray dot) -->
              <div
                v-else
                class="w-8 h-8 border-2 rounded-full flex items-center justify-center"
                style="border-color: #9CA3AF; background-color: transparent;"
              >
                <div
                  class="w-3 h-3 rounded-full"
                  style="background-color: #4A5568;"
                ></div>
              </div>

              <!-- Connecting line (not for last step) -->
              <div
                v-if="index < steps.length - 1"
                class="absolute top-10 left-1/2 transform -translate-x-1/2 w-0.5"
                style="height: 46px; background-color: #ffffff;"
              ></div>
            </div>
            <div class="text-left">
              <h3
                :class="index + 1 === currentStep ? 'text-white' : 'text-gray-400'"
                :style="
                  index + 1 === currentStep
                    ? `
                      font-family: 'Geist', sans-serif;
                      font-weight: 600;
                      font-style: SemiBold;
                      font-size: 16px;
                      line-height: 24px;
                      letter-spacing: 0%;
                      color: #FFFFFF;
                      width: 296px;
                      opacity: 1;
                    `
                    : `
                      font-family: 'Geist', sans-serif;
                      font-weight: 600;
                      font-style: SemiBold;
                      font-size: 16px;
                      line-height: 24px;
                      letter-spacing: 0%;
                      color: #9CA3AF;
                      width: 296px;
                      opacity: 1;
                    `
                "
              >
                {{ step.title }}
              </h3>
              <p
                :style="
                  index + 1 === currentStep
                    ? `
                      font-family: 'Geist', sans-serif;
                      font-weight: 400;
                      font-style: Regular;
                      font-size: 16px;
                      line-height: 24px;
                      letter-spacing: 0%;
                      color: #FFFFFF;
                      width: 296px;
                      opacity: 1;
                    `
                    : `
                      font-family: 'Geist', sans-serif;
                      font-weight: 400;
                      font-style: Regular;
                      font-size: 16px;
                      line-height: 24px;
                      letter-spacing: 0%;
                      color: #9CA3AF;
                      width: 296px;
                      opacity: 1;
                    `
                "
              >
                {{ step.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Column - Form Section -->
    <div
      class="flex-1 relative bg-white"
      style="
        border-radius: 15px;
        margin: 15px;
      "
    >
    <!-- Background Pattern -->
    <div
        class="absolute inset-0 opacity-100"
        style="
          background-image: url('/images/Background_pattern_decorative.svg');
          background-repeat: no-repeat;
          background-position: center;
          pointer-events: none;
          z-index: 0;
          position: absolute;
          top: -430px;
        "
      ></div>

      <!-- Form Content -->
      <div
        class="relative z-10 flex flex-col px-4 sm:px-6 lg:px-8 py-6 sm:py-8 h-full"
      >
        <div class="flex flex-col items-center w-full mx-auto pt-8">
          <!-- Dynamic Content Based on Current Step -->
          <AccountDetailsStep
            v-if="currentStep === 1"
            :form-data="formData"
            :errors="errors"
            :is-loading="isLoading"
            :is-form-valid="isFormValid"
            :password-requirements="passwordRequirements"
            @submit="handleSubmit"
            @update:form-data="updateFormData"
          />

          <DomainStep
            v-if="currentStep === 2"
            :form-data="formData"
            :errors="errors"
            :is-loading="isLoading"
            :is-form-valid="isFormValid"
            @submit="handleSubmit"
            @update:form-data="updateFormData"
            @go-back="goBack"
          />

          <ServicesStep
            v-if="currentStep === 3"
            :form-data="formData"
            :errors="errors"
            :is-loading="isLoading"
            :is-form-valid="isFormValid"
            @submit="handleSubmit"
            @update:form-data="updateFormData"
            @go-back="goBack"
            @next="handleServiceNext"
          />

          <BillingStep
            v-if="currentStep === 4"
            :form-data="formData"
            :errors="errors"
            :is-loading="isLoading"
            :is-form-valid="isFormValid"
            @submit="handleSubmit"
            @update:form-data="updateFormData"
            @go-back="goBack"
          />

          <CongratsStep v-if="currentStep === 5" @proceed="handleProceed" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import components explicitly
import AccountDetailsStep from "@/components/AccountDetailsStep.vue";
import DomainStep from "@/components/DomainStep.vue";
import ServicesStep from "@/components/ServicesStep.vue";
import BillingStep from "@/components/BillingStep.vue";
import CongratsStep from "@/components/CongratsStep.vue";

// Page metadata
useHead({
  title: "Sign Up - Owner - Nest Quest",
  meta: [{ name: "description", content: "Create your Owner account" }],
});

// Current step (1-5)
const currentStep = ref(1);

// Steps data
const steps = [
  {
    title: "Account Details",
    subtitle: "Enter account information",
  },
  {
    title: "Domain",
    subtitle: "Enter your domain",
  },
  {
    title: "Services",
    subtitle: "Select Your Services",
  },
  {
    title: "Billing",
    subtitle: "Add payment details",
  },
];

// Reactive data for all steps
const formData = ref({
  // Account Details
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  // Domain
  domain: "",
  // Services
  selectedServices: [],
  // Billing
  paymentMethod: "",
  cardHolderName: "",
  cardNumber: "",
  cvc: "",
  expiryDate: "",
});

const errors = ref({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  domain: "",
  selectedServices: "",
  paymentMethod: "",
  cardHolderName: "",
  cardNumber: "",
  cvc: "",
  expiryDate: "",
});
const isLoading = ref(false);

// Password requirements
const passwordRequirements = computed(() => {
  const password = formData.value.password;
  return {
    length: password.length >= 8,
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
});

// Form validation - different for each step
const isFormValid = computed(() => {
  // Step 1: Account Details
  if (currentStep.value === 1) {
    return (
      formData.value.name &&
      formData.value.email &&
      formData.value.password &&
      passwordRequirements.value.length &&
      passwordRequirements.value.special &&
      !errors.value.name &&
      !errors.value.email &&
      !errors.value.password
    );
  }

  // Step 2: Domain
  if (currentStep.value === 2) {
    return formData.value.domain && !errors.value.domain;
  }

  // Step 3: Services - at least one service must be selected
  if (currentStep.value === 3) {
    return (
      formData.value.selectedServices &&
      formData.value.selectedServices.length > 0
    );
  }

  // Step 4: Billing
  if (currentStep.value === 4) {
    return (
      formData.value.paymentMethod &&
      formData.value.cardHolderName &&
      formData.value.cardNumber &&
      formData.value.cvc &&
      formData.value.expiryDate &&
      !errors.value.cardHolderName &&
      !errors.value.cardNumber &&
      !errors.value.cvc &&
      !errors.value.expiryDate
    );
  }

  return false;
});

// Validation functions
const validateName = (name) => {
  if (!name) return "Name is required";
  if (name.length < 2) return "Name must be at least 2 characters";
  return "";
};

const validateEmail = (email) => {
  // Email is optional, so if empty, it's valid
  if (!email) return "";
  // If provided, validate format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return "";
};

const validatePassword = (password) => {
  if (!password) return "Password is required";
  if (password.length < 8) return "Password must be at least 8 characters";
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
    return "Password must contain one special character";
  return "";
};

const validateConfirmPassword = (confirmPassword, password) => {
  if (!confirmPassword) return "Please confirm your password";
  if (confirmPassword !== password) return "Passwords do not match";
  return "";
};

// Watch for changes to validate in real-time
watch(
  () => formData.value.name,
  (newName) => {
    errors.value.name = validateName(newName);
  }
);

watch(
  () => formData.value.email,
  (newEmail) => {
    errors.value.email = validateEmail(newEmail);
  }
);

watch(
  () => formData.value.password,
  (newPassword) => {
    errors.value.password = validatePassword(newPassword);
    // Re-validate confirm password when password changes
    if (formData.value.confirmPassword) {
      errors.value.confirmPassword = validateConfirmPassword(
        formData.value.confirmPassword,
        newPassword
      );
    }
  }
);

watch(
  () => formData.value.confirmPassword,
  (newConfirmPassword) => {
    errors.value.confirmPassword = validateConfirmPassword(
      newConfirmPassword,
      formData.value.password
    );
  }
);

// Watch domain to clear error
watch(
  () => formData.value.domain,
  (newDomain) => {
    if (newDomain) {
      errors.value.domain = "";
    }
  }
);

// Update form data method
const updateFormData = (newData) => {
  formData.value = { ...formData.value, ...newData };

  // Clear errors when fields are updated
  if ("domain" in newData && newData.domain) {
    errors.value.domain = "";
  }
  if ("selectedServices" in newData) {
    errors.value.selectedServices = "";
  }
};

// Go back to previous step
const goBack = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

// Go to specific step
const goToStep = (stepNumber) => {
  // Only allow navigation to completed steps or current step
  if (stepNumber <= currentStep.value && stepNumber <= 5) {
    currentStep.value = stepNumber;
  }
};

// Handle proceed from Congrats screen
const handleProceed = () => {
  // Redirect to dashboard (UI only)
  navigateTo("/dashboard");
};

// Handle form submission
const handleSubmit = async () => {
  // Reset errors
  errors.value = {};

  // Validate current step
  if (currentStep.value === 1) {
    errors.value.name = validateName(formData.value.name);
    errors.value.email = validateEmail(formData.value.email);
    errors.value.password = validatePassword(formData.value.password);

    // Don't proceed if validation fails
    if (errors.value.name || errors.value.email || errors.value.password) {
      return;
    }

    // Move to next step (Domain)
    currentStep.value++;
    return;
  }

  // Step 2 (Domain) - Validate domain
  if (currentStep.value === 2) {
    if (!formData.value.domain) {
      errors.value.domain = "Domain is required";
      return;
    }

    // Basic domain validation
    const domainRegex =
      /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.[a-zA-Z]{2,}$/;
    if (!domainRegex.test(formData.value.domain)) {
      errors.value.domain = "Please enter a valid domain";
      return;
    }

    // Move to next step (Services)
    currentStep.value++;
    return;
  }

  // Step 3 (Services) - Validate at least one service selected
  if (currentStep.value === 3) {
    if (
      !formData.value.selectedServices ||
      formData.value.selectedServices.length === 0
    ) {
      errors.value.selectedServices = "Please select at least one service";
      return;
    }

    // Move to next step (Billing)
    currentStep.value++;
    return;
  }

  // Step 4 (Billing) - Validate billing info
  if (currentStep.value === 4) {
    if (!formData.value.paymentMethod) {
      errors.value.paymentMethod = "Payment method is required";
      return;
    }

    if (!formData.value.cardHolderName) {
      errors.value.cardHolderName = "Card holder name is required";
      return;
    }

    if (!formData.value.cardNumber) {
      errors.value.cardNumber = "Card number is required";
      return;
    }

    if (!formData.value.cvc) {
      errors.value.cvc = "CVC is required";
      return;
    }

    if (!formData.value.expiryDate) {
      errors.value.expiryDate = "Expiry date is required";
      return;
    }

    // Mock: Set auth token cookie
    const tokenCookie = useCookie("admin_auth_token", {
      maxAge: 60 * 60 * 24 * 7, // 7 days
      secure: false,
      sameSite: "lax",
      httpOnly: false,
    });
    tokenCookie.value = "mock_signup_token_" + Date.now();

    // Move to Congrats screen
    currentStep.value = 5;
    return;
  }
};

// Handle service selection - go to billing screen
const handleServiceNext = () => {
  // Move to Billing screen (step 4)
  currentStep.value = 4;
};

</script>
