import type { NextApiRequest, NextApiResponse } from "next";


type Data = {
    name: string,
    mail: string,
    age: string
};

const data = [
    {"name":"lee","mail":"lee@naver.com","age":"30"}
]

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
){
    

    res.status(200).json(data);
}