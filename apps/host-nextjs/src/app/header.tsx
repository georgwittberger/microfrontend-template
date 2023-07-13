import Link from "next/link";
import type { UrlObject } from "node:url";
import type { FC, PropsWithChildren } from "react";

export const Header: FC = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 text-xl md:py-8">
      <div className="font-extrabold">Host Application</div>
      <nav aria-label="Main navigation">
        <ul className="flex gap-8">
          <HeaderNavLink href="/">Home</HeaderNavLink>
          <HeaderNavLink href="/service">Service</HeaderNavLink>
        </ul>
      </nav>
    </header>
  );
};

type HeaderNavLinkProps = PropsWithChildren & {
  href: string | UrlObject;
};

const HeaderNavLink: FC<HeaderNavLinkProps> = ({ children, href }) => {
  return (
    <li>
      <Link
        href={href}
        className="text-stone-600 underline transition-colors duration-300 hover:text-pink-600 focus:text-pink-600"
      >
        {children}
      </Link>
    </li>
  );
};
