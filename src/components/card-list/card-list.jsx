// Component to render monsters object and
// send then to the card component as a prop
import {Card} from '../card/card';

import './card-list.css';

// Implicit return
export const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map(monster => (
      <Card key={monster.id} monster={monster}/>))
    }
  </div>
);
