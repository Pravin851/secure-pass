import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { Card, CardContent, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

function Signup() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    };

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:8000/signup', formData)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
      navigate("/", {replace: true})
    };

    return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="rgb(58,58,58)"
    >
      <Card sx={{ width: 400, padding: 3 }}>
        <CardContent>
          <Typography variant="h5" align="center" gutterBottom>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              margin="normal"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Box display="flex" justifyContent="center" mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Sign Up
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Signup;
