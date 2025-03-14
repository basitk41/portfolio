import React from "react";
import { StyledButton, StyledLink, StyledAnchor } from "./Button.styles";
import {
  ICombinedButtonProps,
  IButtonProps,
  ILinkButtonProps,
  IAnchorButtonProps,
} from "../../types/button";

const Button: React.FC<ICombinedButtonProps> = (props) => {
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
    } = props as ILinkButtonProps;
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
    } = props as IAnchorButtonProps;
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
    props as IButtonProps;
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
