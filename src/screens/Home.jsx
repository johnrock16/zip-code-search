import React, { useState } from 'react';
import TextInputZipCodeSearch from '../components/TextInputZipCodeSearch/TextInputZipCodeSearch';

const initialState={
    cep:'',
    bairro:'',
    complemento:'',
    cidade:'',
    logradouro:'',
    uf:'',
}

const Home=()=>{

    const [state,setState] = useState(initialState);

    const {cep,bairro, complemento, cidade, logradouro, uf} = state;

    const handleChange=(key,value)=>{
        setState((pv)=>({...pv,[key]:value}))
    }

    const onHandleChange={
        cep:(e)=>handleChange('cep',e.target.value),
        bairro:(e)=>handleChange('bairro',e.target.value),
        complemento:(e)=>handleChange('complemento',e.target.value),
        cidade:(e)=>handleChange('cidade',e.target.value),
        logradouro:(e)=>handleChange('logradouro',e.target.value),
        uf:(e)=>handleChange('uf',e.target.value),
    }

    const updateByZipCode=(result)=>{
        const {cep,bairro,complemento,localidade:cidade,logradouro,uf} = result;
        setState((pv)=>({...pv,cep,bairro,complemento,cidade,logradouro,uf}))
    }

    return(
        <div style={styles.container}>
            <Field text={'CEP'}><TextInputZipCodeSearch onSearch={updateByZipCode}/></Field>
            <Field text={'UF'}><input type='text' value={uf} placeholder={'SP'} onChange={onHandleChange.uf}/></Field>
            <Field text={'Cidade'}><input type='text' value={cidade} placeholder={'São Paulo'} onChange={onHandleChange.cidade}/></Field>
            <Field text={'Bairro'}><input type='text' value={bairro} placeholder={'Lapa'} onChange={onHandleChange.bairro}/></Field>
            <Field text={'Logradouro'}><input type='text' value={logradouro} placeholder={'Rua ...'} onChange={onHandleChange.logradouro}/></Field>
            <Field text={'Complemento'}><input type='text' value={complemento} onChange={onHandleChange.complemento}/></Field>
        </div>
    );
}

const Field=({text,children,...props})=>(
    <div style={{display:'flex',width:'100%',justifyContent:'center',...props?.divStyle}}>
        <span style={{fontSize:14, padding:10, ...props?.textStyle}}>{text}</span>
        {children}
    </div>
)

const styles={
    container:{display:'flex',flex:1 ,justifyContent:'center',alignItems:'center',flexDirection:'column',padding:20},
}

export default Home;