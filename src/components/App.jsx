import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card-container">
        <Card
          name={contacts[0].name}
          number={contacts[0].number}
          email={contacts[0].email}
          img={contacts[0].imgURL}
        />
        <Card
          name={contacts[1].name}
          number={contacts[1].number}
          email={contacts[1].email}
          img={contacts[1].imgURL}
        />
        <Card
          name={contacts[2].name}
          number={contacts[2].number}
          email={contacts[2].email}
          img={contacts[2].imgURL}
        />
      </div>
    </div>
  );
}

export default App;
