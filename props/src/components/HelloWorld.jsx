import { useEffect } from 'react';

function Hello() {
    useEffect(() => {
        return () => {
            alert("The component is going to be unmounted");
        }
    }, []);

    return <h1> Hello world !!! </h1>;
}

export default Hello;