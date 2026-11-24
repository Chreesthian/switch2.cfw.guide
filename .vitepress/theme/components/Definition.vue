<script setup lang="ts">
import { useData } from 'vitepress'
import { computed, ref } from 'vue'

const props = defineProps<{
  term: string
}>()

const { lang } = useData()
const open = ref(false)
const ariaLabel = computed(() =>
  lang.value.toLowerCase().startsWith('es')
    ? `Mostrar definición de ${props.term}`
    : `Show definition of ${props.term}`
)
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
      :aria-label="ariaLabel"
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
