import React from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import { Formik } from "formik";
import ResponseCard from "./ResponseCard";
const Converter = ({ currencyList }) => {
  console.log(currencyList, "curre");
  const initialValues = {
    cuurency: "",
    amount: "",
    targetedCurrency: "",
  };
  const handleSubmit = (values) => {
    console.log(values, "values");
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid
            sx={{
              p: 3,
            }}
            container
            spacing={2}
          >
            <Grid item xs={12} md={4}>
              <Box minWidth={160}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select your Currency
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={values}
                    name="cuurency"
                    label="Select Your currency"
                    onChange={handleChange}
                  >
                    {currencyList.map((data, key) => (
                      <MenuItem value={data?.id}>{data?.name}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                type="number"
                name="amount"
                onChange={handleChange}
                label="Enter Aomunt"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box minWidth={160}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Targeted Currency
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={values}
                    name="targetedCurrency"
                    label="Targeted Currency"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Button type="submit" variant="contained" color="primary">
                Convret
              </Button>
            </Grid>
          </Grid>
          <ResponseCard />
        </form>
      )}
    </Formik>
  );
};

export default Converter;
