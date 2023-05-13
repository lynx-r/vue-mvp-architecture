<template>
  <div>
    <h1>Marketplace</h1>
    <MarketInfo />
    <RetailShops />
    <SmallStocks />
    <ComponentWithState :service="service" />

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ComponentWithState } from '@/components/component-with-state'
import { RouterView } from 'vue-router'
import MarketInfo from '../components/MarketInfo.vue'
import RetailShops from '../components/RetailShops.vue'
import SmallStocks from '../components/SmallStocks.vue'
import { useComponentWithStateService } from '../service/useComponentWithStateService'

const service = useComponentWithStateService()
</script>
