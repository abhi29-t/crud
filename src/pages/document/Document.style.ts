import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles: any = makeStyles((theme: Theme) => ({
  root: {
    height: "100%",
  },
  imageContainer: {
    padding: "2rem",
    maxWidth: "460px",
  },
  image: {
    width: "100%",
    border: "2px solid black",
  },
  detailsContainer: {
    padding: "2rem",
  },
  lowerDetails: {
    margin: "2rem 0",
    "& .MuiTypography-root": {
      paddingBottom: "1rem",
    },
  },
  upperDetails: {
    margin: "4rem 0",
  },
  hero: {
    width: "100%",
    height: "100%",
    padding: "1.5rem",
  },
  actions: {
    width: "1.5rem",
    height: "100%",
  },
  actionContainer: {
    height: "100%",
  },
  paper: {
    padding: "1rem",
  },
}));
