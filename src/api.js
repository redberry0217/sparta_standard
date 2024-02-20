import axios from "axios";

// TODO: Axios 인스턴스를 생성합니다. App.jsx
const api = axios.create({
  baseURL: "http://localhost:4000",
});

// 요청 인터셉터 추가
api.interceptors.request.use(
  function (config) {
    console.log("요청합니다.");
    return config;
  },
  function (error) {
    console.log("요청 오류입니다.");
    return Promise.reject(error);
  }
);

// 응답 인터셉터 추가
api.interceptors.response.use(
  function (response) {
    console.log("응답입니다.");
    return response;
  },
  function (error) {
    console.log("응답 오류입니다.");
    return Promise.reject(error);
  }
);

export default api;
