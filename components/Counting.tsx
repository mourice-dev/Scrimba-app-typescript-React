import React from "react";
import Count from "./Count";

export default function Counting(){

    const [counts, setCount] = React.useState(0)
    
    function subtract() {
        setCount(previousCount => previousCount - 1);
    }
     function add() {
        setCount(previousCount => previousCount + 1);
    }

    return (<>
                <main className="container">
            <div className="counter">
                <button
                    className="minus"
                    onClick={subtract}
                    aria-label="Decrease count"
                >-</button>

                <Count number={counts}/>

                <button
                    className="plus"
                    onClick={add}
                    aria-label="Increase count"
                >+</button>
            </div>
        </main>
        </>

    )
}