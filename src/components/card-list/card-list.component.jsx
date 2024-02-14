import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";

class CardList extends Component {
   render() {
      const {monsters} = this.props;

      return (
         <div className="card-list">
            {
               monsters.map(monster => {
                  const {name, id, email} = monster;

                  return (
                     <Card className="card-container" id={id} email={email} name={name}></Card>
                  );
               })
            }
         </div>
      );
   }
}

export default CardList;