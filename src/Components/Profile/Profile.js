import { useEffect, useState } from "react";
import { getProfile, getVotes, addVotes } from "../../Services"
import { useSelector, useDispatch } from "react-redux"
import { Heart, ThumbsDown, ThumbsUp } from ".."

import "./Profile.css"

export const Profile = () => {
    const profile = useSelector(state => state.profile)
    const votes = useSelector(state => state.votes)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getProfile())
    }, [])

    useEffect(() => {
      const localVotes = localStorage.getItem("likes")
      if (!localVotes) {
      dispatch(getVotes())
      }
    }, [])

    const [vote, setVote] = useState(0)
    const [hover, setHover] = useState(null)


    const handleHover = (e) => {
     if(e.type === "mouseenter") {
       setHover(e.target.id)
     } else {
        setHover(null)
      }
    }

    const handleVote = (e) => {
      if (e.target.id === "thumbs-up") {
        dispatch(addVotes({id:profile.data.id, vote:1}))
      }
      if (e.target.id === "thumbs-down") {
        dispatch(addVotes({id:profile.data.id, vote:-1}))
      }

    }

    return (
      <div className="profile-container">
        <div className="vote-container">
          <div className="vote-buttons">
            <button 
                id="thumbs-up" 
                onMouseEnter={handleHover} 
                onMouseLeave={handleHover} 
                onClick={handleVote}
                className="vote-button">
              <ThumbsUp hover={hover} />
            </button>

            <span className="vote-count">{vote}</span>

            <button 
                id="thumbs-down" 
                className="vote-button" 
                onClick={handleVote}
                onMouseEnter={handleHover} 
                onMouseLeave={handleHover}>
              <ThumbsDown  hover={hover} />
            </button>

            <button id="heart-icon" className="vote-button" onMouseEnter={handleHover} onMouseLeave={handleHover}>
              <Heart hover={hover} />              
            </button>
          </div>
        </div>

        <div>
          <div className="profile-header">
            <div className="profile-name">
              <h2>{profile.status}</h2>
            </div>
            <div>
              <button className="next-button" onClick={() => dispatch(getProfile())}>Next</button>
            </div>
          </div>   
          
            <div className="profile-image">
              {
                profile.status === 'loading'? <h5 className="loading">loading...</h5> : <img className="image" src={profile.data.url} alt="cat" />
              }
            </div>
        </div>
      </div>
    )
}