import React from 'react';

const Contact = () => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Delicious Bites Cafe
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>Delicious Bites Cafe </strong>was invented by in the year 2003. Eat anywhere, anytime, any price. 
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Address
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            Bangalore, Karnataka, India.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Contact Details
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul>
              <li>Phone: 1234567890</li>
              <li>Email: Delicious@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;