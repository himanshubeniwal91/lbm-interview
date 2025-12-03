import React from 'react';
import Link from "next/link";
const PricingSection = () => {


const plans = [
  {
    name: "BASIC PLAN",
    highlight: false,
    features: [
      "Limited trading strategies",
      "Standard volume generation",
      "Email support",
    ],
    price: "$30",
    href: "/pricing/basic",
  },
  {
    name: "PRO PLAN",
    highlight: true,
    features: [
      "Advanced trading strategies",
      "Enhanced volume generation",
      "Priority email support",
    ],
    price: "$30",
    href: "/pricing/pro",
  },
  {
    name: "PREMIUM PLAN",
    highlight: false,
    features: [
      "Custom trading strategies",
      "Maximum volume generation",
      "Dedicated account manager",
    ],
    price: "$30",
    href: "/pricing/premium",
  },
];


  return (
    <section className="bg-[#f5f7fb] py-16">
      <div className="mx-auto max-w-5xl px-4">
   
        <div className="rounded-2xl border  border-[#0f7bff] bg-black">
     


          <div className="px-8 pb-20 pt-8 h-120 text-white md:px-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="inline-flex items-center rounded-full bg-white/15 px-5 py-1 text-xs font-medium">
                  Pricing
                </div>
                <h2 className="mt-4 text-2xl font-semibold md:text-3xl">
                  Flexible Pricing Plans for
                  <br />
                  Every Budget
                </h2>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-gray-300">
                Choose from our range of affordable pricing plans, designed to
                accommodate the needs of projects at various stages of
                development.
              </p>
            </div>
          </div>

          <div className="bg-transparent px-4 pb-10 pt-0">

           <div className="-mt-80 grid gap-6 md:grid-cols-3 ">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`flex flex-col items-center rounded-2xl px-8 py-8 text-center shadow-md ${
                    plan.highlight ? "bg-[#0f7bff] text-white" : "bg-white"
                  }`}
                >
                  <h3
                    className={`text-sm font-extrabold tracking-wide ${
                      plan.highlight ? "text-white" : "text-black"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  <ul className="mt-6 space-y-2 text-left text-xs leading-relaxed md:text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-green-500" />
                        <span
                          className={
                            plan.highlight ? "text-white" : "text-gray-700"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 text-lg font-bold">{plan.price}</div>
<Link href={plan.href}>
                  <button
                    className={`mt-6 rounded-full px-8 py-2 text-xs font-medium md:text-sm ${
                      plan.highlight
                        ? "bg-white text-[#0f7bff]"
                        : "bg-[#0f7bff] text-white"
                    }`}
                  >
                    Know More
                  </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;