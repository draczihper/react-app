import { useState } from 'react'

export default function Person() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe the dough")

  const fullName = firstName + " " + lastName;

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  }

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  }


  // const handleIncreaseAge = () => {
  //   console.log("in handleIncreaseAge (before setPerson call): ", person);
  //   setPerson({ ...person, age: person.age + 1 });
  //   // we've called setPerson, surely person has updated?
  //   console.log("in handleIncreaseAge (after setPerson call): ", person);
  // };

  // this console.log runs every time the component renders
  // what do you think this will print?
 console.log("during render: ", person);

  return (
    <>
    <label htmlFor="firstName">First Name</label>
      <input type="text" id='firstName' name='firstName' onChange={handleFirstNameChange}/>
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id='firstName' name='firstName' onChange={handleLastNameChange}/>
      <h1>{fullName}</h1>

      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button> 
    </>
  );
}
