import styled from "styled-components";
import { NavLink, NavLink as RouterLink } from "react-router-dom";
import { SxProps } from "@mui/material";

import { theme } from "../../styles/theme";
console.log(98219, theme);

export const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;

  & > h6:not(:first-child) {
    margin-left: ${theme.sizing.scale400};
  }
`;

export const BoxStyle: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: theme.sizing.scale700,
};

export const LinkBoxStyle: SxProps = {
  borderBottom: `${theme.sizing.scale200} solid ${theme.palette.background.paper}`,
  padding: theme.sizing.scale250,
  "a:not(:first-child)": {
    marginLeft: theme.sizing.scale250,
  },
};

export const LogoutButtonStyle: SxProps = {
  "& > *:not(:first-child)": {
    marginLeft: theme.sizing.scale200,
  },
};

export const StyledLink = styled(NavLink)`
  color: ${theme.palette.text.primary};
  text-decoration: none;
  padding: ${theme.sizing.scale250} ${theme.sizing.scale400};
  border-top-left-radius: ${theme.sizing.scale250};
  border-top-right-radius: ${theme.sizing.scale250};

  &.active {
    color: ${theme.palette.primary.main};
    background-color: ${theme.palette.background.paper};
  }
`;
