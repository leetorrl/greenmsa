"use client";

interface JsonItemProps {
    data: {
        name: string,
        mail: string,
        age: string
    };
}

export default function JsonItem(props: JsonItemProps){
    return(
        <tr>
            <td>{props.data.name}</td>
            <td>{props.data.mail}</td>
            <td>{props.data.age}</td>
        </tr>
    )
}