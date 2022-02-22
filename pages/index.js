import React from "react";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";

let emojis = ["👋", "🦄", "⚠️"];

export default function Home() {
  return (
    <>
      <Head>
        <title>copy-emoji - em.oxs.cz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      {emojis.map((el, i) => {
        return (
          <CopyToClipboard text={el} key={i}>
            <button style={{ margin: "10px", fontSize: "2em" }}>{el}</button>
          </CopyToClipboard>
        );
      })}
    </>
  );
}
