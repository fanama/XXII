import { FieldValues } from "react-hook-form";
import { User } from "../../domain/user";
import { Video } from "../../domain/video";
import { uploadInfraVideo } from "../../infra/video";

export function useUploader(
  close: () => void,
  addVideo: (video: Video) => void
) {
  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();
    formData.append("video", data.file[0]);
    if (!(await uploadInfraVideo(formData))) {
      alert("upload failed");
      return;
    }

    const video: Video = {
      id: 0,
      name: data.file[0].name,
      path: "",
      uploader: {} as User,
    };

    addVideo(video);

    close();
  };
  return { onSubmit };
}
