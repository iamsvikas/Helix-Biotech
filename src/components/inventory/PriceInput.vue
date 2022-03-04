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
      </v-form>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class PriceInput extends Vue {}
</script>

<style scoped>
.input {
  display: flex;
  justify-content: center;
}
</style>
