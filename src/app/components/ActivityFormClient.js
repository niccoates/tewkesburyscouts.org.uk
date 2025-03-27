'use client';

import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

export default function ActivityFormClient() {
  // State for form fields
  const [leaderName, setLeaderName] = useState('');
  const [email, setEmail] = useState('');
  const [membershipNumber, setMembershipNumber] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [groupUnit, setGroupUnit] = useState('');
  const [sections, setSections] = useState([]);
  const [activityName, setActivityName] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [numYoungPeople, setNumYoungPeople] = useState('');
  const [numAdults, setNumAdults] = useState('');
  const [inTouch, setInTouch] = useState('');
  const [riskAssessment, setRiskAssessment] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Options for dropdowns
  const groupUnits = [
    '1st Woodmancote',
    '1st Winchcombe',
    '1st Gotherington',
    '2nd Twyning',
    '3rd Tewkesbury',
    'Pioneer Explorer Unit',
    'Red Wolves Explorer Unit',
    'Extreme Explorer Unit',
    'Haberpakka Young Leader Unit',
  ];

  const sectionOptions = ['Beavers', 'Cubs', 'Scouts', 'Explorers', 'Young Leaders'];

  // Handle multiple section selection
  const handleSectionChange = (section) => {
    if (sections.includes(section)) {
      setSections(sections.filter((s) => s !== section));
    } else {
      setSections([...sections, section]);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Validate required fields
    if (!leaderName || !email || !contactNumber || !groupUnit || sections.length === 0 || !activityName || !date || !startTime || !endTime || !location || !numYoungPeople || !numAdults || !inTouch || !riskAssessment) {
      setSubmitMessage('Please fill out all required fields and confirm the risk assessment.');
      setIsSubmitting(false);
      return;
    }

    const formData = {
      leaderName,
      email,
      membershipNumber,
      contactNumber,
      groupUnit,
      sections,
      activityName,
      date,
      startTime,
      endTime,
      location,
      numYoungPeople,
      numAdults,
      inTouch,
      riskAssessment,
    };

    try {
      const response = await fetch('/api/send-activity-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you! Your activity notification has been sent successfully.');
        setIsSubmitted(true);
        // Reset form fields
        setLeaderName('');
        setEmail('');
        setMembershipNumber('');
        setContactNumber('');
        setGroupUnit('');
        setSections([]);
        setActivityName('');
        setDate('');
        setStartTime('');
        setEndTime('');
        setLocation('');
        setNumYoungPeople('');
        setNumAdults('');
        setInTouch('');
        setRiskAssessment(false);
      } else {
        setSubmitMessage('There was an error sending your notification. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('There was an error sending your notification. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to reset the form and show it again
  const handleTryAgain = () => {
    setIsSubmitted(false);
    setSubmitMessage('');
  };

  return (
    <>

            {isSubmitted ? (
              <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">Success!</h3>
                    <div className="mt-2 text-sm text-green-700">
                      <p>{submitMessage}</p>
                    </div>
                    <div className="mt-4">
                      <button
                        onClick={handleTryAgain}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        Submit Another Notification
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Leader in Charge Name */}
                <div>
                  <label htmlFor="leaderName" className="block text-sm font-medium text-gray-700">
                    Leader in Charge Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="leaderName"
                    value={leaderName}
                    onChange={(e) => setLeaderName(e.target.value)}
                    className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Membership Number */}
                <div>
                  <label htmlFor="membershipNumber" className="block text-sm font-medium text-gray-700">
                    Membership Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="membershipNumber"
                    value={membershipNumber}
                    onChange={(e) => setMembershipNumber(e.target.value)}
                    className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Group or Unit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Group or Unit <span className="text-red-500">*</span>
                  </label>
                  <Listbox value={groupUnit} onChange={setGroupUnit}>
                    <div className="relative mt-2">
                      <ListboxButton className="relative w-full cursor-default rounded-none border border-gray-300 bg-white py-2 pl-3 pr-10 text-left text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                        <span className="block truncate">{groupUnit || 'Select a group or unit'}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </ListboxButton>
                      <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-sm shadow-lg focus:outline-none">
                        {groupUnits.map((group) => (
                          <ListboxOption
                            key={group}
                            value={group}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-3 pr-9 ${
                                active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                              }`
                            }
                          >
                            {({ selected, active }) => (
                              <>
                                <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                  {group}
                                </span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                                      active ? 'text-blue-600' : 'text-blue-600'
                                    }`}
                                  >
                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </ListboxOption>
                        ))}
                      </ListboxOptions>
                    </div>
                  </Listbox>
                </div>

                {/* Section(s) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Section(s) <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2 space-y-2">
                    {sectionOptions.map((section) => (
                      <label key={section} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={sections.includes(section)}
                          onChange={() => handleSectionChange(section)}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{section}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Activity Details Section */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Activity Details</h3>
                  <div className="mt-4 space-y-6">
                    {/* Activity Name */}
                    <div>
                      <label htmlFor="activityName" className="block text-sm font-medium text-gray-700">
                        Activity Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="activityName"
                        value={activityName}
                        onChange={(e) => setActivityName(e.target.value)}
                        className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Date */}
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Start Time */}
                    <div>
                      <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
                        Start Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="time"
                        id="startTime"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* End Time */}
                    <div>
                      <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">
                        End Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="time"
                        id="endTime"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>

                    {/* Number of Young People */}
                    <div>
                      <label htmlFor="numYoungPeople" className="block text-sm font-medium text-gray-700">
                        Number of Young People <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="numYoungPeople"
                        value={numYoungPeople}
                        onChange={(e) => setNumYoungPeople(e.target.value)}
                        className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                        min="0"
                      />
                    </div>

                    {/* Number of Adults */}
                    <div>
                      <label htmlFor="numAdults" className="block text-sm font-medium text-gray-700">
                        Number of Adults <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        id="numAdults"
                        value={numAdults}
                        onChange={(e) => setNumAdults(e.target.value)}
                        className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                        min="0"
                      />
                    </div>

                    {/* InTouch */}
                    <div>
                      <label htmlFor="inTouch" className="block text-sm font-medium text-gray-700">
                        InTouch <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="inTouch"
                        value={inTouch}
                        onChange={(e) => setInTouch(e.target.value)}
                        className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        rows="5"
                        required
                      />
                    </div>

                    {/* Risk Assessment */}
                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          checked={riskAssessment}
                          onChange={(e) => setRiskAssessment(e.target.checked)}
                          className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          required
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Yes, I have completed the risk assessment <span className="text-red-500">*</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button and Error Message */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 text-white py-2 px-4 text-sm font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                  {submitMessage && !isSubmitted && (
                    <div className="rounded-md bg-red-50 p-4 mt-3">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <svg
                            className="h-5 w-5 text-red-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <h3 className="text-sm font-medium text-red-800">Error</h3>
                          <div className="mt-2 text-sm text-red-700">
                            <p>{submitMessage}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </form>
            )}
            </>
  );
}