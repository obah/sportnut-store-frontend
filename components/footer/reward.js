"use client";

import Link from "next/link";
import {
  FaYoutube,
  FaTwitterSquare,
  FaFacebook,
  FaPinterest,
  FaInstagramSquare,
} from "react-icons/fa";

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
    <div className="big-center">
      <div className="h-[400px] grid grid-cols-2">
        <div className="bg-neutral-100 text-black h-full py-10 pl-3 pr-8">
          <h2 className="font-black text-3xl mb-5">CONNECT WITH US & SAVE</h2>
          <div>
            <div className="grid grid-cols-2 gap-6 pb-6 border-b border-b-neutral-500">
              <div>
                <h3 className="font-bold mb-3">
                  Sign Up For Email and Get 10% Off*
                </h3>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-2/3 h-10 pl-4 appearance-none border-2 focus:outline-none focus:border-primary"
                  />
                  <button
                    onClick={() => {
                      alert(`Thank you for signing up`);
                    }}
                    className="secondary-btn h-10 w-1/3 mb-2"
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
                <h3 className="font-bold mb-3">Want $20 Off $100?</h3>
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
            <div>
              <h3 className="font-bold mt-6 mb-3">Need More Help?</h3>
              <Link href={"/ip"} className="primary-btn px-20 py-2">
                CONTACT US
              </Link>
              <div className="w-full flex gap-5 justify-center mt-8">
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
        <div className="bg-black text-white h-full py-10 pl-20 pr-16">
          <h2 className="font-black text-3xl">
            SCORE MORE. GIVE MORE. PLAY MORE.
          </h2>
          {cardRewardOptions.map((option) => (
            <div
              key={option.id}
              className="pt-5 first:-pt-5 border-b border-b-white last:border-b-0"
            >
              <h3 className="font-bold">{option.title}</h3>
              <p className="text-xs mb-5">
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
    </div>
  );
}
