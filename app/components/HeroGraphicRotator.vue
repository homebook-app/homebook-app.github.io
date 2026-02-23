<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

interface HeroVisual {
  id: string
  title: string
  subtitle: string
  icon: string
  background: string
  chips: string[]
}

const visuals: HeroVisual[] = [
  {
    id: 'home-hub',
    title: 'A Home Control Hub',
    subtitle: 'Bring your private household workflows into one clean platform.',
    icon: 'i-lucide-house',
    background: 'radial-gradient(circle at 20% 20%, rgb(16 185 129 / 0.30), transparent 45%), radial-gradient(circle at 85% 70%, rgb(14 165 233 / 0.28), transparent 42%)',
    chips: ['Household', 'Private Use', 'Centralized']
  },
  {
    id: 'family-tools',
    title: 'Tools For Everyday Life',
    subtitle: 'Coordinate lists, meals and finances across your home setup.',
    icon: 'i-lucide-layout-grid',
    background: 'radial-gradient(circle at 22% 75%, rgb(59 130 246 / 0.30), transparent 42%), radial-gradient(circle at 78% 20%, rgb(139 92 246 / 0.24), transparent 44%)',
    chips: ['Lists', 'Meal Plans', 'Finances']
  },
  {
    id: 'self-host-ready',
    title: 'Built To Grow',
    subtitle: 'Start simple today and expand modules over time at your own pace.',
    icon: 'i-lucide-rocket',
    background: 'radial-gradient(circle at 28% 28%, rgb(251 191 36 / 0.28), transparent 40%), radial-gradient(circle at 80% 80%, rgb(249 115 22 / 0.22), transparent 44%)',
    chips: ['Modular', 'Self-Hosted', 'Scalable']
  }
]

const activeIndex = ref(0)
let intervalId: ReturnType<typeof setInterval> | undefined

const activeVisual = computed<HeroVisual>(() => visuals[activeIndex.value] ?? visuals[0]!)

onMounted(() => {
  intervalId = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % visuals.length
  }, 5000)
})

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<template>
  <div class="space-y-4">
    <div class="hero-visual-frame">
      <Transition
        name="fade"
        mode="out-in"
      >
        <div
          :key="activeVisual.id"
          class="hero-visual-inner"
          :style="{ backgroundImage: activeVisual.background }"
        >
          <div
            class="hero-grid"
            aria-hidden="true"
          />

          <div class="hero-visual-content">
            <div class="hero-visual-icon">
              <UIcon
                :name="activeVisual.icon"
                class="text-3xl text-primary"
              />
            </div>

            <div class="space-y-2">
              <p class="text-lg font-semibold text-highlighted">
                {{ activeVisual.title }}
              </p>
              <p class="text-sm text-muted leading-relaxed">
                {{ activeVisual.subtitle }}
              </p>
            </div>

            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="chip in activeVisual.chips"
                :key="chip"
                color="primary"
                variant="subtle"
                size="md"
              >
                {{ chip }}
              </UBadge>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <p class="text-xs text-muted text-center">
      Visual rotates every 5 seconds
    </p>
  </div>
</template>

<style scoped>
.hero-visual-frame {
  aspect-ratio: 1 / 1;
  border-radius: 1rem;
  border: 1px solid rgb(148 163 184 / 0.24);
  overflow: hidden;
  position: relative;
  background: transparent;
}

.hero-visual-inner {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 1.25rem;
  display: flex;
  align-items: stretch;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgb(148 163 184 / 0.12) 1px, transparent 1px), linear-gradient(90deg, rgb(148 163 184 / 0.12) 1px, transparent 1px);
  background-size: 24px 24px;
  mask-image: radial-gradient(circle at 50% 50%, black 35%, transparent 85%);
}

.hero-visual-content {
  position: relative;
  z-index: 1;
  width: 100%;
  border-radius: 0.85rem;
  border: 1px solid rgb(148 163 184 / 0.26);
  background: rgb(255 255 255 / 0.78);
  backdrop-filter: blur(4px);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.9rem;
}

.hero-visual-icon {
  width: 3.1rem;
  height: 3.1rem;
  border-radius: 0.85rem;
  display: grid;
  place-items: center;
  background: rgb(16 185 129 / 0.14);
}

.dark .hero-visual-content {
  background: rgb(15 23 42 / 0.72);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.45s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
