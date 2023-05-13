<template>
  <div>
    <div>Market info: {{ presenter.marketInfo }}</div>
    <button @click="presenter.onGenerateRandomMarketInfo">generate info</button>
  </div>
</template>

<script setup lang="ts">
import { usePresenter } from '../presenter/usePresenter'

const presenter = usePresenter()
</script>
