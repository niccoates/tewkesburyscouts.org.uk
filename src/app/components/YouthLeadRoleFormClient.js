"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  dateOfBirth: "",
  message: "",
};

export default function YouthLeadRoleFormClient() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const updateField = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/send-youth-lead-role-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message:
          "Thank you. Your message has been sent and a member of the team will be in touch.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "There was a problem sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "mt-2 block w-full border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-[#003087] focus:outline-none focus:ring-1 focus:ring-[#003087]";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-gray-800">
          Name <span className="text-red-600">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={updateField}
          className={fieldClass}
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-bold text-gray-800">
          Email address <span className="text-red-600">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={updateField}
          className={fieldClass}
          required
        />
      </div>

      <div>
        <label
          htmlFor="dateOfBirth"
          className="block text-sm font-bold text-gray-800"
        >
          Date of birth <span className="text-red-600">*</span>
        </label>
        <input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          autoComplete="bday"
          value={form.dateOfBirth}
          onChange={updateField}
          className={fieldClass}
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-bold text-gray-800"
        >
          Message/comment <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={form.message}
          onChange={updateField}
          className={fieldClass}
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#003087] px-4 py-3 font-bold text-white hover:bg-[#002674] focus:outline-none focus:ring-2 focus:ring-[#003087] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>

      {status && (
        <p
          role="status"
          className={`p-4 text-sm ${
            status.type === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
