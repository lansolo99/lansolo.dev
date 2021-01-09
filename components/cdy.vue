<template>
  <cld-image
    alt="avatar"
    :public-id="imageSrc"
    :client-hints="true"
    sizes="100vw"
    type="fetch"
    loading="lazy"
    fetch-format="auto"
    quality="auto"
    responsive
    width="auto"
    crop="scale"
    dpr="auto"
    class="relative z-10"
  >
    <cld-placeholder type="blur" />
  </cld-image>
</template>

<script>
export default {
  name: 'CdyAvatar',
  props: {
    imageSrc: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
