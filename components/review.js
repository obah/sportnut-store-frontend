import { StarIcon } from "./icons";

export default function Review() {
  const starStyle = "text-neutral-300 w-5 h-5 fill-neutral-300";

  return (
    <div className="flex gap-5 py-2 md:py-4">
      <div className="flex items-center">
        <StarIcon className={starStyle} />
        <StarIcon className={starStyle} />
        <StarIcon className={starStyle} />
        <StarIcon className={starStyle} />
        <StarIcon className={starStyle} />
      </div>
      <span className="text-sm">(0)</span>
    </div>
  );
}
