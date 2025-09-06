<template>
  <section
    id="experience"
    class="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
  >
    <!-- Section Header -->
    <MotionDiv
      v-motion="{ initial: { opacity: 0, y: 50 }, enter: { opacity: 1, y: 0 } }"
      class="text-center mb-16"
    >
      <h2
        class="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 drop-shadow-lg"
      >
        Work Experience
      </h2>
      <p class="text-gray-400 mt-4 text-lg tracking-wide">
        A journey of <span class="text-green-400">innovation</span>, <span class="text-blue-400">automation</span>, and <span class="text-purple-400">engineering</span>
      </p>
    </MotionDiv>

    <!-- Timeline -->
    <div class="relative max-w-4xl mx-auto pl-8 space-y-12 border-l border-gray-700">
      <MotionDiv
        v-for="(job, index) in experience"
        :key="index"
        v-motion="{
          initial: { opacity: 0, y: 100 },
          enter: { opacity: 1, y: 0 }
        }"
        class="relative bg-white/5 backdrop-blur-xl border border-gray-700 rounded-xl p-6 shadow-md transition-transform duration-300 hover:scale-[1.02]"
      >
        <!-- Clean Glowing Dot -->
        <div
          class="absolute -left-6 top-6 w-4 h-4 rounded-full bg-green-400 shadow-lg"
          style="box-shadow: 0 0 12px rgba(34,197,94,0.8);"
        ></div>

        <!-- Job Header -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 class="text-2xl font-semibold text-white">{{ job.role }}</h3>
          <span class="text-gray-400 text-sm mt-2 sm:mt-0">{{ job.period }}</span>
        </div>

        <!-- Company -->
        <p class="text-green-400 text-lg mt-1 font-medium">
          {{ job.company }}
        </p>

        <!-- Task List -->
        <ul class="list-disc list-inside mt-3 text-gray-300 space-y-2">
          <li v-for="(task, i) in job.tasks" :key="i">{{ task }}</li>
        </ul>
      </MotionDiv>
    </div>
  </section>
</template>

<script setup>
const experience = [
  {
    role: "Robotics Engineer — R&D Intern",
    company: "iTech Robotics Automation Pvt. Ltd, Maharashtra, India",
    period: "July 2021 – Dec 2021",
    tasks: [
      "Enhanced SCARA robot vision using Python & OpenCV.",
      "Simulated SCARA motion paths and workspace in ABB RobotStudio to optimize efficiency.",
      "Automated 3D printer operations using Raspberry Pi & OctoPrint for remote monitoring."
    ]
  },
  {
    role: "Production Engineer Intern",
    company: "Udyog Engineering, Pune, India",
    period: "Feb 2023 – July 2023",
    tasks: [
      "Conducted CFD analysis of centrifugal water pumps using SolidWorks to improve flow efficiency.",
      "Designed optimized plant layouts, minimizing material handling time.",
      "Performed cost analysis of Goliath Crane components and developed acid pump designs."
    ]
  },
  {
    role: "Quality Control & Production Intern",
    company: "Goodluck Technomech Pvt. Ltd.",
    period: "July 2023 – Dec 2023",
    tasks: [
      "Interpreted technical drawings to support precision manufacturing and inspections.",
      "Utilized precision instruments for dimensional verification and quality control.",
      "Prepared PDIRs and conducted inspection checks ensuring compliance with engineering standards."
    ]
  }
];
</script>

<style scoped>
/* Clean CSS — Removed unnecessary selectors */
*::before,
*::after {
  content: none !important;
  background: none !important;
  box-shadow: none !important;
}
</style>
