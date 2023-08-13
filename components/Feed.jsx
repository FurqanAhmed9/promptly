"use client"
import { useState,useEffect } from "react";
import PromptCard from "./PromptCard";
const PromptCardList=({data,handleTagClick})=>{
  return(
    <div className="mt-16 prompt_layout">
        {data.map((post)=>(
          //console.log(data),
          <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
          />
        ))}
        
    </div>
  )
}

const Feed = () => {

  const [searchText,setSearchText]=useState("");
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState("true");
  // const [searchResults,setSearchResults] = useState([]);

  const handleChange=(event)=>{
      setSearchText(event.target.value);
      searchByName(posts, searchText)
  }

  function search(data, searchText) {
    const regex = new RegExp(searchText, "i"); // 'i' flag for case-insensitive search
    return posts.filter(
      (item) =>
        regex.test(item.creator.userName) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  }

  const fetchPosts= async()=>{
    const response=await fetch ("/api/prompt");
    const data=await response.json();
    
    // console.log(data);
    setPosts(data);
  }

  // const handleTagClick = (tagName) => {
  //   setSearchText(tagName);

  //   const searchResult = search(tagName);
  //   setSearchResults(searchResult);
  // };

useEffect(()=>{  
  
  fetchPosts();
  setLoading(false);
},[])

useEffect(()=>{  
  setLoading(false);
},[search])

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input type="text" 
        placeholder="Search For Prompts"
        value={searchText}
        onChange={handleChange}
        required
        className="search_input peer" />
      </form>

      {(loading)?(
      <>
     <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
      </>):
      (<PromptCardList
      data={(searchText==="")?posts:search(posts,searchText)}
      handleTagClick={() =>{}}
      />)}
    </section>
  )
}

export default Feed;

