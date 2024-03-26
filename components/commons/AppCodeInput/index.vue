<script lang="ts">
interface Cells {
  [key: number]: string;
}
</script>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 6
  }
});

const model = defineModel();

const cellField = ref<Array<HTMLInputElement | null>>([]);

const cells = computed(() => {
  const value = props.modelValue.toString();
  const cellsData: Cells = {};
  for (let i = 1; i <= 6; i++)  {
    cellsData[i] = value[i - 1] || '';
  }
  return cellsData;
});

function inputHandler(event: InputEvent, key: number, index: number) {
  const value = event.data || '';
  cells.value[key] = value;
  const newModelValue = Object.values(cells.value).join('');
  model.value = newModelValue;
  if (value && index < props.size - 1) {
    const nextCellField = cellField.value[index + 1];
    nextCellField?.focus();
  }
}
function keydownHandler(event: KeyboardEvent, key: number, index: number) {
  if (event.key !== 'Backspace') return;
  if (cells.value[key] || !index) return;
  const prevCellField = cellField.value[index - 1];
  prevCellField?.focus();
  cells.value[key - 1] = '';
}
</script>

<template>
  <div class="app-code-input flex gap-5">
    <div v-for="(cell, key, index) in cells" :key="key" class="app-code-input__cell border-2 h-16 w-16 min-w-16 text-lg">
      <input
          :value="cells[key]"
          ref="cellField"
          :maxlength="1"
          placeholder="-"
          class="app-code-input__cell__field h-full w-full outline-0 text-center text-3xl"
          @input="(e) => inputHandler(e, key, index)"
          @keydown="(e) => keydownHandler(e, key, index)"
      />
    </div>
  </div>
</template>

<style lang="scss">
</style>
<style scoped lang="scss">
.app-code-input {
  &__cell {
    border-color: rgba(128, 152, 249, 0.5);
    border-radius: 10px;
    overflow: hidden;
    &__field {
      background-color: rgba(128, 152, 249, 0.1);
    }
  }
}
</style>