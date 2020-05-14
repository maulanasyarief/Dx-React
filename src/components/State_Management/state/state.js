import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataProfil: {
                nama: 'Arief',
                usia: '23'
            },
            tampungdata: {
                nama: '',
                usia: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        // console.log(e.target.name)
        let copystate = { ...this.state.tampungdata };
        copystate[e.target.name] = e.target.value;
        // console.log('init td:', this.state.tampungdata)

        this.setState({
            tampungdata: copystate
        },// console.log('new td:', this.state.tampungdata)
        )

    }

    handleSubmit(e) {
        // alert('state di ubah')
        let getTampungData = { ...this.state.tampungdata }
        this.setState({
            dataProfil: getTampungData
        })
    }



    render() {
        let init = "this.state={...}"
        let initNew = `this.setState({...})`
        return (
            <div className="container-fluid">
                <h5 className="card-title">Basic State Pada RactJS </h5>
                <br />
                <b>Deklarasi Awal State:</b>
                <pre className="text-white bg-dark p-2">
                    <xmp>
                        {init}
                    </xmp>
                </pre>
                <b>Mengganti nilai State :</b>
                <pre className="text-white bg-dark p-2">
                    <xmp>
                        {initNew}
                    </xmp>
                </pre>

                <h5 className="card-title">Example </h5>
                <form className="col-md-5">
                    <div className="form-group">
                        <label>Nama saya : {this.state.dataProfil.nama}</label><br />
                        <label>Usia saya : {this.state.dataProfil.usia}</label>
                    </div>
                    <div className="form-group">
                        <label >Nama</label>
                        <input type="text" name="nama" className="form-control" onChange={this.handleChange} placeholder="Nama Anda" />
                    </div>
                    <div className="form-group">
                        <label >Usia</label>
                        <input type="text" name="usia" className="form-control" onChange={this.handleChange} placeholder="Masukan Usia Anda" />
                    </div>
                    <a href="#" onClick={this.handleSubmit} className="btn btn-primary">Submit</a>
                </form>

            </div>
        );
    }
}

