import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

// CONSTANTS
export const drawerWidth = 640;

export const useStyles: any = makeStyles((theme: Theme) => ({
  footer: {
    display: "flex",
    position: "absolute",
    right: "2rem",
    bottom: "2rem",
    justifyContent: "flex-end",
    "& .MuiButton-root": {
      padding: ".7rem 3.5rem",
      marginTop: "1.5rem",
      fontWeight: "bold",
      marginLeft: "1.5rem",
    },
  },
  header: {
    display: "flex",
    padding: "0 .5rem",
    marginBottom: "1.5rem",
    "& .MuiButton-root": {
      position: "relative",
      right: "-29rem",
      padding: ".5rem",
      fontWeight: "bold",
    },
    "& .MuiTypography-root": {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#1565c0",
    },
  },
  drawer: {
    width: 800,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: drawerWidth,
      paddingRight: "1rem",
      paddingTop: "1rem",
    },
  },
}));
