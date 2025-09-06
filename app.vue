<template>
  <div class="bg-black text-white">
    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section -->
    <AboutSection />

    <!-- Work Experience Section -->
    <WorkExperienceSection />

    <!-- Projects Section -->    
    <ProjectsSection />

    <!-- Skills Section -->
    <SkillsSection />

    <!-- Footer -->
    <footer class="text-center py-6 text-gray-400 border-t border-gray-700">
      <p>
        © 2025 <span class="text-green-400 font-semibold">Pratik Sonar</span> —
        Built with <span class="text-green-400">Nuxt</span> +
        <span class="text-purple-400">TailwindCSS</span>
      </p>
    </footer>
  </div>
</template>

<script setup>
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import WorkExperienceSection from "./components/WorkExperienceSection.vue";
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from "./components/SkillsSection.vue";
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
