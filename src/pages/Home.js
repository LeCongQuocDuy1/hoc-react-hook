import { React } from 'react'
import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const Home = () => {
    const { data, isLoading, refetch } = useQuery(["post"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    })

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <h1>Home page</h1>
            <br />
            <p>{data?.fact}</p>
            <button onClick={refetch}>Update Data</button>
        </>
    )
}