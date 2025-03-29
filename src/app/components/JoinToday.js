import Link from "next/link";
import Image from "next/image";

export default function JoinToday(){
    return(
        <section id="volunteer" className="bg-white">
        <div className="mx-auto max-w-7xl py-16 sm:py-20 lg:py-24 sm:px-4 lg:px-8">
          <div className="relative isolate overflow-hidden bg-[#006ddf] px-4 sm:pl-6 sm:pr-0 lg:pl-14 lg:pr-0 pt-12 sm:pt-16 md:pt-24 lg:flex lg:gap-x-20 lg:pt-0 shadow-xl sm:rounded-lg">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-14 lg:text-left">
              <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Join the Tewkesbury adventure
              </h2>
              <p className="mt-2 text-pretty text-base sm:text-lg/8 text-gray-100">
                Develop new skills. Make new friends. Joining Scouts is just the beginning of your big adventure.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-6 lg:justify-start pb-10 lg:pb-0">
                <Link
                  href="/join"
                  className="rounded-xs bg-white px-3.5 py-2.5 text-[15px]/6 font-extrabold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Join us today
                </Link>
              </div>
            </div>
            <div className="relative lg:w-2/3 flex items-center justify-end hidden lg:inline">
              <Image
                src="/images/firelighting.webp"
                alt="Firelighting"
                width={912}
                height={540}
                className="w-full h-full object-cover rounded-r-lg sm:rounded-r-none lg:rounded-r-lg"
              />
            </div>
          </div>
        </div>
      </section>
    );
}