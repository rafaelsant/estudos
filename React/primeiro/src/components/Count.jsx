import React, {  useEffect } from 'react';
import {useCount} from '../context/Count'

function Count() {
    const {count,setCount} = useCount();
    useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser
        document.title = `Você clicou ${count} vezes`;
      });
    return(
        <div>
            <p>This is the counter value: {count}</p>
            <button onClick={()=>setCount(count+1)}>
                Click me!
            </button>
        </div>
    )
}

export default Count;