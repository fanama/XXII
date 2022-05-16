import { useEffect, useRef } from "react";

interface Props {
  name: string;
}

export function VideoDisplayer({ name }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.load();
  }, [name]);

  return (
    <div>
      <h2>{name}</h2>
      <video controls width="720" ref={videoRef}>
        <source src={`/server/mp4/${name}`} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
}
