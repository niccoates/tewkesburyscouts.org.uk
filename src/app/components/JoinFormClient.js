"use client";

import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';

export default function JoinFormClient() {
  // State and logic remain the same as your original code
  const [joinType, setJoinType] = useState('Young Person');
  const [youngPersonName, setYoungPersonName] = useState('');
  const [parentGuardianName, setParentGuardianName] = useState('');
  const [adultName, setAdultName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [postCode, setPostCode] = useState('');
  const [country, setCountry] = useState('United Kingdom');
  const [localScoutGroup, setLocalScoutGroup] = useState('');
  const [lookingForGroup, setLookingForGroup] = useState('Yes');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const years = Array.from({ length: 100 }, (_, i) => (2025 - i).toString());
  const countries = ['United Kingdom'];
  const scoutGroupsAndUnits = [
    '1st Gotherington',
    '3rd Tewkesbury',
    '2nd Twyning',
    '1st Winchcombe',
    '1st Woodmancote',
    'Extreme Explorer Unit',
    'Pioneer Explorer Unit',
    'Red Wolves Explorer Unit',
    'Haberpakka Young Leader Unit',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = {
      joinType,
      ...(joinType === 'Young Person' && {
        youngPersonName,
        parentGuardianName,
      }),
      ...(joinType === 'Adult Volunteer' && {
        adultName,
      }),
      dateOfBirth: { day, month, year },
      email,
      telephone,
      address: { streetAddress, addressLine2, city, postCode, country },
      localScoutGroup,
      lookingForGroup,
    };

    try {
      const response = await fetch('/api/send-join-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage('Thank you! Your enquiry has been received and will be passed on to your Local Scout Group. As we are a volunteer organisation, it may make some time to receive a reply.');
        setIsSubmitted(true);
        setJoinType('Young Person');
        setYoungPersonName('');
        setParentGuardianName('');
        setAdultName('');
        setDay('');
        setMonth('');
        setYear('');
        setEmail('');
        setTelephone('');
        setStreetAddress('');
        setAddressLine2('');
        setCity('');
        setPostCode('');
        setCountry('United Kingdom');
        setLocalScoutGroup('');
        setLookingForGroup('Yes');
      } else {
        setSubmitMessage('There was an error sending your submission. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('There was an error sending your submission. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  Submit New Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form fields remain the same */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Are you a ... <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 flex gap-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="joinType"
                  value="Young Person"
                  checked={joinType === 'Young Person'}
                  onChange={(e) => setJoinType(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Young Person</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="joinType"
                  value="Adult Volunteer"
                  checked={joinType === 'Adult Volunteer'}
                  onChange={(e) => setJoinType(e.target.value)}
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Adult Volunteer</span>
              </label>
            </div>
          </div>

          {joinType === 'Young Person' && (
            <div className="space-y-3">
              <div>
                <label htmlFor="youngPersonName" className="block text-sm font-medium text-gray-700">
                  Young Person Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="youngPersonName"
                  value={youngPersonName}
                  onChange={(e) => setYoungPersonName(e.target.value)}
                  className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="parentGuardianName" className="block text-sm font-medium text-gray-700">
                  Parent/Guardian Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="parentGuardianName"
                  value={parentGuardianName}
                  onChange={(e) => setParentGuardianName(e.target.value)}
                  className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          )}
          {joinType === 'Adult Volunteer' && (
            <div>
              <label htmlFor="adultName" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="adultName"
                value={adultName}
                onChange={(e) => setAdultName(e.target.value)}
                className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 grid grid-cols-3 gap-3">
              <Listbox value={day} onChange={setDay}>
                <div className="relative">
                  <ListboxButton className="relative w-full cursor-default rounded-none border border-gray-300 bg-white py-2 pl-3 pr-10 text-left text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <span className="block truncate">{day || 'Day'}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </ListboxButton>
                  <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-sm shadow-lg focus:outline-none">
                    {days.map((d) => (
                      <ListboxOption
                        key={d}
                        value={d}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-3 pr-9 ${
                            active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                          }`
                        }
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {d}
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
              <Listbox value={month} onChange={setMonth}>
                <div className="relative">
                  <ListboxButton className="relative w-full cursor-default rounded-none border border-gray-300 bg-white py-2 pl-3 pr-10 text-left text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <span className="block truncate">{month || 'Month'}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </ListboxButton>
                  <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-sm shadow-lg focus:outline-none">
                    {months.map((m) => (
                      <ListboxOption
                        key={m}
                        value={m}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-3 pr-9 ${
                            active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                          }`
                        }
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {m}
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
              <Listbox value={year} onChange={setYear}>
                <div className="relative">
                  <ListboxButton className="relative w-full cursor-default rounded-none border border-gray-300 bg-white py-2 pl-3 pr-10 text-left text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <span className="block truncate">{year || 'Year'}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </ListboxButton>
                  <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-sm shadow-lg focus:outline-none">
                    {years.map((y) => (
                      <ListboxOption
                        key={y}
                        value={y}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-3 pr-9 ${
                            active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                          }`
                        }
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {y}
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
          </div>

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

          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">
              Telephone Number
            </label>
            <input
              type="tel"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="mt-2 block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 space-y-3">
              <input
                type="text"
                value={streetAddress}
                onChange={(e) => setStreetAddress(e.target.value)}
                placeholder="Street Address"
                className="block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
                placeholder="Address Line 2"
                className="block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="City"
                className="block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                value={postCode}
                onChange={(e) => setPostCode(e.target.value)}
                placeholder="Post Code"
                className="block w-full rounded-none border border-gray-300 bg-white py-2 px-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
              <Listbox value={country} onChange={setCountry}>
                <div className="relative">
                  <ListboxButton className="relative w-full cursor-default rounded-none border border-gray-300 bg-white py-2 pl-3 pr-10 text-left text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                    <span className="block truncate">{country}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </ListboxButton>
                  <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-sm shadow-lg focus:outline-none">
                    {countries.map((c) => (
                      <ListboxOption
                        key={c}
                        value={c}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-3 pr-9 ${
                            active ? 'bg-blue-100 text-blue-900' : 'text-gray-900'
                          }`
                        }
                      >
                        {({ selected, active }) => (
                          <>
                            <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                              {c}
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
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Local Scout Group or Unit
            </label>
            <Listbox value={localScoutGroup} onChange={setLocalScoutGroup}>
              <div className="relative mt-2">
                <ListboxButton className="relative w-full cursor-default rounded-none border border-gray-300 bg-white py-2 pl-3 pr-10 text-left text-sm text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <span className="block truncate">{localScoutGroup || 'Select a group or unit'}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </ListboxButton>
                <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-white py-1 text-sm shadow-lg focus:outline-none">
                  {scoutGroupsAndUnits.map((group) => (
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