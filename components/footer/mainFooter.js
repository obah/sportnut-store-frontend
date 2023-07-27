import { BigCenter } from "../viewPorts";

export default function MainFooter() {
  return (
    <BigCenter styles={"bg-neutral-200 text-center"}>
      <div className="px-20 py-20">
        <p className="mb-3 text-sm text-neutral-500">© 2023 Sportnut Store</p>
        <p className="text-xs text-neutral-500">
          *Price Promotions - Due to manufacturer restrictions, select new
          release and other specified products are excluded from price
          promotions. Additionally, there are restrictions on the use of coupon
          codes.
        </p>
      </div>
    </BigCenter>
  );
}
