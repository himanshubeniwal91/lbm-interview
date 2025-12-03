import Image from "next/image";
import Link from "next/link";

export default function ContactUsSection() {
  return (
    <section className="relative py-16">
 
      <div className="mx-auto max-w-5xl px-4">
  <div className="relative flex items-center justify-between rounded-xl bg-black px-10 py-1 text-white shadow-lg overflow-visible">

          


          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Get in Touch with Our Experts
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">
              Ready to accelerate your token&apos;s growth in the decentralized
              exchange market? Contact us today to discuss your project&apos;s
              requirements and discover how the Marketing Making Bot can help
              you achieve your goals.
            </p>


   <Link href="/contactus">
            <button className="mt-6 rounded-full bg-blue-600 px-8 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Contact Us
            </button>
            </Link>

          </div>

          
         <div className="pointer-events-none relative hidden h-96 w-64 translate-x-10 -mt-16 md:block">

            <Image
              src="/images/contactusrobot.png" alt="Robot holding device" fill className="object-contain"/>
          </div>
        </div>
      </div>
    </section>
  );
}
