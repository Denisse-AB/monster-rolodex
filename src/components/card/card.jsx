// The actual card
import './card.css';

export const Card = props => {
  const { name, email, id } = props.monster;

  return (
    <div className='card-container' key={id}>
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
};
