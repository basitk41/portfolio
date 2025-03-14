import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

export type IButtonVariant = "primary" | "secondary" | "outline" | "text";
export type IButtonSize = "small" | "medium" | "large";

export interface IButtonBaseProps {
  variant?: IButtonVariant;
  size?: IButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
}

// HTML button props
export interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IButtonBaseProps {
  as?: "button";
  to?: never;
  href?: never;
}

// Link props (react-router)
export interface ILinkButtonProps extends IButtonBaseProps {
  as: "link";
  to: string;
  href?: never;
}

// Anchor props
export interface IAnchorButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    IButtonBaseProps {
  as: "a";
  href: string;
  to?: never;
}

export type ICombinedButtonProps =
  | IButtonProps
  | ILinkButtonProps
  | IAnchorButtonProps
  | any;

export interface IButtonProps {
  variant: IButtonVariant;
  size: IButtonSize;
  fullWidth: boolean;
  isLoading: boolean;
}

export interface IAnchorProps {
  variant: IButtonVariant;
  size: IButtonSize;
  fullWidth: boolean;
  isLoading: boolean;
}

export interface ILinkProps {
  variant: IButtonVariant;
  size: IButtonSize;
  fullWidth: boolean;
  isLoading: boolean;
}
