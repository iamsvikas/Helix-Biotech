<template>
  <div>
    <h1 class="header">Style Manager</h1>
    <div class="cards">
      <div class="card">
        <v-card class="card elevation-5">
          <h2>Product Page</h2>
          <v-select
            v-model="productFontColor"
            :items="color"
            item-text="color"
            label="Choose Font Color"
            required
          ></v-select>
          <v-select
            v-model="productFontSize"
            :items="fontSize"
            :item-value="fontSize"
            item-text="size"
            label="Choose Font Size"
            required
          ></v-select>
          <v-select
            v-model="productBorderColor"
            :items="color"
            item-text="color"
            label="Choose Border Color"
            required
          ></v-select>
          <v-select
            v-model="productButtonColor"
            :items="color"
            :item-value="buttonColor"
            item-text="color"
            label="Choose Button Color"
            required
          ></v-select>
        </v-card>
      </div>
      <div class="card">
        <v-card class="card elevation-5">
          <h2>Point of Sale Page</h2>
          <v-select
            v-model="posFontColor"
            :items="color"
            :item-value="fontColor"
            item-text="color"
            label="Choose Font Color"
            required
          ></v-select>
          <v-select
            v-model="posFontSize"
            :items="fontSize"
            :item-value="fontSize"
            item-text="size"
            label="Choose Font Size"
            required
          ></v-select>
          <v-select
            v-model="posBorderColor"
            :items="color"
            :item-value="borderColor"
            item-text="color"
            label="Choose Border Color"
            required
          ></v-select>
          <v-select
            v-model="posButtonColor"
            :items="color"
            :item-value="buttonColor"
            item-text="color"
            label="Choose Button Color"
            required
          ></v-select>
        </v-card>
      </div>
      <div class="card">
        <v-card class="card elevation-5">
          <h2>Report Page</h2>
          <v-select
            v-model="reportFontColor"
            :items="color"
            :item-value="fontColor"
            item-text="color"
            label="Choose Font Color"
            required
          ></v-select>
          <v-select
            v-model="reportFontSize"
            :items="fontSize"
            :item-value="fontSize"
            item-text="size"
            label="Choose Font Size"
            required
          ></v-select>
          <v-select
            v-model="reportBorderColor"
            :items="color"
            :item-value="color"
            item-text="color"
            label="Choose Border Color"
            required
          ></v-select>
        </v-card>
      </div>
    </div>
    <div class="btns">
      <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
        color="primary"
        @click="saveDetails"
      >
        save
      </v-btn>
      <v-btn @click="clear" color="error"> clear </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class StyleManager extends Vue {
  productFontColor = "";
  productFontSize = "";
  productBorderColor = "";
  productButtonColor = "";
  posFontColor = "";
  posFontSize = "";
  posBorderColor = "";
  posButtonColor = "";
  reportFontColor = "";
  reportFontSize = "";
  reportBorderColor = "";

  saveDetails() {
    this.$store.state.productColor = this.productFontColor;
    this.$store.state.productSize = this.productFontSize;
    this.$store.state.productBorderColor = this.productBorderColor;
    this.$store.state.productButtonColor = this.productButtonColor;

    this.$store.state.posColor = this.posFontColor;
    this.$store.state.posSize = this.posFontSize;
    this.$store.state.posBorderColor = this.posBorderColor;
    this.$store.state.posButtonColor = this.posButtonColor;

    this.$store.state.reportColor = this.reportFontColor;
    this.$store.state.reportSize = this.reportFontSize;
    this.$store.state.reportBorderColor = this.reportBorderColor;
  }

  color = [
    { color: "Red" },
    { color: "Blue" },
    { color: "Green" },
    { color: "Black" },
    { color: "Purple" },
    { color: "Violet" },
    { color: "orangered" },
    { color: "cyan" },
  ];
  fontSize = [{ size: "10px" }, { size: "16px" }, { size: "24px" }];
  borderColor = [{ color: "black" }, { color: "red" }, { color: "orange" }];
  buttonColor = [
    { color: "violet" },
    { color: "blue" },
    { color: "orangered" },
    { color: "green" },
    { color: "cyan" },
  ];
}
</script>

<style scoped>
.cards {
  display: flex;
  justify-content: space-evenly;
}
.card {
  padding: 50px;
}
.btns {
  display: flex;
  justify-content: center;
}
.header {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  text-decoration: underline;
}
</style>
