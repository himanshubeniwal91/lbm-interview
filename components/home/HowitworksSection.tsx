import Link from "next/link";

const uppercards = [
  {
    number: "01",
    title: "Sign Up",
    text: "Create your account and provide the necessary details to set up your bot.",
  },
  {
    number: "02",
    title: "Token Configuration",
    text: "Integrate your token with the Marketing Making Bot by providing its smart contract address and other relevant information.",
  },
  {
    number: "03",
    title: "Customize Settings",
    text: "Adjust the bot's trading parameters to align with your token's specific goals and objectives.",
  },
];

const bottomcard = [
  {
    number: "04",
    title: "Activate Bot",
    text: "Once the configuration is complete, activate your Marketing Making Bot and watch it start generating trading volume for your token.",
  },
  {
    number: "05",
    title: "Monitor Progress",
    text: "Track your token's growth through our user-friendly dashboard, with detailed insights into performance.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative bg-[#f5f7fb] py-20">
  
      <div className="mx-auto max-w-6xl px-4 text-center">
   

   <Link href="/how-it-works">
        <div className="inline-flex items-center rounded-full bg-blue-100 px-12 py-4 text-2xl font-medium text-black">
          How It Works
        </div>
</Link>
    


        <h2 className="mt-4 text-2xl font-semibold text-gray-900 md:text-3xl">
          How the Marketing Making Bot Works ?
        </h2>




        {/* upar ale cards */}
<div className="mt-14 grid gap-8 md:grid-cols-3 items-stretch">
  {uppercards.map((step) => (
    <div key={step.number} className="relative flex flex-col items-center">
      {/* circle */}
      <div className="z-20 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
        <span className="text-lg font-semibold text-black">{step.number}</span>
      </div>

      <div className="-mt-6 w-full h-full overflow-visible rounded-2xl bg-white shadow-lg flex flex-col">
   
        <div className="rounded-t-2xl bg-linear-to-br from-[#0f7bff] to-[#2b6bff] px-6 pb-6 pt-10 text-left text-white">
          <h3 className="text-base font-semibold">{step.title}</h3>
        </div>

        <div className="relative flex-1 px-6 pb-7 pt-4 text-left text-sm text-gray-600">
          <p className="leading-relaxed">{step.text}</p>
          <div className="pointer-events-none absolute -bottom-3 left-1/2 h-4 w-7 -translate-x-1/2 rotate-45 rounded-md bg-white shadow-md" />
        </div>
      </div>
    </div>
  ))}
</div>


        <div className="mt-10 flex items-center justify-between px-10">
          <span className="h-4 w-4 rounded-full bg-[#187bff]" />
          <span className="h-1 w-24 rounded-full bg-[#e5f0ff]" />
          <span className="h-4 w-4 rounded-full bg-[#187bff]" />
          <span className="h-1 w-24 rounded-full bg-[#e5f0ff]" />
          <span className="h-4 w-4 rounded-full bg-[#187bff]" />
          <span className="h-1 w-24 rounded-full bg-[#e5f0ff]" />
          <span className="h-4 w-4 rounded-full bg-[#187bff]" />
          <span className="h-1 w-24 rounded-full bg-[#e5f0ff]" />
          <span className="h-4 w-4 rounded-full bg-[#187bff]" />
        </div>

        

   {/* niche ale cards */}
<div className="mt-14 grid gap-10 md:grid-cols-2 md:px-24 items-stretch">
  {bottomcard.map((step) => (
    <div key={step.number} className="relative flex flex-col items-center">
      <div className="w-full h-full overflow-visible rounded-2xl bg-white shadow-lg flex flex-col">
        <div className="flex-1 px-6 pt-8 pb-6 text-left text-sm text-gray-600">
          <p className="leading-relaxed">{step.text}</p>
        </div>
        <div className="rounded-b-2xl bg-linear-to-br from-[#0f7bff] to-[#2b6bff] px-6 py-4 text-left text-white">
          <h3 className="text-base font-semibold">{step.title}</h3>
        </div>
      </div>

      <div className="absolute -bottom-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-lg">
        <span className="text-lg font-semibold text-black">{step.number}</span>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
