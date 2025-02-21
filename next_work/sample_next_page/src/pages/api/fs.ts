import fs from 'fs';
import type { NextApiRequest , NextApiResponse } from 'next';
import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';

type Data = {
    content: string;
}
const path = 'data.txt';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    var content = '';
    switch(req.method){
        case 'GET':
            content = fs.readFileSync(path, {flag:'a+'}).toString().trim();
        break;

        case 'POST':
            const body = JSON.parse(req.body);
            fs.appendFileSync(path, body.content + "\n");
            break;
        
            default:
                break;
    }
    res.status(200).json({content: content});
}