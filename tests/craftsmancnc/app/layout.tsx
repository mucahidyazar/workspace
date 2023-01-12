// custom
import '../src/styles/global.css'

// swiper
import 'swiper/swiper.min.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import {Inter} from '@next/font/google'
import Image from 'next/image'

import Link from 'next/link'

const inter = Inter({subsets: ['latin']})

const NAVBAR = [
  {
    key: '/',
    label: 'Home',
  },
  {
    key: 'about',
    label: 'About',
  },
  {
    key: 'news',
    label: 'News',
  },
  {
    key: 'contact',
    label: 'Contact',
  },
]

const FOOTER = [
  {
    key: '/info/legal-information',
    label: 'Legal Information',
  },
  {
    key: '/info/cookie-policy',
    label: 'Cookie Policy',
  },
  {
    key: '/info/privacy-policy',
    label: 'Privacy Policy',
  },
  {
    key: '/info/quality-policy',
    label: 'Quality Policy',
  },
  {
    key: '/info/terms-of-use',
    label: 'Terms of Use',
  },
  {
    key: '/info/faq',
    label: 'FAQ',
  },
]

const LINKS = [
  {
    key: 'mail',
    label: 'craftsmancnc@gmail.com',
    href: 'mailto:craftsmancnc@gmail.com',
    icon: '/svg/socials/mail-icon.svg',
  },
  {
    key: 'instagram',
    label: 'craftsmancnc',
    href: 'https://www.instagram.com/craftsmancnc',
    icon: '/svg/socials/instagram-icon.svg',
  },
  {
    key: 'linkedin',
    label: 'craftsmancnc',
    href: 'https://www.linkedin.com/company/craftsmancnc',
    icon: '/svg/socials/linkedin-icon.svg',
  },
  {
    key: 'whatsapp',
    label: '+90 553 408 8244',
    href: 'https://wa.me/905534088244',
    icon: '/svg/socials/mail-icon.svg',
  },
]

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className={`${inter.className} flex flex-col overflow-x-hidden h-auto`}
      >
        <nav className="text-sm text-white bg-gray-800">
          <div className="container flex justify-between mx-auto">
            <div className="flex items-center gap-4 p-2">
              {LINKS.map(link => (
                <div className="flex items-center gap-1" key={link.label}>
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={32}
                    height={32}
                    className="w-4 h-4"
                  />
                  <p>{link.label}</p>
                </div>
              ))}
            </div>

            <div className="flex">
              <div className="h-full p-2 bg-orange-500 bg-opacity-50">
                CATALOG
              </div>
            </div>
          </div>
        </nav>
        <header className="sticky top-0 z-10 bg-gray-200 bg-opacity-80">
          <div className="container flex items-center justify-between py-5 mx-auto text-gray-800">
            <Link href="/">
              <div className="flex items-center gap-4 cursor-pointer">
                <Image
                  src="/img/logo.png"
                  width={100}
                  height={100}
                  alt="brand-logo"
                  className="w-16 uppercase"
                />
                <div>
                  <h1 className="text-2xl font-bold uppercase">Craftsman</h1>
                  <h6 className="text-sm text-gray-500">
                    The Craftsman of the Machine Industry
                  </h6>
                </div>
              </div>
            </Link>
            <ul className="flex items-center gap-4 font-semibold">
              {NAVBAR.map(nav => (
                <li key={nav.key} className="duration-150 hover:text-red-500">
                  <Link href={nav.key}>{nav.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </header>

        <main className="flex-1 pb-80">{children}</main>
        <footer className="text-gray-200 bg-gray-800">
          <section className="container mx-auto">
            <aside className="w-full -translate-y-60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d754.28206942035!2d29.273760729261234!3d40.86905899870722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc86f36ae2d9%3A0x955029e95b327fd6!2sVolkswagen%20Furkan%20Oto!5e0!3m2!1sen!2str!4v1653230306264!5m2!1sen!2str"
                width="600"
                height="450"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </aside>
            <aside className="flex flex-col items-center gap-4 -translate-y-40 text-w">
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/img/logo.png"
                  width={100}
                  height={100}
                  alt="brand-logo"
                  className="uppercase w-30"
                />
                <div className="flex flex-col items-center">
                  <h2 className="text-3xl font-bold uppercase">Craftsman</h2>
                  <h6 className="text-sm text-gray-400">
                    The Craftsman of the Machine Industry
                  </h6>
                </div>
              </div>
              <ul className="flex items-center gap-2 mb-10">
                {LINKS.map(link => (
                  <li key={link.key}>
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={32}
                      height={32}
                      className="w-5 h-5"
                    />
                  </li>
                ))}
              </ul>
              <h5 className="w-2/3 mx-auto text-center">
                The Craftsman is established by 2022 with the partnership of 2
                engineers(Mucahid and Harun). We provide the best quality of
                products and services to our customers. We are the best in the
                industry and we are the best in the world.
              </h5>
            </aside>
          </section>

          <section className="bg-black">
            <aside className="container flex items-center justify-between py-2 mx-auto text-xs text-white">
              <div className="flex items-center gap-4">
                {FOOTER.map(footer => (
                  <Link key={footer.key} href={footer.key}>
                    {footer.label}
                  </Link>
                ))}
              </div>
              <p>
                © 2021 The Craftsman by{' '}
                <a
                  href="https://www.linkedin.com/in/mucahidyazar/"
                  className="text-primary"
                >
                  Yazar
                </a>
              </p>
            </aside>
            {/* copyright */}
          </section>
        </footer>
      </body>
    </html>
  )
}
