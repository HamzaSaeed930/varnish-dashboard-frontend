<template>
  <div
    class="min-h-screen flex justify-center relative overflow-hidden "
    style="background: #0C1E35;"
  >
    <!-- Background Pattern -->
    <!-- <div
      class="absolute inset-0 opacity-100"
      style="
        background-image: url('/images/Lines.png');
        background-repeat: repeat;
        background-size: cover;
        background-position: center;
        pointer-events: none;
        z-index: 0;
        width: 60%;
        height: 40%;
        margin: 0% 20%;
      "
    ></div> -->
    
    <!-- Centered Content Container -->
    <div class="w-full max-w-[424px] mx-auto relative z-10 flex flex-col mt-24">
      <!-- Logo -->
      <div class="flex flex-col items-center mb-8">
        <div class="mb-4">
          <img src="/images/Vector.svg" alt="Varnish Logo" class="w-12 h-12" />
        </div>
        <h1
          style="
            font-family: 'Geist', sans-serif;
            font-weight: 600;
            font-size: 24px;
            line-height: 100%;
            letter-spacing: -0.6%;
            text-align: center;
            color: #ffffff;
          "
        >
          Varnish
        </h1>
      </div>

      <!-- Main Heading -->
      <h2
        class="text-center mb-4"
        style="
          font-family: 'Geist', sans-serif;
          font-weight: 600;
          font-style: SemiBold;
          font-size: 30px;
          line-height: 38px;
          letter-spacing: 0%;
          text-align: center;
          color: #FFFFFF;
        "
      >
        Test Your Website Speed
      </h2>

      <!-- Description -->
      <p
        class="text-center mb-10"
        style="
          font-family: 'Geist', sans-serif;
          font-weight: 400;
          font-style: Regular;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0%;
          text-align: center;
          color: #BBBBBB;
        "
      >
        Is your website running at full speed? Run a free test and see how
        close you are to a perfect 100 score.
      </p>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="w-full space-y-6">
        <!-- Website URL Input -->
        <div class="flex flex-col w-full">
          <label
            for="website-url"
            class="block mb-2 text-left"
            style="
              font-family: 'Geist', sans-serif;
              font-weight: 500;
              font-style: Medium;
              font-size: 14px;
              line-height: 20px;
              letter-spacing: 0%;
              color: #FFFFFF;
            "
          >
            Website URL
          </label>
          <div class="relative w-full">
            <input
              id="website-url"
              v-model="websiteUrl"
              type="text"
              placeholder="Enter your website url"
              required
              @blur="validateUrl"
              @input="clearError"
              class="transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              style="
                height: 44px;
                border-radius: 6px;
                border: 1px solid #D0D5DD;
                box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
                padding: 10px 14px;
                background: #FFFFFF;
                color: #111827;
                font-family: 'Geist', sans-serif;
                font-weight: 400;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 0%;
                box-sizing: border-box;
              "
              :style="errorMessage ? 'border-color: #ef4444;' : ''"
            />
            
            <!-- Error Tooltip -->
            <div
              v-if="errorMessage"
              class="absolute top-full left-0 mt-2 z-50"
              style="width: 100%; max-width: 360px;"
            >
              <div
                class="bg-white rounded-lg shadow-lg p-3 relative"
                style="
                  box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06);
                "
              >
                <!-- Arrow pointing up -->
                <div
                  class="absolute -top-2 left-6 w-4 h-4 bg-white transform rotate-45"
                  style="border-left: 1px solid #e5e7eb; border-top: 1px solid #e5e7eb;"
                ></div>
                
                <!-- Error Content -->
                <div class="flex items-center gap-2 relative z-10">
                  <!-- Orange Exclamation Icon -->
                  <svg
                    class="w-5 h-5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style="color: #f97316;"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                  
                  <!-- Error Text -->
                  <span
                    style="
                      font-family: 'Geist', sans-serif;
                      font-weight: 400;
                      font-size: 14px;
                      line-height: 20px;
                      color: #111827;
                    "
                  >
                    {{ errorMessage }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Run Tests Button -->
        <div class="w-full">
          <button
            type="submit"
            :disabled="isLoading || !websiteUrl"
            class="transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden w-full"
            style="
              height: 43px;
              border-radius: 6px;
              background: #182230;
              border: none;
              font-family: 'Geist', sans-serif;
              font-weight: 600;
              font-style: SemiBold;
              font-size: 16px;
              line-height: 24px;
              letter-spacing: 0%;
              color: #FFFFFF;
              box-sizing: border-box;
              position: relative;
            "
            :class="
              isLoading || !websiteUrl
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:opacity-90'
            "
          >
            <!-- Gradient Overlay -->
            <span
              class="absolute inset-0 rounded-lg pointer-events-none"
              style="
                background: linear-gradient(177.61deg, rgba(255, 255, 255, 0) 2%, rgba(255, 255, 255, 0.12) 98.17%);
              "
            ></span>
            <span class="relative z-10">
              <span v-if="isLoading">Running Tests...</span>
              <span v-else>Run Tests</span>
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// Page metadata
useHead({
  title: 'Test Your Website Speed - Varnish',
  meta: [
    {
      name: 'description',
      content: 'Test your website speed and performance with Varnish',
    },
  ],
})

// State
const websiteUrl = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

// Clear error when user types
const clearError = () => {
  if (errorMessage.value) {
    errorMessage.value = ''
  }
}

// Validate URL format
const validateUrl = () => {
  if (!websiteUrl.value.trim()) {
    errorMessage.value = 'Please enter a URL.'
    return false
  }

  // Check if it's a valid URL format
  const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
  const urlWithProtocol = websiteUrl.value.startsWith('http')
    ? websiteUrl.value
    : `https://${websiteUrl.value}`

  try {
    new URL(urlWithProtocol)
    // Additional check for domain format
    if (!urlPattern.test(websiteUrl.value)) {
      errorMessage.value = 'Please enter a valid URL.'
      return false
    }
    errorMessage.value = ''
    return true
  } catch {
    errorMessage.value = 'Please enter a valid URL.'
    return false
  }
}

// Form submission
const handleSubmit = async () => {
  // Validate URL
  if (!validateUrl()) {
    return
  }

  errorMessage.value = ''
  isLoading.value = true

  // Format URL (add https if missing)
  const formattedUrl = websiteUrl.value.startsWith('http')
    ? websiteUrl.value
    : `https://${websiteUrl.value}`

  // Navigate to loading page with URL as query param
  navigateTo({
    path: '/speed-test/loading',
    query: { url: encodeURIComponent(formattedUrl) },
  })
}

</script>

