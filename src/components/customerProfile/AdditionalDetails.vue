<template>
  <div class="input">
    <v-col cols="6" sm="16">
      <v-form ref="form">
        <v-text-field
          v-model="$store.state.city"
          :items="$store.state.postalCode"
          label="City"
          required
        ></v-text-field>
        <v-text-field
          v-model="$store.state.postalCode"
          :items="$store.state.postalCode"
          label="Postal Code"
          required
        ></v-text-field>
        <v-text-field
          v-model="$store.state.state"
          :items="$store.state.state"
          label="State"
          required
        ></v-text-field>

        <v-text-field
          v-model="$store.state.country"
          :items="$store.state.country"
          label="Country"
          required
        ></v-text-field>
      </v-form>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AdditionalDetails extends Vue {}
</script>
<style scoped>
.input {
  display: flex;
  justify-content: center;
}
</style>
