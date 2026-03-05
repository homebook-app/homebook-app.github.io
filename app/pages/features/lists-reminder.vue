<script setup lang="ts">
import { frontFeatures } from '~/data/features'

const moduleData = frontFeatures.find(item => item.slug === 'lists-reminder')

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
