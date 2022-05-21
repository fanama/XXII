import { useEffect, useState } from "react";
import { User } from "../../domain/user";
import { Video } from "../../domain/video";
import { useLocalStorage } from "../../hooks/useLocalstorage";
import { getInfraVideos } from "../../infra/video";

export function useVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentVideo, setCurrentVideo] = useState<string>("");
  const [display, setDisplay] = useState<boolean>(false);
  const { idUser } = useLocalStorage();

  useEffect(() => {
    idUser && getVideos();
  }, [idUser]);

  const close = () => {
    setDisplay(false);
  };
  const open = () => {
    setDisplay(true);
  };

  const getVideos = async () => {
    setVideos(await getInfraVideos({ id: 1, _id: idUser } as User));
  };

  const addVideo = (video: Video) => {
    setVideos([...videos, video]);
  };

  return {
    videos,
    currentVideo,
    setCurrentVideo,
    close,
    open,
    display,
    addVideo,
  };
}
