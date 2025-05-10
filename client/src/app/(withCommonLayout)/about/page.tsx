"use server";
import React from "react";
// import aboutImage from "@/assets/logo/agro.png";
// import Image from "next/image";
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
        <div className="flex flex-col gap-2 lg:gap-4">
          <div className="md:text-2xl text-xl font-semibold text-[#262626] mt-8">
            Welcome to Healthy Harvest – Your Trusted Organic Marketplace
          </div>

          <div>
            <p className="policy-page-text">
              At <strong>Healthy Harvest</strong>, we believe that good food is
              the foundation of a healthy life. That's why we've built a
              platform dedicated to providing you with 100% authentic,
              chemical-free, and sustainably sourced organic foods—directly from
              trusted local farmers to your table.
            </p>
          </div>

          <div>
            <p className="policy-page-text">
              Our journey began with a simple vision: to make healthy eating
              accessible for everyone while supporting environmentally
              responsible farming practices. In a world full of processed and
              pesticide-laden food, <strong>Healthy Harvest</strong> stands as a
              beacon for those who care about their health and the planet.
            </p>
          </div>

          <div>
            <p className="policy-page-text">
              We offer a wide range of organic products—from fresh fruits and
              vegetables to grains, dairy, honey, and more. Every product in our
              store is carefully selected to meet strict organic standards,
              ensuring you get only the best nature has to offer.
            </p>
          </div>

          <div>
            <p className="policy-page-text">
              Our platform is more than just a shop—it's a movement. A movement
              that empowers farmers, promotes sustainability, and helps families
              embrace a clean and wholesome lifestyle. By choosing us, you're
              not only choosing health but also supporting ethical farming
              communities across the country.
            </p>
          </div>

          <div>
            <p className="policy-page-text">
              Whether you're a long-time organic food lover or just beginning
              your journey, <strong>Healthy Harvest</strong> is here to support
              your well-being every step of the way. Join us in building a
              healthier, greener future—one meal at a time.
            </p>
          </div>

          <div>
            <p className="policy-page-text pb-4">
              Thank you for choosing Healthy Harvest — where your health meets
              nature.
            </p>
          </div>
        </div>

        {/* <div className="flex items-center justify-center py-60">
          <Image
            src={aboutImage}
            alt=""
            width={120}
            height={120}
            className="rounded"
          />
        </div> */}
      </div>
    </div>
  );
};

export default page;
