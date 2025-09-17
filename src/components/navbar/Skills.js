import React from 'react';
import { Grid, Box, Typography, Container } from '@mui/material';
import { keyframes } from '@emotion/react';

import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascripti from '../../assets/javascript.png';
import react from '../../assets/reactjs.png';
import ads from '../../assets/ads.png';
import content from '../../assets/content.png';
import seo from '../../assets/seo.png';

const Skills = () => {
    const stats = [
        { count: 1.5, label: 'Year of Experience', img: html },
        { count: 1.5, label: 'Year of Experience', img: css },
        { count: 10, label: 'Completed Projects', img: javascripti },
        { count: 5, label: 'Expert Employees', img: react },
        { count: 5, label: 'Expert Employees', img: ads },
        { count: 5, label: 'Expert Employees', img: content },
        { count: 5, label: 'Expert Employees', img: seo },
    ];

    // ✅ Seamless scroll keyframes
    const scrollText = keyframes`
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    `;

    const scrollImages = {
        display: 'flex',
        animation: `${scrollText} 20s linear infinite`,
    };

    const imgStyle = {
        display: 'inline-block',
        marginRight: { md: '40px', xs: '10px' },
        width: { xs: '60px', sm: '80px', md: '100px' }, // responsive
        height: 'auto',
        flexShrink: 0,
    };

    const imgContainerStyle = {
        width: '100%',
        height: 'auto',
        maxHeight: { xs: '80px', sm: '100px', md: '120px' }, // responsive
        borderRadius: '8px',
    };

    return (
        <Container>
            <Grid
                container
                justifyContent="center"
                sx={{
                    backgroundColor: 'rgb(13, 1, 33)',
                    py: 6,

                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontFamily: 'inherit',
                        fontSize: { md: '2.5rem', xs: '2rem' },
                        textAlign: 'center',
                        mb: 5,
                        width: '100%',
                    }}
                >
                    My Skills
                </Typography>

                <Box
                    sx={{
                        backgroundColor: '#fff',
                        width: '200%',
                        overflow: 'hidden',
                        borderRadius: 5,
                        py: 2,
                    }}
                >
                    {/* Duplicate stats for seamless scroll */}
                    <Box sx={scrollImages} gap={10}>
                        {[...stats, ...stats].map((stat, index) => (
                            <Box key={index} sx={imgStyle}>
                                <Box
                                    component="img"
                                    src={stat.img}
                                    alt={`portfolio ${index}`}
                                    sx={imgContainerStyle}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Grid>
        </Container>
    );
};

export default Skills;
