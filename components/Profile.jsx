import PromptCard from "./PromptCard"

const Profile = ({name,desc,data,handleEdit,handleDelete,loading}) => {
  // console.log(data);
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>

      <p className="desc text-left">{desc}</p>

      {(loading)?(
      <>
     <div className="spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
      </>):
      (<div className="mt-10 prompt_layout">
        {data.map((post)=>(
          <PromptCard
          key={post._id}
          post={post}
          handleEdit={()=>handleEdit&&handleEdit(post)}
          handleDelete={()=>handleDelete&&handleDelete(post)}
          />
        ))}
      </div>
      )}
    </section>
  )
}

export default Profile
