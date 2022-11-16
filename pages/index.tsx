import Head from "next/head";
import { ConnectButton } from "../components/Button/Button";
import css from "../helpers/css";

export default function Home() {
  return (
    <>
      <Head>
        <title>BorkDAO</title>
        <meta name="description" content="bork bork bork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={css(
          "p-2",
          "bg-gray-900",
          "flex-grow",
          "text-white",
          "flex",
          "justify-center",
          "items-center"
        )}
      >
        <ConnectButton />
      </div>
    </>
  );
}
