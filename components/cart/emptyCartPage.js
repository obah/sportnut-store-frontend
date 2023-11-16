import { BigCenter } from "@/components/viewPorts";
import Link from "next/link";

function EmptyCartPage() {
  return (
    <BigCenter>
      <div className="mt-12 flex flex-col items-center justify-center gap-2 bg-white">
        <h1 className="mb-2 text-3xl font-normal">Your Cart is Empty</h1>
        <p className="text-lg font-semibold text-primary ">
          EARN POINTS. REDEEM REWARDS.
        </p>
        <p className="mb-2 text-sm font-light">
          Sign in & shop to start earning!
        </p>
        <Link href={"/"} className="secondary-btn w-64 py-3 text-center">
          SIGN IN
        </Link>
        <p className="mt-5 text-sm font-light">
          {`Don't have an account yet? `}
          <Link href={"/ip"} className="underline">
            Sign Up
          </Link>
        </p>
      </div>
    </BigCenter>
  );
}

export default EmptyCartPage;
