import { FieldValues } from "react-hook-form";
import { uploadInfraVideo } from "../../infra/video";

export function useUploader(close: () => void) {
  const onSubmit = async (data: FieldValues) => {
    console.log(typeof data.file[0]);

    const formData = new FormData();
    formData.append("video", data.file[0]);
    if (!(await uploadInfraVideo(formData))) {
      alert("upload failed");
      return;
    }

    alert("upload success");
    close();
  };
  return { onSubmit };
}
