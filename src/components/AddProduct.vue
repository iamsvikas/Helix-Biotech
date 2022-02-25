<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="grey darken-3"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider> </v-tabs-slider>
      <v-tab href="#tab-1">
        Products
        <v-icon>mdi-database-search-outline</v-icon>
      </v-tab>

      <v-tab href="#tab-2">
        Pricing
        <v-icon>mdi-calculator</v-icon>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 2" :key="i" :value="'tab-' + i">
        <v-card v-if="i === 1">
          <ProductInput />
        </v-card>
        <v-card v-else>
          <PriceInput />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <p>{{ $store.state.productDetails }}</p>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PriceInput from "./PriceInput.vue";
import ProductInput from "./ProductInput.vue";

@Component({
  components: { ProductInput, PriceInput },
})
export default class extends Vue {
  tab = null;
}
</script>

<style scoped></style>
