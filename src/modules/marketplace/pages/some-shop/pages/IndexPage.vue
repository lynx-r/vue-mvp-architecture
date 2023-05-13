<template>
  <div>
    <h2>Some Shop</h2>

    <MarketInfo />
    <RetailShops />
    <SmallStocks />

    <ComponentWithState :service="service" />
  </div>
</template>

<script setup lang="ts">
import { ComponentWithState } from '@/components/component-with-state'
import MarketInfo from '../components/MarketInfo.vue'
import RetailShops from '../components/RetailShops.vue'
import SmallStocks from '../components/SmallStocks.vue'
import { useComponentWithStateService } from '../service/useComponentWithStateService'

const service = useComponentWithStateService()
</script>
