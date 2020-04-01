import React, { useState } from 'react';
import { setConfig /* , cold */ } from 'react-hot-loader';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import '../style/index.css';
import Login from '../components/login';
import video from '../images/originfinal.mp4';
import { motion } from 'framer-motion';

/* import Img from "gatsby-image" */

setConfig({ pureSFC: true });
/*This is your landing page should contain signup and sign in options, */

const innerWidth = window.innerWidth;
const IndexPage = () => {
  return (
    <div className='container'>
      <SEO title='Home' keywords={[`gatsby`, `application`, `react`]} />
      <motion.div animate={{ scale: 2 }}>
        <aside className='motto'>Dream, Plan, Execute</aside>
      </motion.div>
      <div className='content'>
        <div className='title'>RISE</div>
        <h1 className='subtitleOne'>Dream, Plan, Execute</h1>
        <h1 className='subtitleTwo'>Personal dream planner</h1>
        <Login className='loginStyle'></Login>
      </div>
      <section className='video'>
        <video
          autoPlay
          loop
          className='video-background'
          muted
          plays-inline='true'
        >
          <source src={video} type='video/mp4' />
        </video>
      </section>
    </div>
  );
};

export default IndexPage;
