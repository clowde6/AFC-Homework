import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import BasicMenu from "./BasicMenu";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import theme from "./ui/Themes";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar(props) {
  const { VITE_TMDB_API_KEY } = process.env;
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    // console.log(event.target)
    setSearch(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      navigate("/movies/new");
      console.log(event.key);
      let endpoint = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&api_key=${VITE_TMDB_API_KEY}`;
      axios
        .get(endpoint)
        .then((response) => {
          console.log(response.data.results);
          props.setMovies(response.data.results);
        })
        .catch((err) => console.log(`Error with axios, ${err}`));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        {/* style={{ bgcolor: theme.palette.primary.main }} */}
        <AppBar positionmode="sticky">
          <Toolbar>
            <BasicMenu
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            ></BasicMenu>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                color: "white",
                display: { xs: "none", sm: "block" },
              }}
            >
              <Link
                to="/"
                sx={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <Button
                  sx={{
                    color: "white",
                    fontSize: "30px",
                    backgroundColor: "transparent",
                    opcity: 0.8,
                  }}
                >
                  Movie Database Website with React
                </Button>
              </Link>
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleChange}
                onKeyDown={handleEnter}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
