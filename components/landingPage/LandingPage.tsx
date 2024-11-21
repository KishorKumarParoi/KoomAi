import * as React from "react";
import { Navigation } from "./Navigation";
import { FeatureCard } from "./FeatureCard";
import { Testimonial } from "./Testimonial";
import { CTAButton } from "./CTAButton";
import { NewsletterForm } from "./NewsletterForm";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/c4caa1f93db945838a1c516e4d9dbec5/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?apiKey=c4caa1f93db945838a1c516e4d9dbec5&",
    title: "Seamless Video Sharing Made Simple",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  // ... rest of features data
];

const testimonials = [
  {
    quote:
      "This application transformed the way I connect with my clients. The ease of recording and sharing videos has made my outreach more effective than ever!",
    author: "John Doe",
    role: "Sales Manager, Acme Corp",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets/c4caa1f93db945838a1c516e4d9dbec5/0df769b8fb553ad7114a5389beeaf1cd3b26f19398cdc0cefc0d68fcffb12a9c?apiKey=c4caa1f93db945838a1c516e4d9dbec5&",
    companyLogo:
      "https://cdn.builder.io/api/v1/image/assets/c4caa1f93db945838a1c516e4d9dbec5/5dd50d96542244a016f788d41a42467d1fc4cba0f4c6b8306d9c2b977decfec0?apiKey=c4caa1f93db945838a1c516e4d9dbec5&",
    rating: 5,
  },
  // ... rest of testimonials data
];

export const LandingPage: React.FC = () => {
  return (
    <main className="flex flex-wrap gap-10">
      <Navigation />

      <section className="flex overflow-hidden flex-col justify-center px-16 py-28 w-full bg-white max-w-[1440px] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center w-full max-md:max-w-full">
          <div className="flex overflow-hidden flex-col flex-1 shrink justify-center items-center self-stretch px-20 py-64 my-auto bg-black basis-0 min-w-[240px] max-md:px-5 max-md:py-24 max-md:max-w-full">
            <div className="flex shrink-0 w-32 h-[102px]" />
          </div>
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-40 min-w-[240px] max-md:max-w-full">
            <div className="flex flex-col w-full text-[var(] max-md:max-w-full">
              <h1 className="text-6xl font-bold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Medium length hero heading goes here
              </h1>
              <p className="mt-6 text-lg leading-7 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </section>

      <section className="flex overflow-hidden flex-col items-center px-16 py-28 w-full bg-white max-w-[1440px] text-[var(] max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 justify-center items-start w-full max-md:max-w-full">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      <section className="flex overflow-hidden flex-col justify-center px-16 py-28 max-w-full bg-white w-[1440px] max-md:px-5 max-md:py-24">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </section>

      {/* Rest of the sections following the same pattern */}

      <footer className="flex overflow-hidden flex-col px-16 py-20 w-full bg-white max-w-[1440px] max-md:px-5 max-md:max-w-full">
        {/* Footer content */}
      </footer>
    </main>
  );
};
