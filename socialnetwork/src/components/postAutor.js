import React, {Component}from 'react';
import Post from './post';
class PostAutor extends Component {
    constructor(){
        super();
        this.state = {
            post: []
        }
    }

    componentDidMount(){
        const posts = JSON.parse(localStorage.getItem('savedPosts'));
        const post = posts.filter(savedPost => {
            return savedPost.author == this.props.match.params.author;
        });
        this.setState({post});
    }

    render(){
        console.log(this.props);
        console.log('autor',this.state);
        return(
        <div>
         {this.state.post.map((post,i) => {             
            return(
                <div>
                    <Post 
                     post={post}/>
                </div>
            )
        })}
        </div>
         ) 
    }
}
export default PostAutor;