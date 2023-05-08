import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { FaSearch, FaHeart, FaPhone, FaBook } from "react-icons/fa";
import { useAppContext } from "../../context/appContext";
import { useState, useEffect } from "react";

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

const Medicines = () => {
  const { getAllMedicines, medicinelist, isLoading } = useAppContext();
  const [allMedicineList, setAllMedicineList] = useState([]);

  useEffect(() => {
    getAllMedicines();
    // eslint-disable-next-line
  }, []);

  setTimeout(() => {
    setAllMedicineList(medicinelist);
  }, 1000);

  return (
    <Box>
      <Box>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "#2cb1bc",
            }}
          >
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Medicines
              </Typography>
              <Search>
                <SearchIconWrapper>
                  <FaSearch />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Button
                sx={{
                  backgroundColor: "#2cb1bc",
                  "&:hover": {
                    backgroundColor: "#107c85",
                  },
                }}
                variant="contained"
              >
                Search
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
      <Box
        component="form"
        sx={{ flexGrow: 1, backgroundColor: "white", p: "20px" }}
      >
        <Grid container spacing={2}>
          {allMedicineList
            ? allMedicineList.map((r) => (
                <Grid item xs={3}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        Word Heath Care
                      </Typography>
                      <Typography variant="h5" component="div">
                        {r.name}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {r.type}
                      </Typography>
                      <Typography variant="body2">
                        {r.description}
                        <br />"{r.price}"
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Book Medicine</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            : ""}
        </Grid>
      </Box>
    </Box>
  );
};

export default Medicines;
