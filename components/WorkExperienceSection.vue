<template>
  <section id="experience" class="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white">
    <!-- Section Header -->
    <MotionDiv
      v-motion="{ initial: { opacity: 0, y: 40 }, enter: { opacity: 1, y: 0 } }"
      class="text-center mb-16"
    >
      <h2 class="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500">
        Work Experience
      </h2>
      <p class="text-gray-400 mt-3 text-lg">
        A journey of <span class="text-green-400">innovation</span>, 
        <span class="text-blue-400">automation</span>, 
        and <span class="text-purple-400">engineering</span>
      </p>
    </MotionDiv>

    <!-- Timeline -->
    <div class="relative max-w-4xl mx-auto border-l border-gray-700 pl-8 space-y-12">
      <MotionDiv
        v-for="(job, index) in experience"
        :key="index"
        v-motion="{
          initial: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
          enter: { opacity: 1, x: 0, transition: { delay: index * 0.2 } }
        }"
        class="relative bg-white/5 backdrop-blur-lg border border-gray-700 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition-all"
      >
        <!-- Timeline Dot -->
        <div class="absolute -left-5 top-6 w-4 h-4 rounded-full bg-green-400 shadow-md"></div>

        <!-- Header -->
        <div class="flex justify-between items-center flex-wrap gap-2">
          <h3 class="text-xl font-semibold">{{ job.role }}</h3>
          <span class="text-gray-400 text-sm">{{ job.period }}</span>
        </div>

        <!-- Company -->
        <p class="text-green-400 mt-1 font-medium">{{ job.company }}</p>

        <!-- Tasks -->
        <ul class="list-disc list-inside mt-3 text-gray-300 space-y-1">
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
    period: "Jul 2021 – Dec 2021",
    tasks: [
      "Enhanced SCARA robot vision using Python & OpenCV.",
      "Simulated SCARA motion paths and workspace in ABB RobotStudio to optimize efficiency.",
      "Automated 3D printer operations using Raspberry Pi & OctoPrint for remote monitoring."
    ]
  },
  {
    role: "Production Engineer Intern",
    company: "Udyog Engineering, Pune, India",
    period: "Feb 2023 – Jul 2023",
    tasks: [
      "Conducted CFD analysis of centrifugal water pumps using SolidWorks to improve efficiency.",
      "Designed optimized plant layouts minimizing material handling time.",
      "Performed cost analysis of Goliath Crane components and developed acid pump designs."
    ]
  },
  {
    role: "Quality Control & Production Intern",
    company: "Goodluck Technomech Pvt. Ltd",
    period: "Jul 2023 – Dec 2023",
    tasks: [
      "Interpreted technical drawings to support precision manufacturing and inspections.",
      "Utilized precision instruments for dimensional verification and quality control.",
      "Prepared PDIRs and conducted inspection checks ensuring compliance with engineering standards."
    ]
  }
];
</script>

<style scoped>
/* Remove weird glowing hover backgrounds */
*::before,
*::after {
  content: none !important;
  background: none !important;
  box-shadow: none !important;
}
</style>
