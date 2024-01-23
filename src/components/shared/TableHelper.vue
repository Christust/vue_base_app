<script setup>
const props = defineProps({
  fields: { type: Array, required: true, default: () => [] },
  records: { type: Array, required: true, default: () => [] },
  pagination: { type: Boolean, required: false, default: false },
  rowClickActive: { type: Boolean, required: false, default: false },
  rowClickFunction: { type: Function, required: false, default: () => false }
})

function rowClickHandler(clickActive = true, id) {
  if (!props.rowClickActive || !clickActive) return
  props.rowClickFunction(id)
}
</script>

<template>
  <div>
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th v-for="field in fields" :key="field.key" :class="field?.thClass">
              {{ field.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="record in records" :key="record.id">
            <td
              v-for="field in fields"
              :key="field.key"
              :class="field?.tdClass"
              @click="rowClickHandler(field?.rowClickActive, record?.id)"
            >
              <slot :name="'cell(' + field.key + ')'" v-bind="record">{{ record[field.key] }}</slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row mt-3 d-flex align-items-center" v-if="pagination">
      <div class="col-8">
        <p class="text-cincobooks text-center"><span class="text-app">Showing:</span> 10 of 57</p>
      </div>
      <div class="col d-flex justify-content-end">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
