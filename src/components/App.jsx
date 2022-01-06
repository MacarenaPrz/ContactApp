import React from "react";
import Card from "./Card"
import Contacts from "../contacts"
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card name={Contacts[0].name} tel={Contacts[0].phone} img={Contacts[0].imgURL} email={contacts[0].email} />
      <Card name={Contacts[1].name} tel={Contacts[1].phone} img={Contacts[1].imgURL} email={contacts[1].email} />
      <Card name={Contacts[2].name} tel={Contacts[2].phone} img={Contacts[2].imgURL} email={contacts[2].email} />
    </div>
  );
}

export default App;
