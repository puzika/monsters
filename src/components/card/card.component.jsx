import { Component } from "react";
import "./card.styles.css";


class Card extends Component {
   render() {
      const {className, id, name, email} = this.props;

      return (
         <div key={id} className={className}>
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
         </div>
      );
   }
}

export default Card;