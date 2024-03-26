<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useSignupStore} from "~/store/auth/signup";

const router = useRouter();
const signupStore = useSignupStore();

const { email } = storeToRefs(signupStore);
const code = ref('');

function changeEmail() {
  const savedEmail = email.value;
  signupStore.clear();
  email.value = savedEmail;
  router.push('signup')
}

</script>

<template>
  <div class="signup-form w-full text-zinc-500">
    <h1 class="signup-form__header font-bold text-zinc-950">Enter OTP</h1>
    <span class="block text-xl">Sent OTP on <a class="font-semibold" v-text="email" /></span>
    <a class="block font-bold cursor-pointer mb-6" @click="changeEmail">Change email</a>
    <div class="signup-form__content">
      <div class="mb-6">
        <commons-app-code-input v-model="code" />
      </div>

      <div class="px-3">
        <commons-app-btn label="submit" full-width :disable="!signupStore.formIsCompleted" class="text-2xl font-bold" @click="router.push('login')" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.signup-form {
  max-width: 477px;
  &__header {
    font-size: 40px;
  }
  &__content {
    &__title {
      hr {
        min-width: 120px;
      }
    }
  }
  .icon {
    width: 30px;
    height: 30px;
    color: rgba(45, 49, 166, 0.2);
  }
}
</style>