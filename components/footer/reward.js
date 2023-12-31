"use client";

import Link from "next/link";
import {
  FaYoutube,
  FaTwitterSquare,
  FaFacebook,
  FaPinterest,
  FaInstagramSquare,
} from "react-icons/fa";
import { BigCenter } from "../viewPorts";

export default function Reward() {
  const socialIcon = "w-6 h-6 hover:cursor-pointer hover:text-secondary";

  const cardRewardOptions = [
    {
      id: 1,
      title: "Gift Cards & eGift Cards",
      text: "Give the Gift That Always Fits.",
      url: "/ip",
      link: "Shop Gift Cards",
    },
    {
      id: 2,
      title: "ScoreCard & ScoreCard Gold",
      text: "Earn One Point for Every $1 and get a $10 Reward for Every 300 Points.",
      url: "/ip",
      link: "Learn More",
    },
    {
      id: 3,
      title: "ScoreRewards® Credit Card",
      text: "Accelerate your Rewards and earn 2 points for every $1 on qualified purchases with a ScoreRewards credit card.",
      url: "/ip",
      link: "Learn More",
    },
  ];

  return (
    <BigCenter>
      <div className="grid grid-cols-1 lg:h-[400px] lg:grid-cols-2">
        <div className="bg-neutral-100 py-10 pl-3 pr-4 text-black md:pr-8 lg:h-full">
          <h2 className="mb-5 text-center text-xl font-black md:text-left md:text-3xl">
            CONNECT WITH US & SAVE
          </h2>
          <div>
            <div className="grid grid-cols-1 gap-6 border-b border-b-neutral-500 pb-6 text-center md:grid-cols-2 md:text-left">
              <div>
                <h3 className="mb-3 font-bold">
                  Sign Up For Email and Get 10% Off*
                </h3>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="h-10 w-2/3 appearance-none border-2 bg-white pl-4 focus:border-primary focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      alert(`Thank you for signing up`);
                    }}
                    className="secondary-btn mb-2 h-10 w-1/3"
                  >
                    SIGN UP
                  </button>
                </div>
                <p className="text-xs text-neutral-500">
                  *Online only. First-time subscribers only. Returning
                  subscribers will be resubscribed for marketing/promo emails.
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-bold">Want $20 Off $100?</h3>
                <p className="text-xs text-neutral-500">
                  {`Join Sportnut’S Text Alerts to Receive Special Offers!
                  Exclusions Apply. `}
                  <span>
                    <Link href="/ip" className="underline">
                      Click For Details
                    </Link>
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-6 text-center md:mt-10 md:flex-row md:gap-40 md:text-left lg:mt-0 lg:block">
              <h3 className="mb-3 mt-6 pl-5 font-bold lg:pl-0">
                Need More Help?
              </h3>
              <div className=" flex flex-col items-center lg:block">
                <Link href={"/ip"} className="primary-btn px-20 py-2">
                  CONTACT US
                </Link>
                <div className="mt-8 flex w-full justify-center gap-5">
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.youtube.com"
                  >
                    <FaYoutube className={socialIcon} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.twitter.com"
                  >
                    <FaTwitterSquare className={socialIcon} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.facebook.com"
                  >
                    <FaFacebook className={socialIcon} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.pinterest.com"
                  >
                    <FaPinterest className={socialIcon} />
                  </a>
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://www.instagram.com"
                  >
                    <FaInstagramSquare className={socialIcon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black p-10 text-white lg:h-full lg:py-10 lg:pl-20 lg:pr-16">
          <h2 className="text-3xl font-black">
            SCORE MORE. GIVE MORE. PLAY MORE.
          </h2>
          {cardRewardOptions.map((option) => (
            <div
              key={option.id}
              className="first:-pt-5 border-b border-b-white pt-5 last:border-b-0"
            >
              <h3 className="font-bold">{option.title}</h3>
              <p className="mb-5 text-xs">
                {`${option.text} `}
                <span>
                  <Link href={option.url} className="underline">
                    {option.link}
                  </Link>
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </BigCenter>
  );
}
