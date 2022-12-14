import styled from "@emotion/styled";

interface ButtonProps {
  color: string;
  width: string;
  height: string;
  background: string;
  border_radius: string;
}

export const CommonButtonWrapper = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.theme.colors.subColorGradient2};
  border: none;
  border-radius: ${(props) => props.border_radius};
`;
