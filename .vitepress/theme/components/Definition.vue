<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  term: string
}>()

const open = ref(false)
const tooltipId = computed(
  () => `definition-${props.term.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
)

function toggle() {
  open.value = !open.value
}

function close() {
  open.value = false
}
</script>

<template>
  <span class="definition" :class="{ 'is-open': open }">
    <button
      class="definition-trigger"
      type="button"
      :aria-label="`Show definition of ${term}`"
      :aria-expanded="open"
      :aria-describedby="tooltipId"
      @click="toggle"
      @keydown.esc="close"
      @blur="close"
    >
      {{ term }}
    </button>
    <span :id="tooltipId" class="definition-tooltip" role="tooltip">
      <slot />
    </span>
  </span>
</template>
