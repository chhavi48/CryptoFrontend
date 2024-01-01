import React, { useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import { Formik } from "formik";
import ResponseCard from "./ResponseCard";
import axios from "axios";
const Converter = ({ currencyList }) => {
  const [result, setResult] = useState("");
  const initialValues = {
    currencyId: "",
    amount: "",
    targetCurrency: "",
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/convert`,
        values
      );

      setResult(response?.data?.convertedAmount);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange, handleSubmit, setFieldValue }) => (
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
                <Autocomplete
                  name="currencyId"
                  id="country-select-demo"
                  options={currencyList}
                  autoHighlight
                  getOptionLabel={(option) => option.name}
                  onChange={(e, newValues) => {
                    setFieldValue("currencyId", newValues?.id);
                  }}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      {option.name}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select Your Currency"
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password",
                      }}
                    />
                  )}
                />
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
                    name="targetCurrency"
                    label="Targeted Currency"
                    onChange={handleChange}
                  >
                    <MenuItem value="inr">INR</MenuItem>
                    <MenuItem value="usd">USD</MenuItem>
                    <MenuItem value="eur">EUR</MenuItem>
                    <MenuItem value="jpy">JPY</MenuItem>
                    <MenuItem value="gbp">GBP</MenuItem>
                    <MenuItem value="aud">AUD</MenuItem>
                    <MenuItem value="cad">CAD</MenuItem>
                    <MenuItem value="chf">CHF</MenuItem>
                    <MenuItem value="hkd">HKD</MenuItem>
                    <MenuItem value="nzd">NZD</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Button type="submit" variant="contained" color="primary">
                Convert
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} />

          <ResponseCard result={result} />
        </form>
      )}
    </Formik>
  );
};

export default Converter;
