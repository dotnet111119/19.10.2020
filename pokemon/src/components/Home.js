import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Pokeball from '../images/pokeball.png'

class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    setTimeout(
      () => {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0,10)
        });
      })
    }, 2000);
  }
  render(){
    //const posts = this.state.posts
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
            <div className="post card" key={post.id}>
              <img src={Pokeball} alt="a pokeball" />
              <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
                </Link>
                <p>{post.body}</p>
              </div>
            </div>
        )
      })
    ) : (
      <div className="center">
      <div class="progress">
      <div class="indeterminate"></div>
  </div>
  <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
  </button>
    </div>
    );

    return (
      <div>
        <div className="container">
          <h4 className="center">Home</h4>
          {postList}
        </div>
      </div>
    )
  }
}
export default Home