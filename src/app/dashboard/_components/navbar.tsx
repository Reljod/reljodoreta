const DEFAULT_DASHBOARD_NAV_TITLE = 'reljodoreta'

interface Props {
  title?: string
}

export default function NavigationBar(props: Props | undefined) {
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">{ props?.title || DEFAULT_DASHBOARD_NAV_TITLE}</a>
        </div>
      </div>
    </nav>
  );
}
