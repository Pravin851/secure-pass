import React, { useState, useContext } from 'react';
import { Card, CardContent, TextField, Button, Typography, Box } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import  AuthContext  from '../context/AuthContext';

function Login() {
  const { setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
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
    e.preventDefault();
    axios.post('http://localhost:8000/login', formData)
      .then((respsonse) => {
        const {token} = respsonse.data
        console.log(token)
        localStorage.setItem('authToken', token)
        setLoggedIn(true);
        navigate("/", {replace: true})
      })
      .catch((err) => {
        console.error(err)
        navigate("/login", {replace: true})
      })
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
            Login
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
                Login
              </Button>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
