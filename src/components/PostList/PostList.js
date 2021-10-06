import './PostList.css'
import { Post } from '../Post/Post';
import { useEffect, useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar'

export const PostList = () => {

    useEffect(() => {
      fetchPosts();
    }, []);
    
    
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('popular');

    const fetchPosts = async () => {
      const data = await fetch(
        `https://www.reddit.com/r/${searchTerm}.json`
      );
      const response = await data.json();
      let posts = await response.data.children;
      setPosts(posts);
    }
    
    const handleCallback = (searchData) => {
      setSearchTerm(searchData)
      fetchPosts();
    }

    return(
        <div className='postlist'>
          <SearchBar callBack={handleCallback}/>
            {posts.map(post => (
                <div className='post'>
                    <Post title={post.data.title}
                          author={post.data.author}
                          src={post.data.url}
                          userText={post.data.selftext}
                          ups={post.data.ups}
                          hasMedia={post.data.media}
                          isVideo={post.data.isVideo}
                          postHint={post.data.post_hint}
                    />
                </div>
            ))}
        </div>
    )
}