import Image from "next/image";

const points = [
  {
    title: "Time-saving",
    text: "By automating marketing tasks, marketing trading bots can save time and allow marketers to focus on more strategic tasks, such as developing marketing strategies and creating content.",
  },
  {
    title: "Increased efficiency",
    text: "Marketing trading bots can analyze large amounts of data quickly and accurately, enabling marketers to make informed decisions and optimize their campaigns for better results.",
  },
  {
    title: "Cost-effective",
    text: "By automating marketing tasks, marketing trading bots can help businesses save money on marketing expenses and improve ROI.",
  },
];

export default function UsefulSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:flex-row md:items-center">
   
        <div className="w-full md:w-1/2 md:max-w-md">
   
          <div className="flex justify-center ">
            <div className="inline-block rounded-full bg-blue-50 px-5 py-1 text-xs font-medium text-blue-600">
              Useful
            </div>
          </div>

     <h2 className="mt-4 text-center text-xl font-semibold text-gray-900 md:text-3xl md:text-left whitespace-nowrap">
  Time Saving, Cost Effective and Efficient
</h2>


          <div className="mt-8 space-y-6 text-sm text-gray-600">
            {points.map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-sm bg-blue-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

   
        <div className="flex w-full justify-center md:w-1/2">
          <div className="relative h-72 w-80 md:h-80 md:w-96">
            <Image
              src="/images/usefulsecton.jpg"
              alt="useful secton imagee"  fill className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
