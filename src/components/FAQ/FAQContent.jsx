import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQContent = () => {
  // --- FAQ DATA ---
  const faqs = [
    {
      question: "What time are your services?",
      answer: "We have our main Worship Service every Sunday from 09:00 AM to 12:00 PM. We also have Intercession on Fridays at 5:30 PM."
    },
    {
      question: "Where is the church located?",
      answer: "We are located at 8493 Glenwood, Kwekwe, Zimbabwe. You can find a map on our Contact Us page."
    },
    {
      question: "Do you have a ministry for children?",
      answer: "Yes! We have a vibrant Children's Church that runs simultaneously with the main service. Our teachers provide a safe, fun, and Bible-based environment for kids to learn about God."
    },
    {
      question: "Is there a dress code?",
      answer: "At HIM Kwekwe, we believe in honoring God with our best. Most of our members dress in formal or smart-casual attire, but you are welcome just as you are."
    },
    {
      question: "How can I become a member?",
      answer: "We are excited that you want to join the family! You can speak to any of our ushers after the service, or attend our 'New Believers' class which runs periodically."
    },
    {
      question: "How can I give my tithe or offering?",
      answer: "You can give in person during the service, or use mobile money (EcoCash/OneMoney). Please contact our finance team or see the church bulletin for the specific merchant codes."
    },
    {
      question: "Do you offer counseling?",
      answer: "Yes, our pastoral team is available for spiritual counseling and prayer. You can book an appointment by contacting the church office or speaking to the leadership team after service."
    }
  ];

  // State to track which question is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* HERO SECTION */}
      <section className="bg-gray-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Frequently Asked <span className="text-[#B22222]">Questions</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Got questions? We have answers. Here is everything you need to know about visiting and being part of HIM Kwekwe.
        </p>
        <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-8 rounded-full"></div>
      </section>

      {/* ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors focus:outline-none"
              >
                <div className="flex items-center">
                  <HelpCircle className={`mr-4 ${openIndex === index ? 'text-[#B22222]' : 'text-gray-400'}`} size={20} />
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-[#B22222]' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                </div>
                
                {/* Plus/Minus Icon */}
                <div className="text-gray-400">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>

              {/* Answer (Collapsible) */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pl-14 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <a 
            href="/contact" 
            className="inline-block bg-[#B22222] text-white font-bold py-3 px-8 rounded-full hover:bg-red-800 transition-transform transform hover:scale-105 shadow-lg"
          >
            Contact Us Directly
          </a>
        </div>

      </section>
    </div>
  );
};

export default FAQContent;