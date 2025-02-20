import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold text-gray-900 mb-4 font-caveat">
          Oops!
        </h1>
        <p className="text-base text-gray-600 mb-6">
          Sorry, something went wrong.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
