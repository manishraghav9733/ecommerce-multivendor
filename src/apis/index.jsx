import axios from "axios";

const crmApi = () => {
  return axios.create({
    baseURL: "https://ecommerce-videsh.herokuapp.com",
  });
};

export default crmApi;
