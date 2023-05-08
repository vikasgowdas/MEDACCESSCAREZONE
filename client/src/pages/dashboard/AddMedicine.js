import Wrapper from "../../assets/wrappers/DashboardFormPage";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import { BookService } from "../../service/BookService";
import { useAppContext } from "../../context/appContext";

const AddMedicine = () => {
  const { user, isLoading, setupMedicine } = useAppContext();

  const onMedicineSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let medicineObj = {
      name: data.get("medicineName"),
      type: data.get("medicineType"),
      description: data.get("medicineDescirption"),
      price: data.get("medicinePrice"),
    };
    console.log(medicineObj);
    setupMedicine({
      medicineObj,
      endPoint: "",
    });
  };
  return (
    <div>
      {/* <form className="form"> */}
      <Box
        component="form"
        onSubmit={onMedicineSubmit}
        sx={{ flexGrow: 1, backgroundColor: "white", p: "20px" }}
      >
        <Typography
          sx={{
            m: "10px",
          }}
          variant="h4"
        >
          Add Medicine List
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <TextField
              size="small"
              id="medicineName"
              name="medicineName"
              label="Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              size="small"
              id="medicineType"
              name="medicineType"
              label="Type"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              size="small"
              id="medicineDescirption"
              name="medicineDescirption"
              label="Descriptions"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              size="small"
              id="medicinePrice"
              name="medicinePrice"
              label="Price"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Box
          sx={{
            m: "10px",
          }}
        >
          <Button
            sx={{
              backgroundColor: "#2BC1CB",
              // color: "#2BC1CB",
            }}
            variant="contained"
            type="submit"
          >
            Add Medicine
          </Button>
        </Box>
      </Box>
      {/* </form> */}
    </div>
  );
};

export default AddMedicine;
