import moment from "moment";

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
  