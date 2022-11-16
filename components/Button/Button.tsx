import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import { PropsWithChildren } from "react";
import { useAccount, useDisconnect, useEnsName } from "wagmi";
import css from "../../helpers/css";
import { abbreviate } from "../../helpers/strings";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  children,
}) => {
  return (
    <button
      className={css(
        "border-2",
        "border-pink-300",
        "bg-pink-800",
        "p-2",
        "rounded-md",
        "active:translate-x-1",
        "active:translate-y-1"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const ConnectButton: React.FC<PropsWithChildren<any>> = () => {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const { data: ens, isError, isLoading } = useEnsName({ address });

  return (
    <>
      <RainbowConnectButton.Custom>
        {({ account, chain, openChainModal, openConnectModal, mounted }) => {
          return (
            <div
              {...(!mounted && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!mounted || !account || !chain) {
                  return <Button onClick={openConnectModal}>connect</Button>;
                }

                if (chain.unsupported) {
                  return (
                    <Button onClick={openChainModal}>Wrong network</Button>
                  );
                }

                return (
                  <Button onClick={disconnect}>
                    <div>disconnect</div>
                    <div className={css("text-xs", "text-pink-300")}>
                      {ens ? ens : abbreviate(account.address, 4)}
                    </div>
                  </Button>
                );
              })()}
            </div>
          );
        }}
      </RainbowConnectButton.Custom>
    </>
  );
};

export default Button;
