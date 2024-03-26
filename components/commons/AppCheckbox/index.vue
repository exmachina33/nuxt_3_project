<script setup="" lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false
  },
  placeholder: {
    type: String,
    required: false
  }
});

const model = defineModel();

const id = ref(generateUniqueId());
function generateUniqueId() {
  return 'input-' + Date.now() + '-' + Math.floor(Math.random() * 1000).toString(36);
}
</script>

<template>
  <div class="app-checkbox-wrap cursor-pointer">
    <div class="app-checkbox h-5 w-5 border-2" @click="model = !model">
      <svgo-check v-show="model" />
    </div>
    <input v-model="model" type="checkbox" class="app-checkbox-field w-0 h-0" />
  </div>
</template>

<style lang="scss" scoped>
.app-checkbox {
  border-radius: 3px;
  border-color: rgba(128, 152, 249, 1);
  color: rgba(128, 152, 249, 1);
}
.app-checkbox-field {
  display: none;
}
</style>