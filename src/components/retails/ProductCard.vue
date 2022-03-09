<template>
  <v-card
    class="card"
    elevation="20"
    :style="{ color: $store.state.posColor, fontSize: $store.state.posSize }"
  >
    <!-- product and customerSelected are receiving from ProductCard as props-->
    <h1>{{ product.product }}</h1>
    <p>{{ product.inventory - quantity }} units available</p>
    <p>At ₹ {{ product.price }} per unit</p>
    <div class="counter">
      <v-btn @click="decrement">-</v-btn>
      <p>{{ quantity }}</p>
      <v-btn @click="increment">+</v-btn>
    </div>
    <v-btn
      dark
      class="mt-4"
      @click="addToCart(product)"
      :style="{ backgroundColor: $store.state.posButtonColor }"
      >Add to Cart</v-btn
    >
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapActions } from "vuex";

@Component({
  props: {
    product: {},
    customerSelected: {},
  },
  methods: {
    ...mapActions(["addToCartAction"]),
  },
})
export default class ProductCard extends Vue {
  addToCartAction!: any;
  availableQuantity = 100;
  customerSelected: any;
  quantity = 0;
  increment() {
    // this.$store.state.dispatch("incrementAction");
    if (this.quantity <= this.availableQuantity - 1) {
      this.quantity = this.quantity + 1;
    }
  }
  decrement() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (this.quantity! < 0 || this.quantity !== 0) {
      this.quantity = this.quantity - 1;
    }
  }
  counter() {
    this.$store.dispatch("counterAction");
  }
  addToCart(item: any) {
    const current = new Date();
    const date =
      current.getDate() +
      "-" +
      (current.getMonth() + 1) +
      "-" +
      current.getFullYear();
    const time =
      current.getHours() +
      ":" +
      current.getMinutes() +
      ":" +
      current.getSeconds();

    if (this.quantity > 0) {
      this.counter();
      this.addToCartAction({
        timeStamp: Date.now(),
        id: item.id,
        customerFirstName: this.customerSelected.firstName,
        customerLastName: this.customerSelected.lastName,
        customerGender: this.customerSelected.gender,
        customerAge: this.customerSelected.age,
        customerMobile: this.customerSelected.mobile,
        customerCity: this.customerSelected.city,
        customerPostalCode: this.customerSelected.postalCode,
        customerState: this.customerSelected.state,
        customerCountry: this.customerSelected.country,
        customerId: this.customerSelected.id,
        counter: this.$store.state.count,
        product: item.product,
        quantity: this.quantity,
        price: item.price,
        totalPrice: item.price * this.quantity,
        color: item.color,
        gender: item.gender,
        size: item.size,
        tax: item.tax,
        time: time,
        date: date,
      });
      this.$store.dispatch("calculateTotalAction");
    }
  }
}
</script>

<style scoped>
.card {
  width: 200px;
  height: 250px;
  margin: 30px;
  text-align: center;
  overflow: hidden;
}
.counter {
  display: flex;
  justify-content: space-evenly;
}
</style>
