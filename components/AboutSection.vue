<template>
  <section
    id="about"
    class="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-6 py-20"
  >
    <!-- Glowing Background -->
    <div class="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-[120px]"></div>
    <div class="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-[120px]"></div>

    <!-- Heading -->
    <h2
      class="text-4xl md:text-5xl font-extrabold text-green-400 text-center mb-6 animate-fade-in"
    >
      About Me
    </h2>
    <p
      class="text-gray-300 text-lg max-w-3xl text-center leading-relaxed animate-slide-up"
    >
      I'm <span class="text-green-400 font-semibold">Pratik Sonar</span>, a passionate engineer specializing in
      <span class="text-green-300">Robotics</span>,
      <span class="text-green-300">Automation</span>,
      <span class="text-green-300">IoT</span>,
      <span class="text-green-300">CFD</span>, and
      <span class="text-green-300">3D Manufacturing</span>.  
      I love solving real-world problems by creating innovative solutions and pushing the limits of technology.
    </p>

    <!-- Glassmorphism Skills Cards -->
    <div
      class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full animate-fade-in"
    >
      <!-- Card 1 -->
      <div
        class="glass-card p-6 rounded-xl shadow-lg hover:scale-105 transition transform text-center"
      >
        <h3 class="text-2xl font-bold text-green-400">🤖 Robotics</h3>
        <p class="text-gray-300 mt-3">
          Experienced in robotic arm control, motion planning, and computer vision integration.
        </p>
      </div>

      <!-- Card 2 -->
      <div
        class="glass-card p-6 rounded-xl shadow-lg hover:scale-105 transition transform text-center"
      >
        <h3 class="text-2xl font-bold text-green-400">⚡ Automation</h3>
        <p class="text-gray-300 mt-3">
          Built IoT-based automation systems using Raspberry Pi, sensors, and real-time data control.
        </p>
      </div>

      <!-- Card 3 -->
      <div
        class="glass-card p-6 rounded-xl shadow-lg hover:scale-105 transition transform text-center"
      >
        <h3 class="text-2xl font-bold text-green-400">🧠 CFD & Simulations</h3>
        <p class="text-gray-300 mt-3">
          Proficient in Computational Fluid Dynamics, thermal analysis, and performance simulations.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Glassmorphism Card Style */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

/* Animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1.2s ease-in-out;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-slide-up {
  animation: slide-up 1.5s ease-in-out;
}
</style>
