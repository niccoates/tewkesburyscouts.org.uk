import JoinFormClient from '../components/JoinFormClient';

export const metadata = {
  title: "Join us | Tewkesbury Scouts",
  description: "Join Tewkesbury Scouts as a young person or adult volunteer and start your adventure today. Open to ages 4-25, we offer fun, skills, and community impact.",
  keywords: "scouts, tewkesbury, join, youth",
  alternates: {
    canonical: "https://www.tewkesburyscouts.org/join", // Page-specific canonical URL
  },
};

export default function JoinPage() {
  return (
    <div>
      <main className="px-4 sm:px-6 lg:px-8 bg-[url('/images/cub_leaves.webp')] bg-cover bg-center relative before:absolute before:inset-0 before:bg-black/60">
        <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-2xl lg:shrink-0 xl:max-w-7xl pr-0 sm:pr-16">
              <div className="text-center">
                <h1 className="text-pretty text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-lg">
                  Join
                </h1>
                <p className="mt-6 sm:mt-8 text-pretty w-full sm:w-1/2 mx-auto text-base sm:text-lg font-medium text-gray-100 lg:max-w-none drop-shadow-md">
                  We are the UK's biggest mixed youth organisation. We are helping thousands of young people learn new skills for life by offering 4 to 25 year olds fun and challenging adventures, and the chance to make a positive impact in communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <section id="join" className="pt-12 sm:pt-16 mx-auto w-full">
          <p className="text-lg sm:text-xl leading-loose text-gray-800 block mb-5">
            We're Scouts, UK's biggest mixed youth organisation. We are changing the lives of young people from the ages of 4 to 25 by offering fun and challenging adventures, building new friendships and a chance to help others making a positive impact in communities.
          </p>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-5 mt-8 sm:mt-10">
            Get involved
          </h2>
          <p className="text-base sm:text-lg leading-loose tracking-relaxed text-gray-700 mb-5">
            Young people take part in a diverse range of activities from kayaking, camping, photography, and learning survival skills to first aid. These everyday adventures are possible thanks to our adult volunteers, who support in a wide range of roles.
          </p>
        </section>

        <div className="bg-gray-100 py-6 w-full">
          <div className="px-4 sm:px-6 lg:px-8">
            <JoinFormClient />
          </div>
        </div>
      </div>
    </div>
  );
}