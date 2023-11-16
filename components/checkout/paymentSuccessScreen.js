import { Center } from "../viewPorts";
import Link from "next/link";

function PaymentSuccessScreen() {
  return (
    <Center styles={"flex h-screen items-center justify-center bg-neutral-100"}>
      <div className="flex h-1/2  w-full flex-col items-center justify-center gap-5 rounded-sm bg-white  p-8 text-center shadow shadow-black md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold">Thanks for your order</h1>
        <p className="text-lg font-semibold">
          Please check your mail for other details concerning your order.
        </p>
        <Link href={"/"} className="primary-btn px-10 py-2">
          Continue Shopping
        </Link>
      </div>
    </Center>
  );
}

export default PaymentSuccessScreen;
