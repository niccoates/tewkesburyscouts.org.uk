"use client";

import { useState } from "react"; // Ensure this import is present
import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
  { name: "About", href: "/about" },
  {
    name: "Groups",
    href: "#",
    subMenu: [
      {
        name: "1st Gotherington",
        href: "https://www.gotheringtonscouts.org.uk",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "3rd Tewkesbury",
        href: "https://www.scouts.org.uk/groups/10013383?loc=Bredon%20&slug=3rd-Tewkesbury",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "2nd Twyning",
        href: "https://www.scouts.org.uk/groups/10014641?loc=Bredon%20&slug=2nd-Twyning",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "1st Winchcombe",
        href: "https://www.winchcombescouts.co.uk/",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "1st Woodmancote",
        href: "https://fwsg.org.uk",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  {
    name: "Volunteers",
    href: "#",
    subMenu: [
      {
        name: "Submit Activity Notification",
        href: "/volunteers/activity-notification",
      },
      {
        name: "Request Training Funding",
        href: "/volunteers/training-funding-request",
      },
      {
        name: "Apply for Nights Away",
        href: "https://membership.scouts.org.uk/#/programmesupport/nightsaways/applyfornightsaway",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        name: "Training calendar",
        href: "https://bookwhen.com/gscouts",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 overflow-visible bg-white border-b border-gray-100">
      <nav
        aria-label="Global"
        className="relative mx-auto flex max-w-7xl items-center justify-between overflow-visible bg-white p-4 sm:p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Tewkesbury Scouts</span>
            <Image
              src="/tscouts_navy.png"
              alt="Scouts logo"
              width={150}
              height={60}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-8">
          {navigation.map((item) =>
            item.subMenu ? (
              <details className="group relative" key={item.name}>
                <summary className="flex cursor-pointer list-none items-center px-2 py-1.5 text-base font-bold text-gray-900 hover:text-[#003087] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#003087] sm:text-[15px]/6 [&::-webkit-details-marker]:hidden">
                  {item.name}
                  <ChevronDownIcon
                    className="ml-1 size-4 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <div className="absolute left-0 top-full z-[60] w-64 divide-y divide-gray-200 bg-white shadow-lg ring-1 ring-black/5">
                  {item.subMenu.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      target={subItem.target || "_self"}
                      rel={subItem.rel || undefined}
                      className="block px-6 py-3 text-sm text-gray-700 hover:text-[#003087] hover:underline focus:bg-gray-50 focus:text-[#003087] focus:outline-none"
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              </details>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-base sm:text-[15px]/6 font-bold text-gray-900 py-1.5 px-2 hover:text-[#003087] hover:underline"
              >
                {item.name}
              </a>
            ),
          )}
          <a
            href="/join"
            className="text-base sm:text-[15px]/6 font-extrabold text-white py-2 px-4 rounded-xs bg-[#003087] hover:bg-[#002674] hover:underline"
          >
            Join today
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="relative z-[100] lg:hidden"
      >
        <div className="fixed inset-0 bg-black/20" />
        <DialogPanel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-4 sm:px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Tewkesbury Scouts</span>
              <Image
                src="/tscouts_navy.png"
                alt="Scouts logo"
                width={150}
                height={50}
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.subMenu ? (
                    <div key={item.name}>
                      <div className="-mx-3 block rounded-lg px-3 py-2 text-base sm:text-lg font-semibold text-gray-900 hover:text-[#003087] hover:underline">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.subMenu.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            target={subItem.target || "_self"}
                            rel={subItem.rel || undefined}
                            className="-mx-3 block rounded-lg px-3 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-50 hover:text-[#003087] hover:underline"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base sm:text-lg font-semibold text-gray-900 hover:text-[#003087] hover:underline"
                    >
                      {item.name}
                    </a>
                  ),
                )}
              </div>
              <div className="py-6">
                <a
                  href="/join"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base sm:text-lg font-semibold text-white bg-[#003087] hover:bg-[#002674] hover:underline"
                >
                  Join today
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
