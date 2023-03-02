import React, { Component } from 'react';
import { Containers } from './Container/Container';
import { Form } from './Form/Form';

// import shortid from 'shortid';
// import ColorPicker from './components/ColorPicker';
// import Counter from './components/Counter';
// import Container from './components/Container';
// import TodoList from './components/TodoList';
// import TodoEditor from './components/TodoEditor';
// import Filter from './components/Filter';
// import Form from './components/Form';

class App extends Component {
  state = {};

  formSubmitHandle = data => {
    console.log(data);
  };

  render() {
    return (
      <Containers>
        <Form onSubmit={this.formSubmitHandle} />
      </Containers>
    );
  }
}
export default App;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// class App extends Component {
//   state = {
//     todos: initialTodos,
//     filter: '',
//   };

//   addTodo = text => {
//     const todo = {
//       id: shortid.generate(),
//       text,
//       completed: false,
//     };

//     this.setState(({ todos }) => ({
//       todos: [todo, ...todos],
//     }));
//   };

//   deleteTodo = todoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== todoId),
//     }));
//   };

//   toggleCompleted = todoId => {
//     // this.setState(prevState => ({
//     //   todos: prevState.todos.map(todo => {
//     //     if (todo.id === todoId) {
//     //       return {
//     //         ...todo,
//     //         completed: !todo.completed,
//     //       };
//     //     }

//     //     return todo;
//     //   }),
//     // }));

//     this.setState(({ todos }) => ({
//       todos: todos.map(todo =>
//         todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//       ),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getVisibleTodos = () => {
//     const { filter, todos } = this.state;
//     const normalizedFilter = filter.toLowerCase();

//     return todos.filter(todo =>
//       todo.text.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   calculateCompletedTodos = () => {
//     const { todos } = this.state;

//     return todos.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0
//     );
//   };

//   render() {
//     const { todos, filter } = this.state;
//     const totalTodoCount = todos.length;
//     const completedTodoCount = this.calculateCompletedTodos();
//     const visibleTodos = this.getVisibleTodos();

//     return (
//       <Container>
//         {/* TODO: вынести в отдельный компонент */}

//         <div>
//           <p>Всего заметок: {totalTodoCount}</p>
//           <p>Выполнено: {completedTodoCount}</p>
//         </div>

//         <TodoEditor onSubmit={this.addTodo} />

//         <Filter value={filter} onChange={this.changeFilter} />

//         <TodoList
//           todos={visibleTodos}
//           onDeleteTodo={this.deleteTodo}
//           onToggleCompleted={this.toggleCompleted}
//         />
//       </Container>
//     );
//   }
// }

// export default App;

// // const colorPickerOptions = [
// //   { label: 'red', color: '#F44336' },
// //   { label: 'green', color: '#4CAF50' },
// //   { label: 'blue', color: '#2196F3' },
// //   { label: 'grey', color: '#607D8B' },
// //   { label: 'pink', color: '#E91E63' },
// //   { label: 'indigo', color: '#3F51B5' },
// // ];

//
//
//
//
//
//
//
//
//
//
//
//
//

// import React from 'react';
// import { LoginForm } from './LoginForm/LoginForm';

// export class App extends React.Component {
//   render() {
//     return <LoginForm />;
//   }
// }

// import { nanoid } from 'nanoid';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

// export class App extends React.Component {
//   state = {
//     contacts: [],
//     name: 'tyjtyj',
//   };

//   initialValues = {
//     contacts: [],
//     name: 'fgsdfg',
//     id: nanoid(),
//     number: 46,
//   };

//   // handleSubmit = (id, name, number) => {
//   //   console.log(id);
//   //   console.log(name);
//   //   console.log(number);
//   // };

//   handleSubmit = (values, actions) => {
//     console.log(values);
//     console.log(actions);
//   };

//   render() {
//     return (
//       <div>
//         <h2>Phonebook</h2>
//         <Formik initialValues={this.initialValues} onSubmit={this.handleSubmit}>
//           <Form autoComplete="off">
//             <label>
//               Name
//               <input
//                 type="text"
//                 name="name"
//                 id={this.loginInputId}
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title=""
//                 required
//               />
//             </label>

//             <label>
//               Namber
//               <input
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//               />
//             </label>

//             <button type="submit">Add contact</button>
//           </Form>
//         </Formik>
//         <h2>Contacts</h2>
//         <ul>
//           <li>Ivan</li>
//         </ul>
//       </div>
//     );
//   }
// }
