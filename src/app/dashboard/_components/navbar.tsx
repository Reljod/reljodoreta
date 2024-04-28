"use client";

import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import BlankProfile from "~/components/svg/blank-profile";

const DEFAULT_DASHBOARD_NAV_TITLE = "reljodoreta";

interface Props {
  title?: string;
}

export default function NavigationBar(props: Props | undefined) {
  const { isSignedIn } = useUser();

  return (
    <nav>
      <div className="navbar bg-base-100 px-4">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            {props?.title ?? DEFAULT_DASHBOARD_NAV_TITLE}
          </a>
        </div>
        <div className="hidden flex-none lg:block">
          <ul className="menu menu-horizontal">
            <li>
              <a>My Apps</a>
            </li>
            <li>
              <a>About Me</a>
            </li>
          </ul>
        </div>
        <SignedOut>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost"
            >
              <div className="w-8 rounded-full">
                <BlankProfile />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <Link href="/sign-in">Sign in</Link>
              </li>
            </ul>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
