"use client";
import useTheme from "../Theme/Theme";
import { ButtonProps } from "./type";

const Button = ({
  className = "",
  children = "",
  color = "primary",
  disabled = false,
  endIcon = "",
  startIcon = "",
  isFullWidth = false,
  isLoading = false,
  onClick = () => {},
  style = {},
  textSize = "14px",
  textWeight = 400,
  textVariant = "button",
  variant = "regular",
  textColor = "#fff",
  type = "",
  ...rest
}: ButtonProps) => {
  let bgcolor;
  const { colorTheme } = useTheme();
  switch (color) {
    case "primary":
      bgcolor = colorTheme.main;
  }

  return (
    <div className={`flex h-full ${isFullWidth ? "w-full" : "w-fit"} `}>
      <button
        className={`px-6 py-2 rounded-lg font-semibold h-fit w-full active:opacity-100 hover:opacity-80 transition ease-in-out delay-50
                ${
                  variant === "regular"
                    ? `bg-[${bgcolor}] text-[#F7F7F7]`
                    : variant === "outlined"
                    ? `bg-transparent border-solid border-2 border-[${bgcolor}] text-[${bgcolor}]`
                    : variant === "text"
                    ? `bg-transparent`
                    : ""
                } ${className}`}
        style={{
          fontSize: textSize,
          minHeight: "38px",
          ...style,
        }}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
