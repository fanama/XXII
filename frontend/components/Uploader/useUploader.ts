import { FieldValues } from "react-hook-form";
import { User } from "../../domain/user";
import { Video } from "../../domain/video";
import { useLocalStorage } from "../../hooks/useLocalstorage";
import { uploadInfraVideo } from "../../infra/video";

export function useUploader(
  close: () => void,
  addVideo: (video: Video) => void
) {
  const { idUser } = useLocalStorage();

  const onSubmit = async (data: FieldValues) => {
    const formData = new FormData();
    formData.append("video", data.file[0]);
    if (!(await uploadInfraVideo(formData, idUser))) {
      alert("upload failed");
      return;
    }

    const video: Video = {
      id: 0,
      name: data.file[0].name,
      path: "",
      uploader: { _id: idUser } as User,
    };

    addVideo(video);

    close();
  };
  return { onSubmit };
}
