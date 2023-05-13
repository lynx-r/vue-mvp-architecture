<template>
  <div>
    <RetailShops />
    <SmallStocks />

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import RetailShops from './components/RetailShops.vue'
import SmallStocks from './components/SmallStocks.vue'
</script>
