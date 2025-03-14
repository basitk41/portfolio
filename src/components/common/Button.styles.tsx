import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import {
  IButtonBaseProps,
  IButtonProps,
  ILinkProps,
  IAnchorProps,
} from "../../types/button";

// Styled base component with common styles
const buttonStyles = css<IButtonBaseProps>`
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

export const StyledButton = styled.button<IButtonProps>`
  ${buttonStyles}
`;

export const StyledLink = styled(Link)<ILinkProps>`
  ${buttonStyles}
`;

export const StyledAnchor = styled.a<IAnchorProps>`
  ${buttonStyles}
`;
