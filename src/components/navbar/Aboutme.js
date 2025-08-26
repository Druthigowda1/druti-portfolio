import React from 'react';
import { Grid, Typography, Box, Card } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import ui from '../../assets/ui-design.png';
import web from '../../assets/website-design.png';
import content from '../../assets/content-writting.png';
import ads from '../../assets/google-ads.png';
import seo from '../../assets/seo.png';

const skillsData = [
  {
    id: 1,
    title: 'UI/UX design',
    img: ui,
    desc: "I create user-friendly interfaces that are visually appealing and improve user experience. For smooth interactions, I concentrate on striking a balance between creativity and functionality",
  },
  {
    id: 2,
    title: 'Website design',
    img: web,
    desc: "I create cutting-edge, responsive, and effective websites.Converting concepts into useful digital solutions is my area of competence.",
  },
  {
    id: 3,
    title: 'Google ads',
    img: ads,
    desc: "I create targeted ad campaigns that maximize reach and conversions.With data- driven strategies, I help businesses achieve measurable growth.",
  },
  {
    id: 4,
    title: 'SEO (Search Engine Optimization)',
    img: seo,
    desc: "I optimize websites to improve visibility on search engines. By applying on-page and off-page strategies, I drive organic traffic effectively.",
  },
  {
    id: 5,
    title: 'Content Writing',
    img: content,
    desc: "I write engaging and SEO-friendly content that resonates with audiences.My words are tailored to inform, inspire, and strengthen brand identity.",
  },
];

const Aboutme = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will only happen once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <Grid
      container
      id="about" // Add an ID to the grid container for smooth scrolling
      sx={{
        position: 'relative',
        backgroundColor: 'rgb(13, 1, 33)',
        px: { md: 10, xs: 3, sm: 6 },
        py: { md: 6, xs: 4 },
        mt: { md: -8, xs: 0 },
        minHeight: { xs: '60vh', md: '90vh' },
        overflow: 'hidden',
        justifyContent: 'center',
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
          About Me
        </Typography>

        {/* Fading content container */}
        <motion.div
          ref={ref} // Attach the ref to the parent of the fading content
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
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
            I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, JavaScript, and React.js. Along with my technical expertise, I also have knowledge of digital marketing, including SEO, Google Ads, and content strategies, which helps me create websites that not only look great but also perform effectively in reaching the right audience.
          </Typography>
        </motion.div>

        {/* Skills List Style */}
        <Grid container spacing={3} justifyContent="center">
          {skillsData.map((skill, index) => (
            <Grid item xs={12} md={6} key={skill.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1, // Stagger the animation
                }}
              >
                <Card
                  sx={{
                    background: 'lightgray',
                    color: '#1e1e1e',
                    height: '25vh',
                    borderRadius: 2,
                    boxShadow: 3,
                    p: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    "&:hover": { transform: 'translateY(-5px)', boxShadow: 8 },
                  }}
                >
                  {/* Icon */}
                  <Box
                    component="img"
                    src={skill.img}
                    alt={skill.title}
                    sx={{
                      width: 50,
                      height: 50,
                      objectFit: 'contain',
                    }}
                  />
                  {/* Title + Description */}
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontSize: { md: "1.2rem", sm: "1.2rem", xs: "1rem" },
                      }}
                    >
                      {skill.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "black",
                        linespace: 2,
                        fontSize: { md: "1rem", xs: "0.85rem", sm: '1.3rem' },
                      }}
                    >
                      {skill.desc}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Aboutme;