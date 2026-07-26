import TrainingFundingFormClient from "../../components/TrainingFundingFormClient";

export const metadata = {
  title: "Training Funding Request",
  description:
    "Request funding from Tewkesbury District Scouts towards the cost of volunteer training.",
  alternates: {
    canonical:
      "https://www.tewkesburyscouts.org.uk/volunteers/training-funding-request",
  },
};

export default function TrainingFundingRequestPage() {
  return (
    <div>
      <main className="relative bg-[url('/images/yc_scouts.webp')] bg-cover bg-center px-4 before:absolute before:inset-0 before:bg-black/60 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl py-16 sm:py-24 lg:py-32">
          <h1 className="text-center text-3xl font-black tracking-tight text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
            Training Funding Request
          </h1>
        </div>
      </main>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <section className="mb-10 space-y-4 text-lg leading-relaxed text-gray-800">
          <p>
            Volunteers can use this form to request District funding towards
            the cost of a training course.
          </p>
          <p>
            The District will consider paying 50% of the full training cost.
            Requests will be reviewed before being forwarded to the trustees.
          </p>
        </section>

        <section
          aria-labelledby="funding-request-form-heading"
          className="bg-gray-100 p-6 sm:p-8"
        >
          <h2
            id="funding-request-form-heading"
            className="mb-6 text-2xl font-black text-[#003087]"
          >
            Request training funding
          </h2>
          <TrainingFundingFormClient />
        </section>
      </div>
    </div>
  );
}
