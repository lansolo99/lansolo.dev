<template>
  <div ref="cursor" class="fixed w-24 h-24 pointer-events-none z-999 cursor">
    <transition name="scale">
      <div v-if="mount" class="relative w-full h-full">
        <img
          class="absolute top-0 left-0 w-full h-full transform animate-clock"
          src="/cursor-clock.svg"
          alt=""
        />

        <img
          class="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          style="width: 50%; height: 50%"
          src="/hand.svg"
          alt=""
        />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'VCursor',
  data() {
    return {
      mount: false,
      cursor: null,
    }
  },
  mounted() {
    this.cursor = this.$refs.cursor
    document.addEventListener('mousemove', this.setCursorPosition, false)
  },
  beforeDestroy() {
    document.removeEventListener('mousemove', this.setCursorPosition)
  },
  methods: {
    setCursorPosition(e) {
      console.log('setCursorPosition')

      this.cursor.setAttribute(
        'style',
        `top: ${e.clientY - 32}px; left: ${e.clientX - 32}px; `
      )

      this.mount = true
    },
  },
}
</script>

<style lang="postcss">
.cursor {
  top: 0;
  left: 0;
}

.animate-clock {
  animation: 5s linear infinite clock;
}

@keyframes clock {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}

.scale-enter-active,
.scale-leave-active {
  transition: all 0.15s cubic-bezier(0.43, 0.56, 0, 1.02);
}

.scale-enter,
.scale-leave-to {
  transform: scale(0);
}
</style>
