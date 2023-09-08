import "@/styles/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const ZENDESK_KEY = "65d5373a-8956-4963-bea3-179d2dd8ef11";
import Zendesk, { ZendeskAPI } from "../pages/ZendexConfig";
import Script from 'next/script'
export default function App({ Component, pageProps }) {
  const handleLoaded = () => {
    // ZendeskAPI("messenger", "open");
    zE("webWidget:on", "open", function () {});
  };

  // function openZendeskChat(e) {
  //   e.preventDefault();
  //   if (typeof zE !== 'undefined') {
  //     zE('webWidget', 'open')
  //   }
  // }

  return (
    <>
      <Header />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=AW-11198021158`}
      />
      <Script>
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-11198021158');`}
      </Script>
      <Script>
        {`
        gtag('config', 'AW-11198021158/fTMZCPToyd4YEKb80Nsp', {
        'phone_conversion_number': '(346) 502-3898'
        });
        `}
      </Script>
      <Component {...pageProps} />
      <Footer />

      <div>
        <Zendesk defer zendeskKey={ZENDESK_KEY} onLoaded={handleLoaded} />
        {/* <div href="javascript:$zopim.livechat.window.show();" onClick={openZendeskChat}>Open Zendesk Chat</div> */}
      </div>
    </>
  );
}
