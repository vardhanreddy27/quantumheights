import React from 'react';

const FaqItem = ({ question, answer }) => {
  return (
    <details className="mb-4 rounded-xl border border-[#d4a11f]/20 bg-white p-4">
      <summary className="cursor-pointer list-none text-lg font-semibold text-[#8c1d2c]">{question}</summary>
      <p className="mt-3 text-gray-600">{answer}</p>
    </details>
  );
};

const Faqs = () => {
  return (
    <div id="About" className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        <FaqItem
          question="What is Lorem Ipsum?"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <FaqItem
          question="Why do we use it?"
          answer="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <FaqItem
          question="Where does it come from?"
          answer="Contrary to popular belief, Lorem Ipsum is not simply random text."
        />
      </div>
    </div>
  );
};

export default Faqs;
