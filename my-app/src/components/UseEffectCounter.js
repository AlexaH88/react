import React, {useState, useEffect} from "react"

function UseEffectCounter() {

    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    // useEffect() runs all component lifecycle methods eg mount, update, unmount
    // useEffect() runs on every render!
    // update document title every time the component is mounted or updated
    useEffect(() => {
        console.log('Count effect');
        document.title = count;
    // add second argument to useEffect() in order to run only with regards to this
    }, [count]);

    useEffect(() => {
        console.log('Creating timer');
        // setInterval takes two parameters: the function you want to run and how long you want the interval to be
        // time is updated by 1 every 1000 milliseconds
        const interval = setInterval(() => {
            setTime(time => time + 1)
        }, 1000);
        console.log(interval)
        // pass an empty array as a second parameter to only run once
    }, []);

    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
            <h2>Time is {time}</h2>
        </div>
    )
}

export default UseEffectCounter