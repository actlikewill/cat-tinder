import { useEffect } from "react";
import { getProfile } from "../Services/profile"
import { useSelector, useDispatch } from "react-redux"

export const Home = () => {

  const profile = useSelector(state => state.profile);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  


  return (
    <main>
      <h1>Meow Tinder</h1>

      <h5>{profile.status}</h5>
      <img src={profile.data.url} alt="Avatar" />

    </main>
  );
}