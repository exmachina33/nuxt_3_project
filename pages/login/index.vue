<script setup lang="ts">

import AuthLayout from "~/layouts/AuthLayout.vue";
</script>

<template>
  <auth-layout>
    <div class="login h-full flex">
      <div class="login__left-side bg-white w-6/12 flex flex-col justify-center items-center">
        <forms-auth-login-form/>
      </div>

      <div class="login__right-side w-6/12 p-14">
        <div class="login__right-side__content h-full flex flex-col justify-end items-center text-indigo-100">
          <span class="text-xl font-bold">Connect with any device.</span>
          <span class="text-base opacity-75">Everything you need is an internet connection.</span>
        </div>
      </div>
    </div>
  </auth-layout>
</template>

<style scoped lang="scss">
.login {
  &__right-side {
    background-color: rgba(97, 114, 243, 1);
    &__content {
      background-image: url("@/assets/images/login-page.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;;
    }
  }
}
</style>