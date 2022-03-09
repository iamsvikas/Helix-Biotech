<template>
  <div class="header">
    <h1
      :style="{
        color: $store.state.posColor,
        fontSize: $store.state.posSize,
      }"
    >
      Shopping Cart
    </h1>
    <v-btn dark @click="deleteAll">Delete All The Cart Items</v-btn>
    <hr />
    <v-simple-table fixed-header height="70vh">
      <template v-slot:default>
        <thead>
          <tr>
            <th
              class="text-left"
              :style="{
                color: $store.state.posColor,
                fontSize: $store.state.posSize,
              }"
            >
              Product
            </th>
            <th
              class="text-left"
              :style="{
                color: $store.state.posColor,
                fontSize: $store.state.posSize,
              }"
            >
              Quantity
            </th>
            <th
              class="text-left"
              :style="{
                color: $store.state.posColor,
                fontSize: $store.state.posSize,
              }"
            >
              Price/Unit
            </th>
            <th
              class="text-left"
              :style="{
                color: $store.state.posColor,
                fontSize: $store.state.posSize,
              }"
            >
              Total Price
            </th>
            <th
              class="text-left"
              :style="{
                color: $store.state.posColor,
                fontSize: $store.state.posSize,
              }"
            >
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in $store.state.shoppingCart" :key="item.id">
            <td
              :style="{
                color: $store.state.posColor,
                fontSize: $store.state.posSize,
              }"
            >
              {{ item.product }}
            </td>
            <td
              :style="{
                color: $store.state.posColor,
                fontSize: $store.state.posSize,
              }"
            >
              {{ item.quantity }}
            </td>
            <td
              :style="{
                color: $store.state.posColor,
                fontSize: $store.state.posSize,
              }"
            >
              {{ item.price }}
            </td>
            <td
              :style="{
                color: $store.state.posColor,
                fontSize: $store.state.posSize,
              }"
            >
              {{ item.totalPrice }}
            </td>
            <td
              class="mdi mdi-delete-alert"
              @click="deleteItem(item.id)"
              :style="{
                color: $store.state.posColor,
                fontSize: $store.state.posSize,
              }"
            ></td>
          </tr>
        </tbody>
        <tfoot>
          <td
            :style="{
              color: $store.state.posColor,
              fontSize: $store.state.posSize,
            }"
          >
            Total
          </td>
          <td></td>
          <td></td>
          <td
            :style="{
              color: $store.state.posColor,
              fontSize: $store.state.posSize,
            }"
          >
            {{ totalPrice }}
          </td>
        </tfoot>
      </template>
    </v-simple-table>
    <v-btn
      dark
      class="submit"
      @click="reportSubmit"
      :style="{ backgroundColor: $store.state.posButtonColor }"
      >Submit</v-btn
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import axios from "axios";

@Component({
  computed: {
    ...mapGetters(["totalPrice"]),
  },
})
export default class ProductCart extends Vue {
  async reportSubmit() {
    this.$store.dispatch("reportSubmitAction");
    const resp = await axios.get("http://localhost:3000/shoppingCart");
    this.$store.dispatch("displayReportedData", resp.data);
    console.log(resp.data);
  }

  async deleteAll() {
    this.$store.dispatch("deleteAllAction");
  }
  async deleteItem(id: number): Promise<void> {
    await axios.delete(`http://localhost:3000/shoppingCart/${id}`);
    this.$store.dispatch("deleteItemAction", id);
  }
  //   totalAmount();
  async mounted() {
    const response = await axios.get("http://localhost:3000/shoppingCart");
    this.$store.state.shoppingCart = response.data;
  }
  async updated() {
    const response = await axios.get("http://localhost:3000/shoppingCart");
    this.$store.state.shoppingCart = response.data;
  }
}
</script>
<style scoped>
h1 {
  text-align: center;
}
td {
  text-align: center;
}
.header {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  text-align: center;
}
</style>
