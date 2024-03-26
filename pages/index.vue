<script setup lang="ts">
  import {useUserStore} from "~/store/user";

  const userStore = useUserStore();
</script>

<template>
  <div>
    <h1 v-text="`Hello ${userStore.user?.username}`" />
  </div>
</template>

<style scoped>

</style>