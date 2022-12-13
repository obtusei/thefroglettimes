import axios from "axios";
const BASE_URL = "http://djangohosting.pythonanywhere.com/api";
// const BASE_URL_V1 = "http://192.168.1.76:8000/api";

const handleSubmit = async (path: string, data: object) => {
  try {
    const response = await axios.post(`${BASE_URL}/${path}/`, data);
  } catch (error) {
    return error;
  }
};

export { handleSubmit };
