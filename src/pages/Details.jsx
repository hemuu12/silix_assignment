import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, Typography, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import { fetchImageDetails } from '../services/api';

const DetailsContainer = styled(Container)(({ theme }) => ({
  animation: 'fadeIn 0.5s ease-in',
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
}));

const BackButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const LoadingSpinner = styled(CircularProgress)(({ theme }) => ({
  marginTop: theme.spacing(6),
}));

const ImageCard = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  width: '100%',
  marginTop: theme.spacing(2),
}));

const ImageMedia = styled(CardMedia)({
  height: 500,
});

const ImageContent = styled(CardContent)({
  textAlign: 'center',
});

const ImageTitle = styled(Typography)({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 500,
});

const ImageAuthor = styled(Typography)({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 300,
});

const ImageDescription = styled(Typography)({
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 400,
});

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImageDetails(id).then(response => {
      setImage(response.data);
      setLoading(false);
    });
  }, [id]);

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <DetailsContainer>
      <BackButton variant="contained" onClick={handleBackClick}>
        Back
      </BackButton>
      {loading ? (
        <LoadingSpinner />
      ) : (
        image && (
          <ImageCard>
            <ImageMedia
              component="img"
              image={image.images[0]}
              alt={image.description}
            />
            <ImageContent>
              <ImageTitle variant="h4" gutterBottom>
                {image.description || 'Image Details'}
              </ImageTitle>
              <ImageAuthor variant="h6" gutterBottom>
                By {image.name}
              </ImageAuthor>
              <ImageDescription variant="body1" gutterBottom>
                {image.description}
              </ImageDescription>
            </ImageContent>
          </ImageCard>
        )
      )}
    </DetailsContainer>
  );
};

export default Details;
