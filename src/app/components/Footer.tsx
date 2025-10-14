export const Footer = () => {
  return (
    <footer className="py-8 flex bg-[var(--primary-color-strong)] px-[var(--padding-x-base)] md:px-[var(--padding-x-base-md)] text-[var(--secondary-color)]">
      <p>
        Let’s stay in touch!
        <br /> Drop me a line at my{" "}
        <a
          href="mailto:joseandres.granero@gmail.com"
          className="font-bold underline underline-offset-4 decoration-1"
          title="Send me an email"
        >
          email
        </a>{" "}
        or connect on{" "}
        <a
          href="https://www.linkedin.com/in/josé-andrés-granero-encinas-539266153"
          className="font-bold underline underline-offset-4 decoration-1"
          target="_blank"
          rel="noopener noreferrer"
          title="Go to my Linkedin profile (new tab)"
        >
          LinkedIn
        </a>
        .
      </p>
    </footer>
  );
};
