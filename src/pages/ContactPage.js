import React from 'react';
import { Container, Typography, Grid, TextField, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(4),
  },
  form: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
  contactInfo: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
}));

const ContactPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Paper className={classes.root}>
        <Typography variant="h4" className={classes.header} align="center">
          اتصل بنا
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          نود أن نسمع منك! إذا كان لديك أي أسئلة أو ملاحظات أو تحتاج إلى مساعدة، يرجى ملء النموذج أدناه أو التواصل معنا باستخدام معلومات الاتصال المقدمة.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField
                className={classes.textField}
                fullWidth
                label="اسمك"
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                fullWidth
                label="بريدك الإلكتروني"
                variant="outlined"
                type="email"
              />
              <TextField
                className={classes.textField}
                fullWidth
                label="الموضوع"
                variant="outlined"
              />
              <TextField
                className={classes.textField}
                fullWidth
                label="رسالة"
                variant="outlined"
                multiline
                rows={4}
              />
              <Button
                className={classes.submitButton}
                variant="contained"
                color="primary"
                size="large"
                fullWidth
              >
                إرسال الرسالة
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className={classes.contactInfo}>
              <Typography variant="h5" gutterBottom>
                معلومات الاتصال
              </Typography>
              <Typography variant="body1">
                البريد الإلكتروني: salehfree33@gmail.com
              </Typography>
              <Typography variant="body1">
                الهاتف: +905488309619
              </Typography>
              <Typography variant="body1">
                GitHub: <a href="https://github.com/Al-Edrisy" target="_blank" rel="noopener noreferrer">Al-Edrisy</a>
              </Typography>
              <Typography variant="body1">
                Facebook: <a href="https://www.facebook.com/profile.php?id=100004207543847" target="_blank" rel="noopener noreferrer">Al-Edrisy</a>
              </Typography>
              <Typography variant="body1">
                X: @SalihOtman1
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ContactPage;
