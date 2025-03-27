import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About us | Tewkesbury Scouts",
  description: "Learn more about Tewkesbury Scouts, our mission, and our impact on young people in the community.",
  keywords: "scouts, tewkesbury, join, youth",
};

export default function AboutUs() {
  return (
    <div>
      <main className="px-4 sm:px-6 lg:px-8 bg-[url('/images/adult_helping.webp')] bg-cover bg-center relative before:absolute before:inset-0 before:bg-black/60">
        <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-2xl lg:shrink-0 xl:max-w-7xl pr-0 sm:pr-16">
              <div className="text-center">
                <h1 className="text-pretty text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-lg">
                  About us
                </h1>
                <p className="mt-6 sm:mt-8 text-pretty w-full sm:w-1/2 mx-auto text-base sm:text-lg font-medium text-gray-100 lg:max-w-none drop-shadow-md">
                  We're Scouts and everyone is welcome here. Every week, we help almost half a million people aged 4-25 develop skills for life. Are you ready to join the adventure?
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="about" className="py-16 sm:py-24 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-lg sm:text-xl leading-loose text-gray-800 block mb-5">
          We're Scouts and everyone is welcome here. Scouts is the UK's biggest mixed youth organisation, and Tewkesbury Scouts is proud to be part of the movement.
        </p>
        <p className="text-base sm:text-lg leading-loose tracking-relaxed text-gray-700 mb-5">
          Scouting offers challenge and adventure to 400,000 young people and 100,000 adults across the UK. We do some pretty amazing things in Scouting, but for us, adventure is a way of life and not just an activity or expedition.
        </p>
        <p className="text-base sm:text-lg leading-loose tracking-relaxed text-gray-700 mb-5">
          Our Scouts grow in confidence by trying out new skills and stretching themselves. Whether it's an Explorer trying out his French on an international trip or a Scout leading his Patrol for the first time, each time we challenge ourselves, it's a step forward. When a Scout stands up to a bully, or sticks up for what they believe in; that's an adventure.
        </p>
        <p className="text-base sm:text-lg leading-loose tracking-relaxed text-gray-700 mb-5">
          Tewkesbury Scouts provides that adventure for young people in the Tewkesbury area, with active Scout Groups in Gotherington, Twyning, Winchcombe, Woodmancote and of course Tewkesbury.
        </p>
        <p className="text-base sm:text-lg leading-loose tracking-relaxed text-gray-700 mb-5">
          14 to 18 year olds are served by four Explorer Scout Units across the District, including a specialised Young Leaders Unit. In every case, we help young people from 6-18 years find their own adventure, on their own terms.
        </p>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-5 mt-16 sm:mt-20">
          Our District
        </h2>
        <p className="text-base sm:text-lg leading-loose tracking-relaxed text-gray-700 mb-5">
          There are nine Scout districts in the Gloucestershire: Cheltenham, Cotswold, Cotswold Vale, Gloucester, North Cotswold, The Royal Forest of Dean, Stroud & Tetbury, Tewkesbury and Park
        </p>
        <p className="text-base sm:text-lg leading-loose tracking-relaxed text-gray-700 mb-5">
          Tewkesbury District is in the north of the county and includes the towns of Bishops Cleeve and Winchcombe as well as Tewkesbury itself and the rural areas between. The District badge, designed by our late District Commissioner Keith Robinson, depicts a bishop's mitre and crook, a sword and a rose.
        </p>
        <p className="text-base sm:text-lg leading-loose tracking-relaxed text-gray-700 mb-5">
          The mitre and crook represent Tewkesbury Abbey (founded 1092), Winchcombe Abbey (founded 798), and Hailes Abbey, near Winchcombe (founded 1246). At the time of the Dissolution (1539), Tewkesbury Abbey was saved from demolition by the people of the town. They purchased it for £453 to use as the parish church. It is one of the finest surviving examples of Norman architecture. Winchcombe and Hailes Abbeys fared less well. Winchcombe Abbey was completely dismantled, the stone being used in nearby buildings. Hailes Abbey was stripped of its lead and other valuables and left as a ruin, now preserved by the National Trust.
        </p>
        <p className="text-base sm:text-lg leading-loose tracking-relaxed text-gray-700 mb-5">
          The rose and sword represent the Battle of Tewkesbury, 4th May 1471. It was a turning point in the War of the Roses. In recent years, the battle has been re-enacted each summer and has become the largest medieval festival in Europe.
        </p>
      </section>

      <section id="volunteer" className="bg-white">
        <div className="mx-auto max-w-7xl py-16 sm:py-20 lg:py-24 sm:px-4 sm:py-20 lg:px-8">
          <div className="relative isolate overflow-hidden bg-[#006ddf] px-4 sm:px-6 lg:px-14 pt-12 sm:pt-16 md:pt-24 lg:flex lg:gap-x-20 lg:pt-0 shadow-xl sm:rounded-lg">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-14 lg:text-left">
              <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Join the Tewkesbury adventure
              </h2>
              <p className="mt-2 text-pretty text-base sm:text-lg/8 text-gray-100">
                Develop new skills. Make new friends. Joining Scouts is just the beginning of your big adventure.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  href="/join"
                  className="rounded-xs bg-white px-3.5 py-2.5 text-[15px]/6 font-extrabold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Join us today
                </Link>
              </div>
            </div>
            <div className="relative mt-12 sm:mt-16 lg:mt-8 lg:w-1/2">
              <Image
                src="/images/firelighting.webp"
                alt="Firelighting"
                width={912}
                height={540}
                className="absolute left-0 -top-10 w-full max-w-[40rem]"
                sizes="(max-width: 768px) 100vw, 40rem"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}