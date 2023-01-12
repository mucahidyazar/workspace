import React, { PureComponent } from "react";

import Person from "./Person/Person";

class Persons extends PureComponent {
  staticDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps");
    return state;
  }

  //React Update Etmeliyse True donmek zorundayiz. Etmemeliyse False.
  //Tabi hardcoded olarak degilde bir kosula baglamaliyiz bunu. Examp: this.props gibi
  //Tum asagidaki satir yerine PureComponent yaparakda degisiklikleri kontrol edebiliriz.
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log("[Persons.js] shouldComponentUpdate");
  //     if (
  //       nextProps.persons !== this.props.persons ||
  //       nextProps.changed !== this.props.changed ||
  //       nextProps.click !== this.props.click
  //     ) {
  //       return true;
  //     }
  //     return false;
  //   }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  //Buradaki snapshot ile getSnapShotBeforeUpdate den donen return u yakalariz
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  //component kapandiktan sonra calisacaktir.
  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.click(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
