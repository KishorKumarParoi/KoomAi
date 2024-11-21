import * as React from "react";
import { FeatureCardProps } from "./types";

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
      <img
        src={icon}
        alt=""
        className="object-contain self-center w-12 aspect-square"
      />
      <div className="flex flex-col items-start mt-6 w-full">
        <h3 className="text-2xl font-bold leading-9">{title}</h3>
        <p className="mt-4 text-base leading-6">{description}</p>
      </div>
    </article>
  );
};
