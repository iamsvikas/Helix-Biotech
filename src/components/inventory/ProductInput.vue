<template>
  <div class="input">
    <v-col cols="6" sm="16">
      <v-form ref="form">
        <v-text-field
          v-model="$store.state.productData"
          label="Product"
          required
        ></v-text-field>
        <v-select
          v-model="$store.state.sizeData"
          :items="$store.state.sizes"
          label="Select Size"
          required
        ></v-select>
        <v-container fluid>
          <v-radio-group v-model="$store.state.genderData" row>
            <v-radio label="Male" value="Male"></v-radio>
            <v-radio label="Female" value="Female"></v-radio>
            <v-radio label="Others" value="Others"></v-radio>
          </v-radio-group>
        </v-container>
        <v-select
          v-model="$store.state.colorData"
          :items="$store.state.colors"
          label="Select Color"
          required
        ></v-select>
      </v-form>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ProductInput extends Vue {}
</script>
<style scoped>
.input {
  display: flex;
  justify-content: center;
}
</style>
