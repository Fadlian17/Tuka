import React from 'react'
import PostItem from '../parts/PostItem'
import Pagination from '../parts/Pagination'

const Posts = () => {
  return (
    <>
      <div class='col-lg-8'>
        <div class='blog-box list-style'>
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />

          <Pagination />
        </div>
      </div>
    </>
  )
}

export default Posts
