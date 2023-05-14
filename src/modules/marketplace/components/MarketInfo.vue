<template>
  <div>
    <div>Market info: {{ presenter.marketInfo }}</div>
    <button @click="presenter.onGenerateRandomMarketInfo">generate info</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import initState from '../pages/some-shop/presenter/initState'
import { usePresenter } from '../presenter/usePresenter'

// possible migration from vue reactive data
const state = reactive(initState())
const presenter = usePresenter(state)
</script>
