import YouthLeadRoleFormClient from "../components/YouthLeadRoleFormClient";

export const metadata = {
  title: "Youth Lead Role",
  description:
    "Find out about the Youth Lead Role with Tewkesbury District Scouts and get in touch.",
  alternates: {
    canonical: "https://www.tewkesburyscouts.org.uk/youth-lead-role",
  },
};

export default function YouthLeadRolePage() {
  return (
    <div>
      <main className="relative bg-[url('/images/yc_scouts.webp')] bg-cover bg-center px-4 before:absolute before:inset-0 before:bg-black/60 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl py-16 sm:py-24 lg:py-32">
          <h1 className="text-center text-3xl font-black tracking-tight text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
            Youth Lead Role
          </h1>
        </div>
      </main>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="space-y-8 text-lg leading-relaxed text-gray-800">
          <div>
            <p className="mb-5 text-xl font-bold italic text-[#003087]">
              Tewkesbury District Scouts - Empowering Young People Through
              Leadership
            </p>
            <p className="mb-5">
              Are you passionate about youth voice, leadership, and making a
              real impact in your community? Do you believe that young people
              should shape their own Scouting experiences? If so,{" "}
              <strong>Tewkesbury District Scouts</strong> wants to hear from
              you!
            </p>
            <p>
              We&apos;re on the lookout for an enthusiastic and dedicated{" "}
              <strong>District Youth Lead</strong> to help us champion youth
              involvement and make Scouting in our district even more
              youth-shaped.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-black text-[#003087]">
              What&apos;s the role?
            </h2>
            <p className="mb-3">As District Youth Lead, you will:</p>
            <ul className="list-disc space-y-2 pl-7">
              <li>
                Be the <strong>youth voice</strong> in district decision-making
              </li>
              <li>
                Work alongside adult leaders to{" "}
                <strong>shape Scouting for the future</strong>
              </li>
              <li>
                Encourage and support{" "}
                <strong>youth-led projects and events</strong>
              </li>
              <li>
                <strong>Mentor and inspire</strong> other young people across
                the district
              </li>
              <li>
                Help ensure <strong>every young person has a say</strong> in
                their Scouting journey
              </li>
            </ul>
            <p className="mt-4">
              This is a key leadership role where your input will directly
              influence how Scouting develops across Tewkesbury District.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-black text-[#003087]">
              Who are we looking for?
            </h2>
            <p className="mb-3">
              You don&apos;t need years of experience - just passion, energy,
              and a commitment to making a difference. Ideally, you are:
            </p>
            <ul className="list-disc space-y-2 pl-7">
              <li>Aged 18-25 (or near that age range)</li>
              <li>A current or former Scout with leadership potential</li>
              <li>
                A good communicator who works well with youth and adult teams
              </li>
              <li>
                Enthusiastic about empowering others and taking initiative
              </li>
            </ul>
            <p className="mt-4">
              We welcome applicants from all backgrounds and levels of Scouting
              experience. Training and ongoing support will be provided.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-black text-[#003087]">
              Time commitment
            </h2>
            <p>
              Flexible - typically a few hours a month, with occasional
              district meetings and events.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-black text-[#003087]">
              Why apply?
            </h2>
            <ul className="list-disc space-y-2 pl-7">
              <li>Develop key leadership and communication skills</li>
              <li>Make your voice count at the district level</li>
              <li>Build your CV and gain valuable experience</li>
              <li>Be part of something meaningful and fun!</li>
            </ul>
          </div>

          <div className="border-l-4 border-[#f6c500] bg-gray-50 p-5">
            <h2 className="mb-2 text-xl font-black text-gray-900">
              Interested? Let&apos;s talk!
            </h2>
            <p>
              To apply or find out more, please complete the form below.{" "}
              <strong>Applications close 13th August 2026.</strong>
            </p>
          </div>
        </section>

        <section
          aria-labelledby="youth-lead-form-heading"
          className="mt-10 bg-gray-100 p-6 sm:p-8"
        >
          <h2
            id="youth-lead-form-heading"
            className="mb-6 text-2xl font-black text-[#003087]"
          >
            Get in touch
          </h2>
          <YouthLeadRoleFormClient />
        </section>

        <div className="mt-10 text-center text-lg font-bold text-[#003087]">
          <p>Be the voice. Lead the change. Shape Scouting.</p>
          <p className="mt-2">Tewkesbury District Scouts - Skills for Life</p>
        </div>
      </div>
    </div>
  );
}
