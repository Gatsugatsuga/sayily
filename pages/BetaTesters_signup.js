export default function TemporaryHome() {
  return (
    <html lang="en">
      <head>
        <title>SayILY.art</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Sora:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <style>{`
          body {
            margin: 0;
            padding: 2rem;
            font-family: 'Sora', sans-serif;
            background-color: #fff;
            color: #111;
            text-align: center;
          }
          h1 {
            font-family: 'Instrument Serif', serif;
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }
          em {
            font-style: italic;
          }
          .logoContainer {
            display: flex;
            justify-content: center;
            margin-bottom: 2rem;
          }
          .introText {
            max-width: 600px;
            margin: 0 auto 2rem;
            line-height: 1.6;
          }
          .waitlistButton {
            display: inline-block;
            margin: 2rem auto;
            padding: 1rem 2rem;
            background-color: black;
            color: white;
            text-decoration: none;
            font-weight: bold;
            border-radius: 6px;
          }
          .socialHeader {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 3rem;
            flex-wrap: wrap;
          }
          .icon {
            font-weight: bold;
            text-transform: uppercase;
            color: #333;
          }
        `}</style>
      </head>
      <body>
        <main>
          <div className="logoContainer">
            <img
              src="/Logo_Final_almostperfectlytransparent.png"
              alt="SayILY Logo"
              width="200"
              height="200"
            />
          </div>

          <div className="introText">
            <h1>
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
          </div>

          <a
            href="/betatesters_signup"
            className="waitlistButton"
          >
            BETA TESTERS — SIGN IN
          </a>

          <div className="socialHeader">
            <a href="https://warpcast.com/calledtosayily" target="_blank" className="icon">FARCASTER</a>
            <a href="https://bsky.app/profile/sayily.bsky.social" target="_blank" className="icon">BLUESKY</a>
            <a href="https://hey.xyz/u/sayily" target="_blank" className="icon">LENS</a>
            <a href="https://x.com/sayILYart" target="_blank" className="icon">X</a>
          </div>
        </main>
      </body>
    </html>
  );
}