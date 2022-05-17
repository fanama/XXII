import { ReactElement } from "react";
import styles from "./style.module.scss";
// import Image from "next/image";

interface Props {
  title?: string;
  children?: JSX.Element | JSX.Element[] | string | string[] | any;
  display?: boolean;
  close: () => void;
}

export function Window({
  children,
  title,
  close,
  display,
}: Props): ReactElement {
  if (!display) return <></>;

  return (
    <div className={styles.container}>
      <div className={styles.headder}>
        <svg
          width="50"
          height="50"
          viewBox="-10 -10 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={close}
        >
          <circle
            cx="10"
            cy="10"
            r="19.5"
            fill="#765ED7"
            stroke="#765ED7"
            strokeWidth="3"
          />

          <path
            d="M21.5 3.66856L18.5001 0.856201L11 7.88759L3.49985 0.856201L0.5 3.66856L8.00015 10.7L0.5 17.7313L3.49985 20.5437L11 13.5123L18.5001 20.5437L21.5 17.7313L13.9998 10.7L21.5 3.66856Z"
            fill="white"
          />
        </svg>
        <h2>{title && title}</h2>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
