<template>
  <section id="about" class="relative py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
    <MotionDiv
      v-motion="{
        initial: { opacity: 0, y: 50 },
        enter: { opacity: 1, y: 0, transition: { duration: 0.7 } }
      }"
      class="max-w-4xl mx-auto text-center"
    >
      <h2 class="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500">
        About Me
      </h2>
      <p class="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
        Passionate Robotics Engineer with a strong focus on IoT, automation, CAD, and simulation.
        Experienced in integrating hardware and software solutions for modern industrial workflows.
      </p>
    </MotionDiv>
  </section>
</template>
