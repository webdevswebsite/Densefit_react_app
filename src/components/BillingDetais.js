import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import SubpageBanner from "./SubpageBanner";

function BillingDetais() {

    const [state, setState] = useState("")
    const navigate = useNavigate()

    // useEffect(() => {
    //     localStorage.getItem("email")
    // }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (handleSubmit) { navigate("/checkout") } else { alert('Please supply  all shipping details')  }
    }

    return (
        <>
          {/* <SubpageBanner name="Terms & Conditions" indexpage="Home" indexvisit="/" activepage="T & C" /> */}
            
            <div className="biling-details">
                <h2> Shipping information </h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="row mt-4">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label> Full name </label>
                                <input type="text" className="form-control" required />
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label>Email </label>
                                <input type="email"
                                    className="form-control"
                                    required
                                    value={state}
                                    onChange={e => setState(e.target.value)}
                                    onBlur={(e) => {
                                        localStorage.setItem("email", e.target.value)
                                    }} />
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <label> Town / City </label>
                                <input type="text" className="form-control" />
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <div className="form-group">
                                <label> Phone </label>
                                <input type="text" className="form-control" required />
                            </div>

                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label> Address/ House number </label>
                                <textarea className="form-control" required></textarea>

                            </div>

                        </div>
                    </div>
                    <button type="submit" className='btn w-50 billingbtn' style={{ padding: '9px', borderRadius: '8px', border: 'none', background: '#d00035', color: '#fff', minWidth:'100px', fontSize:'20px' }}>Submit shipping details</button>
                </form>
            </div>
        </>
    );
}
export default BillingDetais;