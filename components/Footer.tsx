import Link from "next/link";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "How it Works?", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
   
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
  { label: "Twitter", href: "https://www.twitter.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[url('/images/footerimage.jpg')] bg-cover bg-center bg-no-repeat text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-16">
     


        <div className="text-sm">
          <h3 className="mb-3 font-semibold text-blue-400">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">

            {quickLinks.map((e) => (
              <li key={e.href}>
                <Link href={e.href} className="hover:text-white">
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>


        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-gray-300">
            GET IN TOUCH WITH
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-wide">
            OUR EXPERTS
          </h2>



          <Link href="/contactus">
          <button className="mt-6 rounded-full bg-blue-600 px-8 py-2 text-sm font-medium text-white shadow-lg hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
          </Link>


        </div>

    
        <div className="text-sm text-right">
          <h3 className="mb-3 font-semibold text-blue-400">Community</h3>
          <ul className="space-y-1 text-gray-300">
            {socialLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-white" >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
