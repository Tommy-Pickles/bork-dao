import { ConnectButton as RainbowConnectButton } from "@rainbow-me/rainbowkit";
import { PropsWithChildren } from "react";
import { IconType } from "react-icons";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useAccount, useDisconnect, useEnsName } from "wagmi";
import css from "../../helpers/css";
import { abbreviate } from "../../helpers/strings";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const activeStyles = css(
  "active:translate-x-[2px]",
  "active:translate-y-[2px]"
);
const hoverStyles = css("hover:bg-white");
const disabledStyles = css(
  "disabled:bg-tertiary",
  "text-white",
  "border-tertiary"
);
const baseButtonStyles = css(
  "border-[1px]",
  "border-secondary",
  "bg-primary",
  "p-2",
  "rounded-lg",
  "text-black",
  "font-bold"
);

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  children,
  disabled,
  className,
}) => {
  return (
    <button
      disabled={disabled}
      className={css(baseButtonStyles, hoverStyles, className, {
        [disabledStyles]: disabled,
        [activeStyles]: !disabled,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const ConnectButton: React.FC<PropsWithChildren<ButtonProps>> = ({
  ...rest
}) => {
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
                  return (
                    <Button {...rest} onClick={openConnectModal}>
                      connect
                    </Button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <Button onClick={openChainModal}>Wrong network</Button>
                  );
                }

                return (
                  <Button {...rest} onClick={disconnect}>
                    <div className={css("text-sm", "text-black")}>
                      {ens ? ens : abbreviate(account.address, 4)}
                    </div>
                    <div
                      className={css("text-xs", "text-tertiary", "font-normal")}
                    >
                      disconnect
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

type IconName = "arrow-left" | "arrow-right";
interface IconButtonProps extends ButtonProps {
  icon: IconName;
}

const iconNameToIconMap: { [key in IconName]: IconType } = {
  "arrow-left": BsFillArrowLeftCircleFill,
  "arrow-right": BsFillArrowRightCircleFill,
};

export const IconButton: React.FC<IconButtonProps> = ({ icon, ...rest }) => {
  const Component = iconNameToIconMap[icon];
  return (
    <button
      className={css("bg-white", "text-tertiary", "rounded-full", "h-fit", {
        ["text-secondary"]: rest.disabled,
        [activeStyles]: !rest.disabled,
      })}
      {...rest}
    >
      <Component size={24} />
    </button>
  );
};

export default Button;
