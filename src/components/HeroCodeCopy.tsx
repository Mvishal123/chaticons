"use client";
import { CheckCircle, Copy } from "lucide-react";
import React, { useState } from "react";

const HeroCodeCopy = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onCopy = async () => {
    setIsCopied(true);
    navigator.clipboard.writeText("npm install chaticons");
    await new Promise(() => setTimeout(() => setIsCopied(false), 2 * 1000));
  };

  return (
    <div>
      <div className=" bg-gray-900 w-18 flex justify-between items-center rounded-md px-4 py-2 group">
        <div className="text-white px-2 flex-1 font-mono">
          npm install chaticons
        </div>
        {!isCopied ? (
          <Copy
            className="group-hover:flex size-3 text-slate-400 hover:scale-[110%]"
            onClick={onCopy}
          />
        ) : (
          <CheckCircle className="size-3 text-emerald-700" onClick={onCopy} />
        )}
      </div>
    </div>
  );
};

export default HeroCodeCopy;
