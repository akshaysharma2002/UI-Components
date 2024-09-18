//api.js
import axios from "axios";

const registerCustomer = async (formData) => {
  try {
    const response = await axios.post("https://vectorlogin.azurewebsites.net/Customer/RegisterCustomer",formData,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    
    return response.data;
  } catch (error) {
    console.error("API error:", error);
    throw error;
  }
};


const API = {
  registerCustomer,
};

export default API;
