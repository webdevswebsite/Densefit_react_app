import React, { useEffect, useState } from "react";

function Paginnation({ showPerPage, onchangepagination, total }) {
    const [ counter, setCounter ] = useState(1);
    const [ numberOfButtons, setNumberOfButoons ] = useState(Math.ceil(total / showPerPage))
    console.log(setNumberOfButoons)

    useEffect(() => {
        const value = showPerPage * counter;
        onchangepagination(value - showPerPage, value);
    }, [ value ]);
    const onclickButton = (type) => {
        if (type === "pre") {
            if (counter === 1) {
                setCounter(1);
            } else {
                setCounter(counter - 1);
            }
        } else if (type === "next") {
            if (numberOfButtons === counter) {
                setCounter(counter);
            } else {
                setCounter(counter + 1);
            }

        }
    };
    return (
        <div>

            <nav aria-label="..." >
                <ul className="pagination justify-content-center mt-5">
                    <li className="page-item">
                        <button style={{ border: 'none', background: "none" }} className="page-link" onClick={() => onclickButton("pre")}>Previous </button>
                    </li>

                    {
                        new Array(numberOfButtons).fill("").map((el, index) => (
                            <li className={`page-items ${index + 1 === counter ? "active" : null}`}>
                                <button style={{ border: 'none', background: "none" }} className="page-link" onClick={() => setCounter(counter)}> {index + 1} </button>
                            </li>
                        ))
                    }

                    <li className="page-item">
                        <button style={{ border: 'none', background: "none" }} className="page-link" onClick={() => onclickButton("next")} >Next </button>
                    </li>
                </ul>
            </nav>

        </div>
    );
}
export default Paginnation;