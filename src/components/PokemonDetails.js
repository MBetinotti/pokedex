import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import pokemonType from "./styles/pokemonTypes";
import useStyles from "./styles/PokemonDetailsStyle";

export default function PokemonDetails(props) {
  const classes = useStyles();
  const { history } = props;
  const {
    name,
    id,
    types,
    sprites,
    base_experience,
    abilities,
    height,
    weight,
  } = props.pokemon;
  const toFirstMayusc = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <Grid item xs={12} md={8} className={classes.gridContainer}>
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          title={
            <Typography variant="h5" className={classes.title}>
              N°{id}
              {"   "}
              {toFirstMayusc(name)}
            </Typography>
          }
          avatar={
            <Avatar
              src={
                sprites.versions["generation-v"]["black-white"].animated
                  .front_default
              }
              className={classes.avatar}
            />
          }
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.cardContentBody}>
            <div className={classes.cardContentData}>
              <div className={classes.cardDataCell}>
                <Typography variant="body1">
                  {" "}
                  <b>Altura:</b> {height * 10}cm
                </Typography>
              </div>
              <div className={classes.cardDataCell}>
                <Typography variant="body1">
                  <b>Peso:</b> {weight / 10}Kg
                </Typography>
              </div>
              <div className={classes.cardDataCell}>
                <Typography variant="body1">
                  {" "}
                  <b>Experiencia Base:</b> {base_experience}
                </Typography>
              </div>
              <div className={classes.cardDataCell}>
                <Typography variant="body1">
                  {" "}
                  <b>Tipo:</b>
                  {types.map((type) => {
                    return (
                      <Chip
                        size="small"
                        style={{
                          backgroundColor: pokemonType[type.type.name],
                        }}
                        key={type.type.name}
                        label={type.type.name}
                      ></Chip>
                    );
                  })}
                </Typography>
              </div>

              <div className={classes.cardDataCell}>
                <Typography variant="body1">
                  {" "}
                  <b>Habilidades:</b>
                  <ol>
                    {abilities.map((a) => {
                      return <li key={a.ability.name}>{a.ability.name}</li>;
                    })}
                  </ol>
                </Typography>
              </div>
            </div>
            <div className={classes.cardContainerImg}>
              <div className={classes.containerImg}>
                <img
                  src={sprites.other.dream_world.front_default}
                  alt={name}
                  className={classes.img}
                />
              </div>
            </div>
          </div>
        </CardContent>{" "}
      </Card>
      <div className={classes.btnContainer}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/pokedex")}
        >
          Ir a la Pokedex
        </Button>
      </div>
    </Grid>
  );
}
