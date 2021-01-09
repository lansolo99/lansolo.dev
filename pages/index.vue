<template>
  <div id="index" class="flex flex-col sm:flex-row">
    <!-- Sidebar -->
    <div class="bg-purple-500 sm:w-4/12 md:w-3/12">sidebar</div>
    <!-- Grid -->
    <div
      id="grid"
      class="grid grid-cols-1 gap-1 sm:w-8/12 md:w-9/12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div class="bg-pink-600">item</div>
      <div class="bg-pink-600">item</div>
      <div class="bg-pink-600">item</div>
      <div class="bg-pink-600">item</div>
      <div class="bg-pink-600">item</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>
