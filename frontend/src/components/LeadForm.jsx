import { useState } from "react";
import { submitLead } from "../services/api";
import Loader from "./Loader";
import Success from "./Success";
function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setSuccess(false);
      await submitLead(formData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full max-w-2xl bg-gray-900 p-8 rounded-3xl shadow-2xl border border-gray-800">
      <h2 className="text-4xl font-bold text-white mb-3">
        AI Company Audit
      </h2>
      <p className="text-gray-400 mb-8">
        Get an instant AI-generated business audit report.
      </p>
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white outline-none"
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white outline-none"
        />
        <input
          type="text"
          name="website"
          placeholder="Company Website"
          value={formData.website}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700 text-white outline-none"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white p-4 rounded-xl font-semibold"
        >
          Generate AI Report
        </button>
      </form>
      {loading && <Loader />}
      {success && <Success />}
    </div>
  );
}
export default LeadForm;