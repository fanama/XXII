import { useDispaly } from "./useDisplay";

interface Props {
  name: string;
}

export function VideoDisplayer({ name }: Props) {
  const { videoRef, handlePlay, handlePause, changeTime } = useDispaly(name);

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
          max={videoRef.current.duration}
          onChange={changeTime}
        />
        <div className="flex flex-row justify-between">
          <button onClick={handlePlay}>play</button>
          <button onClick={handlePause}>pause</button>
        </div>
      </div>
    </div>
  );
}
