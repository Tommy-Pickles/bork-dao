import Head from "next/head";
import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import Button, { IconButton } from "../components/Button/Button";
import css from "../helpers/css";

export default function Home() {
  const [treasuryBalance, setTreasuryBalance] = useState(10);
  return (
    <>
      <Head>
        <title>BorkDAO</title>
        <meta name="description" content="bork bork bork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={css("flex", "flex-col", "font-ComicNeue")}>
        <nav
          className={css(
            "bg-primary",
            "p-2",
            "text-black",
            "flex",
            "justify-center"
          )}
        >
          <div
            className={css("max-w-5xl", "w-full", "flex", "justify-between")}
          >
            <div className={css("flex", "items-center", "gap-4")}>
              <div className={css("font-bold", "text-xl")}>Bork Dao</div>
              <div
                className={css(
                  "bg-primary",
                  "px-2.5",
                  "py-1.5",
                  "text-tertiary",
                  "rounded-lg",
                  "flex",
                  "items-center",
                  "gap-2",
                  "border-[1px]",
                  "border-secondary"
                )}
              >
                <span className={css("text-tertiary", "font-bold")}>
                  Treasury
                </span>
                <span className={css("text-black")}>Ξ {treasuryBalance}</span>
              </div>
            </div>
            <div className={css("flex", "items-center", "gap-2")}>
              <a
                rel={"noreferrer"}
                target={"_blank"}
                href={"https://google.com"}
              >
                <Button>Docs</Button>
              </a>
              <a
                rel={"noreferrer"}
                target={"_blank"}
                href={"https://google.com"}
              >
                <Button>DAO</Button>
              </a>
              <a
                rel={"noreferrer"}
                target={"_blank"}
                href={"https://google.com"}
              >
                <Button>Socials</Button>
              </a>
            </div>
          </div>
        </nav>

        <main
          className={css("flex-grow", "flex", "justify-center", "bg-primary")}
        >
          <div className={css("max-w-5xl", "w-full", "flex", "mt-20")}>
            <div className={css("flex-1")}>asdf</div>

            <div className={css("flex-1", "flex", "flex-col")}>
              <div className={css("flex", "gap-3")}>
                <IconButton icon={"arrow-left"} />
                <IconButton icon={"arrow-right"} disabled />
                <div className={css("font-bold", "text-tertiary")}>
                  {new Date().toDateString()}
                </div>
              </div>
              <div className={css("text-5xl", "font-bold", "mt-4")}>
                Bork DAO Token 420
              </div>
              <div
                className={css("grid", "grid-cols-3", "mt-4", "text-tertiary")}
              >
                <div>Your Tickets</div>
                <div>Total Tickets</div>
                <div>Raffle ends in</div>
                <div className={css("text-2xl", "font-bold", "text-black")}>
                  40
                </div>
                <div className={css("text-2xl", "font-bold", "text-black")}>
                  69k
                </div>
                <div className={css("text-2xl", "font-bold", "text-black")}>
                  18h 11m 6s
                </div>
              </div>
              <div className={css("flex", "items-center", "gap-1", "mt-3")}>
                <div>
                  <IoInformationCircleOutline />
                </div>
                <div>Help mint the next Governance Doge</div>
              </div>
              <div className={css("flex", "gap-3", "mt-1")}>
                <input
                  min={1}
                  max={10}
                  type={"number"}
                  className={css(
                    "rounded-md",
                    "text-3xl",
                    "p-2",
                    "w-full",
                    "max-w-[300px]"
                  )}
                />
                <Button onClick={() => console.log("buy")}>Buy Tickets</Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
