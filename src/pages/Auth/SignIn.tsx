import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import {
  Alert,
  Button,
  Container,
  FilledInput,
  FormControl,
  Grid,
  InputLabel,
  Typography,
} from "@mui/material";

import { CenterContent, ChangePageButtonSX } from "./styles";

export const SignIn = () => {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event: any) => {
    const { id, value } = event.target;

    switch (id) {
      case "input-email": {
        setEmail(value);
        break;
      }

      case "input-password": {
        setPassword(value);
        break;
      }
    }
  };

  const handleSubmit = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.log(98217, error.message);
      setError(error.message);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        padding: "30px",
      }}
    >
      <Grid
        container
        direction={{ xs: "column" }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          sx={{
            color: "background.text",

            "&:hover": {
              color: "background.text",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Typography variant="h3">Strong View</Typography>
          <Typography marginLeft={"5px"} variant="body1">
            Entre na sua conta
          </Typography>
        </Grid>
        <Grid
          sm={12}
          item
          container
          display={"flex"}
          direction={"column"}
          marginY={"30px"}
          width={{ xs: "250px", sm: "500px" }}
        >
          <FormControl margin="dense" variant="filled" error={error !== ""}>
            <InputLabel htmlFor="input-email">email</InputLabel>
            <FilledInput
              fullWidth
              id="input-email"
              value={email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl margin="dense" variant="filled" error={error !== ""}>
            <InputLabel htmlFor="input-password">password</InputLabel>
            <FilledInput
              id="input-password"
              value={password}
              onChange={handleChange}
              fullWidth
            />
          </FormControl>
          {error !== "" && (
            <Grid marginTop="20px">
              <Alert variant="outlined" severity="error">
                {error}
              </Alert>
            </Grid>
          )}
        </Grid>

        <Grid display={"flex"} direction={"column"}>
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
          <Link style={CenterContent} to="/signUp">
            <Button sx={ChangePageButtonSX} variant="text">
              Crie sua conta
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};
