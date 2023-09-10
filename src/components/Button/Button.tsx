import React, { FC } from "react";
import "./Button.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  component?: "button" | "a";
  href?: string;
  variant?: "outlined" | "filled";
}

const Button: FC<ButtonProps> = ({ component, href, variant, ...props }) => {
  const commonProps = {
    ...(component === "a" ? { href: href || "" } : {}),
    ...props,
  };

  if (component === "a") {
    return (
      <a
        className={`button ${variant === "outlined" ? "outlined" : ""} ${
          variant === "filled" ? "filled" : ""
        } ${props.className ? props.className : ""}`}
        {...(commonProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {props.children}
      </a>
    );
  } else {
    return (
      <button
        className={`button ${variant === "outlined" ? "outlined" : ""} ${
          variant === "filled" ? "filled" : ""
        } ${props.className ? props.className : ""}`}
        {...(commonProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {props.children}
      </button>
    );
  }
};

export default Button;
