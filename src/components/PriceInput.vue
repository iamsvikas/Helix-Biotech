<template>
  <div class="input">
    <v-col cols="6" sm="16">
      <v-form ref="form">
        <v-text-field
          v-model="$store.state.priceData"
          label="Price"
          required
        ></v-text-field>

        <v-text-field
          v-model="$store.state.taxData"
          label="Tax in Percentage (%)"
          required
        ></v-text-field>
        <router-link to="/">
          <v-btn
            depressed
            color="primary"
            @click="addProductDetails()"
            v-if="!$store.state.editingProduct"
          >
            Add To The Product List
          </v-btn>
          <v-btn depressed color="primary" @click="updateProduct()" v-else>
            Update The Product List
            <!-- <v-btn depressed color="primary"> Cancel </v-btn> -->
          </v-btn>
          <v-btn depressed color="error"> Cancel </v-btn>
        </router-link>
      </v-form>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PriceInput extends Vue {
  addProductDetails(): void {
    let productDetails = {
      id: Date.now(),
      product: this.$store.state.productData,
      size: this.$store.state.sizeData,
      color: this.$store.state.colorData,
      gender: this.$store.state.genderData,
      price: this.$store.state.priceData,
      tax: this.$store.state.taxData,
    };
    this.$store.state.editingProduct = false;
    this.$store.dispatch("addProductDetailsAction", productDetails);
  }
  updateProduct() {
    this.$store.dispatch("updateAction");
  }
}
</script>

<style scoped>
.input {
  display: flex;
  justify-content: center;
}
</style>
