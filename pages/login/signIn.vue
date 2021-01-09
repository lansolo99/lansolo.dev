<template>
  <div class="container w-4/12 mx-auto space-y-5">
    <p>
      Not a member?
      <nuxt-link class="text-blue-500" to="/login/signup"
        >Sign up now</nuxt-link
      >
    </p>
    <TheLoginForm />
  </div>
</template>

<script>
export default {
  name: 'Signin',
  middleware: 'auth',
}
</script>
