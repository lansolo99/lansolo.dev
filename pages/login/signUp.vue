<template>
  <div class="container w-4/12 mx-auto space-y-5">
    <p>
      Already a member?
      <nuxt-link class="text-blue-500" to="/login/signin">Sign In</nuxt-link>
    </p>
    <TheLoginForm />
  </div>
</template>

<script>
export default {
  name: 'SignUp',
}
</script>
