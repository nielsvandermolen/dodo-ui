<template>
  <teleport to="body">
    <Transition name="Dialog">
      <div v-if="active" ref="el" :class="$style.Dialog">
        <div :class="$style.window">
          <Container pad="m">
            <slot />
          </Container>
          <Row pad="m" justify="end" gap="s">
            <slot name="controls" />
          </Row>
        </div>
      </div>
    </Transition>
  </teleport>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import Container from './Container.vue'
import Row from './Row.vue'

const props = defineProps<{
  active: boolean
}>()

const el = ref<HTMLElement>()

watchEffect(() => {
  // Make sure active element is on top
  if (props.active && el.value) {
    el.value.parentNode!.appendChild(el.value)
  }
})
</script>
<style module>
.Dialog {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
}
.window {
  background: white;
  border-radius: 4px;
  width: 500px;
  /* min-height: 160px; */
  box-shadow: var(--shadow-5);
}

.Dialog-enter-active,
.Dialog-leave-active {
  transition: opacity 0.1s ease;
}
.Dialog-enter-from,
.Dialog-leave-to {
  opacity: 0;
}
.Dialog-enter-active .window,
.Dialog-leave-active .window {
  transition: top 0.1s ease;
  position: relative;
  top: 0;
}
.Dialog-enter-from .window,
.Dialog-leave-to .window {
  top: -16px;
}
</style>
