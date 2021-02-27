import React from 'react';
import emailjs from 'emailjs-com';

//import './ContactUs.css';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('resort', 'template_1hfx9hq', e.target, 'user_7iFSwYrfCnnyMLul4kaZi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <div className="container contact">
    <div className="row">
        <div className="col-md-8 col-12 mx-auto">
            <div className="card shadow-lg border-0 p-4">
                <h1 className="text-center bg-dark text-white display-4 d-inline-block">Contact us</h1>
                <div className="form-group my-5">
                    <div className="row">
                                <form className="contact-form" onSubmit={sendEmail}>
                                <div className="col-md-6 col-12 mx-auto my-2">
                                    <input type="hidden" name="contact_number" />
                                    </div>
                                   
                                    <label>Name</label>
                                    <input type="text"  className="form-control-lg" name="user_name" />
                                    
                                    <label>Email</label>
                                    <input type="email"  className="form-control-lg" name="user_email" />
                                    <label>Message</label>
                                    <textarea name="message"  className="form-control-lg" /><br/>
                                    <input type="submit" className="btn btn-outline-dark btn-lg btn-block" value="Send" />
                                     </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
  );
}
