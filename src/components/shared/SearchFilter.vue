<script setup>
import SearchHelper from '@/components/shared/SearchHelper.vue'
import { ref } from 'vue'

const buttons = ref([
  'Productos Nuevos',
  'Promociones',
  'Soldadura',
  'Plomería y Grifería',
  'Pintura',
  'Herramientas',
  'Cerrajería',
  'Accesorios y Refacciones'
])
</script>

<template>
  <div>
    <div class="col-8">
      <SearchHelper aditionalInputClass="py-4" :colValue="12" />
    </div>
    <!-- <div class="card">
      <div class="d-flex px-3 py-4 justify-content-between overflow-auto">
        <div v-for="(buttonLabel, index) in buttons" :key="buttonLabel + index">
          <button class="btn btn-card-filter py-2 px-3 mx-2" v-text="buttonLabel"></button>
        </div>
        <div>
          <button
            class="btn btn-card-filter py-2 px-3 mx-2 dropdown dropdown-toggle"
            data-bs-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span>10 más</span>
            <div class="dropdown-menu">
              <a class="dropdown-item btn-card-filter" href="#">Action</a>
              <a class="dropdown-item btn-card-filter" href="#">Another action</a>
              <a class="dropdown-item btn-card-filter" href="#">Something else here</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item btn-card-filter" href="#">Separated link</a>
            </div>
          </button>
        </div>
      </div>
    </div> -->
  </div>
</template>
