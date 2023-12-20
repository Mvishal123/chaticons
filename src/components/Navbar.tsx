import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 inset-x-0 z-30 bg-slate-900 backdrop-blur-md w-full h-16">
      <div className="w-full h-full flex items-center justify-between container">
        <div className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent text-2xl font-bold">
          Chaticons<span className="text-slate-200">.ai</span>
        </div>
        <div>
          <div className="flex gap-4">
            <Link href="/docs">
              <Button className="">Docs</Button>
            </Link>
            <Button className="bg-slate-50 text-black hover:bg-slate-50/70">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
