import * as React from "react"
import clsx from "clsx";

interface Props {
  variant?: "default" | "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean,
  children: React.ReactNode | React.ReactNode[];
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  className,
  ...buttonProps
}: Props & JSX.IntrinsicElements["button"]) => {
  return (
    <button {...buttonProps} className={clsx(
      "btn",
      {
        "": variant === "default",
        "btn-primary": variant === "primary",
        "btn-secondary": variant === "secondary",
        "btn-error": variant === "danger",
        "btn-sm": size === "sm",
        "btn-md": size === "md",
        "btn-lg": size === "lg",
        "loading": loading,
      },
      className
    )}>
      {children}
    </button>
  )
}

export {
  Button,
}