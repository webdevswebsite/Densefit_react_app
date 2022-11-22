import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartState } from "../context/Context";

function CheckoutPayright() {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    console.log(dispatch)

    const [ total, setTotal ] = useState()

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
    }, [ cart ])

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.flutterwave.com/v3.js";
        document.getElementsByTagName("head")[ 0 ].appendChild(script);
    }, []);

    return (
        <>
            <div className="checkout-right mt-5 mt-lg-0">
                <h2> Your Order </h2>
                <div className="oder-summary-item mt-3">

                    <table className="table checkout-table">
                        <thead>
                            <tr>
                                <th scope="col"> Product </th>
                                <th scope="col">Quantity</th>
                                <th scope="col">amount</th>

                            </tr>
                        </thead>
                        {cart.map((prod) => (
                            <tbody>
                                <tr>
                                    <td>
                                        {prod.title}
                                    </td>
                                    <td>({prod.qty}</td>
                                    <td>{prod.price}</td>

                                </tr>

                            </tbody>
                        ))}
                    </table>
                </div>
                <div className="oder-right-details-new">

                    <hr />
                    <div className="price-sec-order">
                        <div className="total-price p-0">
                            <p className="discount-am mb-lg-0"> Total Amount: <span> $ {total} </span></p>
                        </div>

                    </div>

                </div>
            </div>
            <form>
                <NavLink to="/checkout" onClick={
                    (e) => {
                        e.preventDefault()
                        return window.FlutterwaveCheckout({
                            public_key: "FLWPUBK-00f1a8bfd678ad383f650cd6cccd643b-X",
                            amount: total,
                            currency: "USD",
                            tx_ref: new Date().toISOString(),
                            customer: {
                                email: localStorage.getItem("email"),
                            },
                            customizations: {
                                title: "DENSEFIT",
                            },
                            callback: async function () {
                                alert('Payment successful...We will reach out to you for further details')
                            },
                        });
                    }
                } className="btn paybn mt-3 w-100"> Payment now </NavLink>
            </form>
        </>
    );

}
export default CheckoutPayright;