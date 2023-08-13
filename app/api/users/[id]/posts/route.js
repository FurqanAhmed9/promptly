// import Prompt from "@models/prompt";
// import { connectToDB } from "@utils/database";

// export const GET=async (request, {params})=>{
//     try{
//         await connectToDB();

//         const prompts=await Prompt.find({creator: params.id }).populate("creator");

//         return new Response(JSON.stringify(prompts), {status:200} )
//     }
//     catch(e){
    //         return new Response(JSON.stringify("Failed to fetch all prompts"), {status:500} )
    //     }
    // }

    import Prompt from "@models/prompt";
    import { connectToDB } from "@utils/database";
    
    export const GET = async (request, { params }) => {
        try {
            // console.log(params.id);
            await connectToDB()
            
        const prompts = await Prompt.find({ creator: params.id }).populate("creator")

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch prompts created by user", { status: 500 })
    }
} 