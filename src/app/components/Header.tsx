"use client";
import { IoHome, IoMail, IoMailUnreadOutline, IoPerson } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  IoIosCheckmarkCircleOutline,
  IoIosMail,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io";

export const Header = () => {
  const links = [{ href: "/about", label: "About" }];

  const pathname = usePathname();

  return (
    <header
      className={`flex items-center justify-between px-20 h-[var(--header-height)] bg-[var(--header-bg-color)] text-[var(--header-text-color)]`}
    >
      <Link href="/" className="flex items-center h-full pr-4 space-x-3">
        <span className="font-featured font-medium text-2xl transition-[font-size] duration-300 ease-in-out">
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
                  title="Got to my Linkedin profile (new tab)"
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
