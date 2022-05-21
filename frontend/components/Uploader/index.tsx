import React from "react";

import { useForm } from "react-hook-form";
import { Video } from "../../domain/video";
import { useUploader } from "./useUploader";

interface Props {
  close: () => void;
  addVideo: (video: Video) => void;
}

export function Uploader({ close, addVideo }: Props) {
  const { onSubmit } = useUploader(close, addVideo);
  const { register, handleSubmit } = useForm();

  return (
    <form
      className="flex flex-column gap-1em"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        type="file"
        placeholder="file"
        accept="video/mp4"
        {...register("file", {})}
      />

      <input
        className="bg-blue-700 text-white p-2"
        type="submit"
        value="submit"
      />
    </form>
  );
}
