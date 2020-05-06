import React from "react"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Form = () => {
  return (
    <section>
      <h1 id="contact">Me contacter</h1>
        <form  
        action="#" className="form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="contact" value="contact" />
        <fieldset>
          <legend>Formulaire de contact</legend>
          <label className="label" htmlFor="firstname">
            <p className="label-text">Prénom</p>
            <input
              required
              className="input"
              id="firstname"
              name="firstname"
            />
          </label>
          <label className="label" htmlFor="lastname">
            <p className="label-text">Nom</p>
            <input
              required
              className="input"
              id="lastname"
              name="lastname"
            />
          </label>
          <div className="input">
            <label className="label" htmlFor="subject">
              <p className="label-text">Objet</p>
              <input
                required
                className="input"
                id="subject"
                name="subject"
              />
            </label>
          </div>
          <div className="input">
            <label className="label" htmlFor="email">
              <p className="label-text">Email</p>
              <input
                required
                className="input"
                id="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
            </label>
          </div>
          <div className="input">
            <label className="label" htmlFor="message">
              <p className="label-text">Message</p>
              <textarea
                required
                className="input"
                cols="30"
                rows="5"
                id="message"
                name="message"
              />
            </label>
          </div>
          <button className="submit_button" type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
            Envoyer
          </button>
        </fieldset>
      </form>
    </section>
  )
}

export default Form
