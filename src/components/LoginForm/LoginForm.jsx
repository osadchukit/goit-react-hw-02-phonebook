// import React from 'react';
// import { nanoid } from 'nanoid';
// import { Formik, Form, Field, ErrorMessage } from 'formik';

// const initialValues = {
//   //   contacts: [],
//   name: '',
//   id: nanoid(),
//   number: '',
// };

// export const LoginForm = () => {
//   //   const id = nanoid();

//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);
//     resetForm();
//   };
//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         <Form autoComplete="off">
//           <label htmlFor="name">
//             Name
//             <Field
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title=""
//               required
//             />
//           </label>
//           <label htmlFor="number">
//             Namber
//             <Field
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <button type="submit">Add contact</button>
//         </Form>
//       </Formik>
//       <h2>Contacts</h2>
//       <ul>
//         <li>Ivan</li>
//       </ul>
//     </div>
//   );
// };
