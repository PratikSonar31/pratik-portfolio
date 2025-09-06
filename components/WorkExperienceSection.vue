<template>
  <section
    id="experience"
    class="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
  >
    <!-- Header -->
    <MotionDiv
      v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0 } }"
      class="text-center mb-14"
    >
      <h2
        class="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500"
      >
        Work Experience
      </h2>
      <p class="text-gray-400 mt-3 text-lg">
        A journey of
        <span class="text-green-400">innovation</span>,
        <span class="text-blue-400">automation</span>, and
        <span class="text-purple-400">engineering</span>
      </p>
    </MotionDiv>

    <!-- Timeline column (simple, clean) -->
    <div class="relative max-w-4xl mx-auto pl-8">
      <div class="absolute left-2 top-0 bottom-0 w-px bg-gray-700/60"></div>

      <div class="space-y-10">
        <MotionDiv
          v-for="(job, index) in experience"
          :key="`job-${index}`"
          v-motion="{
            initial: { opacity: 0, y: 40 },
            enter: { opacity: 1, y: 0, transition: { delay: index * 0.12 } }
          }"
          class="relative bg-white/5 border border-gray-700/70 rounded-xl p-6 backdrop-blur-sm shadow-lg hover:shadow-green-500/20 transition-transform duration-300 hover:scale-[1.01]"
        >
          <!-- timeline dot -->
          <span
            class="absolute -left-3 top-6 inline-block h-3 w-3 rounded-full bg-green-400 ring-2 ring-gray-800"
          ></span>

          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <h3 class="text-xl font-semibold leading-snug">
              {{ job.role }}
            </h3>
            <span class="text-gray-400 text-sm whitespace-nowrap">{{
              job.period
            }}</span>
          </div>

          <p class="text-green-400 text-lg mt-1 font-medium">
            {{ job.company }}
          </p>

          <ul class="mt-3 text-gray-300 list-disc list-inside space-y-1">
            <li v-for="(t, i) in job.tasks" :key="`t-${index}-${i}`">
              {{ t }}
            </li>
          </ul>
        </MotionDiv>
      </div>
    </div>
  </section>
</template>

<script setup>
const experience = [
  {
    role: 'Robotics Engineer — R&D Intern',
    company: 'iTech Robotics Automation Pvt. Ltd, Maharashtra, India',
    period: 'Jul 2021 – Dec 2021',
    tasks: [
      'Enhanced SCARA robot vision using Python & OpenCV.',
      'Simulated SCARA motion paths and workspace in ABB RobotStudio to optimize efficiency.',
      'Automated 3D printer operations using Raspberry Pi & OctoPrint for remote monitoring.'
    ]
  },
  {
    role: 'Production Engineer Intern',
    company: 'Udyog Engineering, Pune, India',
    period: 'Feb 2023 – Jul 2023',
    tasks: [
      'Conducted CFD analysis of centrifugal water pumps using SolidWorks to improve efficiency.',
      'Designed optimized plant layouts minimizing material handling time.',
      'Performed cost analysis of Goliath Crane components and developed acid pump designs.'
    ]
  },
  {
    role: 'Quality Control & Production Intern',
    company: 'Goodluck Technomech Pvt. Ltd',
    period: 'Jul 2023 – Dec 2023',
    tasks: [
      'Interpreted technical drawings to support precision manufacturing and inspections.',
      'Utilized precision instruments for dimensional verification and quality control.',
      'Prepared PDIRs and conducted inspection checks ensuring compliance with engineering standards.'
    ]
  }
]
</script>

<style scoped>
/* Make absolutely sure no leftover decorative “blocks” show up */
[class*='hover:before'],
[class*='hover:after'],
[class*='before:'],
[class*='after:'] {
  --tw-shadow: none !important;
}
</style>
