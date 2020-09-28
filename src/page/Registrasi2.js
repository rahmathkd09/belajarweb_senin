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
		
	}

	ubahState(namaValue,e){
		e.preventDefault()
	// //secara regular
	// 	this.setState({[namaValue]: e.target.value})

	//secara asynicronus
	var tampungData=e.target.value
	this.setState(function(state,props){
		return{
			[namaValue]:tampungData
		}

	})

}


render(){
	return(
		<div align="center">
		<h2>Nama Depan</h2>
		{
			//<button onClick= {(e)=>this.ubahState(e)}>Klik untuk Berubah</button>
		}
		<p>{this.state.valueFirstName} </p>
		<input value={this.state.valueFirstName} onChange={(e)=>this.ubahState("valueFirstName",e)}/>

		<h5>Nama Belakang</h5>
		<p>{this.state.valueLastName}</p>
		<input value={this.state.valueLastName} onChange={(e)=>this.ubahState("valueLastName",e)} />
		<h2>========================</h2>

		<h5>Alamat</h5>
		<p>{this.state.valueAlamat}</p>
		<input value={this.state.valueAlamat} onChange={(e)=>this.ubahState("valueAlamat",e)} />
		<h2>========================</h2>

		<h5>Kode Post</h5>
		<p>{this.state.valueKodePost}</p>
		<input input value={this.state.valueKodePost} onChange={(e)=>this.ubahState("valueKodePost",e)} />
		<h2>========================</h2>
		







		</div>
		)
}


}

export default Registrasi;