import type { FC } from "react";

const defaultStyles = "rounded shadow px-5 py-3 transition-all";

export enum BUTTON_STYLES {
  PRIMARY = "bg-primary-300  hover:bg-primary-600",
  SECONDARY = "bg-secondary-300 hover:bg-secondary-600",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styles: BUTTON_STYLES;
}

export const Button: FC<ButtonProps> = ({
  onClick = () => {},
  children,
  type,
  styles,
}) => {
  return (
    <button
      type={type}
      className={`${defaultStyles} ${styles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
