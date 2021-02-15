export const getRequest=(url,{params={},headers={}}={})=>{
    return fetch(url+queryString(params),{
        method:'GET',
        headers:{
            'content-type':'application/json',
            'accept':'application/json',
            ...headers
        }
    }).catch((e)=>{
        console.log(e);
    })
}

export const resolveFetch= async(resolve,format='json')=>{
    if(resolve.status===200){
        return {result:await resolve[format]()};
    }
    return {status:resolve.status, error:'error on resolve'}
}

export const queryString =(params)=> Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
}).join('&');

export const validateCEP=(cep)=>{
   const regex=/[0-9]{5}-[\d]{3}/g;
   return regex.test(cep); 
}