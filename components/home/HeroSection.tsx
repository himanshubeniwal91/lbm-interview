import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-[#f5f7fb] pt-24 pb-20">


      <div className="mx-auto flex max-w-6xl flex-col items-center px-4">
        {/* Heading */}
        <h1 className="text-center text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
          Boost Your Token on Decentralized
          <br />
          Exchanges
        </h1>
        <p className="mt-4 max-w-2xl text-center text-sm text-gray-600 md:text-base">
          Unleash the Power of Automated Bot Trading &amp; Volume Generation
        </p>


          <Link href="/knowmore">
        <button className="mt-6 rounded-full bg-blue-600 px-8 py-2 text-sm font-medium text-white shadow-md hover:bg-blue-700">
          Know More
        </button>
        </Link>

        {/* Main screenshot + black info block */}
        <div className="mt-12 w-full max-w-5xl rounded-xl bg-black p-0 shadow-xl">
          <Image
            src="/images/herosectionimage.jpg"
            alt="Trading dashboard"
            width={1200}
            height={700}
            className="w-full rounded-t-xl"
          />

          <div className="flex flex-col items-start justify-between gap-8 border-t border-gray-800 bg-black px-8 py-10 text-white md:flex-row">
            <p className="max-w-xl text-sm leading-relaxed text-gray-200">
              Welcome to the Marketing Making Bot, the premier tool to help your
              token reach its full potential on decentralized exchanges. Our
              advanced bot technology automates trades and increases trading
              volumes, creating a strong presence in the market and helping your
              token attract new investors.
            </p>

            <div className="relative h-40 w-56 md:h-48 md:w-64">
              <Image
                src="/images/herosubimage.png"
                alt="Bot and chart illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
