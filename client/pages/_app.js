import * as React from "react";
import { Provider } from "react-redux";
import { store } from "../hooks/index";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <DefaultSeo
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: "none",
          maxVideoPreview: -1,
        }}
        additionalMetaTags={[
          {
            property: "dc:creator",
            name: "dc:creator",
            content: "Dau Dang Son",
          },
          {
            property: "application-name",
            httpEquiv: "application-name",
            content: "Chat-W-Me",
          },
        ]}
        title="ChatWMe - Chat"
        key="Chat-W-Me"
        description="Chat-W-Me done with nextJs where we can create and chat with friends. Realtime updates of message are available with color modes."
        canonical="https://github.com/ddnos29"
        openGraph={{
          title: "Web-Chat-Application",
          description:
            "Chat-W-Me done with nextJs where we can create and chat with friends. Realtime updates of message are available with color modes.",
          type: "website",
          url: "https://web-chat-app-brown.vercel.app/",
          authors: [
            "https://avatars.githubusercontent.com/u/124684017?v=4",
          ],
          keywords: "Chat-W-Me",
          tags: [
            "Web-Chat-App",
            "Next-Js",
            "Socket-programming",
            "Chat-App",
            "MERN-App",
          ],
          images: [
            {
              url: "",
              width: 800,
              height: 600,
              alt: "Icon",
            },
          ],
        }}
      />
      <Provider store={store}>
        <ChakraProvider resetCSS>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
      <Analytics
        beforeSend={(event) => {
          if (event.url.includes("localhost")) {
            return null;
          }
          return event;
        }}
      />
    </React.Fragment>
  );
}

export default App;
