import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-slate-50">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h1 className="text-5xl font-bold">
            Let's Build Your Next ICT Solution
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Whether you're planning a network upgrade, cloud migration,
            cybersecurity deployment or fiber infrastructure project,
            we'd love to hear from you.
          </p>

        </div>
      </section>

      {/* Contact Section */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Form */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h2 className="mb-2 text-3xl font-bold text-slate-900">
              Send us a Message
            </h2>

            <p className="mb-8 text-slate-600">
              Fill in the form below and one of our consultants will
              contact you within 24 hours.
            </p>

            <form className="space-y-6">

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    First Name
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Last Name
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                  />
                </div>

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+254 700 000 000"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Company
                </label>

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Service Interested In
                </label>

                <select className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600">

                  <option>Select a Service</option>

                  <option>Enterprise Networking</option>

                  <option>Cyber Security</option>

                  <option>Cloud Solutions</option>

                  <option>Fiber Infrastructure</option>

                  <option>Managed IT Services</option>

                  <option>Data Centre Solutions</option>

                </select>

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                />

              </div>

              <button
                className="flex items-center gap-3 rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
              >
                <Send size={18} />
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Information */}

          <div className="space-y-8">

            <div className="rounded-3xl bg-slate-900 p-10 text-white">

              <h2 className="mb-8 text-3xl font-bold">
                Contact Information
              </h2>

              <div className="space-y-8">

                <div className="flex gap-5">

                  <div className="rounded-xl bg-blue-700 p-4">
                    <Phone />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Phone
                    </h4>

                    <p className="text-slate-300">
                      +254 700 000 000
                    </p>
                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="rounded-xl bg-blue-700 p-4">
                    <Mail />
                  </div>

                  <div>

                    <h4 className="font-semibold">
                      Email
                    </h4>

                    <p className="text-slate-300">
                      info@intracenetsolutions.com
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="rounded-xl bg-blue-700 p-4">
                    <MapPin />
                  </div>

                  <div>

                    <h4 className="font-semibold">
                      Office
                    </h4>

                    <p className="text-slate-300">
                      Nairobi, Kenya
                    </p>

                  </div>

                </div>

                <div className="flex gap-5">

                  <div className="rounded-xl bg-blue-700 p-4">
                    <Clock />
                  </div>

                  <div>

                    <h4 className="font-semibold">
                      Working Hours
                    </h4>

                    <p className="text-slate-300">
                      Monday - Friday
                    </p>

                    <p className="text-slate-300">
                      8:00 AM - 5:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* Map Placeholder */}

            <div className="flex h-80 items-center justify-center rounded-3xl border-2 border-dashed border-slate-300 bg-white">

              <div className="text-center">

                <MapPin
                  size={48}
                  className="mx-auto text-blue-600"
                />

                <h3 className="mt-4 text-xl font-bold">
                  Google Maps
                </h3>

                <p className="mt-2 text-slate-500">
                  Interactive map placeholder
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}