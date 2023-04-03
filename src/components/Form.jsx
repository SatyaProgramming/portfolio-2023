import { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Div from "./Div";

const ContactForm = () => {
  const [userInput, setUserInput] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    send(
      "service_9pdfa0k", // Your email service ID
      "template_1n2zi8h", // Your email template ID
      userInput,
      "fwbZGAj1HzKWCYrDa" // Your emailJS public key
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        handleSuccess();
        setLoading(false);
      })
      .catch((err) => {
        console.log("FAILED...", err);
        setLoading(false);
      });
  };

  const handleSuccess = () => {
    toast("Thank you for contacting me! I will get back to you soon.");

    // Reset the form after successful submission
    document.getElementById("queryForm").reset();
  };

  const handleChange = (e) => {
    let obj = { ...userInput, [e.target.name]: e.target.value };
    setUserInput(obj);
  };

  return (
    <Div className="max-w-[1200px] mx-auto">
      <ToastContainer />

      {/* LOADING SPINNER */}
      {loading && (
        <div className="w-full h-full absolute bg-white/[.5] top-0 left-0 flex justify-center items-center">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="5"
            ></circle>
          </svg>
        </div>
      )}

      {/* CONTACT FORM */}
      <form
        id="queryForm"
        className="flex flex-col gap-8"
        onSubmit={handleSubmit}
      >
        {/* FORM FIELDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="from_name"
              className="text-[16px] text-black uppercase"
            >
              Name<sup>*</sup>
            </label>
            <input
              name="from_name"
              type="text"
              className="h-[64px] bg-white outline-none border-none text-black px-4"
              required
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="from_email"
              className="text-[16px] text-black uppercase"
            >
              Email<sup>*</sup>
            </label>
            <input
              name="from_email"
              type="email"
              className="h-[64px] bg-white outline-none border-none text-black px-4"
              required
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-[16px] text-black uppercase"
          >
            Tell me about yourself and your project<sup>*</sup>
          </label>
          <textarea
            name="message"
            className="h-[162px]
            bg-white outline-none border-none text-black px-4 py-2 resize-none"
            required
            onChange={handleChange}
            ></textarea>
            </div>
                {/* SUBMIT BUTTON */}
    <button
      type="submit"
      className="bg-black text-white font-medium text-[18px] py-4 px-8 rounded-lg uppercase hover:bg-gray-800 transition-all duration-200"
    >
      Send message
    </button>
  </form>
</Div>
);
};

export default ContactForm;