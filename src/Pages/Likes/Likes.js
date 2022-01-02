import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { MainLayout } from "../../Components"
import { getVotes, getLikedImages } from "../../Services"
import "./Likes.css"

export const Likes = () => {

  const dispatch = useDispatch()
  const likedImages = useSelector(state => state.likedImages)
  const votes = useSelector(state => state.votes)
  const [imageIds, setImageIds] = useState([])

  useEffect(() => {
      const sub_id = localStorage.getItem("userSubId")
      dispatch(getVotes({ sub_id }))
    }, [])

  useEffect(() => {
    const { data, status } = votes
    if (status === "succeeded") {
    const image_ids = data.map(vote => vote.image_id)
    setImageIds(image_ids)
    }
  }, [votes])

  useEffect(() => {
    if(imageIds.length > 0) {
      dispatch(getLikedImages(imageIds))
    }
    }, [imageIds])

  return (
    <MainLayout>

      <div className="likes-heading-container">
        <h1 className="likes-heading">My Likes</h1>
      </div>
      <div className="likes-container">
      <div className="image-grid">
        {
          likedImages.status === 'loading' ?
          <h5 className="loading">loading...</h5> :
          likedImages.status === 'succeeded' &&
         likedImages.data.map(image => (
          <div key={image.url} className="liked-image-container">
            <div className="liked-image" style={{ backgroundImage: `url(${image.url})`}}></div>
          </div>
          ))}
      </div>
      </div>
    </MainLayout>
  )
}