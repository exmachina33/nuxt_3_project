<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  resolve: {
    type: Function,
    default: () => {}
  },
  reject: {
    type: Function,
    default: () => {}
  }
});

const confirmEl = ref<HTMLElement | null>(null)

function destroy() {
  if (confirmEl.value) confirmEl.value.remove();
}
function next() {
  props.resolve(true);
  destroy();
}
function cancel() {
  props.reject(false);
  destroy();
}
</script>

<template>
 <div ref="confirmEl" class="app-confirm-wrap absolute top-0 left-0 h-full w-full flex justify-center">
   <div class="p-10 bg-white flex flex-col items-center h-min mt-10 rounded-lg">
     <span v-text="text" />
     <div class="flex mt-5 gap-2.5">
       <commons-app-btn label="ok" class="btn text-sm px-5" @click="next" />
       <commons-app-btn label="cancel" class="btn text-sm text-2xl px-5" @click="cancel" />
     </div>
   </div>
 </div>
</template>

<style lang="scss" scoped>
.app-confirm-wrap {
  background: rgba(69, 69, 69, 0.5);
  .btn {
    height: 40px;
  }
}
</style>