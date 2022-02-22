import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) => ({
  root: {
    padding: "1rem",
  },
  ul: { listStyle: "none", display: "flex", justifyContent: "center" },
  li: {
    margin: "0 .5rem",
    "& .MuiButton-root": {
      color: "black",
      fontWeight: "bold",
      "&:hover": {
        fontSize: "1.5rem",
      },
    },
  },
  active: {
    "& .MuiButton-root": {
      color: "black",
      fontWeight: "bolder",
      backgroundColor: "rgb(191 196 232)",
    },
  },
  action: {
    margin: "0 .5rem",
    "& .MuiButton-root": {
      color: "black",
      fontWeight: "bold",
    },
  },
}));
