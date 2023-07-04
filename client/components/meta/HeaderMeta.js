import Head from "next/head";

export default function HeaderMeta({ content, title }) {
  return (
    <Head>
      <title>ChatWMe - {title.split(" ")[0]}</title>
      <meta charset="UTF-8" />
      <meta name="keywords" content="Chat W Me" />
      <meta name="author" content="Dau Dang Son" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={content} key="desc" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={content} />
      <meta
        property="og:image"
        content="https://cdn.discordapp.com/attachments/817021689782468648/1055098433070977035/Dani_Chat_App_-_Overlay.jpg"
      />
      {/* <link
          rel="icon"
          href="https://cdn.discordapp.com/attachments/817021689782468648/1055098433070977035/Dani_Chat_App_-_Overlay.jpg"
        /> */}
    </Head>
  );
}
