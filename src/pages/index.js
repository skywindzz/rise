import React, { useState } from "react"
import { setConfig /* , cold */ } from "react-hot-loader"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "../style/index.css"
import Login from "../components/login"
import video from "../images/originfinal.mp4"
import { motion } from "framer-motion"

/* import Img from "gatsby-image" */

setConfig({ pureSFC: true })
/*This is your landing page should contain signup and sign in options, */

const innerWidth = window.innerWidth
const IndexPage = () => {
  return (
    <div className="container">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <aside>
          <p className="dream">DREAM</p> <p className="plan">PLAN</p>{" "}
          <p className="execute">EXECUTE</p>
        </aside>
      </motion.div>

      <div className="content">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="title">RISE</div>
          <h1 className="subtitleOne">Dream, Plan, Execute</h1>
          <h1 className="subtitleTwo">Personal dream planner</h1>
          <motion.div
            animate={{
              rotate: [0, -5, 0, 5, 0, -5, 0, 5, 0],
            }}
            transition={{ delay: 3, duration: 0.5 }}
          >
            <Login></Login>
          </motion.div>
        </motion.div>
      </div>
      <section className="video">
        <video
          autoPlay
          loop
          className="video-background"
          muted
          plays-inline="true"
        >
          <source src={video} type="video/mp4" />
        </video>
      </section>
    </div>
  )
}

export default IndexPage
