import { Grid, Typography, Box, TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = 'Full Name is required';
        if (!formData.email.trim()) tempErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
        if (!formData.message.trim()) tempErrors.message = 'Message is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <Grid
            container
            id="contact"
            sx={{
                position: 'relative',
                backgroundColor: 'rgb(13, 1, 33)',
                px: { md: 30, xs: 3, sm: 6 },
                py: { xs: 6, md: 10 },
                minHeight: { xs: '70vh', md: '90vh' },
                alignItems: 'center',
                mt: { xs: 0, md: -13 }
            }}
        >
            <Box sx={{ width: '100%' }}>
                {/* Heading */}
                <Typography
                    variant="h2"
                    sx={{
                        color: 'white',
                        fontWeight: 700,
                        fontSize: { md: '3rem', xs: '2rem' },
                        textAlign: 'center',
                    }}
                >
                    Contact Me
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        color: 'lightgray',
                        textAlign: 'center',
                        mt: 2,
                        fontSize: { md: '1.2rem', xs: '1rem' },
                        maxWidth: 700,
                        mx: "auto",
                    }}
                >
                    I’d love to hear from you! Fill out the form below and I’ll get back to you as soon as possible.
                </Typography>

                {/* 2-Column Layout */}
                <Grid container spacing={6} sx={{ mt: 6 }}>
                    {/* Left Column: Form */}
                    <Grid item xs={12} md={6}>
                        {submitted && (
                            <Alert severity="success" sx={{ mb: 3 }}>
                                ✅ Thank you! Your message has been submitted. I will connect with you soon.
                            </Alert>
                        )}
                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{
                                borderRadius: 12,
                                p: { xs: 3, md: 4 },
                                display: "flex",
                                flexDirection: "column",
                                gap: 3,
                                backdropFilter: "blur(12px)",
                                backgroundColor: "rgba(255,255,255,0.07)",
                                boxShadow: "0px 8px 30px rgba(0,0,0,0.5)",
                                border: "2px solid yellow",
                                width: '90%',
                                height: '100%'
                            }}

                        >
                            <TextField
                                label="Full Name"
                                name="name"
                                variant="outlined"
                                fullWidth
                                value={formData.name}
                                onChange={handleChange}
                                error={!!errors.name}
                                helperText={errors.name}
                                InputLabelProps={{ style: { color: 'lightgray' } }}
                                InputProps={{ style: { color: 'white', borderRadius: "12px" } }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                                        "&:hover fieldset": { borderColor: "white" },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#a29bfe",
                                            boxShadow: "0 0 8px #a29bfe"
                                        },
                                    },
                                }}
                            />

                            <TextField
                                label="Email Address"
                                name="email"
                                type="email"
                                variant="outlined"
                                fullWidth
                                value={formData.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                                InputLabelProps={{ style: { color: 'lightgray' } }}
                                InputProps={{ style: { color: 'white', borderRadius: "12px" } }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                                        "&:hover fieldset": { borderColor: "white" },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#a29bfe",
                                            boxShadow: "0 0 8px #a29bfe"
                                        },
                                    },
                                }}
                            />

                            <TextField
                                label="Message"
                                name="message"
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                                value={formData.message}
                                onChange={handleChange}
                                error={!!errors.message}
                                helperText={errors.message}
                                InputLabelProps={{ style: { color: 'lightgray' } }}
                                InputProps={{ style: { color: 'white', borderRadius: "12px" } }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": { borderColor: "rgba(255,255,255,0.3)" },
                                        "&:hover fieldset": { borderColor: "white" },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#a29bfe",
                                            boxShadow: "0 0 8px #a29bfe"
                                        },
                                    },
                                }}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    background: "linear-gradient(135deg, #ffffff, #dfe6e9)",
                                    color: 'rgb(13, 1, 33)',
                                    "&:hover": {
                                        background: "linear-gradient(135deg, #4a2a87, #6c5ce7)",
                                        color: "white"
                                    },
                                    fontSize: "1rem",
                                    textTransform: "none",
                                    fontWeight: "bold",
                                    borderRadius: "30px",
                                    py: 1.5,
                                    transition: "0.3s ease",
                                }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Grid>

                    {/* Right Column: Contact Details */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, px: { xs: 1, md: 4 }, justifyContent: { xs: 'center', md: 'center' } }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 600,
                                    mb: 3,
                                    color: 'yellow',
                                }}
                            >
                                Get In Touch
                            </Typography>

                            <Typography variant="body1" sx={{ mb: 2, fontSize: "1.1rem", color: 'lightgray' }}>
                                📧 Email:{" "}
                                <a href="mailto:youremail@gmail.com" style={{ color: 'lightgray', textDecoration: 'none' }}>
                                    youremail@gmail.com
                                </a>
                            </Typography>

                            <Typography variant="body1" sx={{ mb: 2, fontSize: "1.1rem", color: 'lightgray' }}>
                                📱 Phone:{" "}
                                <a href="tel:+911234567890" style={{ color: 'lightgray', textDecoration: 'none' }}>
                                    +91 12345 67890
                                </a>
                            </Typography>

                            <Typography variant="body1" sx={{ fontSize: "1.1rem", color: 'lightgray' }}>
                                📍 Location: Bangalore, India
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
    );
};

export default Contact;
