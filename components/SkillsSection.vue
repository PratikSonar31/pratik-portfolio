<template>
  <section id="skills" class="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500">
        Skills & Tools
      </h2>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto px-6">
      <MotionDiv
        v-for="(skill, index) in skills"
        :key="index"
        v-motion="{
          initial: { opacity: 0, scale: 0.8 },
          enter: { opacity: 1, scale: 1, transition: { delay: index * 0.1 } }
        }"
        class="bg-white/5 backdrop-blur-lg border border-gray-700 p-4 rounded-lg shadow-md hover:scale-105 transition-transform text-center"
      >
        {{ skill }}
      </MotionDiv>
    </div>
  </section>
</template>

<script setup>
const skills = [
  "Python", "OpenCV", "SolidWorks", "Raspberry Pi", "IoT", 
  "3D Printing", "ABB RobotStudio", "CAD", "CFD Analysis", "Arduino"
];
</script>
