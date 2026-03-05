<script setup lang="ts">
import { backFeatures } from '~/data/features'

const moduleData = backFeatures.find(item => item.slug === 'sync-jobs')

if (!moduleData) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Feature not found'
  })
}
</script>

<template>
  <FeaturePlaceholder :module="moduleData" />
</template>
