<script setup lang="ts">
import AuthLayout from "~/layouts/AuthLayout.vue";
</script>

<template>
  <auth-layout>
    <div class="signup h-full flex">
      <div class="signup__left-side bg-white w-6/12 flex flex-col justify-center items-center">
        <forms-auth-signup-form />
      </div>

      <div class="signup__right-side w-6/12 p-14">
        <div class="signup__right-side__content h-full flex flex-col justify-end items-center text-indigo-100">
          <span class="text-xl font-bold">Join us!</span>
          <span class="text-base opacity-75">Just go through the boring process of creating an account.</span>
        </div>
      </div>
    </div>
  </auth-layout>
</template>

<style scoped lang="scss">
.signup {
  &__right-side {
    background-color: rgba(97, 114, 243, 1);
    &__content {
      background-image: url("@/assets/images/signup-page.svg");
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
}
</style>