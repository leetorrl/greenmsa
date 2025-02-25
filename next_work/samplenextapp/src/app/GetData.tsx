'use client';

import useSWR from "swr";

const url = '/sample.json';
const fetcher = (...args: [RequestInfo, RequestInit?]) => {
    return fetch(...args).then(res => res.json());
};

export default function GetData() {
    const {data} = useSWR(url,fetcher);
    return(
        data ? <p className="msg border p-2">{data.message}</p>
        : <p className="msg border p-2">nodata</p>
    )
}