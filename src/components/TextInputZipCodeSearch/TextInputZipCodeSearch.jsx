import React, { useState } from 'react';
import { validateCEP } from '../../js/util';
import { searchPlaceByZIpCode } from '../../js/ZipCodeAPI';

const initialState={
    zipCode:'',
}

export const TextInputZipCodeSearch=({onSearch,input:{inputStyle,...otherInput}={},button:{buttonStyle,...otherButton}={}})=>{
    
    const [state,setState] = useState(initialState);

    const {zipCode} = state;

    const handleChange=(key,value)=>{
        setState((pv)=>({...pv,[key]:value}))
    }

    const onHandleChange={
        zipCode:(e)=>handleChange('zipCode',e.target.value)
    }

    const searchButton=()=>{
        if(validateCEP(zipCode)){
            searchPlaceByZIpCode(zipCode).then((searchedPlaces)=>{
                if(searchedPlaces?.result){
                    onSearch(searchedPlaces.result);
                }
            });
            return;
        }
        alert('CEP INVALIDO');
    }

    return(
        <div style={{display:'flex'}}>
            <input style={inputStyle} type={"text"} onChange={onHandleChange.zipCode} {...otherInput}/>
            <button style={{...styles.button,...buttonStyle}} onClick={searchButton} {...otherButton}>Search</button>
        </div>
    );
}

const styles={
    button:{backgroundColor:'black',color:'white',border:'none'}
}

export default TextInputZipCodeSearch;