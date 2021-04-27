import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Card, Typography, Button } from "@material-ui/core";
import useStyles from "./styles/PokemonCardStyles";

export default function PokemonCard(props) {
  const classes = useStyles();
  const { id, name } = props.pokemon;
  const toFirstMayusc = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <Link to={`/pokedex/${id}`} className={classes.link}>
      <Card className={classes.card}>
        <div>
          <img
            className={classes.cardImg}
            alt={name}
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          />
        </div>
        <div className={classes.title}>
          <Avatar aria-label="recipe">{id}</Avatar>
          <Typography variant="h4">
            <p>{toFirstMayusc(name)}</p>
          </Typography>
        </div>
        <Button variant="contained" color="secondary">
          Mas Detalles
        </Button>
      </Card>
    </Link>
  );
}
