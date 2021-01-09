<template>
  <div
    class="fixed inset-0 overflow-hidden slide-over"
    :class="{ 'pointer-events-none': !showSidePanel }"
  >
    <div class="absolute inset-0 overflow-hidden">
      <!-- Background overlay -->
      <transition
        enter-active-class="duration-500 ease-in-out"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-500 ease-in-out"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-show="showSidePanel"
          class="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          aria-hidden="true"
          @click="$emit('close-panel')"
        ></div>
      </transition>
      <section
        class="absolute inset-y-0 right-0 flex max-w-full pl-10"
        aria-labelledby="slide-over-heading"
      >
        <!-- Slide-over panel -->
        <transition
          enter-active-class="transition duration-500 ease-in-out transform sm:duration-700"
          enter-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition duration-500 ease-in-out transform sm:duration-700"
          leave-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div v-show="showSidePanel" class="relative w-screen max-w-md">
            <!-- Close button -->
            <transition
              enter-active-class="duration-500 ease-in-out"
              enter-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="duration-500 ease-in-out"
              leave-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <div
                v-show="showSidePanel"
                class="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4"
                @click="$emit('close-panel')"
              >
                <button
                  class="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span class="sr-only">Close panel</span>
                  <svg
                    class="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </transition>
            <div
              class="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl"
            >
              <div class="px-4 sm:px-6">
                <h2
                  id="slide-over-heading"
                  class="text-lg font-medium text-gray-900"
                >
                  Panel title
                </h2>
              </div>
              <div class="relative flex-1 px-4 mt-6 sm:px-6">
                <!-- Slide panel content -->
                <div class="absolute inset-0 px-4 sm:px-6">
                  <div
                    class="h-full border-2 border-gray-200 border-dashed"
                    aria-hidden="true"
                  >
                    Hello
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SlideOver',
  props: {
    showSidePanel: {
      type: Boolean,
      required: true,
    },
  },
}
</script>
