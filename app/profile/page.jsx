"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {

  const {data:session}=useSession();
  const router=useRouter();
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
      
          setPosts(data);
        };
        
      if(session?.user.id) 
      {fetchPosts();
        setLoading(false)}
    }, [session?.user.id]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed=confirm("Are you sure you want to delete this prompt?");

    try {
      if(hasConfirmed){
      await fetch(`/api/prompt/${post._id.toString()}`,
      {method: 'DELETE'});   
      }

      const filteredPosts=posts.filter((p)=>p._id!==post._id)
      setPosts(filteredPosts);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <Profile
        name="My"
        desc="Welcome to Your Personalized Profile Page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        loading={loading}
      />
    </div>
  );
};

export default MyProfile;