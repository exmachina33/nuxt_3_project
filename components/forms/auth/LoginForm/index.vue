<script lang="ts">
interface LoginError {
  type: string,
  message: string
}
</script>

<script setup lang="ts">
import {useLoginStore} from "~/store/auth/login";
import {storeToRefs} from "pinia";
import {useUserStore} from "~/store/user";

const router = useRouter();
const loginStore = useLoginStore();
const userStore = useUserStore();

const { username, password } = storeToRefs(loginStore);
const showPass = ref(false);
const error = ref<LoginError | null>(null);

async function login() {
  error.value = null;
  try {
    await userStore.login({
      username: username.value,
      password: password.value
    })
    await router.push('/');
  } catch (e) {
    error.value = e as LoginError;
  }
}
</script>

<template>
  <div class="login-form w-full text-zinc-500">
    <h1 class="login-form__header font-bold text-zinc-950 mb-6">Login to your Account</h1>

    <div class="login-form__content px-3">
      <div class="login-form__content__title flex items-center mb-6">
        <hr class="border border-zinc-500 w-full"/>
        <span class="w-full text-center">with email</span>
        <hr class="border border-zinc-500 w-full"/>
      </div>

      <div class="mb-6">
        <commons-app-input v-model="username" placeholder="Username" class="mb-2.5">
          <template v-slot:prepend>
            <svgo-person class="icon" />
          </template>
        </commons-app-input>
        <commons-app-input v-model="password" :type="showPass ? 'text' : 'password'" placeholder="Password">
          <template v-slot:prepend>
            <svgo-shield-slash class="icon" />
          </template>

          <template v-slot:append>
            <svgo-visibility v-show="showPass" class="icon cursor-pointer" @click="showPass = !showPass" />
            <svgo-visibility-off v-show="!showPass" class="icon cursor-pointer" @click="showPass = !showPass" />
          </template>
        </commons-app-input>
      </div>

      <span v-if="error" v-text="error.message" class="block text-center w-full mb-6 text-red-500" />

      <commons-app-btn label="log in" full-width :disable="!loginStore.formIsCompleted" class="text-2xl font-bold" @click="login" />

      <span class="block text-center mt-5">Don’t have account? <a class="cursor-pointer font-bold" @click="router.push('signup')">Create an account</a></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-form {
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