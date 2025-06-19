import React, { useState } from "react";
import axios from "axios";

const reviewData = {
  name: "",
  vote: 1,
  text: "",
};
const apiUrl = import.meta.env.VITE_URL_BACKEND_API;

export default function ReviewsForm({ idMovie, setMovie }) {
  const [formData, setFormData] = useState(reviewData);

  const handleInputChange = (e) => {
    e.target.name;
    e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: formData.name,
      vote: parseInt(formData.vote),
      text: formData.text,
    };

    axios
      .post(`${apiUrl}/${idMovie}/reviews`, payload)
      .then(() => {
        return axios.get(`${apiUrl}/${idMovie}`);
      })
      .then((response) => {
        setMovie(response.data.data);
        setFormData(reviewData); // reset del form
      });
  };

  return (
    <section className="my-5">
      <div className="container my-2">
        <form className="row g-3" onSubmit={handleFormSubmit}>
          <div className="col-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              onChange={handleInputChange}
              value={formData.name}
              type="text"
              className="form-control"
              id="name"
              name="name"
            />
          </div>

          <div className="col-3">
            <label htmlFor="vote" className="form-label">
              Vote
            </label>
            <input
              onChange={handleInputChange}
              value={formData.vote}
              type="number"
              className="form-control"
              id="vote"
              name="vote"
              min="1"
              max="5"
              step="1"
            />
          </div>

          <div className="col-8">
            <label htmlFor="text" className="form-label">
              Comments
            </label>
            <textarea
              name="text"
              onChange={handleInputChange}
              className="form-control"
              id="text"
              value={formData.text}
              rows="5"
            ></textarea>
          </div>

          <div className="col-12">
            <button type="submit" className="btn">
              Invia Recensione
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
