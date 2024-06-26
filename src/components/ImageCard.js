import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ImageCard = ({ image }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/details/${image.id}`);
  };

  return (
    <Card onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <CardMedia
        component="img"
        height="140"
        image={image?.images[0]}
        alt={image.description}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {image.description || 'No description available'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
