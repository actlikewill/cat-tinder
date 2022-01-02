import { useEffect, useState } from "react";
import { nanoid } from "nanoid"
import { getProfile, getVotes, addVotes, clearAddVote } from "../../Services"
import { useSelector, useDispatch } from "react-redux"
import { Heart, ThumbsDown, ThumbsUp } from ".."


import "./Profile.css"

export const Profile = () => {
    const profile = useSelector(state => state.profile)
    const addVote = useSelector(state => state.addVotes)
    const [voteStatus, setVoteStatus] = useState()
    const [hover, setHover] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(clearAddVote())
      dispatch(getProfile())
    }, [])

    useEffect(() => {
      const { status } = addVote
      if (status === "succeeded") {
        setVoteStatus('Liked')
      } else if (status === "loading") {
        setVoteStatus('...')
      } else {
        setVoteStatus('')
      }
    }, [addVote])



    const handleHover = (e) => {
     if(e.type === "mouseenter") {
       setHover(e.target.id)
     } else {
        setHover(null)
      }
    }

    const handleVote = (e) => {

      let userSubId = localStorage.getItem("userSubId")

      // Set new id if none is present in local storage!!
      if (!userSubId) {
        userSubId = nanoid()
        localStorage.setItem("userSubId", userSubId)
      }

      if (e.target.id === "thumbs-up") {
        dispatch(addVotes({image_id:profile.data.id, value:1, sub_id: userSubId}))
      }
      if (e.target.id === "thumbs-down") {
        dispatch(addVotes({image_id:profile.data.id, value:-1, sub_id: userSubId}))
      }

    }

    const showNext = () => {
      dispatch(getProfile())
      dispatch(clearAddVote())
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

            <span className="vote-count">{ voteStatus }</span>

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
              <h2 className="profile-id">{profile.status === 'succeeded' ? profile.data.id : '...'}</h2>
            </div>
            <div>
              <button className="next-button" onClick={showNext}>Next</button>
            </div>
          </div>   
          
            <div className="profile-image">
              {
                profile.status === 'loading'? <h5 className="loading">loading...</h5> 
                : <img className="image" src={profile.data.url} alt="cat" />
              }
            </div>
        </div>
      </div>
    )
}