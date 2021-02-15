import React from 'react';

const Header= ()=>{
    return(
        <div style={{display:'flex',backgroundColor:'black'}}>
            <div style={{display:'flex', height:'15vh',width:'100%',borderBottom:'solid', borderWidth:0.5, flexDirection:'row'}}>
                <div style={{ display:'flex',width:'100%',height:'100%',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                    <span style={{fontSize:24,color:'white'}}>ADDRESS BY ZIP CODE</span>
                </div>
            </div>
        </div>
    )   
}


export default Header;