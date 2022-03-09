import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
export interface State {
  sizes: string[];
  colors: string[];
  productList: any[];
  shoppingCart: any[];
  productListing: [];
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

  firstName: string;
  lastName: string;
  gender: string;
  mobile: number;
  age: number;
  city: string;
  postalCode: number;
  state: string;
  country: string;
  id: number;
  customerListing: any[];
  editingCustomer: boolean;

  productColor: string;
  productSize: string;
  productBorderColor: string;
  productButtonColor: string;
  posColor: string;
  posSize: string;
  posBorderColor: string;
  posButtonColor: string;
  reportColor: string;
  reportSize: string;
  reportBorderColor: string;
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
    productListing: [],
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
    firstName: "",
    lastName: "",
    gender: "",
    mobile: 0,
    age: 0,
    city: "",
    postalCode: 0,
    state: "",
    country: "",
    id: 0,
    customerListing: [],
    editingCustomer: false,

    //=======================Permission Manager========================
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

    //==============================Style Manager======================
    productColor: "",
    productSize: "",
    productBorderColor: "",
    productButtonColor: "",
    posColor: "",
    posSize: "",
    posBorderColor: "",
    posButtonColor: "",
    reportColor: "",
    reportSize: "",
    reportBorderColor: "",
  },

  getters: {
    count: (state) => state.count,
    totalPrice: (state) => state.totalPrice,
  },
  mutations: {
    async addProductDetailsMutate(state): Promise<void> {
      const productDetails = {
        id: Date.now(),
        product: state.productData,
        size: state.sizeData,
        color: state.colorData,
        gender: state.genderData,
        price: state.priceData,
        tax: state.taxData,
      };
      await axios.post("http://localhost:3000/post", productDetails);
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
    async updateMutate(state) {
      const res = await axios.get("http://localhost:3000/post");

      console.log(res.data);
      const temp = res.data.filter((item: any) => {
        return item.id === state.index;
      });
      if (temp.length > 0) {
        const data4 = {
          ...temp[0],
        };
        data4.product = state.productData;
        data4.size = state.sizeData;
        data4.color = state.colorData;
        data4.gender = state.genderData;
        data4.price = state.priceData;
        data4.tax = state.taxData;
        axios.put("http://localhost:3000/post/" + temp[0].id, data4);
      }
      state.editingProduct = false;
    },

    addSwitchMutate(state, payload) {
      state.addSwitch = payload;
    },
    deleteSwitchMuatate(state, payload) {
      state.deleteSwitch = payload;
    },
    editProductSwitchMutate(state, payload) {
      state.editProductSwitch = payload;
      state.editingProduct = !state.editingProduct;
    },
    clearDataMutate(state) {
      state.editingProduct = false;
      state.productData = "";
      state.sizeData = "";
      state.colorData = "";
      state.genderData = "";
      state.priceData = 0;
      state.taxData = 0;
      state.index = 0;
    },

    async addToCartMutate(state, payload) {
      const temp = state.shoppingCart.filter((item: any) => {
        return item.id === payload.id;
      });

      // const cust = { ...item };
      if (temp.length > 0) {
        const data = { ...temp[0] };
        data.quantity = data.quantity + payload.quantity;
        data.totalPrice = data.totalPrice + data.quantity * data.price;
        axios.put("http://localhost:3000/shoppingCart/" + temp[0].id, data);
      } else {
        axios.post("http://localhost:3000/shoppingCart", payload);
      }
    },
    async reportSubmitMutate(state) {
      axios.post("http://localhost:3000/reportedData", state.shoppingCart);
      const data = await axios.get("http://localhost:3000/shoppingCart");
      const response = await axios.get("http://localhost:3000/reportedData");
      state.reportedData = response.data;
      state.totalPrice = 0;
      data.data.forEach(async (item: any) => {
        await axios.delete("http://localhost:3000/shoppingCart/" + item.id);
      });
    },

    counterMutate(state) {
      state.count = state.count + 1;
    },

    async deleteAllMutate(state) {
      const res = await axios.get(`http://localhost:3000/shoppingCart`);
      res.data.forEach(async (item: any) => {
        await axios.delete(`http://localhost:3000/shoppingCart/` + item.id);
      });
    },

    deleteItemMutate(state, payload) {
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
    productListingMutate(state, payload) {
      state.productListing = payload;
    },
    displayReportedDataMutate(state, payload) {
      state.reportedData = payload;
    },
    async addCustomerDetailsMutate(state): Promise<void> {
      const customerDetails = {
        id: Date.now(),
        firstName: state.firstName,
        lastName: state.lastName,
        gender: state.gender,
        age: state.age,
        mobile: state.mobile,
        city: state.city,
        postalCode: state.postalCode,
        state: state.state,
        country: state.country,
      };
      await axios.post("http://localhost:3000/profiles", customerDetails);
    },
    customerListingMutate(state, payload) {
      state.customerListing = payload;
    },
    removeCustomerMutate(state, payload) {
      state.customerListing = state.customerListing.filter(
        (item) => item.id !== payload
      );
    },
    editCustomerMutate(state, payload) {
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.gender = payload.gender;
      state.mobile = payload.mobile;
      state.age = payload.age;
      state.city = payload.city;
      state.state = payload.state;
      state.country = payload.country;
      state.postalCode = payload.postalCode;
      state.id = payload.id;
    },
    async updateCustomerMutate(state) {
      const res = await axios.get("http://localhost:3000/profiles");

      console.log(res.data);
      const temp = res.data.filter((item: any) => {
        return item.id === state.id;
      });
      if (temp.length > 0) {
        const data4 = {
          ...temp[0],
        };
        data4.firstName = state.firstName;
        data4.lastName = state.lastName;
        data4.gender = state.gender;
        data4.mobile = state.mobile;
        data4.age = state.age;
        data4.city = state.city;
        data4.state = state.state;
        data4.country = state.country;
        data4.postalCode = state.postalCode;
        data4.id = state.id;
        axios.put("http://localhost:3000/profiles/" + temp[0].id, data4);
      }
      state.editingCustomer = false;
    },
  },
  actions: {
    addProductDetailsAction({ commit }) {
      commit("addProductDetailsMutate");
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
    productListingAction({ commit }, payload) {
      commit("productListingMutate", payload);
    },
    displayReportedData({ commit }, payload) {
      commit("displayReportedDataMutate", payload);
    },
    addCustomerDetailsAction({ commit }) {
      commit("addCustomerDetailsMutate");
    },
    updateCustomerAction({ commit }) {
      commit("updateCustomerMutate");
    },
    customerListingAction({ commit }, payload) {
      commit("customerListingMutate", payload);
    },
    removeCustomerAction({ commit }, payload) {
      commit("removeCustomerMutate", payload);
    },
    editCustomerAction({ commit }, payload) {
      commit("editCustomerMutate", payload);
    },
  },
  modules: {},
});
