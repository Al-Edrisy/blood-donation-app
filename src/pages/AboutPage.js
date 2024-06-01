import React from 'react';
import { Container, Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
  },
  mission: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    direction: 'rtl', // Align text to the right
    textAlign: 'right', // Right-align text within the paper
  },
  values: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    marginTop: theme.spacing(4),
    direction: 'rtl', // Align text to the right
    textAlign: 'right', // Right-align text within the paper
  },
  valueItem: {
    marginBottom: theme.spacing(2),
  },
}));

const AboutPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Paper className={classes.root}>
        <Typography variant="h4" className={classes.header} align="center">
         عن شريان العطاء
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper className={classes.mission}>
              <Typography variant="h5" gutterBottom>
                مهمتنا
              </Typography>
              <Typography variant="body1">
              "مهمتنا في شريان العطاء هي ربط الأفراد الذين يحتاجون إلى الدم بالمتبرعين الذين يستطيعون توفير هذا المورد المنقذ للحياة. نسعى لتسهيل الوصول السريع والسهل إلى تبرعات الدم، خاصة في حالات الطوارئ، لضمان عدم اضطرار أي شخص للبقاء دون الدم الذي يحتاجه."
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.values}>
              <Typography variant="h5" gutterBottom>
                قيمنا
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} className={classes.valueItem}>
                  <Typography variant="h6">
                    الرحمة
                  </Typography>
                  <Typography variant="body1">
                    نؤمن بقوة الرحمة والتعاطف، مدركين أن كل تبرع بالدم يمكن أن ينقذ الأرواح ويجلب الأمل للعائلات المحتاجة.
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.valueItem}>
                  <Typography variant="h6">
                    المجتمع
                  </Typography>
                  <Typography variant="body1">
                    بناء مجتمع قوي وداعم هو في صميم ما نقوم به. نسعى جاهدين لربط المتبرعين والمتلقين لإنشاء شبكة من الرعاية.
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.valueItem}>
                  <Typography variant="h6">
                    النزاهة
                  </Typography>
                  <Typography variant="body1">
                    نلتزم بأعلى معايير النزاهة في جميع أعمالنا، ونضمن الشفافية والصدق والاحترام في تعاملاتنا مع المتبرعين والمتلقين.
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.valueItem}>
                  <Typography variant="h6">
                    التميز
                  </Typography>
                  <Typography variant="body1">
                    نحن ملتزمون بالتميز في خدماتنا، ونعمل باستمرار على تحسين عملياتنا لضمان أفضل النتائج الممكنة لأولئك الذين يحتاجون.
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AboutPage;
