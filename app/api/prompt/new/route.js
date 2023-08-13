// import { connectToDB } from "@utils/database";
// import Prompt from "@models/prompt";

// export const POST=async(req)=>{
//     const {userId,prompt,tag}= await req.json();

//     try{
//         await connectToDB();

//         console.log(prompt,tag);
//         const newPrompt=new Prompt({
//             creator:userId,
//             prompt:prompt,
//             tag:tag,
//         });

//         await newPrompt.save();
//         console.log(newPrompt);
//         return new Response(JSON.stringify(newPrompt),{
//             status:201
//         })

//     }catch(error){
//         return new Response("Failed to create new prompt",{status:500});
//     }
// }
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, prompt, tag } = await request.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, prompt, tag});

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 400 });
    }
}