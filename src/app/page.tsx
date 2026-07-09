import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Project Atlas
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          A minimal, accessible foundation scaffolded with the Next.js App Router,
          TypeScript, and Tailwind CSS.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-500"
          >
            Get started
          </a>
        </div>
      </div>
    </main>
  );
}
