import React, { useState } from 'react'
import Image from './Image';
import Text from './Text';

const Life = () => {
    const [showComp, setShowComp] = useState(true)
    return (
        <div className="App" style={{ margin: "50px", textAlign: "center" }}>
            <button onClick={() => setShowComp(true)}>ShowImage</button>&nbsp;&nbsp;&nbsp;
            <button onClick={() => setShowComp(false)}>ShowText</button>
            {
                showComp ? <Image /> : <Text />
            }


        </div>
    );
}

export default Life