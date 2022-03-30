import { Box as MuiBox } from "@mui/material";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled(MuiBox)`
  border: ${theme.sizing.scale100} solid ${theme.palette.background.paper};
  border-radius: ${theme.borderRadius.medium}px;

  &:not(:first-child) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
