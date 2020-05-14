const redux = require('redux');
const myStore = redux.createStore;

const initialState = {
    nama: "arief",
    usia: 23
}

//#Reducer
const rootReducer = (state = initialState, action) => {
    // console.log(action); //menampilkan action
    // if (action.type === 'TAMBAH_UMUR') {
    //     return {
    //         //copy state (jika tidak di copy maka state nama akan hilang, ini cara terbaik(...state))
    //         ...state,
    //         usia: state.usia + 1
    //     }
    // }
    // if (action.type === 'UBAH_NAMA') {
    //     return {
    //         //copy state (jika tidak di copy maka state nama akan hilang, ini cara terbaik(...state))
    //         ...state,
    //         nama: action.newNama
    //     }
    // }
    // return state;

    switch (action.type) {
        case 'TAMBAH_UMUR':
            return {
                //copy state(jika tidak di copy maka state nama akan hilang, ini cara terbaik(...state))
                ...state,
                usia: state.usia + 1
            }
        case 'UBAH_NAMA':
            return {
                //copy state (jika tidak di copy maka state nama akan hilang, ini cara terbaik(...state))
                ...state,
                nama: action.newNama
            }
        default:
            return state;
    }
}

//#store
const globalStore = myStore(rootReducer);
// menampilkan nilai state awal
console.log(globalStore.getState());

//#Subcription
globalStore.subscribe(() => {
    console.log('Store Change:', globalStore.getState());
});

//#Dispacth Action
globalStore.dispatch({ type: 'TAMBAH_UMUR' })
globalStore.dispatch({ type: 'UBAH_NAMA', newNama: 'MAULANA SH' })
// menampilkan store yang telah di ubah memaluli dispatch
console.log(globalStore.getState());



