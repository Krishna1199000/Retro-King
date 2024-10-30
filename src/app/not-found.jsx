import Image from "next/image";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center h-screen bg-[url('/slide/slide-1.png')] bg-top md:bg-right bg-cover ">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display mb-2">
          404
        </h1>
        <p className="mb-8 text-lg md:text-xl font-normal text-gray-200">
          The page does not exist.
        </p>
        <a
          href="/"
          className="items-center justify-center px-5 py-3 text-base font-medium text-center rounded-[24px] bg-accent focus:ring-4 focus:ring-accent hover:bg-accent-secondary"
        >
          Go to homepage...
        </a>
      </div>
    </section>
  );
}
