<script setup lang="ts">
import { featureModules } from '~/data/features'

const moduleData = featureModules.find(item => item.slug === 'meal-planning')

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
