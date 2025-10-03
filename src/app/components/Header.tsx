"use client";
import Image from "next/image";
import { IoHome, IoMail, IoMailUnreadOutline, IoPerson } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollThreshold } from "../../hooks/useScrollThreshold";
import {
  IoIosCheckmarkCircleOutline,
  IoIosMail,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io";

export const Header = () => {
  const links = [{ href: "/pages/about", label: "About" }];

  const pathname = usePathname();
  const scrolled = useScrollThreshold(40);

  return (
    <header
      className={`flex items-center justify-between sticky inset-0 transition-[height] duration-300 ease-in-out px-20 h-[var(--header-height)] ${
        scrolled ? "h-[var(--header-height-compact)]" : ""
      } bg-black/80 text-[var(--header-text-color)] z-50`}
    >
      <Link href="/">
        <span
          className={`font-featured font-medium text-2xl transition-[font-size] duration-300 ease-in-out ${
            scrolled ? "text-xl" : ""
          }`}
        >
          Jose Andrés Granero
        </span>
      </Link>
      <nav>
        <ul className="flex space-x-6 text-md font-medium text-gray-600">
          {links.map((link) => (
            <li>
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "font-bold text-[var(--header-text-color)] border-b-4 pb-1 transition transition-border duration-300 ease-in-out"
                    : "text-[var(--header-text-color)] border-transparent pb-1 transition transition-border duration-300 ease-in-out hover:border-b-4 hover:border-gray-500"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/josé-andrés-granero-encinas-539266153"
                  className="text-white text-2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="My Linkedin profile"
                >
                  <IoLogoLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="mailto:joseandres.granero@gmail.com"
                  className="text-white text-2xl"
                  title="Send me an email"
                >
                  <IoMail />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};
