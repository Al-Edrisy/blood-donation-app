import React from 'react';
import { Typography, Container, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const date = new Date();
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
    marginTop: 'auto',
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justify="space-evenly">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
            شريان العطاء
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              توصيل أولئك الذين يحتاجون إلى الدم مع المتبرعين الذين يمكنهم مساعدة في إنقاذ الأرواح.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              روابط سريعة
            </Typography>
            <nav>
              <Link variant="button" color="textPrimary" href="/" className={classes.link}>
                الصفحة الرئيسية
              </Link>
              <Link variant="button" color="textPrimary" href="/about" className={classes.link}>
                حول
              </Link>
              <Link variant="button" color="textPrimary" href="/contact" className={classes.link}>
                اتصل بنا
              </Link>
            </nav>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              تواصل معنا
            </Typography>
            <Typography variant="body2" color="textSecondary">
              البريد الإلكتروني: salehfree33@gmail.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              الهاتف: +905488309619
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
          © {date.getFullYear()} .جميع الحقوق محفوظة ,شريان العطاء
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
