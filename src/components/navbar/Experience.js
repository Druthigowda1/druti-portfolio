import React from 'react';
import { Typography, Grid, Container } from '@mui/material';

const Experince = () => {
    const stats = [
        {
            count: 1.5,
            label: 'Year of Experience',
        },
        {
            count: 10,
            label: 'Completed Projects',
        },
        {
            count: 5,
            label: 'Expert Employees',
        },
    ];

    return (
        <Container
            maxWidth={false}
            sx={{
                backgroundColor: '#ed5345',
                py: { xs: 2, md: 2, },
                px: 2,
                width: { md: '45vw', sm: '85vw', xs: '90vw' },
                borderRadius: 2,
            }}
        >
            <Grid
                container
                spacing={2} // Increased spacing between items
                justifyContent="center"
                alignItems="center"
            >
                {stats.map((stat, index) => (
                    <Grid
                        item
                        xs={4}
                        sm={4}
                        key={index}
                        sx={{
                            textAlign: 'center',
                            px: 2, // horizontal padding between boxes
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 'bold',
                                color: 'white',
                                fontSize: { xs: '1.1rem', md: '1.0rem', },
                            }}
                        >
                            {stat.count}+
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: 'white',
                                fontSize: { xs: '1rem', md: '1.0rem' },
                                mt: 1,
                            }}
                        >
                            {stat.label}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Container >
    );
};

export default Experince;
