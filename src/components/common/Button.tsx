import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "outline" | "text";
type ButtonSize = "small" | "medium" | "large";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  isLoading?: boolean;
}

// HTML button props
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonBaseProps {
  as?: "button";
  to?: never;
  href?: never;
}

// Link props (react-router)
interface LinkButtonProps extends ButtonBaseProps {
  as: "link";
  to: string;
  href?: never;
}

// Anchor props
interface AnchorButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonBaseProps {
  as: "a";
  href: string;
  to?: never;
}

type CombinedButtonProps =
  | ButtonProps
  | LinkButtonProps
  | AnchorButtonProps
  | any;

// Styled base component with common styles
const buttonStyles = css<ButtonBaseProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;

  // Size variants
  ${(props) =>
    props.size === "small" &&
    css`
      padding: 0.375rem 0.75rem;
      font-size: 0.875rem;
    `}

  ${(props) =>
    (!props.size || props.size === "medium") &&
    css`
      padding: 0.625rem 1.25rem;
      font-size: 1rem;
    `}
  
  ${(props) =>
    props.size === "large" &&
    css`
      padding: 0.75rem 1.5rem;
      font-size: 1.125rem;
    `}
  
  // Full width option
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
  
  // Style variants
  ${(props) =>
    (!props.variant || props.variant === "primary") &&
    css`
      background-color: var(--primary);
      color: white;
      border: none;

      &:hover,
      &:focus {
        background-color: var(--primary-dark);
      }

      &:active {
        transform: translateY(1px);
      }
    `}
  
  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: var(--bg-alternate);
      color: var(--text-primary);
      border: none;

      &:hover,
      &:focus {
        background-color: var(--bg-highlight);
      }

      &:active {
        transform: translateY(1px);
      }
    `}
  
  ${(props) =>
    props.variant === "outline" &&
    css`
      background-color: transparent;
      color: var(--primary);
      border: 1px solid var(--primary);

      &:hover,
      &:focus {
        background-color: rgba(37, 99, 235, 0.1);
      }

      &:active {
        transform: translateY(1px);
      }
    `}
  
  ${(props) =>
    props.variant === "text" &&
    css`
      background-color: transparent;
      color: var(--primary);
      border: none;
      padding-left: 0.5rem;
      padding-right: 0.5rem;

      &:hover,
      &:focus {
        color: var(--primary-dark);
        text-decoration: underline;
      }
    `}
  
  // Disabled state
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  }

  // Loading state
  ${(props) =>
    props.isLoading &&
    css`
      position: relative;
      pointer-events: none;

      &:before {
        content: "";
        position: absolute;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        border: 2px solid transparent;
        border-top-color: currentColor;
        animation: spin 0.8s linear infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      & > * {
        opacity: 0;
      }
    `}
`;

// Styled components for each element type
interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth: boolean;
  isLoading: boolean;
}
const StyledButton = styled.button<ButtonProps>`
  ${buttonStyles}
`;

interface LinkProps {
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth: boolean;
  isLoading: boolean;
}
const StyledLink = styled(Link)<LinkProps>`
  ${buttonStyles}
`;

interface AnchorProps {
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth: boolean;
  isLoading: boolean;
}
const StyledAnchor = styled.a<AnchorProps>`
  ${buttonStyles}
`;

const Button: React.FC<CombinedButtonProps> = (props) => {
  const { children, as } = props;

  // Render based on the 'as' prop
  if (as === "link") {
    const {
      variant = "primary",
      size = "medium",
      fullWidth = false,
      isLoading = false,
      to,
      ...linkProps
    } = props as LinkButtonProps;
    return (
      <StyledLink
        to={to}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        isLoading={isLoading}
        {...linkProps}
      >
        {children}
      </StyledLink>
    );
  }

  if (as === "a") {
    const {
      variant = "primary",
      size = "medium",
      fullWidth = false,
      isLoading = false,
      href,
      ...anchorProps
    } = props as AnchorButtonProps;
    return (
      <StyledAnchor
        href={href}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        isLoading={isLoading}
        {...anchorProps}
      >
        {children}
      </StyledAnchor>
    );
  }

  // Default to button
  const { variant, size, fullWidth, isLoading, ...buttonProps } =
    props as ButtonProps;
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      isLoading={isLoading}
      {...buttonProps}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  as: "button",
  variant: "primary",
  size: "medium",
  fullWidth: false,
  isLoading: false,
};

export default Button;
