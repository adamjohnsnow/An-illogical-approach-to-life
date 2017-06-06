import React, {Component} from 'react'

export default class CharacterCreation extends Component {

  handleClick = () => {

  }

  render(){
    var character1;
    var character2;
    var id = 0
    const Characters = [
      character1 = {
        name: "Bob the Builder",
        xp: 0,
        attack: 3,
        defence: 7,
        level: 1
      },
      character2 = {
        name: "Roy the Bus Driver",
        xp: 0,
        attack: 9,
        defence: 1,
        level: 1
      }
    ]

    return(
      <div>
        <h1>Character Creation</h1>
        name
        <h3>{Characters[id].name}</h3>
        attack
        <h3>{Characters[id].attack}</h3>
        defense
        <h3>{Characters[id].defence}</h3>
        level
        <h3>{Characters[id].level}</h3>
        <button onClick={() => this.handleClick()}>
        hello
        </button>
      </div>

    )
  }

}
