import React, { Component } from 'react'

export default class extends Component {

    render() {
        let innpm = `npm install --save redux`;
        let inyarn = `yarn add redux`;
        let callredux = `import () from 'redux'`;
        let callredux1 = `const redux = requare('redux');`
        let impstore = `const store = redux.createStore;`;
        let impDispatch = `store.dispatch({ type: 'ACTION_TYPE' })`;
        let impSubcribe = `store.subscribe(() => {
                          console.log('Store Change:', globalStore.getState());
                            });
                        `;
        let impReducer = `const rootReducer = (state = initialState, action) => { // list atau prosedur function dinagian ini}`;
        return (
            <div className="container-fluid">
                <h5 className='card-title'>State Management Dengan Redux</h5>
                <div className="card-text">
                    Redux merupakan sebuah Libarray yang terpisah dari react js, yang sering digunakan untuk Mengolah state atau Management state dan store pada react js <br />
                    <b><br />
                        Configurasi untuk instal package Redux pada react js
                    </b>
                    <p className="p-2">
                        <code className="hljs">
                            `/* Menngunakan NPM Package */`<br />
                            {innpm}<br /><br />
                            `/* Menggunakan Yarn Package */` <br />
                            {inyarn}<br /><br />
                            `/* Import Redux */`<br />
                            {callredux}<br /><br />
                            `/*Import Redux requare*/`<br />
                            {callredux1}
                        </code>
                    </p>

                    <h5 className="font-weight-bold card-title"><br />
                        komponent utama pada redux
                    </h5>
                    <ul>
                        <li><b className="font-weight-bold">STORE</b><br />
                            pemanggilan fungsi STORE
                            <p className="p-2">
                                <code className="hljs">{impstore}</code>
                              Store Merupakan,Tempat menyimpan data atau variabel state atau value secara global
                            </p>
                        </li>
                        <li><b className="font-weight-bold">REDUCER</b><br />
                            <p className="p-2">
                                <code className="hljs">{impReducer}</code>
                            merupakan sebuah tempat menyimpan function yang akan digunakan untuk menggubah data atau value pada STORE
                            </p>
                        </li>
                        <li><b className="font-weight-bold">DISPATCH (Action)</b><br />
                        pemanggilan fungsi Dispatch
                            <p className="p-2">
                                <code className="hljs">{impDispatch}</code>
                            Sebuah fungsi yang digunakan untuk memanggil task-list sebuah function yang berada pada Reducer dengan aturan baku menggunakan huruf Kapital (type : 'ACTION_TYPE'), jadi List Function yang terdapat pada Reducer tidak dapat di eksekusi tanpa melalui perintah DISPATCH
                            </p>
                        </li>
                        <li><b className="font-weight-bold">SUBSCRIPTION</b><br />
                        pemanggilan fungsi Subcription
                            <p className="p-2">
                                <code className="hljs">{impSubcribe}</code>
                            Sebuah fungsi yang berguna untuk memanggil store yang dimiliki, atau fungsi yang berguna untuk mengetahui perubahan apa yang terjadi pada STORE
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
