import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';

export const useFetchQuery = () => {
    const { data, isLoading: isLoadingData, refetch, error } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
    })

    const refetchData = () => {
        alert("Refetch");
        refetch()
    }

    return { data, refetchData, isLoadingData }
}