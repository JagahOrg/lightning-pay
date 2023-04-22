
// axios
import axios from 'axios';
// setting dispatch 
import { setBills, setRewards } from '../store/user/user.reducer';
import {  alert, close } from '../store/alert/alert.modal.reducer';


// base URL
const baseUrl : string = `https://${process.env.REACT_APP_API_URL}.herokuapp.com`

// get rewards
export const getRewards = async (walletAddress : string| null, dispatch: any, Navigate : any) => {
     axios.get(`${baseUrl}/user/${walletAddress}`).
     then((response) => {
        if(response) {
            dispatch(setRewards(response.data))
            Navigate('/transactions');
        }   
     })    
}

// get bills
 export const getBills = async (countryCode : any, category : any, Navigate : any, dispatch : any) => {
    console.log(countryCode, category)
    dispatch(alert('Getting Bills ⌛️'));
    setTimeout(() => {
       dispatch(close(""));
     }, 1200);

     axios.post(`${baseUrl}/bill/category`, {
        country : countryCode,
        category : category
     }).then((response)=> {
        console.log(response.data?.data)
        if(response) {
            dispatch(setBills(response?.data?.data))
            Navigate('/payment' , {state : category})
        }
     })
 }

 //  rewards;
 export const userRewards = async (walletAddress :string |null, dispatch : any) => {
    axios.get(`${baseUrl}/user/${walletAddress}`)
    .then((response) =>{
         console.log(response.data);
        dispatch(setRewards(response?.data))
        
    })
 }

 // for electricity and cables
 export const getCustomerName = (customer : any, billerCode : any, name : any, item : any) => {
    console.log(customer, billerCode, item)
      axios.post(`${baseUrl}/bill/validate`, {
        item_code : item,
        code : billerCode,
        customer
      }). then((response) => {
             name(response.data.data.data.name)
      })
 }