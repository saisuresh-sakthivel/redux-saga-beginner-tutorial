import React from 'react'
const Posts = ({allposts}) => {
    let posts = allposts.map((param)=>{
        return (<div key={param.id}>
           {param.title}
        </div>)
    })
    return <div>{posts}</div>
}
export default Posts;