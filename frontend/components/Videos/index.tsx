import { Uploader } from "../Uploader";
import { VideoDisplayer } from "../VideoDisplayer";
import { Window } from "../Window";
import { useVideos } from "./useVideos";

export function Videos() {
  const { videos, currentVideo, setCurrentVideo, display, open, close } =
    useVideos();

  return (
    <div>
      <h2>videos</h2>
      <Window close={close} display={display} title="Upload">
        <Uploader close={close} />
      </Window>
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
      <button onClick={open}>upload new video</button>
      {currentVideo && <VideoDisplayer name={currentVideo} />}
    </div>
  );
}
