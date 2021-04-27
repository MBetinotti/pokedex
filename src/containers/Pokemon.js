import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  CircularProgress,
  Typography,
  AppBar,
  Toolbar,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PokemonDetails from "../components/PokemonDetails";
import useStyles from "./styles/PokemonStyle";

export default function Pokemon(props) {
  const classes = useStyles();
  const { history } = props;
  const pokemonId = props.match.params.pokemonId;
  const [pokemon, setPokemon] = useState(undefined);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((result) => result.json())
      .then((data) => setPokemon(data))
      .catch((e) => setPokemon(false));
    setSearch("");
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((result) => result.json())
      .then((data) => setPokemon(data))
      .catch((e) => setPokemon(false));
  }, [pokemonId, refresh]);

  const refreshPage = () => {
    setRefresh(!refresh);
  };

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar className={classes.toolbar} onChange={handleChange}>
          <Link to="/" className={classes.link}>
            <Typography variant="h5">HOME</Typography>
          </Link>
          <div className={classes.searchContainer}>
            <TextField
              label="Buscar Pokemon"
              variant="standard"
              value={search}
            />
            <Button onClick={handleClick}>
              <SearchIcon className={classes.icon} />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {pokemon === undefined && (
        <div className={classes.containerLoader}>
          <CircularProgress />
        </div>
      )}
      {pokemon !== undefined && pokemon && (
        <PokemonDetails pokemon={pokemon} {...props} />
      )}
      {pokemon === false && (
        <div className={classes.containerNotFound}>
          <Typography variant="h6" className={classes.titleError}>
            <img
              src="https://i.ibb.co/qD84X9z/pikaFail.png"
              alt="404"
              className={classes.imgError}
            />
            Ups, No encontramos tu Pokemon!
          </Typography>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => refreshPage()}
              className={classes.btn}
            >
              Atras
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
      )}
    </>
  );
}
