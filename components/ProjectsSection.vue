<template>
  <section id="projects" class="relative py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-purple-500">
        Projects
      </h2>
      <p class="text-gray-400 mt-3 text-lg">Robotics, IoT, and CAD simulations</p>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
      <MotionDiv
        v-for="(project, index) in projects"
        :key="index"
        v-motion="{
          initial: { opacity: 0, y: 60 },
          enter: { opacity: 1, y: 0, transition: { delay: index * 0.2 } }
        }"
        class="group relative bg-white/5 backdrop-blur-lg border border-gray-700 rounded-xl p-6 shadow-lg hover:scale-[1.05] transition-all"
      >
        <h3 class="text-2xl font-semibold text-green-400">{{ project.title }}</h3>
        <p class="text-sm text-purple-400">{{ project.category }}</p>
        <ul class="list-disc list-inside text-gray-300 mt-3 space-y-1">
          <li v-for="(detail, i) in project.details" :key="i">{{ detail }}</li>
        </ul>
      </MotionDiv>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "IoT-Based 5-Axis Industrial Robot",
    category: "Robotics & IoT",
    details: [
      "Designed and 3D printed a 5-axis robotic arm.",
      "Controlled via custom Android app and IoT automation."
    ]
  },
  {
    title: "Humanoid Robot",
    category: "Robotics Workshop",
    details: [
      "Built Arduino-based biped robot.",
      "Hands-on learning of gait and control systems."
    ]
  },
  {
    title: "Automation of 3D Printer",
    category: "IoT Project",
    details: [
      "Configured Raspberry Pi & OctoPrint for wireless monitoring.",
      "Improved 3D printing efficiency and automation."
    ]
  }
];
</script>
