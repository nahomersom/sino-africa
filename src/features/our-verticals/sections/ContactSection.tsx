export function ContactSection() {
  return (
    <section className="bg-[#eef1f6] px-6 py-16">
      <div className="mx-auto w-full max-w-xl text-center">
        <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
          ✉
        </div>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Get in Touch with us</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-600">
          Whether you are looking for new collaborations, investments, or platform opportunities,
          our team is ready to connect.
        </p>

        <form className="mt-10 space-y-3 text-left">
          <div className="grid gap-3 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 outline-none transition focus:border-primary"
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="w-full rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 outline-none transition focus:border-primary"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 outline-none transition focus:border-primary"
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            className="w-full resize-none rounded-md border border-zinc-200 bg-white px-4 py-2 text-sm text-zinc-900 outline-none transition focus:border-primary"
          />

          <div className="pt-2 text-center">
            <button
              type="submit"
              className="rounded-full bg-primary px-8 py-2 text-sm font-medium text-zinc-900 transition hover:brightness-95"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
