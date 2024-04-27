const DEFAULT_DASHBOARD_NAV_TITLE = "reljodoreta";

interface Props {
  title?: string;
}

export default function NavigationBar(props: Props | undefined) {
  return (
    <nav>
      <div className="navbar bg-base-100">
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
            {props?.title || DEFAULT_DASHBOARD_NAV_TITLE}
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
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="User Mock Profile" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </nav>
  );
}
