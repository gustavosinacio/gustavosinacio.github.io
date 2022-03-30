import { Box, Button, Typography } from "@mui/material";

import LogoutIcon from "@mui/icons-material/Logout";
import SleddingIcon from "@mui/icons-material/Sledding";
import { getAuth, signOut } from "firebase/auth";

import {
  Link,
  BoxStyle,
  LogoutButtonStyle,
  LinkBoxStyle,
  StyledLink,
} from "./Header.styles";

export const Header = () => {
  const auth = getAuth();

  const logout = async () => {
    try {
      await signOut(auth);

      console.log(98214, "signedOut");
    } catch (e) {
      console.log(982172, "error at sign out", e);
    }
  };

  return (
    <Box>
      <Box sx={BoxStyle}>
        <Box>
          <Link to="/">
            <SleddingIcon color="primary" fontSize="large" />
            <Typography variant="h6">Strong Life</Typography>
          </Link>
        </Box>
        <Button variant="contained" onClick={logout} sx={LogoutButtonStyle}>
          <Typography>logout</Typography>
          <LogoutIcon fontSize="small" />
        </Button>
      </Box>
      <Box sx={LinkBoxStyle}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="notes">Notes</StyledLink>
        <StyledLink to="add-note">+note</StyledLink>
        <StyledLink to="about">about</StyledLink>
        <StyledLink to="testgrounds">testgrounds</StyledLink>
      </Box>
    </Box>
  );
};
