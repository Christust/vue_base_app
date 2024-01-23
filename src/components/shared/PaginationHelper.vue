<template>
  <div class="row d-flex align-items-center">
    <div class="col-6 text-end">
      <p>
        <span class="text-app me-3">Showing:</span>
        <span class="text-alternative-app">{{ activePage }} of {{ totalPages }}</span>
      </p>
    </div>
    <div class="col-6">
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-end align-items-center">
          <li class="page-item me-4 text-app">
            <a
              class="page-link text-app border-0"
              @click="prevPage"
              :disabled="activePage === 1"
              v-if="activePage !== 1"
            >
              <font-awesome-icon icon="fa-solid fa-chevron-left" size="xs" />
            </a>
          </li>
          <li class="page-item me-2" v-for="page in activePages" :key="page">
            <a
              class="page-link text-app"
              :class="{ pageActive: activePage === page, 'border-0': activePage !== page }"
              @click="goToPage(page)"
              >{{ page }}</a
            >
          </li>
          <li class="page-item ms-1 text-app">
            <a
              class="page-link text-app border-0"
              @click="nextPage"
              :disabled="activePage === totalPages"
              v-if="activePage !== totalPages"
            >
              <font-awesome-icon icon="fa-solid fa-chevron-right" size="xs" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs, computed } from 'vue'
const props = defineProps({
  totalRecords: { type: Number, required: true, default: 1 },
  limit: { type: Number, required: true, default: 1 }
})

const { totalRecords, limit } = toRefs(props)
const totalPages = computed(() => Math.ceil(totalRecords.value / limit.value))
const activePage = ref(1)

const emit = defineEmits(['changePage'])

const activePages = computed(() => {
  const start = Math.max(activePage.value - 2, 1)
  const end = Math.min(start + 4, totalPages.value)
  return Array.from({ length: end - start + 1 }, (_, index) => start + index)
})

const prevPage = () => {
  if (activePage.value > 1) {
    activePage.value--
  }
  emit('changePage', activePage.value)
}

const nextPage = () => {
  if (activePage.value < totalPages.value) {
    activePage.value++
  }
  emit('changePage', activePage.value)
}

const goToPage = (page) => {
  activePage.value = page
  emit('changePage', activePage.value)
}
</script>

<style lang="scss">
.pageActive {
  background-color: #8fc7ff !important;
  border: 1px solid #8fc7ff !important;
  border-radius: 6px !important;
  color: white !important;
  &:hover {
    background-color: #8fc7ff !important;
    border: 1px solid #8fc7ff !important;
    border-radius: 6px !important;
    color: white !important;
  }
}
.page-item {
  & a:hover {
    background-color: darken(#8fc7ff, 15%) !important;
    border: 1px solid darken(#8fc7ff, 15%) !important;
    border-radius: 6px !important;
    color: white !important;
  }
}
</style>
