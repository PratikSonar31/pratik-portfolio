<template>
  <section id="hero" class="relative h-screen flex flex-col items-center justify-center text-center text-white bg-gradient-to-b from-black via-gray-900 to-black">
    <MotionDiv
      v-motion="{
        initial: { opacity: 0, y: -80 },
        enter: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
      }"
    >
      <h1 class="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-lg">
        Hi, I'm Pratik Sonar
      </h1>
    </MotionDiv>

    <MotionDiv
      v-motion="{
        initial: { opacity: 0, y: 80 },
        enter: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.8, ease: 'easeOut' } }
      }"
      class="mt-5 max-w-xl mx-auto text-gray-300"
    >
      <p>Robotics Engineer • IoT Developer • CAD & Simulation Specialist</p>
    </MotionDiv>

    <MotionDiv
      v-motion="{
        initial: { opacity: 0, scale: 0.8 },
        enter: { opacity: 1, scale: 1, transition: { delay: 0.7, duration: 0.7 } }
      }"
      class="mt-8"
    >
      <a
        href="#projects"
        class="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg hover:scale-105 transition-transform"
      >
        View My Work
      </a>
    </MotionDiv>
  </section>
</template>
