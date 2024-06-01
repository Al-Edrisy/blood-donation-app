import React from 'react';
import { Button, Grid, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginBottom: theme.spacing(4),
  },
  buttonContainer: {
    textAlign: 'center',
  },
  button: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    margin: '0 8px',
    minWidth: 0,
  },
  icon: {
    color: theme.palette.action.active,
  },
}));

const SearchBar = ({ onSearch }) => {
  const classes = useStyles();
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleBloodTypeClick = (bloodType) => {
    setQuery(bloodType);
    onSearch(bloodType);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={classes.searchBar}>
      <Grid container alignItems="center">
        <Grid item xs={12} sm={8}>
          <input
            className={classes.textField}
            placeholder="Search by blood type"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{ padding: '8px', fontSize: '16px', width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.buttonContainer}>
          {bloodTypes.map((type, index) => (
            <Button
              key={index}
              className={classes.button}
              variant="contained"
              color={query.toLowerCase() === type.toLowerCase() ? 'primary' : 'default'}
              onClick={() => handleBloodTypeClick(type)}
            >
              {type}
            </Button>
          ))}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleSearch}
          >
            <SearchIcon className={classes.icon} />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchBar;
