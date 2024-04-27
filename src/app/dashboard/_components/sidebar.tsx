export function SideBar() {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu min-h-full w-80 bg-base-200 p-4">
        <li>
          <a>My Apps</a>
        </li>
        <li>
          <a>About Me</a>
        </li>
      </ul>
    </div>
  );
}
