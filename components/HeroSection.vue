<template>
  <section
    class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white text-center px-6"
  >
    <!-- Heading -->
    <h1
      class="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500 animate-pulse"
    >
      Hi, I'm Pratik Sonar
    </h1>
    <p class="mt-4 text-gray-300 text-lg">
      Robotics • Automation • IoT • CFD • 3D Manufacturing
    </p>

    <!-- Buttons -->
    <div class="flex gap-4 mt-6">
      <a
        href="https://github.com/"
        target="_blank"
        class="px-6 py-3 rounded-lg bg-gray-800 text-white font-semibold shadow-lg transform hover:scale-110 transition-all duration-300"
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com/"
        target="_blank"
        class="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-lg transform hover:scale-110 transition-all duration-300"
      >
        LinkedIn
      </a>
      <!-- Smart Download Button -->
      <button
        @click="downloadCV"
        class="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg transform hover:scale-110 hover:shadow-purple-500/50 transition-all duration-300"
      >
        Download CV
      </button>
    </div>

    <!-- Alert Message -->
    <p v-if="errorMessage" class="mt-4 text-red-400 font-medium animate-pulse">
      {{ errorMessage }}
    </p>
  </section>
</template>

<script setup>
import { ref } from "vue";

const errorMessage = ref("");

// Function to handle smart download
const downloadCV = async () => {
  try {
    const response = await fetch("/Pratik_CV.pdf");
    if (response.ok) {
      // If file exists, trigger download
      const link = document.createElement("a");
      link.href = "/Pratik_CV.pdf";
      link.download = "Pratik_CV.pdf";
      link.click();
      errorMessage.value = ""; // Reset message
    } else {
      // If file missing
      errorMessage.value = "⚠️ CV not found! Please upload Pratik_CV.pdf inside the public folder.";
    }
  } catch (error) {
    errorMessage.value = "❌ Something went wrong while fetching the CV.";
  }
};
</script>
