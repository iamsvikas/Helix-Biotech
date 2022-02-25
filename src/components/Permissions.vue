<template>
  <v-apps>
    <h1 class="header">Permissions</h1>
    <v-card class="section">
      <div class="main-header">
        <v-switch
          class="my-0 py-0"
          v-model="$store.state.productsSwitch"
          @change="!$store.state.productsSwitch"
          :label="`Products`"
        ></v-switch>
      </div>
      <div class="main">
        <v-switch
          class="my-0 py-0"
          v-model="$store.state.addSwitch"
          @change="addSwitch($event)"
          :label="`Add Product`"
          :disabled="!$store.state.productsSwitch"
        ></v-switch>
        <v-switch
          class="my-0 py-0"
          :disabled="!$store.state.productsSwitch"
          v-model="$store.state.deleteSwitch"
          @change="deleteSwitch($event)"
          :label="`Delete Product`"
        ></v-switch>
        <v-switch
          class="my-0 py-0"
          :disabled="!$store.state.productsSwitch"
          v-model="$store.state.editProductSwitch"
          @change="editProductSwitch($event)"
          :label="`Edit Product`"
        ></v-switch>
      </div>
      <div class="sub">
        <v-switch
          class="my-0 py-0"
          :disabled="
            !$store.state.editProductSwitch || !$store.state.productsSwitch
          "
          v-model="$store.state.productNameSwitch"
          @change="!$store.state.productNameSwitch"
          :label="`Product Name`"
        ></v-switch>
        <v-switch
          class="my-0 py-0"
          :disabled="
            !$store.state.editProductSwitch || !$store.state.productsSwitch
          "
          v-model="$store.state.sizeSwitch"
          @change="!$store.state.sizeSwitch"
          :label="`Size`"
        ></v-switch>
        <v-switch
          class="my-0 py-0"
          :disabled="
            !$store.state.editProductSwitch || !$store.state.productsSwitch
          "
          v-model="$store.state.genderSwitch"
          @change="!$store.state.genderSwitch"
          :label="`Gender`"
        ></v-switch>
        <v-switch
          class="my-0 py-0"
          :disabled="
            !$store.state.editProductSwitch || !$store.state.productsSwitch
          "
          v-model="$store.state.colorSwitch"
          @change="!$store.state.colorSwitch"
          :label="`Color`"
        ></v-switch>
      </div>
      <div class="main">
        <v-switch
          :disabled="!$store.state.productsSwitch"
          v-model="$store.state.priceTaxSwitch"
          @change="!$store.state.priceTaxSwitch"
          :label="`Edit Price and tax`"
        ></v-switch>
      </div>
      <div class="sub">
        <v-switch
          class="my-0 py-0"
          :disabled="
            !$store.state.priceTaxSwitch || !$store.state.productsSwitch
          "
          v-model="$store.state.priceSwitch"
          @change="!$store.state.priceSwitch"
          :label="`Price`"
        ></v-switch>
        <v-switch
          class="my-0 py-0"
          :disabled="
            !$store.state.priceTaxSwitch || !$store.state.productsSwitch
          "
          v-model="$store.state.taxSwitch"
          @change="!$store.state.taxSwitch"
          :label="`Tax`"
        ></v-switch>
      </div>
      <v-btn color="primary" class="btn">Save</v-btn>
    </v-card>
  </v-apps>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  addSwitch(data: boolean) {
    this.$store.dispatch("addSwitchAction", data);
  }
  deleteSwitch(data: boolean) {
    this.$store.dispatch("deleteSwitchAction", data);
  }
  editProductSwitch(data: boolean) {
    this.$store.dispatch("editProductSwitchAction", data);
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  padding-top: 12px;
}
.main {
  margin-left: 70px;
}
.sub {
  margin-left: 140px;
}
.section {
  width: 40%;
  margin-left: 30%;
  margin-bottom: 1%;
  padding: 20px;
}
.btn {
}
</style>
