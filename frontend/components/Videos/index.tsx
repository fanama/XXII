import { VideoDisplayer } from "../VideoDisplayer";
import { useVideos } from "./useVideos";

export function Videos() {
  const { videos, currentVideo, setCurrentVideo } = useVideos();

  return (
    <div>
      <h2>videos</h2>
      <div>
        {videos.map((video) => (
          <div
            onClick={() => {
              setCurrentVideo(video.name);
            }}
          >
            {video.name}
          </div>
        ))}
      </div>
      {currentVideo && <VideoDisplayer name={currentVideo} />}
    </div>
  );
}
