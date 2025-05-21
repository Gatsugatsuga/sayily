// pages/_app.js
import '../src/style/global.css'; // ✅ this is now the right place for global styles

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
