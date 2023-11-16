import { FaBox, FaStore } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";

function DeliveryDetails({ selectedDelivery, handleDeliverySelect }) {
  const deliveryOptions = [
    {
      id: 1,
      title: "Ship To Me",
      text: "Available",
      icon: <FaTruckArrowRight className="h-5 w-5" />,
      available: true,
    },
    {
      id: 2,
      title: "Free Store Pickup",
      text: "Curbside & In-store",
      icon: <FaStore className="h-5 w-5" />,
      available: true,
    },
    {
      id: 3,
      title: "Same Day Delivery",
      text: "Not available to your location",
      icon: <FaBox className="h-5 w-5" />,
      available: false,
    },
  ];

  const inactiveDelivery =
    "w-56 p-2 md:p-3 lg:p-5 flex flex-col justify-center items-start rounded-md  border-2 hover:border-2 hover:border-black hover:cursor-pointer";
  const activeDelivery = inactiveDelivery + " border-black";

  return (
    <div>
      <div className="mt-8 flex gap-3 md:mt-12">
        {deliveryOptions.map((option) =>
          option.available ? (
            <div
              key={option.id}
              onClick={() => handleDeliverySelect(option.id)}
              className={
                option.id === selectedDelivery
                  ? activeDelivery
                  : inactiveDelivery + " border-neutral-300"
              }
            >
              <div className="mb-2 text-primary">{option.icon}</div>
              <h3 className="mb-1 text-base font-bold md:text-lg lg:text-xl">
                {option.title}
              </h3>
              <p className="text-sm">{option.text}</p>
            </div>
          ) : (
            <div
              key={option.id}
              className="flex w-56 flex-col items-start justify-center rounded-md bg-neutral-200 p-2 md:p-3 lg:p-5"
            >
              <div className="mb-2 text-neutral-500">{option.icon}</div>
              <h3 className="mb-1 text-base font-bold text-neutral-600 md:text-lg lg:text-xl">
                {option.title}
              </h3>
              <p className="text-sm text-neutral-600">{option.text}</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default DeliveryDetails;
