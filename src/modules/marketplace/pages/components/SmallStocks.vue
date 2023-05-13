<template>
  <div>
    <h3>stocks:</h3>
    <div v-for="(stock, index) of presenter.stocks" :key="index">
      {{ stock.address }}: {{ stock.capacity }}
    </div>
    <input v-model="stockAddress" type="text" />
    <input v-model="stockCapacity" type="text" />
    <button @click="presenter.addStock({ address: stockAddress, capacity: stockCapacity })">
      add stock
    </button>
    <button @click="presenter.addRandomStock">add random stock</button>
  </div>
</template>

<script setup lang="ts">
import { usePresenter } from '../../presenter/usePresenter'

const presenter = usePresenter()
const stockAddress = ''
const stockCapacity = 0
</script>
