"use server";
import OpenAI from "openai";

const api_key = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
const openai = new OpenAI({apiKey: api_key})

export async function GET(request:Request){

    return new Response(JSON.stringify({content:'nodata. '}),{
        status:200,
        headers:{'Content-Type': 'application/json'},
    });
}

export async function POST(request:Request){

    const input = await request.json();

    // const opts = {
    //     model: 'dall-e-3',
    //     prompt: input.prompt,
    //     n: 1,
    //     size: '1024x1024'
    // };
    // const image = await openai.images.generate(opts);
    // const url = image.data[0].url;

    // return new Response(JSON.stringify({url:url}),{
    //     status: 200,
    //     headers: {'Content-Type':'application/json'},
    // })

    const messages = [
        {
            role: "user",
            content: input.prompt
        }
    ];

    const resp = await openai.chat.completions.create({
        messages: messages,
        model: "gpt-3.5-turbo"
    });
    const message = resp.choices[0].message;
    const res = {content:message.content.trim()};

    return new Response(JSON.stringify(res),{
        status:200,
        headers: {'Content-Type': 'application/json'},
    })
}