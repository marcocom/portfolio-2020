export const useFetchJson = () => {
    const getData = (file) => {
        fetch(file, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json)
            .then(error => console.log('error:', error));
    };
    // return useMemo(() => ({count, setCount}));
    return { getData };
};
