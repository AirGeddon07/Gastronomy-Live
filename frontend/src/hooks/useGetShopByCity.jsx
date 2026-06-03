import axios from 'axios'
import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import { useDispatch } from 'react-redux'
import { setShopsInMyCity } from '../redux/userSlice'

function useGetShopByCity() {
    const dispatch = useDispatch()
    
    // ✨ FIX: Removed currentCity dependency since we fetch globally now!
    useEffect(() => {
        const fetchShops = async () => {
            try {
                // ✨ FIX: Hitting the new global route
                const result = await axios.get(`${serverUrl}/api/shop/get-all`, { withCredentials: true })
                dispatch(setShopsInMyCity(result.data))
                console.log("Fetched all shops globally:", result.data)
            } catch (error) {
                console.error("Fetch shops error:", error)
            }
        }
        
        fetchShops()
    }, [dispatch]) 
}

export default useGetShopByCity
