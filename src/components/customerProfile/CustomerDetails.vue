<template>
  <v-form class="container">
    <p class="details">Customer Profiles</p>
    <v-text-field label="Search for a Specific Customer" filled></v-text-field>

    <v-btn depressed class="add-btn">
      <router-link to="/add-customer"> Add Customer </router-link>
    </v-btn>
    <v-col cols="12" sm="16">
      <v-simple-table>
        <template>
          <v-data-table
            :headers="headers"
            :items="$store.state.customerListing"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:[`item.actions`]="{ item }">
              <router-link to="add-customer">
                <v-icon small class="mr-2" @click="updateEditedCustomer(item)">
                  mdi-pencil
                </v-icon>
              </router-link>
              <v-icon small @click="removeCustomer(item.id)"
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
import axios from "axios";

@Component
export default class CustomerDetails extends Vue {
  headers = [
    { text: "First Name", value: "firstName" },
    { text: "Last Name", value: "lastName" },
    { text: "Age", value: "age" },
    { text: "Gender", value: "gender" },
    { text: "Country", value: "country" },
    {
      text: "Edit/Delete",
      value: "actions",
      sortable: false,
    },
  ];
  async mounted() {
    const response = await axios.get("http://localhost:3000/profiles");
    this.$store.dispatch("customerListingAction", response.data);
  }
  // clearData() {
  //   this.$store.dispatch("clearDataAction");
  // }
  async removeCustomer(id: number): Promise<void> {
    await axios.delete(`http://localhost:3000/profiles/${id}`);
    this.$store.dispatch("removeCustomerAction", id);
  }
  updateEditedCustomer(data: any): void {
    this.$store.state.editingCustomer = true;
    this.$store.dispatch("editCustomerAction", data);
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
}
.details {
  font-size: 22px;
  font-weight: 500;
}
</style>
