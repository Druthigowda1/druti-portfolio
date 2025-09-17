import React, { useEffect, useRef, useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Stack,
    Grid,
    IconButton,
    Button,
    Divider,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import DownloadIcon from '@mui/icons-material/Download';

/* ================================
   PDFViewer Component (auto-scroll on hover)
================================ */
function PDFViewer({ url, height = 300 }) {
    const scrollRef = useRef(null);
    const scrollIntervalRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        if (isHovering) {
            scrollIntervalRef.current = setInterval(() => {
                if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
                    container.scrollTop = 0;
                } else {
                    container.scrollTop += 1;
                }
            }, 30);
        } else {
            clearInterval(scrollIntervalRef.current);
        }

        return () => clearInterval(scrollIntervalRef.current);
    }, [isHovering]);

    if (!url) {
        return (
            <Box
                sx={{
                    height,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#f5f5f5',
                }}
            >
                <Typography variant="body2" color="text.secondary">
                    No PDF provided
                </Typography>
            </Box>
        );
    }

    return (
        <Box
            ref={scrollRef}
            sx={{
                height,
                overflowY: 'scroll',
                borderRadius: 2,
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': { display: 'none' },
                cursor: 'pointer',
                boxShadow: 3,
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <iframe
                src={url}
                width="100%"
                height="1200px"
                frameBorder="0"
                title="pdf-viewer"
                style={{
                    pointerEvents: 'none',
                    borderRadius: 8,
                }}
            />
        </Box>
    );
}

/* ================================
   Main Component: PDF Cards
================================ */
export default function PPTCards() {
    const pdfs = [
        {
            url: '/getmoredigital.pdf',
            title: 'GetMoreDigital',
            external: false,
            link: 'https://www.getmoredigital.com/'
        },
        {
            url: '/pucolleges.pdf',
            title: 'PU Colleges',
            external: false,
            link: 'https://pucollegesinbangalore.com/'
        },
        {
            url: 'https://pucollegesinbangalore.com/',
            title: 'PU Colleges Website',
            external: false,
            link: 'https://pucollegesinbangalore.com/'
        },
    ];

    const handleDownload = (pdf) => {
        if (pdf.external || pdf.url.startsWith('http')) {
            window.open(pdf.url, '_blank');
        } else {
            const link = document.createElement('a');
            link.href = pdf.url;
            link.download = pdf.title + '.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <Grid
            container
            id="projects"
            sx={{
                py: 6,
                px: { md: 10, xs: 2, sm: 4 },
                minHeight: { md: '90vh', xs: 'auto', sm: '100vh' },
            }}
        >
            <Box sx={{ width: '100%' }}>
                {/* Heading */}
                <Typography
                    variant="h2"
                    sx={{
                        color: 'white',
                        fontWeight: 600,
                        fontFamily: 'inherit',
                        fontSize: { md: '3rem', xs: '2rem' },
                        textAlign: 'center',
                    }}
                >
                    Projects
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: 'lightgray',
                        fontFamily: 'inherit',
                        fontSize: { md: '1.2rem', sm: '1rem', xs: '0.9rem' },
                        lineHeight: 2,
                        textAlign: 'center',
                        mt: 2,
                        mb: 5,
                        px: { xs: 1, sm: 4, md: 12 },
                    }}
                >
                    <FormatQuoteIcon sx={{ color: 'orange', transform: 'rotate(180deg)', mt: '-8px', fontSize: '28px' }} />
                    Here is a showcase of my projects that demonstrate my expertise in building modern web applications and dynamic e-commerce platforms.
                    Each project reflects my ability to blend creative design with robust development, delivering user-friendly, scalable, and results-driven digital solutions
                    <FormatQuoteIcon sx={{ color: 'orange', fontSize: '28px' }} />
                </Typography>
            </Box>

            {/* Cards */}
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={{ md: 9, xs: 4 }}
                sx={{ width: '100%', alignItems: 'center' }}
            >
                {pdfs.map((pdf, index) => (
                    <Card
                        key={index}
                        sx={{
                            width: { xs: '100%', sm: '100%', md: '100%' },
                            maxWidth: { md: '380px' },
                            height: { xs: 'auto', md: 420 },
                            borderRadius: '20px',
                            border: '1px solid yellow',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/* Download Icon */}
                        <IconButton
                            onClick={() => handleDownload(pdf)}
                            sx={{
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                backgroundColor: 'yellow',
                                color: 'black',
                                '&:hover': { backgroundColor: 'orange' },
                                zIndex: 10,
                            }}
                        >
                            <DownloadIcon />
                        </IconButton>

                        <PDFViewer url={pdf.url} height={250} />
                        <Divider sx={{ width: '90%', background: 'black', mt: 2, mx: 'auto' }} />
                        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography
                                variant="h6"
                                sx={{ textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.1rem' } }}
                            >
                                {pdf.title}
                            </Typography>
                            {pdf.link && (
                                <Button
                                    component="a"
                                    href={pdf.link}
                                    target="_blank"
                                    sx={{
                                        mt: 1,
                                        background: "lightyellow",
                                        color: 'black',
                                        borderRadius: "20px",
                                        fontSize: { xs: "0.8rem", sm: "0.9rem" },
                                        px: { xs: 2, sm: 3 },
                                    }}
                                    variant="contained"
                                >
                                    Know more
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Grid>
    );
}
