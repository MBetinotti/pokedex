import React, { useState, useEffect } from "react";
import {
  AppBar,
  CircularProgress,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  TextField,
  Toolbar,
  Paper,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Scrollbars } from "react-custom-scrollbars";
import { Link } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import useStyles from "./styles/PokedexStyle";

export default function Pokedex() {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState();
  const [filter, setFilter] = useState("");
  const [select, setSelect] = useState(0);

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const toFirstMayusc = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=649")
      .then((response) => response.json())
      .then((data) => {
        const newPokemonData = [];
        data.results.forEach((pokemon, index) => {
          newPokemonData.push({
            id: index + 1,
            name: pokemon.name,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`,
          });
        });

        setPokemonData(newPokemonData);
      });
  }, []);

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.link}>
            <Typography variant="h5">HOME</Typography>
          </Link>
          <div className={classes.searchContainer}>
            <TextField
              label="Filtrar por Nombre"
              variant="standard"
              onChange={handleChange}
            />

            <SearchIcon className={classes.icon} />
          </div>
        </Toolbar>
      </AppBar>
      {pokemonData ? (
        <div className={classes.cardContainer}>
          <div className={classes.card}>
            {pokemonData[select] && (
              <PokemonCard pokemon={pokemonData[select]} />
            )}
          </div>

          <Paper className={classes.listContainer}>
            <Scrollbars>
              <List dense>
                {pokemonData.map((pokemon) => {
                  return (
                    pokemon.name.includes(filter) && (
                      <ListItem
                        key={pokemon.id}
                        button
                        className={classes.listItem}
                        onClick={() => setSelect(pokemon.id - 1)}
                        selected={select + 1 === pokemon.id}
                      >
                        <div className={classes.listItemTitle}>
                          <ListItemAvatar>
                            <Avatar src={pokemon.sprite} title={pokemon.name} />
                          </ListItemAvatar>
                          <Typography variant="h6">
                            {toFirstMayusc(pokemon.name)}
                          </Typography>
                        </div>
                        <div>
                          <img
                            src="https://img.icons8.com/material-rounded/24/000000/pokeball.png"
                            alt=""
                          />
                        </div>
                      </ListItem>
                    )
                  );
                })}
              </List>
            </Scrollbars>
          </Paper>
        </div>
      ) : (
        <div className={classes.containerLoader}>
          <CircularProgress />
        </div>
      )}
    </>
  );
}
