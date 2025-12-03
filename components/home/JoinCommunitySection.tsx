import Image from "next/image";

const socialLinks = [
  { label: "Twitter", href: "https://www.twitter.com", img: "/images/twitter.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com", img: "/images/linkdin.png" },
  { label: "Instagram", href: "https://www.instagram.com", img: "/images/instagram.png" },
  { label: "Facebook", href: "https://www.facebook.com", img: "/images/facebook.png" },
];

export default function JoinCommunitySection() {
  return (
    <section className="relative py-16">
      
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-xl bg-black px-10 py-10 text-center text-white shadow-lg">
          <h2 className="text-xl font-semibold">Join our Community</h2>

          <div className="mt-10 flex items-center justify-center gap-6">
            {socialLinks.map((item) => (
              <a  key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={item.label} >
                <div className="relative h-24 w-24 md:h-28 md:w-28">


                  <Image
                    src={item.img}
                    alt={item.label} fill className="object-contain"
                  />

                  
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
