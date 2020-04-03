import React from "react"
import Auth from "../utils/auth"
import { motion } from "framer-motion"

const Login = () => {
  const auth = new Auth()
  const { isAuthenticated } = auth

  if (isAuthenticated()) {
    return (
      <motion.div whileHover={{ scale: 1.2 }}>
        <button className="loginStyle" onClick={auth.logout}>
          Logout
        </button>
      </motion.div>
    )
  } else {
    return (
      <motion.div whileHover={{ scale: 1.2 }}>
        <button className="loginStyle" onClick={auth.login}>
          Login
        </button>
      </motion.div>
    )
  }
}

export default Login
