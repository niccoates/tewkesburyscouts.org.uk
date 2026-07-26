"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  membershipNumber: "",
  email: "",
  role: "",
  groupUnit: "",
  trainingCourse: "",
  trainingDate: "",
  dateTbc: false,
  reason: "",
  fullCost: "",
};

export default function TrainingFundingFormClient() {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const updateField = (event) => {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "dateTbc" && checked ? { trainingDate: "" } : {}),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/send-training-funding-request", {
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
          "Thank you. Your funding request has been sent successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "There was a problem sending your request. Please try again.",
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
        <label
          htmlFor="membershipNumber"
          className="block text-sm font-bold text-gray-800"
        >
          Membership number <span className="text-red-600">*</span>
        </label>
        <input
          id="membershipNumber"
          name="membershipNumber"
          type="text"
          value={form.membershipNumber}
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
        <label htmlFor="role" className="block text-sm font-bold text-gray-800">
          Role <span className="text-red-600">*</span>
        </label>
        <input
          id="role"
          name="role"
          type="text"
          value={form.role}
          onChange={updateField}
          className={fieldClass}
          required
        />
      </div>

      <div>
        <label
          htmlFor="groupUnit"
          className="block text-sm font-bold text-gray-800"
        >
          Group/Unit <span className="text-red-600">*</span>
        </label>
        <input
          id="groupUnit"
          name="groupUnit"
          type="text"
          value={form.groupUnit}
          onChange={updateField}
          className={fieldClass}
          required
        />
      </div>

      <div>
        <label
          htmlFor="trainingCourse"
          className="block text-sm font-bold text-gray-800"
        >
          Training course being attended{" "}
          <span className="text-red-600">*</span>
        </label>
        <input
          id="trainingCourse"
          name="trainingCourse"
          type="text"
          value={form.trainingCourse}
          onChange={updateField}
          className={fieldClass}
          required
        />
      </div>

      <fieldset>
        <legend className="block text-sm font-bold text-gray-800">
          Date of training course <span className="text-red-600">*</span>
        </legend>
        <input
          id="trainingDate"
          name="trainingDate"
          type="date"
          value={form.trainingDate}
          onChange={updateField}
          disabled={form.dateTbc}
          required={!form.dateTbc}
          className={`${fieldClass} disabled:cursor-not-allowed disabled:bg-gray-200`}
        />
        <label
          htmlFor="dateTbc"
          className="mt-3 flex cursor-pointer items-center gap-2 text-sm font-semibold text-gray-800"
        >
          <input
            id="dateTbc"
            name="dateTbc"
            type="checkbox"
            checked={form.dateTbc}
            onChange={updateField}
            className="size-4 accent-[#003087]"
          />
          Date to be confirmed
        </label>
      </fieldset>

      <div>
        <label
          htmlFor="reason"
          className="block text-sm font-bold text-gray-800"
        >
          Reason for funding request and how the training will benefit the
          District <span className="text-red-600">*</span>
        </label>
        <textarea
          id="reason"
          name="reason"
          rows="7"
          value={form.reason}
          onChange={updateField}
          className={fieldClass}
          required
        />
      </div>

      <div>
        <label
          htmlFor="fullCost"
          className="block text-sm font-bold text-gray-800"
        >
          Full cost of training <span className="text-red-600">*</span>
        </label>
        <div className="relative mt-2">
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
            £
          </span>
          <input
            id="fullCost"
            name="fullCost"
            type="number"
            min="0"
            step="0.01"
            inputMode="decimal"
            value={form.fullCost}
            onChange={updateField}
            className={`${fieldClass} mt-0 pl-7`}
            required
          />
        </div>
        <p className="mt-2 text-sm text-gray-600">
          The District will consider funding 50% of the full training cost.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#003087] px-4 py-3 font-bold text-white hover:bg-[#002674] focus:outline-none focus:ring-2 focus:ring-[#003087] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Submit funding request"}
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
