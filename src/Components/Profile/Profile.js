import { useEffect } from "react";
import { getProfile } from "../../Services/profile"
import { useSelector, useDispatch } from "react-redux"

export const Profile = () => {
    const profile = useSelector(state => state.profile);

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getProfile())
    }, [])

    return (
      <div>
        <h5>{profile.status}</h5>
        <img src={profile.data.url} alt="Avatar" />      
      </div>
    )
}