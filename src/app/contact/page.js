import ContactFormClient from '../components/ContactFormClient';

export const metadata = {
  title: "Contact us | Tewkesbury Scouts",
  description: "Get in touch with Tewkesbury Scouts. Have a question, story, or media request? Fill out our contact form, and we'll get back to you soon.",
  keywords: "scouts, tewkesbury, join, youth",
  alternates: {
    canonical: "https://www.tewkesburyscouts.org/contact", // Page-specific canonical URL
  },
};

export default function ContactForm() {
  return (
    <div>
      <main className="px-4 sm:px-6 lg:px-8 bg-[url('/images/yc_scouts.webp')] bg-cover bg-center relative before:absolute before:inset-0 before:bg-black/60">
        <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-2xl lg:shrink-0 xl:max-w-7xl pr-0 sm:pr-16">
              <div className="text-center">
                <h1 className="text-pretty text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white drop-shadow-lg">
                  Contact us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <section id="contact" className="pt-12 sm:pt-16 mx-auto w-full">
          <p className="text-lg sm:text-xl leading-loose text-gray-800 block mb-5">
            General question about Scouting? Got an interesting story to share? Want to request a media contact? Fill in the form below and we will get back to you.
          </p>
        </section>

        <div className="bg-gray-100 py-6 w-full">
          <div className="px-4 sm:px-6 lg:px-8">
            <ContactFormClient />
          </div>
        </div>
      </div>
    </div>
  );
}