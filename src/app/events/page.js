import Link from "next/link";

export const metadata = {
  title: "Events",
  description: "Discover upcoming events with Tewkesbury Scouts.",
  keywords: "scouts, tewkesbury, events, youth",
};

export async function getEvents() {
  const res = await fetch(`http://localhost:3000/data/events.json`, {
    cache: "no-store",
  });
  const events = await res.json();
  return events.sort((a, b) => new Date(a.date) - new Date(b.date));
}

export default async function EventsPage() {
  const events = await getEvents();
  const today = new Date();

  const upcomingEvents = events.filter(
    (event) => new Date(event.date) >= today
  );
  const pastEvents = events.filter(
    (event) => new Date(event.date) < today
  );

  return (
    <div>
      <main className="px-4 sm:px-6 lg:px-8 bg-[url('/images/yc_scouts.webp')] bg-cover bg-center relative before:absolute before:inset-0 before:bg-black/60">
        <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-2xl lg:shrink-0 xl:max-w-7xl pr-0 sm:pr-16">
              <div className="text-center">
              <h1 className="text-pretty text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-lg">
                  Upcoming Events
                </h1>
                <p className="mt-6 sm:mt-8 text-pretty w-full sm:w-1/2 mx-auto text-base sm:text-lg font-medium text-gray-100 lg:max-w-none drop-shadow-md">
                  Explore District ran events and training for young people and volunteers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <section id="upcoming-events" className="pt-12 sm:pt-16 mx-auto w-full">
          {upcomingEvents.length > 0 ? (
            <div className="space-y-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="p-4 pb-10 border-b border-gray-200">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-gray-800 mt-2">
                    {new Date(event.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })} 
                    <span className="text-gray-400 ml-5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline size-5 align-middle mr-1 -mt-1">
                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                    </svg>

                        {event.location}
                        </span>
                  </p>

                  <p className="text-base sm:text-lg text-gray-700 mt-4">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-base sm:text-lg text-gray-700">
              No upcoming events at the moment. Check back soon!
            </p>
          )}
        </section>
      </div>
    </div>
  );
}