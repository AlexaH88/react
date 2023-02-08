import React, {useState} from "react"
import UseEffectCounter from "./UseEffectCounter";

function UseEffectCounterContainer() {

    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() => {
                {/* setDisplay method returns the opposite of display ie toggling */}
                setDisplay(!display)
            }}>
                Toggle Display
            </button>
            {/* render useEffectCounter if display is true */}
            {display && <UseEffectCounter />}
        </div>
    )
}

export default UseEffectCounterContainer