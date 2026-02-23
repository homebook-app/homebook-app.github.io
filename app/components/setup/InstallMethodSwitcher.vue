<script setup lang="ts">
import { computed, ref } from 'vue'
import CasaOsInstall from '~/components/setup/CasaOsInstall.vue'
import DockerInstall from '~/components/setup/DockerInstall.vue'
import UmbrelInstall from '~/components/setup/UmbrelInstall.vue'

type InstallMethod = 'umbrel' | 'casa-os' | 'docker'

interface MethodConfig {
  id: InstallMethod
  label: string
  icon: string
  description: string
  component: unknown
}

const methods: MethodConfig[] = [
  {
    id: 'docker',
    label: 'Docker',
    icon: 'i-lucide-container',
    description: 'Run directly with Docker CLI.',
    component: DockerInstall
  },
  {
    id: 'umbrel',
    label: 'Umbrel',
    icon: 'i-lucide-server',
    description: 'Install via Umbrel app workflow.',
    component: UmbrelInstall
  },
  {
    id: 'casa-os',
    label: 'Casa OS',
    icon: 'i-lucide-house-plus',
    description: 'Deploy with CasaOS app manager.',
    component: CasaOsInstall
  }
]

const selectedMethod = ref<InstallMethod>('docker')

const activeMethod = computed(() => methods.find(method => method.id === selectedMethod.value) ?? methods[0]!)
</script>

<template>
  <div class="space-y-6">
    <div class="grid gap-3 sm:grid-cols-3">
      <button v-for="method in methods" :key="method.id" type="button" class="install-method-button" :class="selectedMethod === method.id
        ? 'install-method-button-active'
        : 'install-method-button-idle'" @click="selectedMethod = method.id">
        <UIcon :name="method.icon" class="text-xl" />
        <span>{{ method.label }}</span>
      </button>
    </div>

    <div>
      <p class="text-sm text-muted">
        {{ activeMethod.description }}
      </p>
    </div>

    <component :is="activeMethod.component" />
  </div>
</template>
