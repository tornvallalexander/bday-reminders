import * as React from "react"
import clsx from "clsx";

interface Props {
  variant?: "default" | "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean,
  children: React.ReactNode | React.ReactNode[];
}

// eslint-disable-next-line react/display-name
const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<
    Props & JSX.IntrinsicElements["button"]
    >
  >((props, ref) => {
  const {
    variant,
    size,
    loading,
    className,
    children,
    ...buttonProps
  } = props

  return (
    <button ref={ref} {...buttonProps} className={clsx(
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
})

export {
  Button,
}