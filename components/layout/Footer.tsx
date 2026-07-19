import Link from "next/link";

import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* ===================== TOP ===================== */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="mb-4 text-2xl font-bold text-white">
              Intracenet Solutions
            </h2>

            <p className="leading-7 text-slate-400">
              Enterprise ICT company delivering Networking,
              Cyber Security, Cloud Infrastructure,
              Data Centre, Fiber Optics and Managed IT
              Services throughout East Africa.
            </p>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-3">

              <li>
                <Link href="/services/networking" className="hover:text-white transition">
                  Enterprise Networking
                </Link>
              </li>

              <li>
                <Link href="/services/security" className="hover:text-white transition">
                  Cyber Security
                </Link>
              </li>

              <li>
                <Link href="/services/cloud" className="hover:text-white transition">
                  Cloud Solutions
                </Link>
              </li>

              <li>
                <Link href="/services/fiber" className="hover:text-white transition">
                  Fiber Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services/electrical" className="hover:text-white transition">
                  Electrical  Installations
                </Link>
              </li>

              <li>
                <Link href="/services/support" className="hover:text-white transition">
                  Managed IT Services
                </Link>
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Company
            </h3>

            <ul className="space-y-3">

              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-blue-400" />
                <span>Nairobi, Kenya</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+254 700 000 000</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>info@intracenetsolutions.com</span>
              </div>

            </div>

            {/* Socials */}

            <div className="mt-8 flex gap-4">

              <Link
                href="https://facebook.com"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition-all hover:-translate-y-1 hover:bg-blue-600"
              >
                <FaFacebookF size={18} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition-all hover:-translate-y-1 hover:bg-sky-600"
              >
                <FaLinkedinIn size={18} />
              </Link>

              <Link
                href="https://youtube.com"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition-all hover:-translate-y-1 hover:bg-red-600"
              >
                <FaYoutube size={18} />
              </Link>

              <Link
                href="/"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 transition-all hover:-translate-y-1 hover:bg-emerald-600"
              >
                <Globe size={18} />
              </Link>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-12 h-px bg-slate-700" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>

            <p className="text-sm text-slate-400">
              © {year} Intracenet Solutions. All Rights Reserved.
            </p>

            <p className="mt-2 text-xs text-slate-500">
              Connecting Businesses Through Intelligent Technology.
            </p>

          </div>

          <div className="flex gap-8">

            <Link
              href="/privacy"
              className="flex items-center gap-1 text-sm hover:text-white"
            >
              Privacy Policy
              <ArrowUpRight size={14} />
            </Link>

            <Link
              href="/terms"
              className="flex items-center gap-1 text-sm hover:text-white"
            >
              Terms of Service
              <ArrowUpRight size={14} />
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}