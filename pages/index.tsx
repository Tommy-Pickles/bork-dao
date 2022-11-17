import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useContractRead } from "wagmi";
import Button, { ConnectButton, IconButton } from "../components/Button/Button";
import css from "../helpers/css";
import { MouseEvent } from "react";

const contractAbi = require("../services/contracts/contract_abi.json");
export default function Home() {
  const [treasuryBalance, setTreasuryBalance] = useState(42069);
  var [poolState, setPoolState] = useState(69);

  // poolState = () => {
  //   return setPoolState(poolState = 100)
  // }

  const { data: poolStake } = useContractRead({
    address: "0xe64E4F0a5bDfde49c6b1AfcCC0e6Acdbd14330d4",
    abi: contractAbi,
    functionName: "poolStake",
  });
  const { data: poolTotal } = useContractRead({
    address: "0xe64E4F0a5bDfde49c6b1AfcCC0e6Acdbd14330d4",
    abi: contractAbi,
    functionName: "poolTotal",
  });

  // const prevToken =(event:MouseEvent) => {
  //   let 
  // }
  // const nextToken =(event:MouseEvent) => {
  //   console.log('Next')
  //   console.log(event)
  // }


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
                  "bg-white",
                  "px-2.5",
                  "py-1.5",
                  "text-tertiary",
                  "rounded-lg",
                  "flex",
                  "items-center",
                  "gap-2",
                  "border-[1px]",
                  "border-primary"
                )}
              >
                <span className={css("text-tertiary", "font-bold")}>
                  Treasury
                </span>
                <span className={css("text-black")}>{treasuryBalance} wDOGE</span>
              </div>
            </div>
            <div className={css("flex", "items-center", "gap-2")}>
              <a
                rel={"noreferrer"}
                target={"_blank"}
                href={"https://bork.gitbook.io/bork-dao-documentation-1/introduction"}
              >
                <Button>Docs</Button>
              </a>
              <a
                rel={"noreferrer"}
                target={"_blank"}
                href={"https://demo.snapshot.org/#/borkdao-test.eth"}
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
              <ConnectButton />
            </div>
          </div>
        </nav>

        <div className={css("flex", "justify-center", "bg-primary", "py-12")}>
          <div className={css("max-w-5xl", "w-full", "flex", "mt-20")}>
            <div className={css("flex-1")}>
              <div className={css("max-w-[450px]", "relative", "-bottom-12")}>
                <Image 
                  src={"/images/4.png"}
                  layout={"responsive"}
                  width={274}
                  height={242}
                  alt={"Safari Hat Doge"}
                />

                <p>
                  {/* <img alt="" src="/images/4.png" id="imgClickAndChange" onClick={changeImage} /> */}
                  {/* <img alt="" src="/images/4.png" /> */}
                </p>
              </div>
            </div>

            <div className={css("flex-1", "flex", "flex-col")}>
              <div className={css("flex", "gap-3")}>
                <IconButton icon={"arrow-left"} />
                {/* onClick={prevToken}s */}

                <IconButton icon={"arrow-right"} />
                <div className={css("font-bold", "text-tertiary")}>
                  {new Date().toDateString()}
                </div>
              </div>
              <div className={css("text-5xl", "font-bold", "mt-4")}>
                Bork DAO Token #1
              </div>
              <div
                className={css("grid", "grid-cols-3", "mt-4", "text-tertiary")}
              >
                <div>Your Tickets</div>
                <div>Total Tickets</div>
                <div>Raffle ends in</div>
                <div className={css("text-2xl", "font-bold", "text-black")}>
                 {poolState}
                </div>
                <div className={css("text-2xl", "font-bold", "text-black")}>
                  400
                </div>
                <div className={css("text-2xl", "font-bold", "text-black")}>
                  18h 11m 6s
                </div>
              </div>
              <div
                className={css(
                  "flex",
                  "items-center",
                  "gap-1",
                  "mt-3",
                  "text-tertiary",
                  "hover:text-black",
                  "cursor-pointer"
                )}
              >
                <div>
                  <IoInformationCircleOutline />
                </div>
                <div>Donate to win the next Governance DAO token</div>
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
                <Button onClick={() => console.log(poolTotal)}>Buy Tickets</Button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css(
            "flex",
            "flex-col",
            "items-center",
            "flex-grow",
            "justify-between",
            "pt-12",
            "pb-6"
          )}
        >
          <div className={css("max-w-5xl", "bg-white", "w-full")}>
            <div className={css("text-4xl", "font-bold", "text-center")}>
              Much DOGE Very DAO
            </div>
            <div className={css("mt-8", "text-2xl")}>
              An experimental DAO built around wDOGE with the goal of bootstrapping a treasury used to expand the wDOGE ecosystem.
            </div>
            <div className={css("mt-8", "text-2xl")}>
            Bork DAO is a public good DAO (Decentralised Autonomous Organization) that aims to expand the DOGE ecosystem by developing wDOGE use cases on the Ethereum blockchain. Being a member of the DAO allows users to vote on governance proposals and gains them access to proposal discussions.
The DAO is 100% funded by wDoge donations. There are two ways to gain membership. They are outlined here. Proceeds from the donations will be used to bootstrap liquidity for existing DeFi protocols, fund Doge developers across all chains and donate to real-life public good
            </div>
            <div className={css("mt-8", "text-2xl")}>
            The DAO is 100% funded by wDoge donations. There are two ways to gain membership. They are outlined here. Proceeds from the donations will be used to bootstrap liquidity for existing DeFi protocols, fund Doge developers across all chains and donate to real-life public goods.            </div>
          </div>
          <div className={css("flex", "gap-8")}>
            <a
              className={css("text-tertiary", "hover:text-black")}
              href={"https://twitter.com"}
              target={"_blank"}
              rel="noreferrer"
            >
              Twitter
            </a>
            <a
              className={css("text-tertiary", "hover:text-black")}
              href={"https://twitter.com"}
              target={"_blank"}
              rel="noreferrer"
            >
              Etherscan
            </a>
            <a
              className={css("text-tertiary", "hover:text-black")}
              href={"https://twitter.com"}
              target={"_blank"}
              rel="noreferrer"
            >
              Forums
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
