import { useFetchQuery } from '../custom-hook/useFetchQuery';
import { useToggle } from '../custom-hook/useToggle';

export const Home = () => {
    const [show, setShow] = useToggle(false);
    const [show2, setShow2] = useToggle(false);

    const { data, refetchData, isLoadingData } = useFetchQuery();

    if (isLoadingData) {
        return <h1>Loading data...</h1>
    }

    return (
        <>
            <h1>Home page</h1>
            <br />
            <p>{data?.fact}</p>
            <button onClick={refetchData}>Update Data</button>

            <br />
            <button onClick={setShow}>
                {show ? "Hide" : "Show"}
            </button>
            {show && <h1>Text Show</h1>}
            <br />
            <button onClick={setShow2}>
                {show2 ? "Hide" : "Show"}
            </button>
            {show2 && <h1>Text Show2</h1>}
        </>
    )
}