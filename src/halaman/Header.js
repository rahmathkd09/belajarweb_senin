import 	React from 'react';
// const Header=(props) =>{
// 	return(
// <h2>{props.text}</h2>
// 		)
// }

function Header(props){
    return(
    	<div>
        <h2>{props.text}</h2>
        <p>{props.ket}</p>
        </div>
    )
}

export default Header;
