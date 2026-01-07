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
                    bgcolor: 'rgb(13, 1, 33)',
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
            url: 'https://www.getmoredigital.com/',
            title: 'GetMoreDigital',
            external: false,
            link: 'https://www.getmoredigital.com/'
        },
        {
            url: 'https://pucollegesinbangalore.vercel.app/',
            title: 'PU Colleges in Bangalore',
            external: false,
            link: 'https://pucollegesinbangalore.vercel.app/'
        },
        {
            url: 'https://smiti-constructions.vercel.app/',
            title: 'Smiti Constructions',
            external: false,
            link: 'https://smiti-constructions.vercel.app/'
        },

    ];
    const handleDownload = (pdf) => {
        if (pdf.external || pdf.url.startsWith('http')) {
            // Open external link
            window.open(pdf.url, '_blank');
        } else {
            // Download local PDF
            const link = document.createElement('a');
            link.href = pdf.url;
            link.download = pdf.title + '.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <Grid cotainer id="project" sx={{ py: 4, px: { md: 10, xs: 3, sm: 6 }, height: { md: '90vh', sm: '160vh' }, backgroundColor: 'rgb(13, 1, 33)' }}>
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
                        fontSize: { md: '1.2rem', sm: '1.3rem', xs: '0.9rem' },
                        lineHeight: 2,
                        textAlign: 'center',
                        mt: 2,
                        mb: 5,

                    }}
                >
                    <FormatQuoteIcon sx={{ color: 'orange', transform: 'rotate(180deg)', mt: '-8px', fontSize: '30px' }} /> Here is a showcase of my projects that demonstrate my expertise in building modern web applications and dynamic e-commerce platforms. Each project reflects my ability to blend creative design with robust development, delivering user-friendly, scalable, and results-driven digital solutions <FormatQuoteIcon sx={{ color: 'orange', fontSize: '30px' }} />
                </Typography>

            </Box>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                {pdfs.map((pdf, index) => (
                    <Card
                        key={index}
                        sx={{
                            flex: 1,
                            height: 400,
                            borderRadius: '20px',
                            border: '1px solid yellow',
                            position: 'relative', // for top icon
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

                        <PDFViewer url={pdf.url} height={300} />
                        <Divider sx={{ width: '90%', background: 'black', mt: 2, ml: 2.5 }} />
                        <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Typography variant="h6">{pdf.title}</Typography>
                            {pdf.link && (
                                <Button
                                    component="a"
                                    href={pdf.link}
                                    target="_blank"
                                    sx={{ mt: 1, background: "lightyellow", color: 'black', borderRadius: "20px" }}
                                    variant="contained"
                                >
                                    Know more about Project
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Grid>
    );
}
