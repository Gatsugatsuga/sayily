import Head from 'next/head';
import Image from 'next/image';

export default function TemporaryHome() {
  return (
    <>
      <Head>
        <title>SayILY.art</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Instrument+Serif&family=Ledger&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 text-center px-6 font-serif">
        {/* Social Links */}
        <div className="mt-8 text-lg">
          <a
            href="https://warpcast.com/calledtosayily"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 no-underline hover:underline inline-block mx-3"
          >
            // FARCASTER /
          </a>
          <a
            href="https://bsky.app/profile/sayily.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 no-underline hover:underline inline-block mx-3"
          >
            / BLUESKY /
          </a>
          <a
            href="https://hey.xyz/u/sayily"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 no-underline hover:underline inline-block mx-3"
          >
            / LENS /
          </a>
          <a
            href="https://x.com/sayILYart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 no-underline hover:underline inline-block mx-3"
          >
            / X //
          </a>
        </div>

        {/* Intro Text */}
        <div className="max-w-3xl space-y-6 text-[1.5rem] lead
