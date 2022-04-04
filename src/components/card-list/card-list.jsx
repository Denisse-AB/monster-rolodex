// Component to render monsters object and
// send then to the card component as a prop
import {Card} from '../card/card';

import './card-list.css';

export const CardList = props => (
  <div className="card-list">
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster}/>))
    }
  </div>
);