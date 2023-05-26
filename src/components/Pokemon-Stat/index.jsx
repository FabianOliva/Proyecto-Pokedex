import './style.css'
export const PokemonStat = ({name,value}) => {
	const newValue = value.toString().padStart(3,'0');
	const percentage = value/255*100;
  return (
    <div className="pokemon-card-stats-item">
      <span className="pokemon-card-stat-name">{name}</span>
      <span className="pokemon-card-stat-value">{newValue}</span>
      <div className="pokemon-card-stat-bar">
        <div className="pokemon-card-stat-bar-progress" style={{width:`${percentage}%`}}></div>
      </div>
    </div>
  );
};
