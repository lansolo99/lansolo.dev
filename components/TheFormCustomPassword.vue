<template>
  <div
    class="flex items-center"
    :class="context.classes.element"
    :data-type="context.type"
  >
    <input
      v-model="context.model"
      :type="isPasswordHidden ? 'password' : 'text'"
      v-bind="attributes"
      @blur="context.blurHandler"
      v-on="$listeners"
    />

    <div
      class="w-20 p-2 ml-2 text-center text-white bg-gray-500 rounded cursor-pointer select-none"
      @click="isPasswordHidden = !isPasswordHidden"
    >
      {{ isPasswordHidden ? 'Show' : 'Hide' }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFormCustomPassword',
  props: {
    context: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isPasswordHidden: true,
    }
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
