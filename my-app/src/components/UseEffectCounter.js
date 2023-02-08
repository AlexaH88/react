import React, {useState, useEffect} from "react"

function UseEffectCounter() {

    const [count, setCount] = useState(0);
    // useEffect() runs all component lifecycle methods eg mount, update, unmount
    // useEffect() runs on every render!
    // update document title every time the component is mounted or updated
    useEffect(() => {
        document.title = count;
    });

    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
        </div>
    )
}

export default UseEffectCounter