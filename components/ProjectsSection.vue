<template>
  <section id="projects" class="relative py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 drop-shadow-lg">
        Projects
      </h2>
      <p class="text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
        A showcase of my work in robotics, IoT, simulation, and automation.
      </p>
    </div>

    <!-- Project Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="group relative bg-white/5 backdrop-blur-lg border border-gray-700 rounded-xl p-6 shadow-lg transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]"
      >
        <!-- Card Title -->
        <h3 class="text-2xl font-semibold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300">
          {{ project.title }}
        </h3>

        <!-- Category -->
        <p class="text-sm text-purple-400 font-medium mb-3">{{ project.category }}</p>

        <!-- Description -->
        <ul class="list-disc list-inside text-gray-300 text-sm space-y-1">
          <li v-for="(detail, i) in project.details" :key="i">{{ detail }}</li>
        </ul>

        <!-- Hover Glow Effect -->
        <div class="absolute inset-0 rounded-xl border border-green-400 opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: "IoT-Based 5-Axis Industrial Robot",
    category: "Robotics & Automation",
    details: [
      "Designed and 3D printed a 5-axis robotic arm controlled via a custom Android app.",
      "Automated repetitive tasks using IoT integration, improving operational safety."
    ]
  },
  {
    title: "Walking Humanoid Robot",
    category: "Robotics Workshop",
    details: [
      "Built an Arduino-based biped robot with basic walking motions.",
      "Hands-on experience in motion control, mechanical design, and rapid prototyping."
    ]
  },
  {
    title: "Automation of 3D Printer",
    category: "IoT Project",
    details: [
      "Configured Raspberry Pi & OctoPrint for wireless control of 3D prints.",
      "Improved printing efficiency and enabled real-time monitoring."
    ]
  },
  {
    title: "Simulation of Work Envelope",
    category: "Design & Simulation",
    details: [
      "Simulated SCARA robot paths and workspace coverage using ABB RobotStudio.",
      "Validated design constraints and optimized robotic movements."
    ]
  },
  {
    title: "Image Processing for Robot Vision",
    category: "Programming Project",
    details: [
      "Implemented object detection & tracking using Python and OpenCV.",
      "Enhanced robotic perception in dynamic environments."
    ]
  },
  {
    title: "Centrifugal Pump CFD Analysis",
    category: "CAD & Simulation",
    details: [
      "Modeled and simulated a centrifugal pump in SolidWorks.",
      "Improved efficiency by optimizing fluid flow and pressure losses."
    ]
  },
  {
    title: "Waste Segregation with OpenCV",
    category: "Computer Vision",
    details: [
      "Developed waste classification & segregation system using Python + OpenCV.",
      "Enabled automation of eco-friendly waste sorting with robotic arm."
    ]
  }
];
</script>
