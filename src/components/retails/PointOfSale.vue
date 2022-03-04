<template>
  <div>
    <div class="customer">
      <v-col cols="12" md="3">
        <v-select
          v-model="select"
          @change="getCustomer()"
          :items="$store.state.customerListing"
          item-text="firstName"
          :rules="[(v) => !!v || 'One customer profile needs to be selected']"
          label="Choose a customer profile"
          required
        ></v-select>
      </v-col>
    </div>
    <div class="pos">
      <v-card class="left">
        <div v-for="product in $store.state.productListing" :key="product.id">
          <ProductCard
            v-bind:product="product"
            v-bind:customerSelected="customerSelected"
          />
          <!-- product and customerSelected are binding here and sending as props -->
        </div>
      </v-card>
      <v-card class="right">
        <ProductCart />
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductCard from "./ProductCard.vue";
import ProductCart from "./ProductCart.vue";
import axios from "axios";
@Component({
  components: { ProductCard, ProductCart },
})
export default class PointOfSale extends Vue {
  select = "";
  customerSelected = [];
  async mounted() {
    const response = await axios.get("http://localhost:3000/post");
    this.$store.dispatch("productListingAction", response.data);
    const resp = await axios.get("http://localhost:3000/profiles");
    this.$store.dispatch("customerListingAction", resp.data);
    const getData = await axios.get("http://localhost:3000/profiles");
    this.$store.state.customerListing.push(getData.data);
  }
  getCustomer() {
    const item = this.$store.state.customerListing.filter((data: any) => {
      return data.firstName === this.select;
    });
    this.customerSelected = item[0];
  }
}
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
.customer {
  display: flex;
  justify-content: flex-end;
  margin-right: 55px;
}
</style>
