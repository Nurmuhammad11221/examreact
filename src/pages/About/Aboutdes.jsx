import React from 'react';

const Aboutdes = ({ product }) => {
  if (!product) return null;

  const details = [
    {
      title: "Living Room:",
      text: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Dining Room:",
      text: "The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life."
    },
    {
      title: "Office:",
      text: "The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  return (
    <div className="container mt-4 animate__animated animate__fadeIn">
      <p className="text-muted small mb-4" style={{ lineHeight: '26px', textAlign: 'justify' }}>
        {product.description}
      </p>

      {details.map((item, index) => (
        <div key={index} className="mt-4">
          <h6 className="fw-bold text-dark mb-2" style={{ fontSize: '15px' }}>{item.title}</h6>
          <p className="text-muted small" style={{ lineHeight: '24px' }}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Aboutdes;