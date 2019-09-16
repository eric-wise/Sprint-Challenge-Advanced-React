import React from 'react';

function PlayerCard(props) {    

    return(
        <div className='UserCard'>
            <h1> Name: { props.player.name } </h1>
            <h2> Country: { props.player.country } </h2>
            <p> Searches: {props.player.searches}</p>
        </div>       
        
    )

}

export default PlayerCard;