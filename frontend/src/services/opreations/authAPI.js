import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../../slices/authSlice"
import { apiConnector } from "../apiconnector"
import { endpoints } from "../apies"

const {
  SIGNUP_API,
  LOGIN_API,
  LOGOUT_API
} = endpoints


export function signUp(
name,
email,
password,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Creating your account...")
    dispatch(setLoading(true))
    
    try {
      // Log what's being sent for debugging
      console.log("Sending signup data:", {
        name, email, 
        // Don't log passwords
      });
      
      const response = await apiConnector("POST", SIGNUP_API, {
        name,
        email,
        password,
      })

      console.log("SIGNUP API RESPONSE............", response)

      // Check for success status
      if (!response.data.success) {
        throw new Error(response.data.message || "Signup failed")
      }
      
      // Clear loading states BEFORE success actions
      dispatch(setLoading(false))
      toast.dismiss(toastId)
      
      // Show success message
      toast.success("Account created successfully!")
      
      // Navigate after a short delay
      setTimeout(() => {
        navigate("/auth/login")
      }, 100)
      
      // Return the data for promise resolution
      return response.data
      
    } catch (error) {
      // Log the error with details
      console.log("SIGNUP API ERROR............", error)
      
      // Show more specific error message from backend if available
      const errorMessage = error.response?.data?.message || "Signup failed"
      toast.error(errorMessage)
      
      // Clear loading states
      dispatch(setLoading(false))
      toast.dismiss(toastId)
      
      // IMPORTANT: Don't navigate here!
      // Let the component handle navigation based on error
      
      // Re-throw the error for the promise chain
      throw error
    }
  }
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })

      console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Login Successful")
      dispatch(setToken(response.data.token))
      // const userImage = response.data?.user?.image
      //   ? response.data.user.image
      //   : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
      // dispatch(setUser({ ...response.data.user, image: userImage }))
      
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user", JSON.stringify(response.data.user))
      navigate("/donations")
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    // dispatch(setUser(null))
    // dispatch(resetCart())
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}



