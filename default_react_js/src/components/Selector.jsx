import { useState, useEffect } from 'react';

function Selector() {

    const [selected, setSelected] = useState('0')
    const [valueSelected, setValueSelected] = useState('');

    const choice = (event) => {
        setSelected(event.target.value);
    }

    useEffect(() => {
        switch (selected) {
            case '0':
                setValueSelected('Java');
                break;
            case '1':
                setValueSelected('Python');
                break;
            case '2':
                setValueSelected('JavaScript');
                break;
            default:
                setValueSelected('unknown');
        }
    }, [selected]);
    

    return (
        <div className="selector">
            <label htmlFor="selector">Khóa học:</label>
            <select id="selector" value={selected} onChange={choice}>
                <option value="0">Java</option>
                <option value="1">Python</option>
                <option value="2">JavaScript</option>
            </select>   
            <h2>Selected Language: {valueSelected}</h2>
        </div>
    )
}

export default Selector;