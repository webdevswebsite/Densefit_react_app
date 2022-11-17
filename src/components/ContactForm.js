import React from "react";
import { useForm } from "react-hook-form";


 function ContactForm(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
     return(
         <>
         <form onSubmit={handleSubmit(onSubmit)}>
         
            <div className="row mt-5 mt-md-0 mt-lg-0 mt-xl-5">
                <div className="col-lg-6">
                    <input type="text"  className="form-control" placeholder="Name"
                    {...register("name", { required: "true" })} required/>
                    {errors.name && "Last name is required"}
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" 
                    {...register("email", { required: "true" })} required/>
                    {errors.email && "email name is required"}
                   
                  </div>
                </div>
                <div className="col-lg-6">
                    <input type="text" className="form-control" placeholder="Phone"
                    {...register("phone", { required: "true" })} required/>
                    {errors.phone && "email name is required"}
                </div>
                <div className="col-lg-6">
                    <input type="text" className="form-control" placeholder="Subject"
                    {...register("subject", { required: "true" })} required/>
                    {errors.subject && "email name is required"}
                </div>
                <div className="col-lg-12">
                    <textarea className="form-control mesg-fild" placeholder="Message"
                    {...register("Message", { required: "true" })} required></textarea>
                    {errors.message && "email name is required"}
                </div>
                <div className="col-lg-12">
                    <input type="submit" id="submit" className="btn subimt-message" value="Submit" />
                </div>
            </div>
          
        </form>
         </>
     );
 }
export default ContactForm;