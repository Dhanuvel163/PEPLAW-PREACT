import React, { useContext, useState, useEffect } from "react"
import { lawyerauth,lawyerprovider,lawyerFbprovider } from "../firebase/lawyer"
const AuthContext = React.createContext()
export function useLawyerAuth() {
  return useContext(AuthContext)
}
export function LawyerAuthProvider({ children }) {
  const [currentLawyer, setCurrentLawyer] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return lawyerauth.createUserWithEmailAndPassword(email, password)
  }
  function login(email, password) {
    return lawyerauth.signInWithEmailAndPassword(email, password)
  }
  function logout() {
    return lawyerauth.signOut()
  }
  function resetPassword(email) {
    return lawyerauth.sendPasswordResetEmail(email)
  }
//   function updateEmail(email) {
//     return currentUser.updateEmail(email)
//   }
//   function updatePassword(password) {
//     return currentUser.updatePassword(password)
//   }
  function signInWithGoogle(){
    return lawyerauth.signInWithPopup(lawyerprovider)
  }
  function signInWithFacebook(){
    return lawyerauth.signInWithPopup(lawyerFbprovider)
  }
  useEffect(() => {
    const unsubscribe = lawyerauth.onAuthStateChanged(user => {
      setCurrentLawyer(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])
  const value = {
    currentLawyer,
    login,
    signup,
    lawyerlogout:logout,
    resetPassword,
    // updateEmail,
    // updatePassword,
    signInWithGoogle,
    signInWithFacebook
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
