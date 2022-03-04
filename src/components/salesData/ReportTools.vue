<template>
  <div class="main">
    <h1>Sales Data</h1>
    <v-card width="90vw" class="card">
      <v-simple-table fixed-header height="70vh">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">S. No.</th>
              <th class="text-left">For Customer</th>
              <th class="text-left">Product</th>
              <th class="text-left">Gender</th>
              <th class="text-left">Size</th>
              <th class="text-left">Color</th>
              <th class="text-left">Date</th>
              <th class="text-left">Time</th>
              <th class="text-left">Time Stamp</th>
              <th class="text-left">Tax (in%)</th>
              <th class="text-left">Quantity</th>
              <th class="text-left">Price (inclusive taxes)</th>
              <th class="text-left">Total Price (inclusive taxes)</th>
            </tr>
          </thead>
          <tbody v-for="tool in $store.state.reportedData" :key="tool.id">
            <tr v-for="item in tool" :key="item.cartId">
              <td>{{ item.counter }}</td>
              <td>
                {{ item.customerFirstName + " " + item.customerLastName }}
              </td>
              <td>{{ item.product }}</td>
              <td>{{ item.gender }}</td>
              <td>{{ item.size }}</td>
              <td>{{ item.color }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.time }}</td>
              <td>{{ item.timeStamp }}</td>
              <td>{{ item.tax }}</td>
              <td>{{ item.quantity }}</td>
              <td>₹ {{ item.price }}</td>
              <td>₹ {{ item.totalPrice }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class ReportTools extends Vue {
  async mounted() {
    const resp = await axios.get("http://localhost:3000/reportedData");
    this.$store.dispatch("displayReportedData", resp.data);
  }
}
</script>

<style scoped>
.card {
  overflow-y: scroll;
  overflow-x: scroll;
}
.main {
  display: flex;
  align-items: center;
  flex-direction: column;
}

/* for scrolling purpose
 ::-webkit-scrollbar {
  height: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #888;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
} */
</style>
