<template>
  <div
    id="sidebar"
    class="px-6 py-6 space-y-8 sm:w-5/12 md:w-4/12 lg:w-3/12 2xl:w-2/12"
  >
    <HpIntro />

    <VFilters class="hidden sm:block" />
  </div>
</template>

<script>
export default {
  name: 'HpSidebar',
}
</script>
