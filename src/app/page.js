import Link from "next/link";
import Image from "next/image";
import JoinToday from './components/JoinToday';

export default function Home() {
  return (
    <div className="bg-white">
      <main className="px-4 sm:px-6 lg:px-8 bg-[url('/images/beavers_abbey.webp')] bg-cover bg-center relative before:absolute before:inset-0 before:bg-black/15">
        <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-2xl lg:shrink-0 xl:max-w-2xl pr-0 sm:pr-16">
              <div className="bg-black/70 p-6 sm:p-10 rounded-sm">
                <h1 className="text-pretty text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-white drop-shadow-lg">
                  Building Skills for Life, One Adventure at a Time
                </h1>
                <p className="mt-6 sm:mt-8 text-pretty text-base sm:text-lg font-medium text-gray-100 lg:max-w-none drop-shadow-md">
                  We are Tewkesbury Scouts, offering challenges and adventures to young people aged 4 to 18 in Gotherington, Twyning, Winchcombe, Woodmancote, and Tewkesbury. Join us to build confidence, learn new skills, and discover your own adventure.
                </p>
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-x-6">
                  <Link
                    href="/join"
                    className="w-full sm:w-auto rounded-xs bg-white px-3.5 py-2.5 text-[15px]/6 font-extrabold text-black border border-gray-300 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    aria-label="Join Tewkesbury Scouts today"
                  >
                    Join today
                  </Link>
                  <Link
                    href="/about"
                    className="w-full sm:w-auto rounded-xs bg-transparent px-3.5 py-2.5 text-[15px]/6 font-semibold text-white border border-white shadow-sm hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="Learn more about Tewkesbury Scouts"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section id="intro" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-white">
        <div className="lg:flex lg:items-center lg:gap-x-12">
          <div className="lg:w-2/3">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-[3rem] sm:leading-[4rem] font-black text-gray-900">
              <span className="relative inline-block">
                Hey, we're
              </span>
              <br />
              <span className="text-[#7413dc]">Tewkesbury Scouts</span>
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-loose">
              We provide the adventure of Scouting to over 400 young people across the borough, helping them develop skills for life through fun activities, teamwork, and new challenges. Are you ready to make friends, learn something new, and explore the outdoors? Let's get started!
            </p>
            <div className="mt-6">
              <Link
                href="/join"
                className="inline-block text-[15px]/6 font-extrabold text-white py-2.5 px-3 rounded-xs bg-[#003982] hover:bg-[#023474] pointer"
              >
                Join us today
              </Link>
            </div>
          </div>
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-end">
            <div className="relative w-full sm:w-[75%] lg:w-[60%]">
              <div className="absolute bg-[#003982] w-full h-full rounded-sm -bottom-6 sm:-bottom-10 lg:-bottom-12 -right-6 sm:-right-10 lg:-right-12 z-0"></div>
              <img
                src="/images/crate_stacking.webp"
                alt="A young Scout enjoying an outdoor activity"
                className="relative h-80 sm:h-96 rounded-sm shadow-md z-10 object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="scout-quote" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:pt-24 bg-white">
        <div className="relative">
          <div className="flex items-start">
            <span className="text-5xl sm:text-6xl lg:text-[200px] text-[#006ddf] mr-2 sm:mr-4 -mt-4 sm:-mt-6">“</span>
            <div>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight">
                I was scared to camp out, but with my friends, I did it!
                <br />
                I want to do it again!
              </blockquote>
              <p className="mt-3 text-lg sm:text-xl text-gray-500">
                Albie, 7, Beaver Scout
              </p>
            </div>
            <span className="text-5xl sm:text-6xl lg:text-[200px] text-[#006ddf] ml-2 sm:ml-4 -mb-2 sm:-mb-4">”</span>
          </div>
        </div>
      </section>

      <section id="groups" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-24 bg-white">
        <h2 className="w-full text-4xl sm:text-5xl font-black tracking-tight text-gray-900 lg:shrink-0">
          Get Involved
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 leading-relaxed">
          Future go-getters are asking big questions, and our volunteers are sharing skills for life across Tewkesbury.
        </p>
        <div className="mt-12 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-24">
          <Link
            href="https://www.scouts.org.uk/groups/10016416?loc=gl53&page=9&slug=1st-Gotherington"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white group cursor-pointer block"
          >
            <h3 className="text-xl font-semibold text-[#088486] border-t-4 border-[#088486] pt-4 group-hover:text-[#088486] transition-colors duration-300">
              1st Gotherington
            </h3>
            <p className="text-gray-600 mt-2 leading-normal line-clamp-3 group-hover:text-[#088486] transition-colors duration-300">
              In the north of Bishop’s Cleeve, perfect for tent pitching with Beavers, Cubs, and Scouts.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-[#088486] hover:underline group-hover:text-[#088486] transition-colors duration-300">
              Find out more
            </span>
          </Link>
          <Link
            href="https://www.scouts.org.uk/groups/10013383?loc=Bredon%20&slug=3rd-Tewkesbury"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white group cursor-pointer block"
          >
            <h3 className="text-xl font-semibold text-[#7413dc] border-t-4 border-[#7413dc] pt-4 group-hover:text-[#7413dc] transition-colors duration-300">
              3rd Tewkesbury
            </h3>
            <p className="text-gray-600 mt-2 leading-normal line-clamp-3 group-hover:text-[#7413dc] transition-colors duration-300">
              In central Tewkesbury, this group helps youth learn skills with an Abbey view.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-[#7413dc] hover:underline group-hover:text-[#7413dc] transition-colors duration-300">
              Find out more
            </span>
          </Link>
          <Link
            href="https://www.scouts.org.uk/groups/10014641?loc=Bredon%20&slug=2nd-Twyning"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white group cursor-pointer block"
          >
            <h3 className="text-xl font-semibold text-[#006ddf] border-t-4 border-[#006ddf] pt-4 group-hover:text-[#006ddf] transition-colors duration-300">
              2nd Twyning
            </h3>
            <p className="text-gray-600 mt-2 leading-normal line-clamp-3 group-hover:text-[#006ddf] transition-colors duration-300">
              Cubs and Scouts embark on exciting adventures near the River Avon.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-[#006ddf] hover:underline group-hover:text-[#006ddf] transition-colors duration-300">
              Find out more
            </span>
          </Link>
          <Link
            href="https://www.winchcombescouts.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white group cursor-pointer block"
          >
            <h3 className="text-xl font-semibold text-[#25b755] border-t-4 border-[#25b755] pt-4 group-hover:text-[#25b755] transition-colors duration-300">
              1st Winchcombe
            </h3>
            <p className="text-gray-600 mt-2 leading-normal line-clamp-3 group-hover:text-[#25b755] transition-colors duration-300">
              A fantastic place to discover and explore in a traditional Cotswold town.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-[#25b755] hover:underline group-hover:text-[#25b755] transition-colors duration-300">
              Find out more
            </span>
          </Link>
          <Link
            href="https://fwsg.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white group cursor-pointer block"
          >
            <h3 className="text-xl font-semibold text-[#205b41] border-t-4 border-[#205b41] pt-4 group-hover:text-[#205b41] transition-colors duration-300">
              1st Woodmancote
            </h3>
            <p className="text-gray-600 mt-2 leading-normal line-clamp-3 group-hover:text-[#205b41] transition-colors duration-300">
              The largest group in Gloucestershire, covering Bishop’s Cleeve and Woodmancote.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-[#205b41] hover:underline group-hover:text-[#205b41] transition-colors duration-300">
              Find out more
            </span>
          </Link>
          <Link
            href="https://www.scouts.org.uk/explorers"
            rel="noopener noreferrer"
            className="bg-white group cursor-pointer block"
          >
            <h3 className="text-xl font-semibold text-[#ff912a] border-t-4 border-[#ff912a] pt-4 group-hover:text-[#ff912a] transition-colors duration-300">
              Explorer Scout Units
            </h3>
            <p className="text-gray-600 mt-2 leading-normal line-clamp-3 group-hover:text-[#ff912a] transition-colors duration-300">
              Lead a team across the district or join our Young Leaders Unit for ages 14-18.
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-[#ff912a] hover:underline group-hover:text-[#ff912a] transition-colors duration-300">
              Find out more
            </span>
          </Link>
        </div>
      </section>

      <section id="scout-quote" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:mt-24 bg-white">
        <div className="relative">
          <div className="flex items-start">
            <span className="text-5xl sm:text-6xl lg:text-[200px] text-[#003982] mr-2 sm:mr-4 -mt-4 sm:-mt-6">“</span>
            <div>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight">
                Scouting in Tewkesbury taught me how to lead my team and make friends I’ll never forget!
              </blockquote>
              <p className="mt-3 text-lg sm:text-xl text-gray-500">
                Sophie, 15, Explorer Scout
              </p>
            </div>
            <span className="text-5xl sm:text-6xl lg:text-[200px] text-[#003982] ml-2 sm:ml-4 -mb-2 sm:-mb-4">”</span>
          </div>
        </div>
      </section>

      <JoinToday/>
    </div>
  );
}