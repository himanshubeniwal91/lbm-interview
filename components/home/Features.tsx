import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Seamless Integration",
    text: "Our Marketing Making Bot is compatible with popular decentralized exchanges, enabling easy integration for your token.",
    img: "/images/seamless.png",
  },
  {
    title: "Customizable Settings",
    text: "Tailor the bot's parameters to suit your token's unique requirements, optimizing its performance for maximum gains.",
    img: "/images/customsetting.png",
  },
  {
    title: "Volume Generation",
    text: "The Marketing Making Bot generates substantial trading volumes, promoting your token's growth and attracting new investors.",
    img: "/images/volumegeneraton.png",
  },
  {
    title: "Intelligent Trading",
    text: "Our sophisticated algorithm utilizes advanced strategies to perform automated trades, ensuring optimal results for your token.",
    img: "/images/intelligent.png",
  },
  {
    title: "Security & Privacy",
    text: "We prioritize the safety of your assets and personal information with a secure decentralized platform.",
    img: "/images/security.png",
  },
  {
    title: "24/7 Customer Support",
    text: "Our dedicated team of experts is available around the clock to help you achieve your token's growth goals.",
    img: "/images/support.png",
  },
];


export default function FeaturesSection() {
  return (
    <section className="relative bg-[#f5f7fb] py-20">
 
      <div className="mx-auto max-w-6xl px-4 text-center">
   <Link href="/features">
        <div className="inline-flex items-center rounded-full bg-blue-100 px-12 py-4 text-2xl font-medium text-black">
          Features
        </div>
        </Link>

     
        <h2 className="mt-4 text-2xl font-semibold text-gray-900 md:text-3xl">
          Unmatched Features for Maximum Growth
        </h2>


{/* //cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((item, index) => (
            <div
              key={item.title}
              className={`flex h-full flex-col rounded-2xl px-6 py-8 text-center shadow-sm ${
                index%2==0
                  ? "bg-white" 
                  :   "bg-[#edf3ff]"
              }`}
            >
              {/* icon ki images  */}
              <div className="mx-auto mb-4 h-14 w-14">
                <div className="relative h-full w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

      
              <h3 className="text-sm font-semibold text-gray-900 md:text-base">
                {item.title}
              </h3>

          
              <p className="mt-3 text-xs leading-relaxed text-gray-600 md:text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
