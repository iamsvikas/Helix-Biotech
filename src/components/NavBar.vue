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
        <span class="mdi mdi-menu mdi-24px"></span>
      </nav>
    </v-app-bar>
    <nav class="nav-second">
      <router-link to="/" class="nav-link"><span>Home</span> </router-link>

      <router-link to="/permissions" class="nav-link"
        ><span>Permissions</span>
      </router-link>
      <router-link to="/point-of-sale" class="nav-link"
        ><span>Point of Sale</span>
      </router-link>
      <router-link to="/reported-data" class="nav-link"
        ><span>Report Tool</span>
      </router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class extends Vue {}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  width: 95vw;
  align-items: center;
}
.nav-second {
  width: 100vw;
  background-color: rgb(0, 0, 0);
  font-size: 22px;
  height: 100px;
  color: white;
  padding-top: 60px;
  padding-right: 30px;
  justify-content: flex-end;
  column-gap: 20px;
}
.nav-link {
  color: white;
  text-decoration: none;
}
h1 {
  border: 2px solid black;
  padding: 5px;
}
</style>
