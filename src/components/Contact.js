import React from 'react'

export default function Contact() {
    return (
            <div className="container" id="contact-form">
                <h2>Contact</h2>
                <form>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First name Last name" />
                    </div>
                    <div className="form-group">
                            <label for="exampleFormControlInput2">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
                        </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-light" id="button-color">Submit</button>
                </form>
            </div>
    )
}
