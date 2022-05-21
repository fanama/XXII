import { useEffect, useRef } from "react";
export function useDispaly(name: string) {
  const videoRef = useRef<HTMLVideoElement>(document.createElement("video"));

  useEffect(() => {
    videoRef.current?.load();
  }, [name]);

  const handlePause = () => {
    videoRef.current?.pause();
  };
  const handlePlay = () => {
    videoRef.current?.play();
  };

  const changeTime = (e: { target: HTMLInputElement }) => {
    const value = e.target.value;
    videoRef.current.currentTime = parseInt(value);
  };

  return { videoRef, handlePause, handlePlay, changeTime };
}
