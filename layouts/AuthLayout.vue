<script setup lang="ts">

</script>

<template>
  <div class="auth-layout min-h-screen flex justify-center bg-slate-100">
    <div class="auth-layout__content w-full">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth-layout {
  &__content {
    max-width: 1440px;
  }
}
</style>