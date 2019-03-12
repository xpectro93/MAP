import React from 'react'
import '../css/Comments.css'


export const PostComment = props => {

  return (
    <>
    <form onSubmit={props.submitComment} className = 'post-comment'>
    <input placeholder="write a review" onFocus={props.handleFocus} id ='commentInput' type="text" onChange={props.onChange} value={props.commentInput}/>
    <button id="searchInput" type="submit">Submit Comment</button>
    </form>

    </>
  )
}
