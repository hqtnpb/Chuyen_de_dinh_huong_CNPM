import React, { useState } from "react";
import "./SubmitRequestForm.scss";
import style 

const SubmitRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    action: "Give Feedback",
    feedbackType: "Other Feedback",
    inquiry: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="submit-request-form">
      <h1>Submit a request</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
          />
        </div>
        <div className="form-group">
          <label>Your email address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email address"
          />
        </div>
        <div className="form-group">
          <label>Your phone number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Your phone number"
          />
        </div>
        <div className="form-group">
          <label>I’d like to...</label>
          <select
            name="action"
            value={formData.action}
            onChange={handleInputChange}
          >
            <option value="Give Feedback">Give Feedback</option>
            <option value="Request Support">Request Support</option>
          </select>
        </div>
        <div className="form-group">
          <label>What is your feedback regarding?</label>
          <select
            name="feedbackType"
            value={formData.feedbackType}
            onChange={handleInputChange}
          >
            <option value="Other Feedback">Other Feedback</option>
            <option value="Website Issue">Website Issue</option>
            <option value="Product Feedback">Product Feedback</option>
          </select>
        </div>
        <div className="form-group">
          <label>Submit your inquiry here</label>
          <textarea
            name="inquiry"
            value={formData.inquiry}
            onChange={handleInputChange}
            placeholder="Write your message..."
          ></textarea>
        </div>
        <div className="form-group">
          <label>Attach files or drop files here</label>
          <div className="file-upload">Drop files here</div>
        </div>
        <div className="upload-options">
          <button type="button">Upload from Google Drive</button>
          <button type="button">Upload from Dropbox</button>
          <button type="button">Upload from Microsoft OneDrive</button>
        </div>
        <button type="submit" className="submit-button">
          Submit Your Request
        </button>
      </form>
    </div>
  );
};

export default SubmitRequestForm;
