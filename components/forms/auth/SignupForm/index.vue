<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useSignupStore} from "~/store/auth/signup";
import {CommonsAppConfirm} from "#components";
import { createApp } from 'vue';

const router = useRouter();
const signupStore = useSignupStore();

const { username, email, password, confirmPassword, accept } = storeToRefs(signupStore);
const showPass = ref(false);
const showConfirmPass = ref(false);

async function goToLogin() {
  if (signupStore.formIsEmpty) {
    await router.push('login');
    return;
  }
  let promiseResolve = null;
  let promiseReject= null;

  const promise = new Promise((resolve, reject) => {
    promiseResolve = resolve;
    promiseReject = reject;
  });

  const app = createApp(CommonsAppConfirm, {
    text: 'During the transition, the filled data may be lost',
    resolve: promiseResolve,
    reject: promiseReject
  })

  const container = document.createElement('div');

  document.body.appendChild(container);

  app.mount(container);

  const result = await promise;

  container.remove();

  if (!result) return;

  signupStore.clear();
  await router.push('login');
}

</script>

<template>
  <div class="signup-form w-full text-zinc-500">
    <h1 class="signup-form__header font-bold text-zinc-950">Create your account</h1>
    <span class="block mb-6 text-xl">Unlock all Features!</span>
    <div class="signup-form__content px-3">
      <div class="mb-6">
        <commons-app-input v-model="username" placeholder="Username" class="mb-2.5">
          <template v-slot:prepend>
            <svgo-person class="icon" />
          </template>
        </commons-app-input>

        <commons-app-input v-model="email" placeholder="Email" class="mb-2.5">
          <template v-slot:prepend>
            <svgo-envelope class="icon" />
          </template>
        </commons-app-input>

        <commons-app-input v-model="password" :type="showPass ? 'text' : 'password'" placeholder="Password" class="mb-2.5">
          <template v-slot:prepend>
            <svgo-shield-slash class="icon" />
          </template>

          <template v-slot:append>
            <svgo-visibility v-show="showPass" class="icon cursor-pointer" @click="showPass = !showPass" />
            <svgo-visibility-off v-show="!showPass" class="icon cursor-pointer" @click="showPass = !showPass" />
          </template>
        </commons-app-input>

        <commons-app-input v-model="confirmPassword" :type="showConfirmPass ? 'text' : 'password'" placeholder="Confirm Password">
          <template v-slot:prepend>
            <svgo-shield-slash class="icon" />
          </template>

          <template v-slot:append>
            <svgo-visibility v-show="showConfirmPass" class="icon cursor-pointer" @click="showConfirmPass = !showConfirmPass" />
            <svgo-visibility-off v-show="!showConfirmPass" class="icon cursor-pointer" @click="showConfirmPass = !showConfirmPass" />
          </template>
        </commons-app-input>

        <div class="mt-2.5 flex items-center gap-2.5">
          <commons-app-checkbox v-model="accept" />
          <span class="block">Accept <a class="cursor-pointer">terms and conditions</a></span>
        </div>
      </div>

      <commons-app-btn label="sign up" full-width :disable="!signupStore.formIsCompleted" class="text-2xl font-bold" @click="router.push('otp')" />

      <span class="block text-center mt-5">You have account? <a class="cursor-pointer font-bold" @click="goToLogin">Login now</a></span>
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