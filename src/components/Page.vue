<template>
  <v-form class="container">
    <p class="details">Product</p>
    <v-text-field label="Search for a Product" filled></v-text-field>

    <v-btn
      depressed
      class="add-btn"
      @click="clearData"
      :disabled="!$store.state.addSwitch"
    >
      <router-link to="/add-product"> Add Product </router-link>
    </v-btn>
    <v-col cols="12" sm="16">
      <v-simple-table>
        <template>
          <v-data-table
            :headers="headers"
            :items="$store.state.productList"
            :items-per-page="5"
            class="elevation-1"
            v-if="$store.state.addSwitch"
          >
            <template v-slot:[`item.actions`]="{ item }">
              <router-link
                to=""
                v-if="!$store.state.editProductSwitch"
                :disabled="!$store.state.editProductSwitch"
              >
                <v-icon small class="mr-2" @click="updateEditedProduct(item)">
                  mdi-pencil
                </v-icon>
              </router-link>
              <router-link v-else to="/add-product">
                <v-icon small class="mr-2" @click="updateEditedProduct(item)">
                  mdi-pencil
                </v-icon>
              </router-link>
              <v-icon
                small
                @click="removeProduct(item.id)"
                :disabled="!$store.state.deleteSwitch"
                >mdi-delete-forever</v-icon
              >
            </template>
          </v-data-table>
        </template>
      </v-simple-table>
    </v-col>
  </v-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class extends Vue {
  headers = [
    { text: "Product", value: "product" },
    { text: "Gender", value: "gender" },
    { text: "Size", value: "size" },
    { text: "Color", value: "color" },
    { text: "Price", value: "price" },
    {
      text: "Edit/Delete",
      value: "actions",
      sortable: false,
    },
  ];
  clearData() {
    this.$store.dispatch("clearDataAction");
  }
  removeProduct(id: number): void {
    this.$store.dispatch("removeProductAction", id);
  }
  updateEditedProduct(data: any): void {
    this.$store.state.editingProduct = true;
    console.log("page.vue @line87", this.$store.state.editingProduct);
    this.$store.dispatch("editProductAction", data);
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.add-btn {
  display: flex;
  justify-content: center;
  /* width: 150px; */
}
.details {
  font-size: 22px;
  font-weight: 500;
}
</style>
