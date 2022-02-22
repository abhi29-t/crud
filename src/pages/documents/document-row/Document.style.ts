import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

// CONSTANTS
export const drawerWidth = 640;

export const useStyles: any = makeStyles((theme: Theme) => ({
  idText: {
    fontSize: "3.4rem",
    padding: "1rem",
    paddingRight: "1.5rem",
    color: "white",
    background: "black",
    height: "100%",
  },
  idTextSmall: {
    position: "relative",
    fontSize: "1.2rem",
    top: "-2.6rem",
  },
  actionButtons: {
    "& .MuiButton-root": { height: "100%" },
  },
}));
