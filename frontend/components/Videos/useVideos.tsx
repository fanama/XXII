import { useEffect, useState } from "react";
import { User } from "../../domain/user";
import { Video } from "../../domain/video";
import { getInfraVideos } from "../../infra/video";

export function useVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [currentVideo, setCurrentVideo] = useState<string>("");

  useEffect(() => {
    console.log("getting videos");
    getVideos();
  }, []);

  const getVideos = async () => {
    setVideos(await getInfraVideos({ id: 1 } as User));
  };

  return { videos, currentVideo, setCurrentVideo };
}
