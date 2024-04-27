import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Hi. I&apos;m{" "}
              <span className="text-primary brightness-125">Jod</span>.
            </h1>
            <p className="mb-5">
              Are you willing to take this to the next level?
            </p>
            <div className="flex justify-center gap-2">
              <button className="btn btn-primary rounded-lg">
                <Link href="/dashboard">Yes</Link>
              </button>
              <button className="btn btn-neutral rounded-lg">
                <Link target="_blank" href="https://google.com">No</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
