import React, { useState, useEffect } from 'react';
import DonorCard from './DonorCard';
import { Grid, Typography } from '@material-ui/core';
import axios from 'axios';

const DonorList = ({ searchQuery }) => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDonors = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/donors');
        setDonors(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();

    return () => {
      setLoading(false);
    };
  }, []);

  const query = searchQuery ? searchQuery.toLowerCase() : '';

  const filteredDonors = donors.filter(donor =>
    donor["BloodType"].toLowerCase().includes(query)
  );

  return (
    <div>
      {loading && <Typography variant="h6">Loading...</Typography>}
      {error && <Typography variant="h6">Error fetching donors. Please try again later.</Typography>}
      {filteredDonors.length > 0 ? (
        <Grid container spacing={2}>
          {filteredDonors.map((donor, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <DonorCard donor={donor} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
        .لم يتم العثور على متبرعين مطابقين لمعاييرك
        </Typography>
      )}
    </div>
  );
};

export default DonorList;
