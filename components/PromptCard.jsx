"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {

  const {data:session} = useSession();
  const pathName=usePathname();
  const router = useRouter();
  const [coppied,setCoppied] =useState("");

  const handleCopy=()=>{
    setCoppied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(()=>setCoppied(""),3000);
  }
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Link href="/profile/[id]" as={`/profile/${post.creator._id}`}>
          <Image
            src={post.creator?.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          </Link>

          <div className="flex flex-col">
            <h3 className="font-satochi font-semibold text-grey-900">
              {post.creator?.userName}
            </h3>
            <p className="font-inter text-sm text-grey-5000">
              {post.creator?.email}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image 
            src={coppied===post.prompt?"/assets/icons/tick.svg":"/assets/icons/copy.svg"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satochi text-sm text-grey-700">{post.prompt}</p>
      <p 
      className="font-inter text-sm blue_gradient cursor-pointer" 
      onClick={()=>handleTagClick&&handleTagClick(post.tag)}>
      {post.tag}
      </p>

      {session?.user.id===post.creator._id&&pathName==="/profile"&&(
        <div className="mt-5 flex-center gap-4 border-t-2 border-gray-100 pt-3">
          <Image src="/assets/icons/icons8-edit.svg" 
          width={25}
          height={25}
          onClick={handleEdit}/>
          <Image src="/assets/icons/icons8-delete.svg" 
          width={30}
          height={30}
          onClick={handleDelete}
          className=""/>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
