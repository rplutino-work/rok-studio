"use client";

import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useLocale } from "@/lib/locale-context";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[#060609] border-t border-white/5 pt-20 pb-10 text-white mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold tracking-tight mb-4" style={{ fontFamily: "'Barrio', cursive" }}>
              ROK YOUR <br className="hidden md:block" /> BUSINESS
            </h2>
            <p className="text-gray-400 text-sm">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">{t.footer.siteMap}</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#blog" className="hover:text-white transition-colors">{t.footer.links.blog}</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">{t.footer.links.ecommerce}</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">{t.footer.links.services}</Link></li>
              <li><Link href="#project-builder" className="hover:text-white transition-colors">{t.footer.links.projectBuilder}</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">{t.footer.links.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">{t.footer.social}</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" /> Twitter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">{t.footer.contact}</h4>
            <a href="mailto:hello@rok.com.ar" className="text-gray-400 hover:text-white transition-colors">
              hello@rok.com.ar
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ROK Studio. {t.footer.rights}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
