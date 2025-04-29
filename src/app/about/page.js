import Link from "next/link";
import Image from "next/image";
import JoinToday from '../components/JoinToday';

export const metadata = {
  title: "About us | Tewkesbury Scouts",
  description: "Learn more about Tewkesbury Scouts, our mission, and our impact on young people in the community.",
  keywords: "scouts, tewkesbury, join, youth",
  alternates: {
    canonical: "https://www.tewkesburyscouts.org/about", // Page-specific canonical URL
  },
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

      <JoinToday/>
    </div>
  );
}