import React, { Component } from 'react';
import Input from './Input';
import encode from '../helpers/encode.js';


class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    }
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value })
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactIru", ...this.state })
    })
    .then((res) => console.log(res, 'posted sucessfully!'))
    .catch((error) => console.log('error when posting'));

    e.preventDefault();
  };

  render() {
    return (
      <section className="ph7-l pv5 bg-black">
        <form onSubmit={this.handleSubmit} className="flex flex-wrap justify-between">
          <Input
            width="w-45"
            label="name"
            name="name"
            inputType="input"
            value={this.state.name}
            handleInput={this.handleChange}
            placeholder="Jessica Salmon" />
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

            <div className="flex justify-end w-100">
              <button
                className="bg-white f4 tc w-30 pa3"
                type="submit">
                Submit
              </button>
            </div>
        </form>

      </section>
    );
  }

}

export default Contact;
