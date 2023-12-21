import React from "react";

import { SparklesCore } from "./SparklesCore";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

export const HeroButton = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <Button
        className="border-t border-t-sky-400 hover:outline-b hover:outline-b-indigo-500 transition-all font-sans font-medium text-md md:text-xl flex items-center gap-4 group"
        size={"xl"}
      >
        Get started
        <ChevronRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
      </Button>
      <div className="w-[20rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-92 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-30 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-1/2" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(150px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};
