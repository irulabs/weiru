import React, { Component } from 'react';
import Input from './Input';
import encode from '../helpers/encode.js';
import validator from 'email-validator';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      emailError: false,
      isSubmitted: false
    }
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value })
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, email, message, emailError } = this.state;
    const isValidEmail = validator.validate(email);

      if (isValidEmail) {
        if (emailError) {
          this.setState({
            emailError: false
          })
        }

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "contactIru",
            "name": name,
            "email": email,
            "message": message
          })
        })
        .then((res) => {
          console.log(res, 'posted sucessfully!')
          this.setState({
            isSubmitted: true
          })
        })
        .catch((error) => console.log('error when posting'));

      }
      else {
        this.setState({
          emailError: true
        })
      }
  };

  render() {
    console.log(this.state.emailError, 'error')
    console.log(this.state.isSubmitted, 'isSubmitted')
    return (
      <section className="ph4 ph6-m ph7-l pv5 bg-black">
      { !this.state.isSubmitted &&
          <form onSubmit={this.handleSubmit} className="flex flex-wrap justify-between">
            <Input
              width="w-45"
              label="name"
              name="name"
              inputType="input"
              value={this.state.name}
              handleInput={this.handleChange}
              placeholder="your name" />
            <Input
              width="w-45"
              label="email"
              name="email"
              inputType="input"
              value={this.state.email}
              handleInput={this.handleChange}
              placeholder="youremail@here.com" />
            <Input
              width="w-100"
              label="message"
              name="message"
              inputType="textarea"
              value={this.state.message}
              handleInput={this.handleChange}
              placeholder="let us know how we can help!" />

            <div className="flex flex-column items-end w-100">
              { this.state.emailError &&
                <div className="white">Please enter a valid email</div>
              }
              <button
                className="bg-white f4 tc w-30 pa3 bn pointer outline-0"
                type="submit">
                  Submit
              </button>
            </div>
          </form>
      }
      { this.state.isSubmitted &&
        <div className="tc white pv6">Thanks for your message, we will be in touch soon.</div>
      }

      </section>
    );
  }

}

export default Contact;
