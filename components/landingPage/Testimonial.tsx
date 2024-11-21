import * as React from "react";
import { TestimonialProps } from "./types";

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  avatar,
  companyLogo,
  rating,
}) => {
  return (
    <article className="flex overflow-hidden flex-col items-center max-w-full w-[768px]">
      <div className="flex overflow-hidden gap-1 items-start">
        {[...Array(rating)].map((_, i) => (
          <img
            key={i}
            src="https://cdn.builder.io/api/v1/image/assets/c4caa1f93db945838a1c516e4d9dbec5/0faa8b18428a60cda2ac4beb4b2ddb3fb9c80d43af605c137a236c1db91b28f8?apiKey=c4caa1f93db945838a1c516e4d9dbec5&"
            alt=""
            className="object-contain shrink-0 w-5 aspect-[1.05]"
          />
        ))}
      </div>
      <blockquote className="self-stretch text-[var(] max-md:max-w-full">
        {quote}
      </blockquote>
      <div className="flex gap-5 items-center mt-8 text-base text-[var(] max-md:max-w-full">
        <img
          src={avatar}
          alt={author}
          className="object-contain shrink-0 self-stretch my-auto w-14 rounded-full aspect-square"
        />
        <div className="flex flex-col self-stretch my-auto">
          <div className="font-semibold">{author}</div>
          <div>{role}</div>
        </div>
        {companyLogo && (
          <>
            <div className="shrink-0 self-stretch my-auto w-0 border border-black border-solid h-[61px]" />
            <img
              src={companyLogo}
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-[2.5] w-[120px]"
            />
          </>
        )}
      </div>
    </article>
  );
};
