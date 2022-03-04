<template>
  <div>
    <v-app-bar app color="primary" dark>
      <nav class="nav">
        <div class="nav-left">
          <span class="mdi mdi-apps mdi-36px"></span>
          <span class="mdi mdi-fullscreen mdi-36px"></span>
        </div>
        <div>
          <v-img
            src="https://helixtechnologies.com/wp-content/uploads/2019/12/bt_logo_services_page.png"
            max-width="150"
          ></v-img>
        </div>
        <span
          class="mdi mdi-menu mdi-24px"
          @click="menuBar"
          v-if="!menuToggler"
        ></span>
        <span class="mdi mdi-close mdi-24px" @click="menuBar" v-else></span>
      </nav>
    </v-app-bar>
    <nav class="cards" v-if="menuToggler">
      <v-card
        class="card rounded-xl elevation-5"
        color="primary"
        min-width="200"
      >
        <h3 class="text">DASHBOARD</h3>
        <div class="text">Time Clock Manager</div>
      </v-card>
      <v-card
        class="card rounded-xl elevation-5"
        color="primary"
        min-width="400"
      >
        <h3 class="text">INVENTORY</h3>
        <div class="inventory">
          <span class="text">
            <div>Current Inventory</div>
            <div>Inventory Tools</div>
            <div class="sub">
              <router-link to="/" class="nav-link">
                <div @click="menuToggler = !menuToggler">Products</div>
              </router-link>
              <div>Product Categories</div>
              <div>Batch Types</div>
              <div>Strain</div>
              <div>Brands</div>
              <div>Vendors & Laboratories</div>
              <div>Inventory Rooms</div>
              <div>Inventory Audits</div>
            </div>
          </span>
          <span class="text">
            <div>Pricing Tools</div>
            <div class="sub">
              <div>Price Points</div>
              <div>Batch Level Pricing</div>
              <div>Member Level Pricing</div>
              <div>Tax Categories</div>
              <div>Pricing Options</div>
            </div>
            <div>Batch Transfer</div>
            <div class="sub">
              <div>New Batches</div>
              <div>Purchase order</div>
              <div>Inbound Transfer</div>
              <div>Quote</div>
              <div>Outbound Transfer</div>
              <div>Drivers</div>
              <div>Vehicles</div>
            </div>
          </span>
        </div>
      </v-card>
      <v-card
        class="card rounded-xl elevation-5"
        color="primary"
        min-width="200"
      >
        <h3 class="text">MONEY</h3>
        <div class="text">Money Manager</div>
        <div class="text">Employee Close Till</div>
        <div class="text">Payment From Till</div>
      </v-card>
      <v-card
        class="card rounded-xl elevation-5"
        color="primary"
        min-width="200"
      >
        <h3 class="text">RETAIL</h3>
        <div class="text">Check-in</div>
        <router-link to="/point-of-sale" class="nav-link">
          <div class="text" @click="menuToggler = !menuToggler">
            Point Of Sale
          </div>
        </router-link>
        <div class="text">Order Fullfilment</div>
        <div class="text">Customer Profile</div>
        <div class="text">Management</div>
        <div class="text">Retail Sales History</div>
        <div class="text">Retail Options</div>
        <div class="text sub">
          <div>Discount Manager</div>
          <div>Loyalty Programs</div>
          <div>Retail Settings</div>
          <div>Doctors</div>
        </div>
      </v-card>

      <v-card
        class="card rounded-xl elevation-5"
        color="primary"
        min-width="200"
      >
        <h3 class="text">Reports</h3>
        <router-link to="/reported-data" class="nav-link">
          <div class="text" @click="menuToggler = !menuToggler">
            Report Tools
          </div>
        </router-link>
      </v-card>
      <v-card
        class="card rounded-xl elevation-5"
        color="primary"
        min-width="200"
      >
        <h3 class="text">LOCATIONS</h3>
        <div class="text">Sales Limit</div>
        <router-link to="/permissions" class="nav-link">
          <div class="text" @click="menuToggler = !menuToggler">
            Template Manager
          </div>
        </router-link>
        <div class="text">Reservations</div>
        <div class="text">Import/Export Wizard</div>
      </v-card>
      <v-card
        class="card rounded-xl elevation-5"
        color="primary"
        min-width="200"
      >
        <h3 class="text">SYSTEM SETTINGS</h3>
        <div class="text">Data Sharing Options</div>
      </v-card>
      <v-card
        class="card rounded-xl elevation-5"
        color="primary"
        min-width="200"
      >
        <h3 class="text">SUPPORT</h3>
        <div class="text">Create a ticket</div>
        <div class="text">View Training</div>
        <div class="text">Documentation</div>
      </v-card>
      <v-card
        class="card rounded-xl elevation-5"
        color="primary"
        min-width="200"
      >
        <h3 class="text">Customer</h3>
        <router-link to="/customer-profiles" class="nav-link">
          <div class="text" @click="menuToggler = !menuToggler">
            Customer Profiles Page
          </div>
        </router-link>
      </v-card>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class extends Vue {
  menuToggler = false;
  menuBar() {
    this.menuToggler = !this.menuToggler;
  }
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  width: 95vw;
  align-items: center;
}
.cards {
  width: 100%;
  background-color: #1976d2;
  height: 500px;
  overflow-x: scroll;
  overflow-y: hidden;
  padding: 50px 0;
  margin-top: 60px;
  padding-top: 40px;
}
.nav-link {
  text-decoration: none;
  color: white;
}
.text {
  color: white;
  font-size: 14px;
}
.card {
  padding: 10px;
  height: 400px;
  margin: 0 10px;
}
h3 {
  text-align: center;
  padding-bottom: 20px;
  text-decoration: underline;
}
.inventory {
  display: flex;
  gap: 50px;
}
.sub {
  padding-left: 30px;
}
/* width */
::-webkit-scrollbar {
  height: 20px;
  /* margin-bottom: 50px; */
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1976d2;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #205688;
}
</style>
