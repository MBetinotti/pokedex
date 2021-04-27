import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "white",
    position: "absolute",
    left: "24px",
  },
  searchContainer: {
    display: "flex",
    margin: "5px",
  },
  icon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  containerLoader: {
    height: "80vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerNotFound: {
    height: "50vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  titleError: { margin: "15px" },
  imgError: {
    width: "250",
    height: "250",
    margin: "40px 0 0 0",
    padding: "0",
  },
  btn: { margin: "5px" },
});

export default useStyles;
