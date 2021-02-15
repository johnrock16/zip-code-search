import { getRequest, resolveFetch } from "./util";

const ZIP_CODE_API='https://viacep.com.br/ws';
const RESULT_FORMAT='/json/'

export const searchPlaceByZIpCode = async(zipCode)=>{
    const url=`${ZIP_CODE_API}/${zipCode}${RESULT_FORMAT}`;
    const resolve= await getRequest(url);
    return await resolveFetch(resolve);
}