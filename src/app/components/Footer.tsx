import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-500">
      © {new Date().getFullYear()} Jose Andrés Granero. All rights reserved.
    </footer>
  );
};
