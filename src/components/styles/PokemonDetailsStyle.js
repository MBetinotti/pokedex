import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: { margin: "50px auto" },
  card: {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
  },
  cardHeader: { backgroundColor: "black", height: "50px" },
  title: {
    color: "white",
    display: "flex",
    justifyContent: "center",
  },
  avatar: { width: "50px", height: "50px" },
  cardContent: { padding: "5px", textAlign: "center" },
  cardContentBody: { display: "flex" },
  cardContentData: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    width: "50%",
    backgroundColor: "#D9D8D7",
    heigth: "100%",
  },
  cardDataCell: { border: "2px solid #D0D0CF" },
  cardContainerImg: {
    backgroundColor: "white",
    width: "50%",
    display: "flex",
    justifyContent: "center",
  },
  containerImg: { position: "absolute", top: "180px" },
  img: {
    width: "250px",
    height: "250px",
    backgroundColor: "#FC8444",
    borderRadius: "50%",
    border: "3px solid yellow",
  },
  btnContainer: { display: "flex", justifyContent: "center" },
});

export default useStyles;
