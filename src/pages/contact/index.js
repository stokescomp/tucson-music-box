import * as React from 'react';
import contact from './contact.module.scss';
export default function Contact() {
  return (
    <>
      <div className={contact.maincontainer}>
        <div className={contact.wordscontainer}>
          <h1 className={contact.title}>Contact Us!</h1>
          <hr></hr>
          <p>Wed love to hear any feedback or questions you have for us.</p>
          <p>
            Location: Book Viking 155 W. Main St. Suite #10 Rexburg ID 83440
          </p>
          <p>Store Hours: Monday-Friday 11am-6pm</p>
          <p>Phone number: (208) 359-6190</p>
        </div>
        <div className={contact.form}>
          <form>
            <label className={contact.personalinfo} for='firstName'>
              First Name:
            </label>
            <br></br>
            <input type='text' name='firstName'></input>
            <br></br>
            <label className={contact.personalinfo} for='lastName'>
              Last Name:
            </label>
            <br></br>
            <input type='text' name='LasttName'></input>
            <br></br>
            <label className={contact.personalinfo} for='email'>
              Email:
            </label>
            <br></br>
            <input type='text' name='email'></input>
            <br></br>
            <label className={contact.message} for='message'>
              Message:
            </label>
            <br></br>
            <input type='text' name='message'></input>
            <br></br>
            <label for='submit'></label>
            <br></br>
            <input
              className={contact.submit}
              type='submit'
              value='Submit'
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}
