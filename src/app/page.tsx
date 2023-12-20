import { HeroButton } from "@/components/HeroButton";
import HeroCodeCopy from "@/components/HeroCodeCopy";
import { Copy } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col justify-center items-center bg-black">
        <div className="h-[50vh] w-full flex flex-col justify-center items-center">
          <div className="mt-24 text-7xl font-extrabold tracking-tight text-white max-w-[1024px] text-center">
            Discover{" "}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              emotions
            </span>{" "}
            in
            <br />
            every message
          </div>
          <div className="mt-8">
            <HeroCodeCopy />
          </div>
        </div>
        <div className="h-[50vh] mt-6">
          <HeroButton />
        </div>
      </main>
    </>
  );
}
