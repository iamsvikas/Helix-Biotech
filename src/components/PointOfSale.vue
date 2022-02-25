<template>
  <div class="pos">
    <v-card class="left">
      <div v-for="product in $store.state.productList" :key="product.id">
        <ProductCard v-bind:product="product" />
      </div>
    </v-card>
    <v-card class="right">
      <ProductCart />
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductCard from "./ProductCard.vue";
import ProductCart from "./ProductCart.vue";

@Component({
  components: { ProductCard, ProductCart },
})
export default class PointOfSale extends Vue {}
</script>

<style scoped>
.pos {
  display: flex;
  flex: 1;
  margin: 1%;
}
.left {
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  height: 70vh;
  border: 2px solid black;
  border-radius: 10px;
  flex-wrap: wrap;
  overflow-x: scroll;
  margin-right: 2%;
}
.right {
  width: 35%;
  background-color: aquamarine;
  height: 70vh;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 10px;
  overflow-x: scroll;
}
</style>
