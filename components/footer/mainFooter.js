import { BigCenter } from "../viewPorts";

export default function MainFooter() {
  return (
    <BigCenter styles={"relative bg-neutral-200 text-center"}>
      <div className="px-14 py-6 lg:py-14">
        <p className="mb-3 text-sm text-neutral-500">
          &copy; 2023 Sportnut Store
        </p>
        <p className="text-lg text-neutral-500">Created by Obaloluwa Olusoji</p>
      </div>
    </BigCenter>
  );
}
