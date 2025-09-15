import React, { useEffect, useState, useRef } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    IconButton,
    Button,
    Stack,
    Container,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

/* ================================
   Slideshow Component (images)
================================ */
function Slideshow({ slides = [], autoPlay = true, interval = 3000, height = 220 }) {
    const [index, setIndex] = useState(0);
    const [playing, setPlaying] = useState(autoPlay && slides.length > 1);
    const timerRef = useRef(null);

    useEffect(() => {
        if (playing && slides.length > 1) {
            timerRef.current = setInterval(() => {
                setIndex((i) => (i + 1) % slides.length);
            }, interval);
        }
        return () => clearInterval(timerRef.current);
    }, [playing, slides.length, interval]);

    useEffect(() => setIndex(0), [slides]);

    const prev = () => {
        setIndex((i) => (i - 1 + slides.length) % slides.length);
        setPlaying(false);
    };
    const next = () => {
        setIndex((i) => (i + 1) % slides.length);
        setPlaying(false);
    };

    if (!slides || slides.length === 0) {
        return (
            <Box
                sx={{ height, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}
            >
                <Typography variant="body2" color="text.secondary">
                    No slides provided
                </Typography>
            </Box>
        );
    }

    return (
        <Box>
            <CardMedia
                component="img"
                image={slides[index]}
                alt={`slide-${index + 1}`}
                sx={{ height, objectFit: 'cover' }}
            />

            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Box>
                    <IconButton onClick={prev} aria-label="previous slide">
                        <ArrowBackIosNewIcon />
                    </IconButton>
                    <IconButton onClick={next} aria-label="next slide">
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>

                <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="caption">{index + 1}/{slides.length}</Typography>
                    <IconButton
                        onClick={() => setPlaying((p) => !p)}
                        aria-label={playing ? 'pause' : 'play'}
                        size="small"
                    >
                        {playing ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
                </Stack>
            </CardActions>

            <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'center', p: 1 }}>
                {slides.map((_, i) => (
                    <Box
                        key={i}
                        onClick={() => { setIndex(i); setPlaying(false); }}
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: '50%',
                            bgcolor: i === index ? 'primary.main' : 'grey.400',
                            cursor: 'pointer',
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}

/* ================================
   Iframe PPT Component (embed .pptx)
================================ */
function IframePPT({ url, height = 250 }) {
    if (!url) {
        return (
            <Box
                sx={{ height, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#f5f5f5' }}
            >
                <Typography variant="body2" color="text.secondary">
                    No PPT provided
                </Typography>
            </Box>
        );
    }

    const embedUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(url)}`;

    return (
        <iframe
            src={embedUrl}
            width="100%"
            height={height}
            frameBorder="0"
            allowFullScreen
            title="ppt-embed"
            style={{ borderRadius: 8 }}
        />
    );
}

/* ================================
   Main Component: 3 Cards
================================ */
export default function PPTCards() {
    // Example slide images for cards A & C
    const slides1 = [
        'https://picsum.photos/800/450?random=101',
        'https://picsum.photos/800/450?random=102',
        'https://picsum.photos/800/450?random=103',
    ];
    const slides3 = [
        'https://picsum.photos/800/450?random=301',
        'https://picsum.photos/800/450?random=302',
        'https://picsum.photos/800/450?random=303',
    ];

    // External PPT URL (hosted or in /public folder)
    // 👉 If file is in /public, just use "/presentation.pptx"
    // ✅ Correct way
    const pptUrl = "/getmoredigital.pptx";


    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
                3 PPT Cards (Images + Embedded PPT)
            </Typography>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
                {/* Card A - Slideshow */}
                <Card sx={{ flex: 1 }}>
                    <Slideshow slides={slides1} autoPlay interval={2500} height={200} />
                    <CardContent>
                        <Typography variant="h6">Presentation A</Typography>
                        <Typography variant="body2" color="text.secondary">
                            This one is shown as images (slideshow).
                        </Typography>
                    </CardContent>
                </Card>

                {/* Card B - Embedded PPTX */}
                <Card sx={{ flex: 1 }}>
                    <IframePPT url={pptUrl} height={200} />
                    <CardContent>
                        <Typography variant="h6">Presentation B</Typography>
                        <Typography variant="body2" color="text.secondary">
                            This is an embedded external PowerPoint file.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href={pptUrl} target="_blank">
                            Open Full
                        </Button>
                        <Button size="small" href={pptUrl} download>
                            Download
                        </Button>
                    </CardActions>
                </Card>

                {/* Card C - Slideshow */}
                <Card sx={{ flex: 1 }}>
                    <Slideshow slides={slides3} autoPlay interval={2000} height={200} />
                    <CardContent>
                        <Typography variant="h6">Presentation C</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Another one displayed with images (slideshow).
                        </Typography>
                    </CardContent>
                </Card>
            </Stack>
        </Container>
    );
}
