import { useParams } from "react-router-dom";
import { useTheme } from "@mui/material";

export const Testground = () => {
  const params = useParams();

  const theme = useTheme();
  console.log(9821013, theme);

  return (
    <div>
      <h2>Testground {params.groundId}</h2>
    </div>
  );
};
