<script setup="" lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
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
  <label :for="id" class="block">
    <div class="app-input border-2 h-16 w-full text-lg px-2.5 flex items-center justify-center">
      <div v-if="$slots.prepend" class="app-input__prepend pr-2.5">
        <slot name="prepend" />
      </div>
      <input
          v-model="model"
          :type="type"
          :placeholder="placeholder"
          class="app-input__field bg-transparent border-none outline-none w-full h-full"
      >
      <div v-if="$slots.append" class="app-input__append pl-2.5">
        <slot name="append" />
      </div>
    </div>
  </label>
</template>

<style lang="scss" scoped>
.app-input {
  background-color: rgba(128, 152, 249, 0.1);
  border-color: rgba(128, 152, 249, 0.5);
  border-radius: 10px;

  &__field {
    &::placeholder {
      color: rgba(45, 49, 166, 0.2);
    }
  }
}
</style>