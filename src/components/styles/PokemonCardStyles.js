import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: { textDecoration: "none" },
  card: {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cardImg: {
    margin: "auto",
    width: "200px",
    height: "200px",
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    width: "30%",
  },
});

export default useStyles;
