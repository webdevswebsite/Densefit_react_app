// import { CurrencyState } from '../context/Context'
// let key = process.env.REACT_APP_API_KEY
let key = 'bKOwUlmw2tXrEhTMCZIGi7K3KvDZiv5J'
// export default = () => {
//     const {
//         state: { currency }
//     } = CurrencyState();

//     return currency == 'USD' ? '$' : '₦'
// }
var myHeaders = new Headers();
myHeaders.append("apikey", 'bKOwUlmw2tXrEhTMCZIGi7K3KvDZiv5J')

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
};
export const Converter =  async(amount) => {
    let res = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=NGN&from=USD&amount=${amount}`, requestOptions)
        .then(response =>
            // {
            // if (response.status === 200) {
            response.json()
            //   } else {
            //     throw new Error('Something went wrong on API server!');
            //   }
            // }
        )
        .then((data) => { 
            console.log(data.result, 'data');
            res = data 
        })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    return  res
}
