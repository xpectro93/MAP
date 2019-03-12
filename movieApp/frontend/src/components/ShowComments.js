import React from 'react'
import '../css/Comments.css'


export const ShowComments = props => {
  let commentsDisplay = props.comments.map(comment => {
   return(
      <p key={comment.id} id="acomment">{comment.text}</p> )
  })
  return (
    <div className = 'comments'>
    {commentsDisplay}
    </div>
  )
}
