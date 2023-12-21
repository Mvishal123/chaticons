import { HeroButton } from "@/components/HeroButton";
import HeroCodeCopy from "@/components/HeroCodeCopy";
import { Copy } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="mt-24 text-4xl md:text-7xl font-extrabold tracking-tight text-white max-w-[1024px] text-center">
            Discover{" "}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
              emotions
            </span>{" "}
            in
            <br />
            every message
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-80 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-90"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative aspect-[1155/678]  -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#72d2ff] to-[#9089fc] opacity-30 left-[calc(50%-2rem)] w-[72.1875rem]"
            />
          </div>

          <div className="mt-8">
            <HeroCodeCopy />
          </div>
        </div>
        <div className="h-[50vh] mt-0 md:mt-6">
          <HeroButton />
        </div>
      </main>
    </>
  );
}
