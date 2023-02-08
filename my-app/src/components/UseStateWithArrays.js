import React, {useState} from "react"

function UseStateWithArrays() {

    const [nums, setNums] = useState([1, 2, 3]);
    // use spread operator ... to include current array before adding more
    // use nums.length = 3 as there are 3 numbers, + 1 to start counting from 4
    
    const addNums = () => {
        setNums([...nums, nums.length + 1]);
    }

    // Adam's solution
    // const removeNums = () => {
    //     setNums(
    //         nums.filter((item, index) => {
    //             // return false when dealing with the last item
    //             // whenever the filter method returns false, that item is left out of the array
    //             return index !== nums.length - 1;
    //         })
    //     )
    // }

    // Adam's solution simplified
    const removeNums = () => {
        setNums(
            nums.filter((item, num) => {
                // return false when dealing with the last item
                // whenever the filter method returns false, that item is left out of the array
                return num !== nums.length - 1;
            })
        )
    }

    // using push creates bugs as React doesn't detect any changes
    // const buggyPushNums = () => {
    //     nums.push(nums.length + 1);
    //     setNums(nums);
    //     console.log(nums);
    // }

    return (
        <div>
            <button onClick={addNums}>Add Item</button>
            <button onClick={removeNums}>remove Item</button>
            {/* <button onClick={buggyPushNums}>Add Buggy Push Item</button> */}
            <ul>
                {nums.map(num => <li key={num}>{num}</li>)}
            </ul>
        </div>
    )
}
export default UseStateWithArrays