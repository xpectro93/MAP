import React, { Component } from 'react';
import axios from 'axios'
import {ShowMovie} from './ShowMovie'
import { ShowComments } from './ShowComments'
import { PostComment } from './PostComment'
import '../css/Comments.css'



export default class SingleMovieDisplay extends Component {
  state = {
    movie:[],
    comments:[],
    commentInput:"",
    rating:null,
    error:''
  }

componentDidMount(){
this.loadAll();

}
loadAll(){
  this.loadMovie();
  this.loadComments();
}
loadMovie(){
 axios
  .get(`/movies/everything/${this.props.match.params.id}`)
    .then(res => {
      this.setState({
        movie:res.data.data
      })
    })
}
loadComments(){
  axios
    .get(`/comments/movie/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          comments:res.data.data
        })
      })
}
onChange = e => {

  this.setState({
    [e.target.id]:e.target.value
  })
}
submitComment = e =>{
      e.preventDefault();
  if(this.state.commentInput<1){
    this.setState({
      error:"Write something before submitting"
    })
  }else{

    let comment = {
      movie_id:+this.props.match.params.id,
      text: this.state.commentInput
    }
    this.setState({
      commentInput:"",
      error:''
    })
    axios
      .post('/comments/',comment)
        .then(res => {
          console.log(res);
        })
        .then(()=> {
          this.loadComments()
        })

  }



}
submitRating = e => {
  e.preventDefault();
  let rating = {
    stars:+this.state.rating,
    movie_id:+this.props.match.params.id
  }

  axios
    .post('/ratings/',rating)
      .then(res => {
        console.log(res);
      })
      .then(()=> {
        this.loadMovie()
      })


}
handleFocus = (event) => event.target.select()


render(){

  console.log(this.state);
  return (
    <div className="Movies">
    <ShowMovie  movie={this.state.movie} props={this.props}/>

    <form className="ratings" onSubmit={this.submitRating}>
    <div id="radial">
    <input id="rating" onChange={this.onChange} type="radio" name="rating" value='1'/><span>1</span>
    <input id="rating" onChange={this.onChange} type="radio" name="rating" value='2'/> <span>2</span>
    <input id="rating" onChange={this.onChange} type="radio" name="rating" value='3'/><span>3</span>
    <input id="rating" onChange={this.onChange} type="radio" name="rating" value='4'/><span>4</span>
    <input id="rating" onChange={this.onChange} type="radio" name="rating" value='5'/><span>5</span>
    </div>
    <button id="searchInput" type="submit">Submit Rating</button>
    </form>
    <h3>{this.state.error}</h3>
    <PostComment
        submitComment={this.submitComment}
        onChange = {this.onChange}
        handleFocus={this.handleFocus}
      />
    <ShowComments
        comments={this.state.comments}
        props={this.props}/>
    </div>
  )
}


}
