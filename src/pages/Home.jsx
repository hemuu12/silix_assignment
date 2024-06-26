import React, { useState, useEffect } from 'react';
import { Container, Grid, Pagination, Typography } from '@mui/material';
import SearchField from '../components/SearchField';
import ImageCard from '../components/ImageCard';
import { fetchImages } from '../services/api';

const Home = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchImages(query, page).then(response => {
      setImages(response.data.products);
      setTotalPages(Math.ceil(response.data.total / 6)); // assuming the API returns the total count
    });
  }, [query, page]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setPage(1); // reset to first page on new search
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Image Search
      </Typography>
      <SearchField value={query} onChange={handleSearchChange} />
      <Grid container spacing={2} marginTop={2}>
        {images?.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <ImageCard image={image} />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </Container>
  );
};

export default Home;
