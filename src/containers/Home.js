import React from "react";
import { Button, Typography } from "@material-ui/core";
import useStyles from "./styles/HomeStyle.js";

export default function Home(props) {
  const classes = useStyles();
  const { history } = props;
  return (
    <div className={classes.container}>
      <Typography variant="h1">BIENVENIDO!</Typography>
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/pokedex/1")}
          className={classes.btn}
        >
          Buscar un Pokemon
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/pokedex")}
          className={classes.btn}
        >
          Ir a la Pokedex
        </Button>
      </div>
    </div>
  );
}
