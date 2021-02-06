import React, { useContext, useState, useEffect } from "react"
import { auth,provider,Fbprovider } from "../firebase/user"
const AuthContext = React.createContext()
export function useAuth() {
  return useContext(AuthContext)
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }
  function logout() {
    return auth.signOut()
  }
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }
  // function updateEmail(email) {
  //   return currentUser.updateEmail(email)
  // }
  // function updatePassword(password) {
  //   return currentUser.updatePassword(password)
  // }
  function signInWithGoogle(){
    return auth.signInWithPopup(provider)
  }
  function signInWithFacebook(){
    return auth.signInWithPopup(Fbprovider)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])
  const value = {
    currentUser,
    login,
    signup,
    logout,
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
