import Head from 'next/head';
import Image from 'next/image';

export default function TemporaryHome() {
  return (
    <>
      <Head>
        <title>SayILY.art</title>
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
        <div className="max-w-3xl space-y-6 text-[1.5rem] leading-relaxed">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            SAY<em>ILY</em>.ART, SAY WHAT?
          </h1>
          <p style={{ fontFamily: "'Instrument Serif', serif" }}>
            Raw and a little chaotic — beautifully so, Say<em>ILY</em>.art is a space to spotlight your creativity, uplift your fellow artists, and reconnect with the pieces you’ve collected over time.
          </p>
          <p style={{ fontFamily: "'Instrument Serif', serif" }}>
            Slow down. Feel the love. Share the magic.
          </p>
          <p style={{ fontFamily: "'Instrument Serif', serif" }}>
            Rediscover the art that moved you — across chains, across time. Feel that first spark again.
          </p>
          <p style={{ fontFamily: "'Instrument Serif', serif" }}>
            Celebrate the creativity that brought you here. One piece at a time.
          </p>
          <p className="text-3xl font-bold" style={{ fontFamily: "'Instrument Serif', serif" }}>
            <em>ILY</em>. Say it back. <span className="text-pink-600">&lt;3</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
         <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSf_3GHSAizqI5-qK2EoyW7mNNm_z39Bec1aDu_qCiUIOcDGmw/viewform"
            target="_blank"
  rel="noopener noreferrer"
  className="inline-block rounded-2xl bg-[#FF99CC] px-6 py-3 text-black font-semibold shadow-md hover:scale-105 transition-transform duration-200"
>
  JOIN THE WAITLIST!
</a>
        </div>
 {/* Logo */}
        <div className="mb-10">
          <Image
            src="/Logo_Final_almostperfectlytransparent.png"
            alt="SayILY Logo"
            width={160}
            height={160}
          />
        </div>


      </main>
    </>
  );
}

