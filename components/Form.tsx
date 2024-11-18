"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

type RsvpFormData = {
  name: string;
  rsvp: string;
  starters: string[];
  mains: string[];
  desserts: string[];
  [key: string]: string | string[];
};

export default function Form() {
  const [formData, setFormData] = useState<RsvpFormData>({
    name: "",
    rsvp: "",
    starters: [],
    mains: [],
    desserts: [],
  });

  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value } = event.target;

    setFormData((prevData) => {
      const updatedValues = checked
        ? [...(prevData[name] as string[]), value]
        : (prevData[name] as string[]).filter((option) => option !== value);
      return {
        ...prevData,
        [name]: updatedValues,
      };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const googleFormsEndpoint =
      "https://docs.google.com/forms/d/e/1FAIpQLSdddeQDHW3oZpHvLWbU5lDmkv9lnT3CWKIctJDHnN59qgWe_w/formResponse"; // Replace with your Google Forms endpoint

    try {
      const formDataEncoded = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((option) => {
            const entryKey = `entry.${getEntryKey(key)}`;
            formDataEncoded.append(entryKey, option);
          });
        } else {
          const entryKey = `entry.${getEntryKey(key)}`;
          formDataEncoded.append(entryKey, value);
        }
      });

      await fetch(googleFormsEndpoint, {
        method: "POST",
        body: formDataEncoded,
      });

      router.push("/rsvp/success");
    } catch (error) {
      setShowPopup(true);
      setTimeout(() => {
        router.push("/");
      }, 6000);
    }
  };

  const getEntryKey = (key: string) => {
    const entryKeys: Record<string, string> = {
      name: "29388653",
      rsvp: "1224083778",
      starters: "2051004852",
      mains: "461016866",
      desserts: "294038248",
    };
    return entryKeys[key] || "";
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="mt-8 md:pl-96">
      {showPopup && (
        <div className="p-5 rounded-xl bg-[#529864] text-white mx-auto my-8 z-50 shadow-md w-1/2 text-center font-sans">
          <h1 className="text-lg font-bold">Submission Successful!</h1>
          <p>Thank you for submitting your RSVP.</p>
        </div>
      )}

      <h1 className="text-3xl text-center font-bold">RSVP</h1>
      <form className="mt-8 mx-10 md:mx-72" onSubmit={handleSubmit}>
        <label className="text-lg">
          Name(s) of our fabulous guests:{" "}
          <input
            placeholder="John Doe"
            className="font-normal pl-3 rounded-lg text-black bg-[#fcf7f1]"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>

        <div className="my-6 p-1">
          <h4 className="font-semibold text-lg">Will You Be Joining Us?</h4>
          <label>
            Gracefully Accept
            <input
              className="align-middle ml-2 my-4"
              type="radio"
              name="rsvp"
              value="Gracefully Accept"
              checked={formData.rsvp === "Gracefully Accept"}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Regretfully Decline
            <input
              className="align-middle ml-2 my-3"
              type="radio"
              name="rsvp"
              value="Regretfully Decline"
              checked={formData.rsvp === "Regretfully Decline"}
              onChange={handleInputChange}
            />
          </label>
        </div>

        {/* Starters */}
        <h2 className="text-xl font-semibold text-left md:text-center mt-">
          Entrée
        </h2>
        <label>
          Scottish salmon with beetroot & granary bread
          <input
            className="align-middle ml-2 my-3"
            type="checkbox"
            name="starters"
            value="Scottish Salmon with Beetroot & Granary Bread"
            checked={formData.starters.includes(
              "Scottish Salmon with Beetroot & Granary Bread"
            )}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label className="">
          Greek meze with shish kebab
          <input
            className="align-middle ml-2 my-3"
            type="checkbox"
            name="starters"
            value="Greek Meze with Shish Kebab"
            checked={formData.starters.includes("Greek Meze with Shish Kebab")}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label className="italic">
          Homemade soup (carrot & coriander spicy parsnip)
          <input
            className="align-middle ml-2 my-3"
            type="checkbox"
            name="starters"
            value="Homemade Soup (Carrot & Coriander Spicy Parsnip)"
            checked={formData.starters.includes(
              "Homemade Soup (Carrot & Coriander Spicy Parsnip)"
            )}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />

        {/* Mains */}
        <br />
        <div className="mt-5">
          <label className="text-lg italic">
            <h2 className="text-xl font-semibold text-left md:text-center">
              Mains
            </h2>
            <br />

            <label>
              Chargrilled breast of chicken served with roasted mediterranean
              vegetables, dauphinois potatoes and a tangy tomato sauce
              <input
                className="align-middle ml-2"
                type="checkbox"
                name="mains"
                value="Chargrilled Breast of Chicken served with Roasted Mediterranean Vegetables, Dauphinois Potatoes and a Tangy Tomato Sauce"
                checked={formData.mains.includes(
                  "Chargrilled Breast of Chicken served with Roasted Mediterranean Vegetables, Dauphinois Potatoes and a Tangy Tomato Sauce"
                )}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />
            <br />
            <label>
              Rump of Lamb or Lamb Shank with Fondant Potato, Swede, Carrot
              Purée and Grilled Vegetables with a Mint Jus
              <input
                className="align-middle ml-2"
                type="checkbox"
                name="mains"
                value="Rump of Lamb or Lamb Shank with Fondant Potato, Swede, Carrot Purée and Grilled Vegetables with a Mint Jus"
                checked={formData.mains.includes(
                  "Rump of Lamb or Lamb Shank with Fondant Potato, Swede, Carrot Purée and Grilled Vegetables with a Mint Jus"
                )}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />
            <br />
            <label>
              Roasted Sea Bass with Provençals of Vegetables, a Red Pepper Sauce
              and Roasted New Potatoes
              <input
                className="align-middle ml-2"
                type="checkbox"
                name="mains"
                value="Roasted Sea Bass with Provençals of Vegetables, a Red Pepper Sauce and Roasted New Potatoes"
                checked={formData.mains.includes(
                  "Roasted Sea Bass with Provençals of Vegetables, a Red Pepper Sauce and Roasted New Potatoes"
                )}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />
            <br />
            <h3 className="my-2 font-semibold">Vegetarian Option</h3>
            <label className="italic">
              Roast Vegetable Wellington
              <input
                className="align-middle ml-2"
                type="checkbox"
                name="mains"
                value="Roast Vegetable Wellington"
                checked={formData.mains.includes("Roast Vegetable Wellington")}
                onChange={handleCheckboxChange}
              />
            </label>
          </label>
        </div>

        <br />
        <br />

        {/* Desserts */}
        <div className="pb-6">
          <label className="text-lg italic">
            <h2 className="text-xl font-semibold text-left md:text-center my-3">
              Desserts
            </h2>

            <label className="italic">
              Profiteroles with chocolate sauce
              <input
                className="align-middle ml-2 my-3"
                type="checkbox"
                name="desserts"
                value="Profiteroles with Chocolate Sauce"
                checked={formData.desserts.includes(
                  "Profiteroles with Chocolate Sauce"
                )}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />
            <label className="italic">
              Apple crumb with custard
              <input
                className="align-middle ml-2 my-[12px]"
                type="checkbox"
                name="desserts"
                value="Apple Crumb with Custard"
                checked={formData.desserts.includes("Apple Crumb with Custard")}
                onChange={handleCheckboxChange}
              />
            </label>
            <br />
            <div className="flex-col">
              <label className="italic">
                Trio of desserts
                <input
                  className="align-middle ml-2 my-[12px]"
                  type="checkbox"
                  name="desserts"
                  value="Trio of Desserts"
                  checked={formData.desserts.includes("Trio of Desserts")}
                  onChange={handleCheckboxChange}
                />
              </label>
            </div>
          </label>
        </div>

        <div className="flex justify-center my-5">
          <Button
            className="px-5 py-3 bg-[#529864] text-lg font-semibold mb-3 text-white rounded-lg font-sans border-2 border-[#C4F6D1]"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
