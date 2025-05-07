"use server";
import React from "react";
import aboutImage from "@/assets/logo/Noha.png";
import Image from "next/image";
import NavBar from "@/components/pages/header/NavBar/NavBar";
import { getCartProducts } from "@/services/cart";
import { getUser } from "@/services/auth";

const page = async () => {
  const user = await getUser();
  const userRef = user?.id;
  const coupon = "";
  const userCartProducts = await getCartProducts(userRef, coupon);
  return (
    <div>
      <NavBar userCartProducts={userCartProducts?.data} />
      {/* <div className="bg-[#1D4092] mt-20 w-full py-6 lg:flex hidden"></div> */}

      <div className="Container lg:py-6 lg:mt-0 mt-20">
        {/* <div className="border border-[#D4A373]/20 rounded md:p-2 p-4 inline-flex mt-2">
          <Image
            src={aboutImage}
            alt=""
            width={120}
            height={120}
            className="rounded"
          />
        </div> */}
        {/* <div className="flex flex-col gap-2 lg:gap-4">
          <div className="md:text-2xl text-xl  font-semibold text-[#262626] mt-8 ">
            NoHasan: A Beacon of Youth-Driven Change
          </div>

          <div>
            <p className="policy-page-text ">
              NoHasan is a vibrant collective initiative founded by passionate
              youth volunteers from the Dhaka College Red Crescent Unit. Rooted
              in the spirit of humanitarian service, this dynamic group reflects
              the power of young minds united by a common purpose — to serve
              humanity while bringing meaningful change to society.
            </p>
          </div>

          <div>
            <p className="policy-page-text ">
              What makes NoHasan truly unique is its multidimensional approach.
              Rather than focusing solely on charitable work or
              entrepreneurship, NoHasan merges three powerful spheres: business,
              social impact, and humanitarian service. This integrated model
              allows the organization to sustain its initiatives financially
              while ensuring that its efforts reach those who need them the
              most.
            </p>
          </div>

          <div>
            <p className="policy-page-text ">
              In the realm of business, NoHasan promotes innovation and
              entrepreneurship among young people, encouraging them to think
              beyond traditional boundaries. Their business ventures are not
              just profit-driven but are guided by values of ethics,
              sustainability, and community benefit. These enterprises often
              serve as a funding source to support their wider humanitarian
              goals.
            </p>
          </div>

          <div>
            <p className="policy-page-text ">
              Social impact remains at the core of NoHasan's mission. From
              organizing awareness campaigns and health drives to supporting
              education and environmental initiatives, the group consistently
              works to uplift communities. Each project is driven by a deep
              understanding of local needs and a desire to create lasting change
              rather than temporary fixes.
            </p>
          </div>

          <div>
            <p className="policy-page-text ">
              NoHasan's humanitarian efforts stem from its roots in the Red
              Crescent movement — a global network known for its commitment to
              human welfare and disaster response. Whether it's responding to
              natural calamities, aiding the underprivileged, or volunteering
              during public emergencies, NoHasan volunteers are always ready to
              serve selflessly and compassionately.
            </p>
          </div>

          <div>
            <p className="policy-page-text pb-4">
              The journey of NoHasan is a shining example of how youth can be a
              force for positive transformation. With a vision grounded in
              service, a mission supported by entrepreneurial energy, and a
              heart committed to humanity, NoHasan continues to inspire others
              to rise above individual goals and work toward a better, more
              compassionate world.
            </p>
          </div>
        </div> */}

        <div className="flex items-center justify-center py-60">
          <Image
            src={aboutImage}
            alt=""
            width={120}
            height={120}
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
