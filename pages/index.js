import React from "react";
import Head from "next/head";
import { CopyToClipboard } from "react-copy-to-clipboard";

let emojis = ["👋", "🦄"];

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
