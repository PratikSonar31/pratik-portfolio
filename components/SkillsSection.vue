<template>
  <section id="skills" class="py-20 bg-black text-center">
    <MotionDiv
      v-motion="{ initial: { opacity: 0, y: 40 }, enter: { opacity: 1, y: 0 } }"
      class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-500"
    >
      Skills & Tools
    </MotionDiv>
    <p class="text-gray-400 mt-4 text-lg">Technologies I work with</p>

    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-10">
      <MotionDiv
        v-for="skill in skills"
        :key="skill"
        v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0 } }"
        class="p-5 rounded-xl bg-white/5 backdrop-blur-lg shadow-lg border border-gray-700 hover:scale-110 hover:shadow-green-500/20 transition-transform duration-300"
      >
        <span class="text-lg text-white">{{ skill }}</span>
      </MotionDiv>
    </div>
  </section>
</template>

<script setup>
const skills = [
  'Python', 'C++', 'Java', 'JavaScript', 'SQL', 'OpenCV', 'IoT / Raspberry Pi',
  'SolidWorks', 'CFD', 'ABB RobotStudio', 'AutoCAD', 'Tailwind CSS'
];
</script>
