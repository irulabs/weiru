import React, { Component } from 'react';
import Input from './Input';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    }
  }

  handleInput = (type, value) => {
    switch (type) {
      case "name":
        return this.setState({
          name: value
        })
      case "email":
        return this.setState({
          email: value
        })
      case "message":
        return this.setState({
          message: value
        })
      default:
        return ""
    }
  }

 encode = (data) => {
    console.log('got in the encode')
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  handleChange = (name, value) => {
    this.setState({ [name]: value })
  };

  handleSubmit = (e) => {
    console.log(this.state, 'state') // has the sate
    console.log('in handle submit')
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({ "form-name": "contact", ...this.state })
    })
      .then(() => console.log('posted sucessfully!'))
      .catch((error) => console.log('error when posting'));

      e.preventDefault();
  }

  render() {

    console.log(this.state)
    return (
      <section className="ph7-l pv5 bg-black">
        <form name="contact" className="flex flex-wrap justify-between">
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
              <div
                className="bg-white f4 tc w-30 pa3"
                onClick={(e) => this.handleSubmit(e)}>
                Submit
              </div>
            </div>
        </form>

      </section>
    );
  }

}

export default Contact;
