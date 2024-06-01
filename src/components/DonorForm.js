// src/components/DonorForm.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, makeStyles, MenuItem } from '@material-ui/core';
import axios from 'axios';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(11),
  },
  formField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const DonorForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !bloodType || !contact) {
        alert('جميع الحقول مطلوبة');
        return;
      }
      await axios.post('http://localhost:5000/add-donor', { name, bloodType, contact });
      alert('تمت إضافة المتبرع بنجاح');
      setName('');
      setBloodType('');
      setContact('');
    } catch (error) {
      console.error(error);
      alert('خطأ في إضافة المتبرع');
    }
  };

  return (
    <Container className={classes.formContainer}>
      <Typography variant="h4">تبرع بالدم</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          className={classes.formField}
          label="الاسم"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          className={classes.formField}
          label="فصيلة الدم"
          variant="outlined"
          select
          fullWidth
          value={bloodType}
          onChange={(e) => setBloodType(e.target.value)}
          required
        >
          {bloodTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className={classes.formField}
          label="رقم الهاتف"
          variant="outlined"
          fullWidth
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
        <Button
          className={classes.submitButton}
          type="submit"
          variant="contained"
          color="primary"
        >
          تأكيد
        </Button>
      </form>
    </Container>
  );
};

export default DonorForm;
