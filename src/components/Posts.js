import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        posts: []
    }

    async componentDidMount() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const db = await res.json()
        this.setState({
            posts: db
        })
        console.log(db)

    }

    render() {
        return (
            <div className="col-md-12">
                <div className="card mt-4 mb-4">
                <h1>Publicaciones</h1>
                <div className="row mr-2 ml-2 mb-4">
                    
                    {
                        this.state.posts.map(post => {
                            return (
                                <div className="col-md-4" key={post.id} >
                                    <div className="card mt-4">
                                        <div className="card-header" >
                                        <h3>{post.title}</h3>
                                        </div>
                                        <div className="card-body">
                                        <p>{post.body}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                </div>
            </div>
        )
    }
}
