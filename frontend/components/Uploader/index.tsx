import React from "react";

import { useForm } from "react-hook-form";
import { useUploader } from "./useUploader";

interface Props {
  close: () => void;
}

export function Uploader({ close }: Props) {
  const { onSubmit } = useUploader(close);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="file"
        placeholder="file"
        accept="video/mp4"
        {...register("file", {})}
      />

      <input type="submit" />
    </form>
  );
}
