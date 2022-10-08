import * as React from "react";
import contact from "./contact.module.scss";
export default function Contact() {
  return (
    <>
      <div>
        <div className={contact.wordscontainer}>
          <h1>Contact Us!</h1>
          <p>We'd love to hear any feedback or questions you have for us.</p>
          <p>
            Location: Book Viking 155 W. Main St. Suite #10 Rexburg ID 83440
          </p>
          <p>Store Hours: Monday-Friday 11am-6pm</p>
          <p>Text number: (708)501-4188</p>
          <p>Phone number: (208) 359-6190</p>
        </div>
        <div className={contact.form}>
          <form>
            <label className={contact.personalinfo} for="firstName">
              First Name:
            </label>
            <br></br>
            <input type="text" name="firstName" />
            <br></br>
            <label className={contact.personalinfo} for="lastName">
              Last Name:
            </label>
            <br></br>
            <input type="text" name="LasttName" />
            <br></br>
            <label className={contact.personalinfo} for="email">
              Email:
            </label>
            <br></br>
            <input type="text" name="email" />
            <br></br>
            <label className={contact.message} for="message">
              Message:
            </label>
            <br></br>
            <input type="text" name="message" />
            <br></br>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}
