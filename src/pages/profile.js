import React, { useState, useEffect } from "react"
import { setConfig /* , cold */ } from "react-hot-loader"
import { Link } from "gatsby"
import Logout from "../components/logout"
import { FaAutoprefixer } from "react-icons/fa"
import Img from "gatsby-image"
import "../style/profile.css"
import firebase from "gatsby-plugin-firebase"

setConfig({ pureSFC: true })

const ProfilePage = () => {
  const db = firebase.firestore()

  useEffect(() => {
    if (!firebase) return
    return db
      .collection("users")
      .get()
      .then(snapshot => {
        console.log(snapshot)
      })
      .catch(error => console.log("error"))
  })
  return (
    <div className="p-container">
      {/* will need to make a index page navbar which have sign in, new account on top
      and a faq link on bottom for intro
      it will need 3 photos each seperate the planning, habit, daily page which is
      acessable once signed in if not signed in direct to new account page */}

      <div className="p-profile">
        <span>user profile</span>
        <p>
          without text profile section somehow will collapse, need to find a
          solution
        </p>

        {/*check for gatsby udemy example and fill this out  <Img /> */}
        <span className="userphoto"></span>
        <p>Name</p>
        <div
          css={{
            marginLeft: "-30%",
          }}
        >
          <Link to="/">
            <Logout></Logout>
          </Link>
        </div>
      </div>

      <div className="p-plan">
        <Link to="/planning">Planning</Link>
        <p>
          shows what user have inputed for the planning page, encourgae user to
          read it daily to remind them why they are doing this
        </p>
      </div>

      <div className="p-habit">
        <Link to="/habit">Habit page</Link>
        <p>
          checkboxes for tracking daily habits and also track how many
          consequtive days a person can do the habit(maybe add some graphic for
          each success day
        </p>
      </div>

      <div className="p-daily">
        <span>Daily</span>
        <p>
          daily needs a component, not it's own page, people can directly do
          their 3D1M and cross them out when done. 3 task 1 must checkboxes
          other minor tasks
        </p>
      </div>
    </div>
  )
}

export default ProfilePage
