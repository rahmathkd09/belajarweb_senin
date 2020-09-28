import React, { Component } from 'react';

class Registrasi extends Component{
	constructor(props){
		super(props)
		this.state={
			judul: 'Contoh Judul',
			contohPerubahan: 'Perubahan judul untuk state',
			valueInput:'',
			valueFirtName:'',
			valueLastName:'',
			valueAlamat:'',
			valueKodePost:''
		}
		this.ubahState=this.ubahState.bind(this)
		this.ubahState2=this.ubahState2.bind(this)
		this.ubahState3=this.ubahState3.bind(this)
		this.ubahState4=this.ubahState4.bind(this)
	}

	ubahState(e){
		e.preventDefault()

// this.setState((state,props)=>({
// 	Judul:'Ubah Melalui Input'
// }))
this.setState({valueInput: e.target.value})

//perubahan state secara regular, tidak melibatkan state lagi, manual saja
    // this.setState({judul:'Merubah Judul secara Reguler'})


   // //perubahan state secara asynchronusn ditulis dengan arrow function, dari state
    //  this.setState((state,props) =>({
   	// judul: 'Merubah Judul Asynchronus secara arrow function 2'
    //  	}))

// perubahan state scara asyncronus dengan cara regular function, dari state, beda penulisan dengan arrow function
// this.setState(function(state,props){
// 	return{
// 		judul: 'Merubah Judul Asynchronus Secara regular function'
// 	}
// })
}

ubahState2(e){
	e.preventDefault()

// this.setState((state,props)=>({
// 	Judul:'Ubah Melalui Input'
// }))
this.setState({valueInput2: e.target.value})

}


ubahState3(e){
	e.preventDefault()

// this.setState((state,props)=>({
// 	Judul:'Ubah Melalui Input'
// }))
this.setState({valueInput3: e.target.value})

}


ubahState4(e){
	e.preventDefault()

// this.setState((state,props)=>({
// 	Judul:'Ubah Melalui Input'
// }))
this.setState({valueInput4: e.target.value})

}






render(){
	return(
		<div align="center">
		<h2>{this.state.judul}</h2>
		{
			//<button onClick= {(e)=>this.ubahState(e)}>Klik untuk Berubah</button>
		}
		<p>{this.state.valueInput} </p>
		<input value={this.state.valueInput} onChange={(e)=>this.ubahState(e)}/>

		<h5>Contoh 2</h5>
		<p>{this.state.valueInput2}</p>
		<input value={this.state.valueInput2} onChange={(e)=>this.ubahState2(e)} />
		<h2>========================</h2>

		<h5>Contoh 3</h5>
		<p>{this.state.valueInput3}</p>
		<input value={this.state.valueInput3} onChange={(e)=>this.ubahState3(e)} />
		<h2>========================</h2>

		<h5>Contoh 4</h5>
		<p>{this.state.valueInput4}</p>
		<input input value={this.state.valueInput4} onChange={(e)=>this.ubahState4(e)} />
		<h2>========================</h2>
		







		</div>
		)
}


}

export default Registrasi;