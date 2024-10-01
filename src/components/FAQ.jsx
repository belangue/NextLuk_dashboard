import React, { useState } from 'react';
import './FAQ.css';

const faqData = [
    {
      question: "What is Nextluk?",
      answer: "Nextluk is an online booking platform for beauty salons and institutes."
    },
    {
      question: "How do I book an appointment on Nextluk?",
      answer: "To book an appointment on Nextluk, search for the desired salon, select the service and time that suits you, and then confirm your reservation."
    },
    {
      question: "Do I have to pay online on Nextluk?",
      answer: "Online payment on Nextluk depends on the salon's policy. Some salons may require a deposit, while others may not. Please check the terms and conditions when making your reservation."
    },
    {
      question: "How can I manage my appointments on Nextluk?",
      answer: "You can manage your appointments by logging into your Nextluk account. There, you can view, modify, or cancel your reservations according to the salon's policy."
    },
    {
      question: "How can I list my salon or institute on Nextluk?",
      answer: "To list your salon on Nextluk, you need to sign up as a professional. Visit the section dedicated to professionals on the Nextluk website for more information."
    }
  ];
  

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div 
        className={`faq-question ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </div>
      <div className={`faq-answer ${isOpen ? 'show' : ''}`}>
        {answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1>Frequently asked questions</h1>
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;