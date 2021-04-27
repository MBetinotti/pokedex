import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  searchContainer: {
    display: "flex",
    margin: "5px",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
  icon: {
    alignSelf: "flex-end",
    marginBottom: "5px",
  },
  cardContainer: {
    height: "80vh",
    display: "flex",
    justifyContent: "space-between",
    minWidth: "450px",
  },
  card: { width: "45%", marginTop: "100px" },
  listContainer: {
    margin: "40px 40px 0 0",
    width: "30%",
    minWidth: "220px",
    backgroundColor: "rgb(255,0,0,0.09)",
    border: "none",
    boxShadow: "none",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
  },
  listItemTitle: {
    display: "flex",
  },
  containerLoader: {
    height: "80vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default useStyles;
