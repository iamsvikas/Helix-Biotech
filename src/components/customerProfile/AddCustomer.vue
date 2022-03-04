<template>
  <v-card>
    <v-tabs
      v-model="tab"
      background-color="grey darken-3"
      centered
      dark
      icons-and-text
    >
      <v-tabs-slider> </v-tabs-slider>
      <v-tab href="#tab-1">
        Basic Details
        <v-icon>mdi-account-plus</v-icon>
      </v-tab>
      <v-tab href="#tab-2">
        Additional Details
        <v-icon>mdi-home-edit</v-icon>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="i in 2" :key="i" :value="'tab-' + i">
        <v-card v-if="i === 1"> \ <BasicDetails /> </v-card>
        <v-card v-else>
          <AdditionalDetails />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <div class="btns">
      <router-link to="/customer">
        <v-btn
          depressed
          color="primary"
          @click="addCustomerDetails()"
          v-if="!$store.state.editingCustomer"
        >
          Add To The Customer Profiles
        </v-btn>
        <v-btn
          depressed
          color="primary"
          @click="updateCustomerDetails()"
          v-else
        >
          Update The Customer Profile
        </v-btn>
        <v-btn depressed color="error"> Cancel </v-btn>
      </router-link>
    </div>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BasicDetails from "./BasicDetails.vue";
import AdditionalDetails from "./AdditionalDetails.vue";

@Component({
  components: { BasicDetails, AdditionalDetails },
})
export default class AddCustomer extends Vue {
  tab = null;
  addCustomerDetails(): void {
    this.$store.state.editingProduct = false;
    this.$store.dispatch("addCustomerDetailsAction");
  }

  updateCustomerDetails() {
    this.$store.dispatch("updateCustomerAction");
  }
}
</script>

<style scoped>
.btns {
  display: flex;
  justify-content: center;
}
</style>
