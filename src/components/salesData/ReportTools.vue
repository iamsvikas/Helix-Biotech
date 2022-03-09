<template>
  <div class="main">
    <h1>Sales Data</h1>
    <v-card width="90vw" class="card">
      <v-simple-table
        fixed-header
        height="70vh"
        :style="{ borderColor: $store.state.reportBorderColor }"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th
                class="text-left"
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                S. No.
              </th>
              <th
                class="text-left"
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                For Customer
              </th>
              <th
                class="text-left"
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                Product
              </th>
              <th
                class="text-left"
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                Gender
              </th>
              <th
                class="text-left"
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                Size
              </th>
              <th
                class="text-left"
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                Color
              </th>
              <th
                class="text-left"
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                Date
              </th>
              <th
                class="text-left"
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                Time
              </th>
              <th
                class="text-left"
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                Time Stamp
              </th>
              <th
                class="text-left"
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                Tax (in%)
              </th>
              <th
                class="text-left"
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                Quantity
              </th>
              <th
                class="text-left"
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                Price (inclusive taxes)
              </th>
              <th
                class="text-left"
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                Total Price (inclusive taxes)
              </th>
            </tr>
          </thead>
          <tbody v-for="tool in $store.state.reportedData" :key="tool.id">
            <tr v-for="item in tool" :key="item.cartId">
              <td
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                {{ item.counter }}
              </td>
              <td
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                {{ item.customerFirstName + " " + item.customerLastName }}
              </td>
              <td
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                {{ item.product }}
              </td>
              <td
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                {{ item.gender }}
              </td>
              <td
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                {{ item.size }}
              </td>
              <td
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                {{ item.color }}
              </td>
              <td
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                {{ item.date }}
              </td>
              <td
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                {{ item.time }}
              </td>
              <td
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                {{ item.timeStamp }}
              </td>
              <td
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                {{ item.tax }}
              </td>
              <td
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                {{ item.quantity }}
              </td>
              <td
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                ₹ {{ item.price }}
              </td>
              <td
                :style="{
                  color: $store.state.reportColor,
                  fontSize: $store.state.reportSize,
                }"
              >
                ₹ {{ item.totalPrice }}
              </td>
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
  border: 2px solid black;
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
