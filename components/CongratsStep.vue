<template>
  <div class="w-full max-w-sm mx-auto flex flex-col items-center">
    <!-- Checkmark Icon -->
    <div
      class="w-20 h-20 rounded-full flex items-center justify-center mb-6"
      style="background: #000000;"
    >
      <svg
        class="w-12 h-12 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>

    <!-- Heading -->
    <h1
      class="text-center mb-4 relative z-10 mt-0"
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
      Congrats!
    </h1>

    <!-- Message Text -->
    <p
      class="text-center mb-8 relative z-10"
      style="
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0%;
        text-align: center;
        color: #101828;
      "
    >
      Lorem Ipsum is simply dummy text of the printing and typese. Lorem Ipsum is simply dummy text of the printing and typese.
    </p>

    <!-- Proceed Button -->
    <Button
      type="button"
      @click="handleProceed"
      class="w-full h-11 transition-all duration-200 relative z-10"
      style="
        background: #182230;
        color: #ffffff;
        border-radius: 6px;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 16px;
      "
    >
      Continue to Dashboard
    </Button>
  </div>
</template>

<script setup>
import Button from "@/components/ui/Button.vue";

const emit = defineEmits(["proceed"]);

const handleProceed = () => {
  emit("proceed");
};
</script>

