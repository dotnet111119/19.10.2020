import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  state = {
    id: null,
    post: null
  }
  
  // ----> this is good time to find out the parameter
  componentDidMount(){ 
    let id = this.props.match.params.post_id;
    console.log(this.props)
    
    this.setState({
      id
    })
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(res => {
        console.log(res);
        this.setState({
          post: res.data
        })});
  }
  render() {
    //const post = this.state.post
    const { post } = this.state
    const post_data = post ? (<div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
      ) : (
      <div className="center">
        <div className="progress">
            <div className="indeterminate"></div>
            </div>
        </div>
    );


    return (
      <div>
        <div className="container">
          {post_data}
        </div>
      </div>
    )
  }
}
export default Post