import Image from 'next/image';
import './styles.css'; // Or inline this CSS if in CodePen

export default function TemporaryHome() {
  return (
    <main className="page">
      {/* Logo */}
      <div className="logoContainer">
        <Image
          src="/Logo_Final_almostperfectlytransparent.png"
          alt="SayILY Logo"
          layout="responsive"
          width={480}
          height={480}
        />
      </div>

      {/* Intro Text */}
      <div className="introText">
        <h1 className="title">SAY<em>ILY</em>.ART, SAY WHAT?</h1>
        <p>
          Raw and a little chaotic — beautifully so, say<em>ILY</em>.art is a space to spotlight your creativity, uplift your fellow artists, and reconnect with the pieces you’ve collected over time.
        </p>
        <p>Slow down. Feel the love. Share the magic.</p>
        <p>Rediscover the art that moved you — across chains, across time. Feel that first spark again.</p>
        <p>Celebrate the creativity that brought you here. One piece at a time.</p>
        <p className="ilyEnding">
          <em>ILY</em>. Say it back. <span className="heart">&lt;3</span>
        </p>
      </div>

      {/* CTA Button */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSf_3GHSAizqI5-qK2EoyW7mNNm_z39Bec1aDu_qCiUIOcDGmw/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="waitlistButton"
      >
        GET ON THE LIST!
      </a>

      {/* Social Links */}
      <div className="socialHeader">
        <a href="https://warpcast.com/calledtosayily" target="_blank" className="icon">FARCASTER</a>
        <a href="https://bsky.app/profile/sayily.bsky.social" target="_blank" className="icon">BLUESKY</a>
        <a href="https://hey.xyz/u/sayily" target="_blank" className="icon">LENS</a>
        <a href="https://x.com/sayILYart" target="_blank" className="icon">X</a>
      </div>
    </main>
  );
}
