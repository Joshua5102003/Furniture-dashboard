import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const theme = createTheme({
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          backgroundColor: "#5d76a9", // Background color for the input area
          borderRadius: 20, // Adjust the border radius as needed
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 20, // Adjust the border radius as needed
        },
      },
    },
  },
});

export default function ComboBox({ title }) {
  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{
          width: 300,
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "space-evenly",
                }}
              >
                <SearchIcon />
                {title}
              </span>
            }
            sx={{
              "& .MuiInputLabel-root": {
                color: "white", // Placeholder color
              },
            }}
          />
        )}
      />
    </ThemeProvider>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];
