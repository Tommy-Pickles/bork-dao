import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useAccount, useContractRead } from "wagmi";
import Button, { ConnectButton, IconButton } from "../components/Button/Button";
import css from "../helpers/css";

const contractAddress = "0xe64E4F0a5bDfde49c6b1AfcCC0e6Acdbd14330d4";
const lotteryAbi = require("../services/contracts/raffle_abi.json");

const useLotteryContractRead = (functionName: string, args?: any[]): any =>
  useContractRead({
    address: contractAddress,
    abi: JSON.parse(lotteryAbi),
    functionName,
    args,
  });

export default function Home() {
  const [treasuryBalance, setTreasuryBalance] = useState(10);

  const { address } = useAccount();

  const { data: poolTotal } = useLotteryContractRead("poolTotal");
  const { data: poolStake } = useLotteryContractRead("poolStake", [address]);
  const { data: roundCount } = useLotteryContractRead("roundCount");
  const { data: roundStart } = useLotteryContractRead("roundStart");
  const { data: roundEnd } = useLotteryContractRead("roundEnd");

  console.log(
    poolTotal.toNumber(),
    poolStake.toNumber(),
    roundCount.toNumber(),
    roundStart.toNumber(),
    roundEnd.toNumber()
  );

  return (
    <>
      <Head>
        <title>BorkDAO:</title>
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
                  "border-secondary"
                )}
              >
                <span className={css("text-tertiary", "font-bold")}>
                  Treasury
                </span>
                <span className={css("text-black")}>
                  {treasuryBalance} wDOGE
                </span>
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
              <ConnectButton />
            </div>
          </div>
        </nav>

        <div
          className={css(
            "flex",
            "justify-center",
            "bg-primary",
            "py-12",
            "px-4"
          )}
        >
          <div
            className={css(
              "max-w-5xl",
              "w-full",
              "flex",
              "md:flex-row",
              "flex-col",
              "mt-20"
            )}
          >
            <div className={css("flex-1")}>
              <div
                className={css(
                  "max-w-[450px]",
                  "relative",
                  "md:-bottom-12",
                  "m-auto",
                  "md:m-0"
                )}
              >
                <Image
                  src={"/images/4.png"}
                  layout={"responsive"}
                  width={274}
                  height={242}
                  alt={"Safari Hat Doge"}
                />
              </div>
            </div>

            <div
              className={css("flex-1", "flex", "flex-col", "mt-8", "md:mt-0")}
            >
              <div className={css("flex", "gap-3")}>
                <IconButton icon={"arrow-left"} disabled />
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
                  69
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
                  "text-tertiary"
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
                <Button onClick={() => console.log("buy")}>Buy Tickets</Button>
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
            "pb-6",
            "px-4"
          )}
        >
          <div className={css("max-w-5xl", "bg-white", "w-full")}>
            <div className={css("text-4xl", "font-bold", "text-center")}>
              Much DOGE Very DAO
            </div>
            <div className={css("mt-8", "text-2xl")}>
              An experimental DAO built around wDOGE with the goal of
              bootstrapping a treasury used to expand the wDOGE ecosystem.
            </div>
            <div className={css("mt-8", "text-2xl")}>
              Bork DAO is a public good DAO (Decentralised Autonomous
              Organization) that aims to expand the DOGE ecosystem by developing
              wDOGE use cases on the Ethereum blockchain. Being a member of the
              DAO allows users to vote on governance proposals and gains them
              access to proposal discussions. The DAO is 100% funded by wDoge
              donations. There are two ways to gain membership. They are
              outlined here. Proceeds from the donations will be used to
              bootstrap liquidity for existing DeFi protocols, fund Doge
              developers across all chains and donate to real-life public good
            </div>
            <div className={css("mt-8", "text-2xl")}>
              The DAO is 100% funded by wDoge donations. There are two ways to
              gain membership. They are outlined here. Proceeds from the
              donations will be used to bootstrap liquidity for existing DeFi
              protocols, fund Doge developers across all chains and donate to
              real-life public goods.
            </div>
          </div>
          <div className={css("flex", "gap-8", "mt-10")}>
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
