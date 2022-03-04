<template>
  <div class="input">
    <v-col cols="6" sm="16">
      <h2>Please Fill Out Details Below</h2>
      <v-form ref="form">
        <v-text-field
          v-model="$store.state.firstName"
          label="First Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="$store.state.lastName"
          label="Last Name"
          required
        ></v-text-field>
        <v-container fluid>
          <v-radio-group v-model="$store.state.gender" row>
            <v-radio label="Male" value="Male"></v-radio>
            <v-radio label="Female" value="Female"></v-radio>
            <v-radio label="Others" value="Others"></v-radio>
          </v-radio-group>
        </v-container>
        <v-text-field
          v-model="$store.state.age"
          label="Age"
          required
        ></v-text-field>
        <v-text-field
          v-model="$store.state.mobile"
          label="Mobile No."
          required
        ></v-text-field>
      </v-form>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BasicDetails extends Vue {}
</script>
<style scoped>
.input {
  display: flex;
  justify-content: center;
}
</style>
