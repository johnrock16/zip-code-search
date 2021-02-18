import React, { useState } from 'react';
import MaskedInput from 'react-text-mask';
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
            <MaskedInput
                style={inputStyle}
                type={"text"} 
                onChange={onHandleChange.zipCode}
                mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                placeholder={'01000-000'}
                {...otherInput}
            />
            <button style={{...styles.button,...buttonStyle}} onClick={searchButton} {...otherButton}>Search</button>
        </div>
    );
}

const styles={
    button:{backgroundColor:'black',color:'white',border:'none'}
}

export default TextInputZipCodeSearch;