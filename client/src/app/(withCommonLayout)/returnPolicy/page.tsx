import NavBar from "@/components/pages/header/NavBar/NavBar";
import { getUser } from "@/services/auth";
import { getCartProducts } from "@/services/cart";
import React from "react";

const ReturnPolicy = async () => {
  const user = await getUser();
  const userId = user?.id;
  const coupon = "";
  const products = await getCartProducts(userId, coupon);
  return (
    <>
      <NavBar userCartProducts={products?.data} />
      <div className="Container py-10">
        <div className="">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-[#F7B50C] mb-4">
              Return & Exchange Policy
            </h1>

            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-[#F7B50C] mb-2">
                  1. When You Can Return or Exchange a Product:
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>If the product is spoiled or damaged upon delivery.</li>
                  <li>If you received the wrong product variant.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#F7B50C] mb-2">
                  2. Items That Cannot Be Returned or Exchanged:
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>If the product is not spoiled and is in good condition.</li>
                  <li>If the product packaging is opened or tampered with.</li>
                  <li>If the product is consumed or partially used.</li>
                  <li>For change of mind, returns or exchanges will not be accepted.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#F7B50C] mb-2">
                  3. Return & Exchange Process:
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Check your product upon delivery and report any damage or spoilage immediately.
                  </li>
                  <li>
                    Call our customer support team with your order details to initiate a return or exchange.
                  </li>
                  <li>
                    If the product is found to be spoiled, we will arrange for a return or exchange.
                  </li>
                  <li>
                    Keep the product in its original packaging and contact customer support for further assistance.
                  </li>
                  <li>
                    In case of an exchange, our logistics partner will arrange for pickup and delivery of the replacement product.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#F7B50C] mb-2">
                  4. For Online Payment Orders:
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    If canceled before shipment, you will receive a refund (excluding shipping costs) within 7-10 working days.
                  </li>
                  <li>Shipping charges are non-refundable.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#F7B50C] mb-2">
                  5. Contact Us for Returns & Exchanges:
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>
                    Call: +880 1735 775 093 (Sunday to Friday, 9:30 AM - 6:30 PM)
                  </li>
                  <li>Email: support@healthyHarvest.com</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnPolicy;
