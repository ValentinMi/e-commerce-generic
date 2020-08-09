import axios from "axios";

const url = "http://localhost:8000/api/products";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(url);
    return data.sort();
  } catch (error) {
    console.log(error.message);
  }
};
