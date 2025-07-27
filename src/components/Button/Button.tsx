import type { HTMLProps } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, "type"> {
  type?: "button" | "submit" | "reset";
  text: string;
}

const Button = ({ text, type = "button", ...props }: ButtonProps) => {
  return (
    <button type={type} className={styles.primary} {...props}>
      {text}
    </button>
  );
};

export default Button;
