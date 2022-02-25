import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export interface State {
  sizes: string[];
  colors: string[];
  productList: any[];
  shoppingCart: any[];
  editingProduct: boolean;
  productData: string;
  sizeData: string;
  colorData: string;
  genderData: string;
  priceData: number;
  taxData: number;
  index: number;
  quantity: number;
  inventory: number;
  reportedData: any[];
  count: number;

  productsSwitch: boolean;
  editProductSwitch: boolean;
  productNameSwitch: boolean;
  sizeSwitch: boolean;
  genderSwitch: boolean;
  colorSwitch: boolean;
  priceTaxSwitch: boolean;
  priceSwitch: boolean;
  taxSwitch: boolean;
  deleteSwitch: boolean;
  addSwitch: boolean;
  totalPrice: number;
}

export default new Vuex.Store<State>({
  state: {
    editingProduct: false,
    productData: "",
    sizeData: "",
    colorData: "",
    genderData: "",
    priceData: 0,
    taxData: 0,
    index: 0,
    totalPrice: 0,
    sizes: ["XS", "Small", "Medium", "Large", "Extra Large"],
    colors: ["Red", "Blue", "Green", "Black", "White"],
    quantity: 0,
    inventory: 0,
    count: 0,
    productList: [
      {
        product: "Shirt",
        gender: "Male",
        size: "XL",
        color: "Red",
        price: 999,
        tax: 10,
        id: 1,
        inventory: 100,
      },
      {
        product: "T-Shirt",
        gender: "Female",
        size: "L",
        color: "Blue",
        price: 700,
        tax: 15,
        id: 2,
        inventory: 400,
      },
      {
        product: "Jeans",
        gender: "Others",
        size: "M",
        color: "Black",
        price: 1199,
        tax: 20,
        id: 3,
        inventory: 350,
      },
      {
        product: "Kurta",
        gender: "Male",
        size: "Large",
        color: "Purple",
        price: 799,
        tax: 5,
        id: 4,
        inventory: 150,
      },
      {
        product: "Pant",
        gender: "Female",
        size: "L",
        color: "Blue",
        price: 900,
        tax: 15,
        id: 5,
        inventory: 300,
      },
      {
        product: "Suit",
        gender: "Others",
        size: "XL",
        color: "Black",
        price: 1999,
        tax: 20,
        id: 6,
        inventory: 50,
      },
    ],

    //Permission Manager
    productsSwitch: true,
    editProductSwitch: true,
    productNameSwitch: true,
    sizeSwitch: true,
    genderSwitch: true,
    colorSwitch: true,
    priceTaxSwitch: true,
    priceSwitch: true,
    taxSwitch: true,
    deleteSwitch: true,
    addSwitch: true,

    shoppingCart: [],
    reportedData: [],
  },
  getters: {
    count: (state) => state.count,
    totalPrice: (state) => state.totalPrice,
  },
  mutations: {
    addProductDetailsMutate(state, payload: any): void {
      state.productList.push(payload);
      console.log("data from productList:", state.productList, payload);
    },
    removeProductMutate(state, id) {
      state.productList = state.productList.filter((item) => item.id !== id);
    },
    editProductMutate(state, payload) {
      state.productData = payload.product;
      state.sizeData = payload.size;
      state.colorData = payload.color;
      state.genderData = payload.gender;
      state.priceData = payload.price;
      state.taxData = payload.tax;
      state.index = payload.id;
    },
    updateMutate(state) {
      state.productList.map((item) => {
        if (item.id === state.index) {
          item.product = state.productData;
          item.size = state.sizeData;
          item.color = state.colorData;
          item.gender = state.genderData;
          item.price = state.priceData;
          item.tax = state.taxData;
        }
      });
    },
    addSwitchMutate(state, payload) {
      state.addSwitch = payload;
      console.log(state.addSwitch);
    },
    deleteSwitchMuatate(state, payload) {
      console.log(state.deleteSwitch, "payload:", payload);
      state.deleteSwitch = payload;
      console.log(state.deleteSwitch);
    },
    editProductSwitchMutate(state, payload) {
      console.log("@line101 store", state.editProductSwitch);
      state.editProductSwitch = payload;
      console.log("@line103 store", state.editProductSwitch);
      state.editingProduct = !state.editingProduct;
    },
    clearDataMutate(state) {
      state.editingProduct = false;
      console.log("clear data @line 73", state.editingProduct);
      state.productData = "";
      state.sizeData = "";
      state.colorData = "";
      state.genderData = "";
      state.priceData = 0;
      state.taxData = 0;
      state.index = 0;
      console.log("clearData", state.productList);
    },

    addToCartMutate(state, payload) {
      const temp = state.shoppingCart.filter((item: any) => {
        return item.id === payload.id;
      });

      if (temp.length > 0) {
        temp[0].quantity = temp[0].quantity + payload.quantity;
      } else {
        state.shoppingCart.push(payload);
      }
    },

    reportSubmitMutate(state) {
      console.log("shooping cart:", state.shoppingCart);
      state.reportedData.push(state.shoppingCart);
      state.shoppingCart = [];
      console.log("reported data", state.reportedData);
      state.totalPrice = 0;
    },
    counterMutate(state) {
      state.count = state.count + 1;
    },
    deleteAllMutate(state) {
      state.shoppingCart = [];
    },
    deleteItemMutate(state, payload) {
      console.log("payload", payload);
      state.shoppingCart = state.shoppingCart.filter(
        (item) => item.id !== payload
      );
      let total = 0;
      state.shoppingCart.forEach((elem) => {
        total = total + elem.totalPrice;
      });
      state.totalPrice = total;
      total = 0;
    },
    calculateTotalMutate(state) {
      let total = 0;
      state.shoppingCart.forEach((elem) => {
        total = total + elem.totalPrice;
      });
      state.totalPrice = total;
      total = 0;
    },
  },
  actions: {
    addProductDetailsAction({ commit }, payload) {
      commit("addProductDetailsMutate", payload);
    },
    removeProductAction({ commit }, id) {
      commit("removeProductMutate", id);
    },
    editProductAction({ commit }, item) {
      commit("editProductMutate", item);
    },
    updateAction({ commit }) {
      commit("updateMutate");
    },
    addSwitchAction({ commit }, payload) {
      commit("addSwitchMutate", payload);
    },
    deleteSwitchAction({ commit }, payload) {
      commit("deleteSwitchMuatate", payload);
    },
    editProductSwitchAction({ commit }, payload) {
      commit("editProductSwitchMutate", payload);
    },
    clearDataAction({ commit }) {
      commit("clearDataMutate");
    },
    // incrementAction({ commit }) {
    //   commit("incrementMutate");
    // },
    addToCartAction({ commit }, payload) {
      commit("addToCartMutate", payload);
    },
    reportSubmitAction({ commit }) {
      commit("reportSubmitMutate");
    },
    counterAction({ commit }) {
      commit("counterMutate");
    },
    deleteAllAction({ commit }) {
      commit("deleteAllMutate");
    },
    deleteItemAction({ commit }, payload) {
      commit("deleteItemMutate", payload);
    },
    calculateTotalAction({ commit }) {
      commit("calculateTotalMutate");
    },
  },
  modules: {},
});
