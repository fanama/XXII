import { useDispaly } from "./useDisplay";

interface Props {
  name: string;
}

export function VideoDisplayer({ name }: Props) {
  const {
    currentTime,
    duration,
    videoRef,
    handlePlay,
    handlePause,
    changeTime,
    moveForward,
    moveBackward,
  } = useDispaly(name);

  return (
    <div>
      <h2 className="font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600">
        {name.split(".")[0]}
      </h2>
      <video width="720" ref={videoRef} controls={false}>
        <source src={`/server/mp4/${name}`} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      <div className="flex flex-col">
        <input
          type="range"
          min={0}
          value={currentTime}
          max={duration}
          onChange={changeTime}
        />
        <div className="flex flex-row justify-between">
          <button onClick={moveBackward}>{"<<"}</button>
          <button onClick={handlePlay}>{"|>"}</button>
          <button onClick={handlePause}>{"||"}</button>
          <button onClick={moveForward}>{">>"}</button>
        </div>
      </div>
    </div>
  );
}
