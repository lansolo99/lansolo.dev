<template>
  <div :class="context.classes.element" :data-type="context.type">
    <button
      :type="context.type === 'customSubmit' ? 'submit' : 'button'"
      v-bind="attributes"
      v-on="$listeners"
    >
      <slot>
        <span v-if="!attributes['is-sending']" class="mt-1">{{
          context.label
        }}</span>

        <div
          v-else
          class="relative mt-1 transform scale-50 loader-inner ball-pulse"
        >
          <div v-for="(div, i) in 3" :key="i" class="bg-white"></div>
        </div>
      </slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TheFormCustomButton',
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  computed: {
    type() {
      return this.context.type
    },
    attributes() {
      return this.context.attributes || {}
    },
    hasValue() {
      return this.context.hasValue
    },
  },
}
</script>
