// getOneDocument()
// read one
import { getDataFromDoc } from "./utils.js"
async function getOneDocument(){
    
    //promise

    // firebase.firestore().collection('users').doc('V5XT9BLiW1H7u2npLxf0').get().then((res) =>{
    // console.log(res)
    // })
    //async await
    const res = await firebase.firestore().collection('users').doc('V5XT9BLiW1H7u2npLxf0').get()
    const user = res.data()
    user.id = res.id
    console.log(user)
    console.log(res.data())
}
getOneDocument()

//get many documents
async function getManyDocument(){
    const res = await firebase.firestore().collection('users').get()
    // console.log(res)
    const user = getDataFromDoc(res.docs[0])
    // console.log(res.docs[0].data())
    console.log(user)
}

getManyDocument()

async function getManyDocument(){
    const res = await firebase.firestore().collection('users').get()
    const user = getDataFromDoc(res)
    console.log(user)
    
}