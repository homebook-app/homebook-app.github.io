<script setup lang="ts">
import { computed, ref } from 'vue'
import DockerInstall from '~/components/setup/DockerInstall.vue'
import UmbrelInstall from '~/components/setup/UmbrelInstall.vue'
import ZimaOSInstall from './ZimaOSInstall.vue'
import umbrelIcon from '~/assets/icons/install-methods/umbrel.svg?raw'
import zimaOsIcon from '~/assets/icons/install-methods/zimaos.svg?raw'
import unraidIcon from '~/assets/icons/install-methods/unraid.svg?raw'
import UnraidInstall from './UnraidInstall.vue'

type InstallMethod = 'umbrel' | 'docker' | 'zimaos' | 'unraid'

interface MethodConfig {
  id: InstallMethod
  label: string
  icon?: string
  svg?: string
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
    label: 'UmbrelOS',
    svg: umbrelIcon,
    description: 'Install in Umbrel via Umbrel App Store.',
    component: UmbrelInstall
  },
  {
    id: 'zimaos',
    label: 'ZimaOS',
    svg: zimaOsIcon,
    description: 'Install in ZimaOS via ZimaOS App Store.',
    component: ZimaOSInstall
  },
  {
    id: 'unraid',
    label: 'Unraid',
    svg: unraidIcon,
    description: 'Install in Unraid via Unraid App Store.',
    component: UnraidInstall
  }
]

const selectedMethod = ref<InstallMethod>('docker')

const activeMethod = computed(() => methods.find(method => method.id === selectedMethod.value) ?? methods[0]!)
</script>

<template>
  <div class="space-y-6">
    <div class="grid gap-3 sm:grid-cols-4">
      <button
        v-for="method in methods"
        :key="method.id"
        type="button"
        class="install-method-button"
        :class="selectedMethod === method.id
          ? 'install-method-button-active'
          : 'install-method-button-idle'"
        @click="selectedMethod = method.id"
      >
        <!-- eslint-disable vue/no-v-html -->
        <span
          v-if="method.svg"
          aria-hidden="true"
          class="install-method-logo"
          v-html="method.svg"
        />
        <!-- eslint-enable vue/no-v-html -->
        <UIcon
          v-else-if="method.icon"
          :name="method.icon"
          class="text-xl"
        />
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
