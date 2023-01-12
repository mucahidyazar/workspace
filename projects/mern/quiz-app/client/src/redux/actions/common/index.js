import axios from "../../../services/axios";
import { GET_IMAGE } from "../../types";

export const addImage = (data, photoType) => {
  return async (dispatch) => {
    const datas = await axios.post("/upload-image", data, photoType);

    if (photoType === "profile-photo") {
      console.log(datas.data);
      let profileData = await axios.post("/user/image", datas.data);
      console.log("propfile2");
      console.log(profileData);
    } else {
      getImageInformation(datas.data);
    }
  };
};

export const getImageInformation = (imageData) => ({
  type: GET_IMAGE,
  imageData,
});
