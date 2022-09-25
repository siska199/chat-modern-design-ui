import moment from "moment";
import {toast} from "react-toastify"
import { ToastOptions } from "react-toastify/dist/types";

export const Alert  = (type:"error"|"warning"|"success"|"info", message:string)=> {
  const config : ToastOptions = {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick:true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    delay : 0
  }
  switch(type){
    case "success":
      return toast.success(message,config)
    case "error":
      return toast.error(message,config)
    case "warning":
      return toast.warning(message,config)
    case "info":
      return toast.info(message,config)
    default:
      break;
  } 

}

export const handleUploadImageToCloudinary = async (image:File) => {
    const formImage = new FormData();
    formImage.append("file", image);
    formImage.append("upload_preset", "my-uploads");
    const dataImage = await fetch(
      "https://api.cloudinary.com/v1_1/university-state-of-malang-city/image/upload",
      {
        method: "POST",
        body: formImage,
      }
    ).then((r) => r.json());
  
    return dataImage.secure_url;
  };
  
  export const getFormatDate = (date:string) => {
    const dateNew = new Date(date);
    const stringHours = String(dateNew.getHours());
    const stringMinutes = String(dateNew.getMinutes());
  
    const dateNewFormat = `${
      stringHours.length > 1 ? stringHours : 0 + stringHours
    }:${stringMinutes.length > 1 ? stringMinutes : 0 + stringMinutes}`;
    return dateNewFormat;
  };
  
  export const formatDateForSumContactInfo = (date:string) => {
    const day = moment(date).calendar().split(" ")[0];
    const time = getFormatDate(date);
    if (day === "Today") {
      return time;
    } else if (day === "Tomorrow") {
      return day;
    } else {
      return moment(date).calendar("L");
    }
  };
  