import { Uploader } from "../Uploader";
import { VideoDisplayer } from "../VideoDisplayer";
import { Window } from "../Window";
import { box, button, vid } from "./tail";
import { useVideos } from "./useVideos";
import Image from "next/image";
export function Videos() {
  const {
    videos,
    currentVideo,
    setCurrentVideo,
    addVideo,
    display,
    open,
    close,
  } = useVideos();

  return (
    <div className="m-10">
      <Window close={close} display={display} title="Upload">
        <Uploader close={close} addVideo={addVideo} />
      </Window>
      <div className="flex flex-row gap-10">
        <div className={box}>
          <Image src="/logo.svg" width={70} height={70} />
          <button onClick={open} className={button}>
            upload new video
          </button>
          {videos.map((video) => (
            <div
              className={vid}
              onClick={() => {
                setCurrentVideo(video.name);
              }}
            >
              {video.name.split(".")[0]}
            </div>
          ))}
        </div>
        {currentVideo && <VideoDisplayer name={currentVideo} />}
      </div>
    </div>
  );
}
