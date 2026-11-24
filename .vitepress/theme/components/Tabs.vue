<script setup lang="ts">
import { useData } from 'vitepress'
import { cloneVNode, computed, h, ref, useSlots } from 'vue'

const slots = useSlots()
const { lang } = useData()
const activeIndex = ref(0)
const tabListLabel = computed(() =>
  lang.value.toLowerCase().startsWith('es') ? 'Opciones' : 'Options'
)

function getPanels() {
  return (slots.default?.() ?? []).filter(
    (panel) => typeof panel.type === 'object' && panel.props?.title
  )
}
</script>

<template>
  <div class="tabs">
    <div class="tab-list" role="tablist" :aria-label="tabListLabel">
      <button
        v-for="(panel, index) in getPanels()"
        :key="panel.props?.title"
        class="tab-button"
        :class="{ 'is-active': activeIndex === index }"
        type="button"
        role="tab"
        :aria-selected="activeIndex === index"
        @click="activeIndex = index"
      >
        {{ panel.props?.title }}
      </button>
    </div>
    <component
      :is="h('div', getPanels().map((panel, index) =>
        cloneVNode(panel, { active: activeIndex === index })
      ))"
    />
  </div>
</template>
