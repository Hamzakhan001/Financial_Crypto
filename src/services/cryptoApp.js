import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "8fed2c0c27msh51733f272747187p141c9djsnb1481659e8a3",
};
const baseUrl = "https://coinranking1.p.rapidapi.com/stats";

const createReq=(url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi=createApi({
    reducerpath: 'cryptoApi', 
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({ 
        getCrypto:builder.query({
            query:()=>createReq('/coins')
            

        })

    })
})

export const {
    useGetCryptoQuery,
}=cryptoApi


// var options = {
//   method: "GET",
//   url: ,
//   headers: {
//     "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//     "x-rapidapi-key": "8fed2c0c27msh51733f272747187p141c9djsnb1481659e8a3",
//   },
// };
