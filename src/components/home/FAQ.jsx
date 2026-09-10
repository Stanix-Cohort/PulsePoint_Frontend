import { useState } from "react";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Who can donate blood through PulsePoint?",
    answer:
      "Anyone aged 18 to 65 who is in good health, weighs at least 50kg, and has no existing medical conditions that prevent donation. Donors must also not be pregnant or nursing.",
  },
  {
    question: "Is PulsePoint available only in Lagos and Ogun State?",
    answer:
      "Yes, our initial launch covers Lagos and Ogun State. We plan to expand to other states across Nigeria in future releases.",
  },
  {
    question: "How do hospitals verify that donors are matched correctly?",
    answer:
      "PulsePoint uses a validated blood compatibility matrix to match donor blood types with hospital requests. Only eligible donors who match the blood type, location, and availability see a given request.",
  },
  {
    question: "What happens after I accept a blood request?",
    answer:
      "When you accept a request, the hospital receives a notification. A representative from the hospital will contact you directly via phone to coordinate the donation.",
  },
  {
    question: "Is my personal and medical data secure?",
    answer:
      "Yes. PulsePoint follows strict data protection practices. Your data is transmitted over HTTPS and stored securely. See our Privacy Policy for full details.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="
        bg-white
        px-5
        pb-[80px]
        pt-0

        sm:px-6
        sm:pb-[90px]

        md:px-8
        md:pb-[100px]

        xl:px-0
        xl:pb-[89px]
      "
    >
      {/* Mobile + Tablet Layout */}
      <div className="mx-auto flex w-full flex-col xl:hidden">
        {/* Header */}
        <div className="flex w-full flex-col gap-5 sm:gap-6">
          <h2
            className="
              m-0
              w-full
              font-['Montserrat']
              text-[30px]
              font-semibold
              leading-[1.15]
              tracking-[0]
              text-[#1A1A1A]

              sm:max-w-[650px]
              sm:text-[34px]

              md:max-w-[750px]
              md:text-[38px]
            "
          >
            Got Questions? We’ve Got Answers.
          </h2>

          <p
            className="
              m-0
              w-full
              max-w-[600px]
              font-['Inter']
              text-[15px]
              font-normal
              leading-[28px]
              tracking-[0]
              text-[#1A1A1A]

              sm:text-[16px]
              sm:leading-[30px]

              md:text-[17px]
            "
          >
            Find quick solutions and clear explanations for everything you
            need to know about pulsepoint
          </p>
        </div>

        {/* FAQ Items */}
        <div
          className="
            mt-10
            flex
            w-full
            flex-col
            gap-3

            sm:mt-12
            sm:gap-[14px]
          "
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="mx-auto hidden h-[700px] w-[1260px] flex-col gap-[64px] xl:flex">
        {/* Header */}
        <div className="flex h-[170px] w-[1260px] flex-col gap-[18px]">
          <h2 className="m-0 h-[92px] w-[638px] font-['Montserrat'] text-[38px] font-semibold leading-[100%] tracking-[0] text-[#1A1A1A]">
            Got Questions? We’ve Got Answers.
          </h2>

          <p className="m-0 h-[60px] w-[517px] font-['Inter'] text-[15px] font-normal leading-[30px] tracking-[0] text-[#1A1A1A]">
            Find quick solutions and clear explanations for everything you
            need to know about pulsepoint
          </p>
        </div>

        {/* FAQ Items */}
        <div className="ml-auto flex h-[466px] w-[1030px] flex-col gap-[14px]">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;