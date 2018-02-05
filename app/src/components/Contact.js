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
    }
  }

  render() {

    console.log(this.state)
    return (
      <section className="ph7-l pv5 bg-black">
        <form className="flex flex-wrap justify-between">
          <Input
            width="w-45"
            label="name"
            inputType="input"
            value={this.state.name}
            handleInput={this.handleInput}
            placeholder="Jessica Salmon" />
          <Input
              width="w-45"
              label="email"
              inputType="input"
              value={this.state.email}
              handleInput={this.handleInput}
              placeholder="youremail@here.com" />
          <Input
            width="w-100"
            label="message"
            inputType="textarea"
            value={this.state.message}
            handleInput={this.handleInput}
            placeholder="let us know how we can help!" />
            <div className="flex justify-end w-100">
              <div
                className="bg-white f4 tc w-30 pa3"
                onClick={ () => { console.log('submitted')}}>
                Submit
              </div>
            </div>
        </form>

      </section>
    );
  }

}

export default Contact;
