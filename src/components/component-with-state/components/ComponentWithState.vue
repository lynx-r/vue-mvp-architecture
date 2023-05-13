<template>
  <div>
    <strong>Component with state: {{ presenter.info }}</strong>
    <button @click="presenter.onUpdateInfo">update info</button>
  </div>
</template>

<script setup lang="ts">
import { usePresenter } from '../presenter/usePresenter'
import type { Service } from '../service/Service'

const props = defineProps<{
  service: Service
}>()

const presenter = usePresenter(props.service)
</script>
