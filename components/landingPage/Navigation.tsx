import * as React from "react";
import { NavItemProps } from "./types";

const navItems: NavItemProps[] = [
  { label: "Home Page", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Resources", href: "/resources", hasDropdown: true },
];

export const Navigation: React.FC = () => {
  return (
    <header className="flex overflow-hidden flex-col max-md:mt-10 max-md:max-w-full">
      <nav className="flex flex-col justify-center px-16 w-full bg-white max-w-[1440px] min-h-[72px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-8 justify-center items-center w-full max-md:max-w-full">
          <div className="flex flex-col items-start self-stretch my-auto text-base min-w-[240px]">
            <div className="flex gap-8 items-center">
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  <a href={item.href} className="gap-1 self-stretch my-auto">
                    {item.label}
                    {item.hasDropdown && (
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/c4caa1f93db945838a1c516e4d9dbec5/524365663c114c411d869366a9906005c5de50e51e65441ec6d4e98e6d430fbf?apiKey=c4caa1f93db945838a1c516e4d9dbec5&"
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      />
                    )}
                  </a>
                  {item.hasDropdown && (
                    <div className="flex overflow-hidden absolute -bottom-40 z-0 flex-col p-6 max-w-full bg-white border border-black border-solid right-[-25px] w-[127px] max-md:px-5">
                      <a href="/blog">Blog</a>
                      <a href="/support" className="mt-4">
                        Support
                      </a>
                      <a href="/contact" className="mt-4">
                        Contact Us
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start self-stretch my-auto w-[84px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/c4caa1f93db945838a1c516e4d9dbec5/9ad04d36695f40b52c8a8de402075b4c3478a9ab42ef2e3fbce267bd39b678ce?apiKey=c4caa1f93db945838a1c516e4d9dbec5&"
              alt="Company Logo"
              className="object-contain aspect-[2.33] w-[84px]"
            />
          </div>

          <button className="flex flex-col flex-1 shrink justify-center items-end self-stretch my-auto text-base text-white whitespace-nowrap basis-0 min-w-[240px] max-md:max-w-full">
            <span className="gap-2 self-stretch px-5 py-2 bg-black border border-black border-solid">
              Menu
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
};
