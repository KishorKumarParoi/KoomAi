import * as React from "react";
import { CTAButtonProps } from "./types";

export const CTAButton: React.FC<CTAButtonProps> = ({
  label,
  variant,
  icon,
}) => {
  const baseStyles = "gap-2 self-stretch px-6 py-3 max-md:px-5";
  const variantStyles =
    variant === "primary"
      ? "text-white bg-black border border-black border-solid"
      : "text-black border border-black border-solid";

  return (
    <button className={`${baseStyles} ${variantStyles}`}>
      <span className="self-stretch my-auto">{label}</span>
      {icon && (
        <img
          src={icon}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        />
      )}
    </button>
  );
};
