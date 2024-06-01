import React from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
  },
  cardContent: {
    padding: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  contact: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const DonorCard = ({ donor }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" component="h2">
          {donor.Name}
        </Typography>
        <Typography variant="body1">
          Blood Type: {donor["Blood Type"]}
        </Typography>
        <Typography variant="body1" className={classes.contact}>
          <PhoneIcon className={classes.icon} />
          {donor.Contact}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={`tel:${donor.Contact}`}
          className={classes.button}
        >
          Call
        </Button>
      </CardContent>
    </Card>
  );
};

export default DonorCard;
