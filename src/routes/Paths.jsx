import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blog from '../pages/Blog'
import BlogPost from '../pages/BlogPost'

const Paths = () => {
  return (
    <div>
        <Routes>
           <Route path='/blog' element={ <Blog/>}/>
           <Route path='/blogPost' element={ <BlogPost/>}/>
        </Routes>
    </div>
  )
}

export default Paths
