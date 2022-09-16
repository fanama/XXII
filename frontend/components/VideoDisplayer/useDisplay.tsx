import { useEffect, useRef, useState } from "react";
export function useDispaly(name: string) {
  const videoRef = useRef<HTMLVideoElement>(document.createElement("video"));
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    videoRef.current.currentTime = 0;
    videoRef.current?.load();
    videoRef.current.ontimeupdate = function () {
      updateTime();
    };
  }, [name]);

  function updateTime() {
    setCurrentTime(videoRef.current.currentTime);
  }

  const handlePause = () => {
    videoRef.current?.pause();
  };
  const handlePlay = () => {
    videoRef.current?.play();
  };

  const changeTime = (e: { target: HTMLInputElement }) => {
    const value = e.target.value;
    videoRef.current.currentTime = parseFloat(value);
  };

  const moveForward = () => {
    videoRef.current.currentTime += 20;
  };

  const moveBackward = () => {
    videoRef.current.currentTime -= 20;
  };

  return {
    currentTime,
    duration: videoRef.current.duration,
    videoRef,
    handlePause,
    handlePlay,
    changeTime,
    moveBackward,
    moveForward,
  };
}
