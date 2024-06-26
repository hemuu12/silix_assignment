import React, { Component } from 'react';
import { Container, Typography } from '@mui/material';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Typography variant="headline" gutterBottom>
            Something went wrong.
          </Typography>
          <Typography variant="normal">
            We are experiencing technical difficulties. Please try again later.
          </Typography>
        </Container>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
