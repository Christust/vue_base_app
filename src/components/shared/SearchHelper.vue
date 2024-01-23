<script setup>
import { ref, computed, toRefs } from 'vue'

const props = defineProps({
  colValue: { type: Number, required: false, default: 1 },
  placeholder: { type: String, required: false, default: 'Search' },
  aditionalInputClass: { type: String, required: false, default: '' },
  aditionalContainerClass: { type: String, required: false, default: '' }
})
const emit = defineEmits(['search'])
const searchValue = ref('')
const { placeholder } = toRefs(props)
const stringClassByRules = computed(() => {
  return `col-${props.colValue || 12} ` + props.aditionalContainerClass
})
</script>

<template>
  <div class="d-flex my-4">
    <div :class="stringClassByRules" class="input-search">
      <div class="input-group-lg">
        <input
          :class="'input-search form-control border-end-0 border ' + aditionalInputClass"
          type="search"
          v-model="searchValue"
          @keyup.enter="emit('search', $event.target.value)"
          :placeholder="placeholder"
          id="example-search-input"
        />
        <button class="btn-search btn" type="button" @click="emit('search', searchValue)">
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </div>
    <slot name="extraElements"></slot>
  </div>
</template>
