<template>
  <div>
    <h3>shops:</h3>
    <div v-for="(shop, index) of presenter.shops" :key="index">
      {{ shop.shopId }}: {{ shop.shopName }}
    </div>
    <input v-model="shopId" type="text" />
    <input v-model="shopName" type="text" />
    <button @click="presenter.addShop({ shopId, shopName })">add shop</button>
    <button @click="presenter.addRandomShop">add random shop</button>
  </div>
</template>

<script setup lang="ts">
import { usePresenter } from '../../presenter/usePresenter'

const presenter = usePresenter()
const shopId = 0
const shopName = ''
</script>
