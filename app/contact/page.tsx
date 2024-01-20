'use client'

import { useFormStatus } from "react-dom";
import styles from "./Contact.module.css"
import { contactAction } from "./contactAction"


function Submit() {
    const {pending} = useFormStatus();
    
  
    return <button disabled={pending}
    style={{backgroundColor: pending? 'red' : 'green'}}
    >Submit</button>
  }

function Contact() {


    return <div className={styles.container}>
       <form className="m-20"action={contactAction}>
      <h1>Get in touch</h1>
      <div className="email block">
        <label htmlFor="frm-email">Email</label>
        <input
          style={{backgroundColor: 'rgb(222,222,222)'}}
          id="frm-email"
          type="email"
          name="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="block phone">
        <label htmlFor="frm-phone">Phone</label>
        <input
          id="frm-phone"
          type="text"
          name="phone"
          autoComplete="tel"
          required
        />
      </div>
      <div className="name block">
        <div>
          <label htmlFor="frm-first">First Name</label>
          <input
            id="frm-first"
            type="text"
            name="first"
            autoComplete="given-name"
            required
          />
        </div>
        <div>
          <label htmlFor="frm-last">Last Name</label>
          <input
            id="frm-last"
            type="text"
            name="last"
            autoComplete="family-name"
            required
          />
        </div>
      </div>

      <div className="button block">
      <Submit/>
      </div>
    </form>
    </div>
}

export default Contact