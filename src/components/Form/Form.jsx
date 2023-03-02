import { Containers } from 'components/Container/Container';
import { Component } from 'react';
import shortid from 'shortid';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  // hendleNameChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ name: event.currentTarget.value });
  // };

  // hendleNamberChange = event => {
  //   console.log(event.currentTarget.value);
  //   this.setState({ number: event.currentTarget.value });
  // };

  hendleChange = event => {
    // console.log(event.currentTarget.value);
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  render() {
    return (
      <Containers>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title=""
              value={this.state.name}
              onChange={this.hendleChange}
              id={this.nameInputId}
              required
            />
          </label>
          <label htmlFor={this.numberInputId}>
            Namber
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={this.state.number}
              onChange={this.hendleChange}
              id={this.numberInputId}
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </Containers>
    );
  }
}
