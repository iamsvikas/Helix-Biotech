<template>
  <div class="header">
    <h1>Shopping Cart</h1>
    <v-btn dark @click="deleteAll">Delete All The Cart Items</v-btn>
    <hr />
    <v-simple-table fixed-header height="70vh">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Product</th>
            <th class="text-left">Quantity</th>
            <th class="text-left">Price/Unit</th>
            <th class="text-left">Total Price</th>
            <th class="text-left">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in $store.state.shoppingCart" :key="item.id">
            <td>{{ item.product }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.totalPrice }}</td>
            <td class="mdi mdi-delete-alert" @click="deleteItem(item.id)"></td>
          </tr>
        </tbody>
        <tfoot>
          <td>Total</td>
          <td></td>
          <td></td>
          <td>{{ totalPrice }}</td>
        </tfoot>
      </template>
    </v-simple-table>
    <v-btn dark class="submit" @click="reportSubmit">Submit</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters(["totalPrice"]),
  },
})
export default class ProductCart extends Vue {
  reportSubmit() {
    this.$store.dispatch("reportSubmitAction");
  }
  deleteAll() {
    this.$store.dispatch("deleteAllAction");
  }
  deleteItem(key: number) {
    this.$store.dispatch("deleteItemAction", key);
  }
  //   totalAmount();
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
