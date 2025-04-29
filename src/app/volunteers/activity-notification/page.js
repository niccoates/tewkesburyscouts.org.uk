import ActivityFormClient from '../../components/ActivityFormClient';

export const metadata = {
  title: "Activity Notification | Tewkesbury Scouts",
  description: "Notify the Tewkesbury Scouts District Team about activities taking place away from your normal meeting place. Submit details for approval and coordination.",
  keywords: "scouts, tewkesbury, join, youth",
  alternates: {
    canonical: "https://www.tewkesburyscouts.org/volunteers/activity-notifications", // Page-specific canonical URL
  },
};

export default function ActivityNotification() {
  return (
    <div>
      <main className="px-4 sm:px-6 lg:px-8 bg-[url('/images/yc_scouts.webp')] bg-cover bg-center relative before:absolute before:inset-0 before:bg-black/60">
        <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-2xl lg:shrink-0 xl:max-w-7xl pr-0 sm:pr-16">
              <div className="text-center">
                <h1 className="text-pretty text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-lg">
                  Activity Notification
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <section id="activity-notification" className="pt-12 sm:pt-16 mx-auto w-full">
          <p className="text-lg sm:text-xl leading-loose text-gray-800 block mb-5">
            This form is to be used to notify the District Lead Volunteer & District Team where activities are taking place away from the normal meeting place of the group/section.
          </p>
          <p className="text-lg sm:text-xl leading-loose text-gray-800 block mb-5">
            A copy is also sent to your Group Leader Volunteer (or DESC if an Explorer Unit) and to the leader in charge.
          </p>
        </section>

        <div className="bg-gray-100 py-6 w-full">
          <div className="px-4 sm:px-6 lg:px-8">
            <ActivityFormClient />
          </div>
        </div>
      </div>
    </div>
  );
}