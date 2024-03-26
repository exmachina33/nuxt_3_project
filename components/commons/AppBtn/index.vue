<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  disable: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <button
      :disabled="disable"
      :class="['app-btn', 'px-9', 'h-16', 'flex', 'items-center', 'justify-center', { 'w-full' : fullWidth }, { 'app-btn--disable' : disable }]">
    <div class="text-white uppercase">
      <slot>
        <span v-text="label" />
      </slot>
    </div>
  </button>
</template>

<style lang="scss" scoped>
.app-btn {
  background-color: rgba(128, 152, 249, 1);
  border-radius: 10px;
  cursor: pointer;
  &--disable {
    background-color: rgb(156 174 245)
  }
}
</style>