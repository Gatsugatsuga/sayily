import Head from 'next/head';
import Image from 'next/image';
import styles from './styles.module.css';

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

      <main className={styles.page}>
        {/* Logo at the Top */}
        <div className={styles.logoContainer}>
          <Image
            src="/Logo_Final_almostperfectlytransparent.png"
            alt="SayILY Logo"
            width={200}
            height={200}
            layout="intrinsic"
          />
        </div>

        {/* Intro Text */}
        <div className={styles.introText}>
          <h1 className={styles.title}>
            SAY<em>ILY</em>.ART, SAY WHAT?
          </h1>
          <p>
            Raw and a little chaotic — beautifully so, say<em>ILY</em>.art is a space to spotlight your creativity, uplift fellow artists, and reconnect with the pieces you’ve collected over time.
          </p>
          <p>Hop into the playground. Feel the love. Share the magic.</p>
          <p>Rediscover the art that moved you — across chains, across time. Feel that first spark again.</p>
          <p>Celebrate the creativity that brought you here. One piece at a time.</p>
          <p>
            <strong>ILY. Say it back.</strong>
            <br />
            <span>— <a href="https://warpcast.com/ismene">Ismene</a></span>
          </p>
        </div> {/* Closing div for introText */}

        {/* CTA Button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSf_3GHSAizqI5-qK2EoyW7mNNm_z39Bec1aDu_qCiUIOcDGmw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.waitlistButton}
        >
          GET ON THE LIST!
        </a>

        {/* Social Links at the Bottom on Mobile */}
        <div className={styles.socialHeader}>
          <a href="https://warpcast.com/calledtosayily" target="_blank" className={styles.icon}>FARCASTER</a>
          <a href="https://bsky.app/profile/sayily.bsky.social" target="_blank" className={styles.icon}>BLUESKY</a>
          <a href="https://hey.xyz/u/sayily" target="_blank" className={styles.icon}>LENS</a>
          <a href="https://x.com/sayILYart" target="_blank" className={styles.icon}>X</a>
        </div>
      </main>
    </>
  );
}
