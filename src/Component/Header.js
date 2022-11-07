import React from 'react';
function Header(){
    const devp ='';
    const title={
        oussama : 'ing1',
        taher : 'ing2',
        sabri : 'tech',
    }
    const info = {
        name:"ahmed",
        nick:"sabri",
    }
    return (
        <div className='navbar bg.black rounded text-red'>
            M.r{`${info.name}${info.nick}`}
            <h2>
                {devp==="Oussama"?title.oussama:title.taher} in company.
            </h2>

            </div>

    )
    
}
export default Header;