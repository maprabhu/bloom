import React, {useState} from 'react';
import './screenOne.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

function ScreenOne() {
    const inputs = [["Male", "M"], ["Female", "F"], ["Other", "O"]];
    const [answer, setanswer] = useState();
    const radioChange = (e) => {
        if(e.currentTarget.value === 'sachine'){
            setanswer(true);
        }
            setanswer(false);
    };

    const ans = (e) => {
        alert(e.currentTarget.value);
    }

    return (
        <>
            <div className="header">
                <div className="headContainer">
                    <span>60px</span>
                </div>
            </div>
            <div className="container">
                <NavLink to="/" >Go Back Home</NavLink>
                <p>Who score 100 century in cricket history? <span>{answer === true ? 'correct' : answer === false ? 'wrong' : 'choose any one'}</span> </p>
                <input type="radio" value="sachine" name="gender" onChange={radioChange} /> Sachine
                <input type="radio" value="virat" name="gender" onChange={radioChange} /> Virat

                {
                    inputs.map(([text, value], i) => (
                    <div key={ i }>
                        <input type="radio"
                        onChange={ ans } 
                        value={ value } /> 
                            { text }
                        </div>
                    ))
                }

            </div>
            <div className="footer">
                <div className="fLeft">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </div>
                <div className="fRight">
                    <FontAwesomeIcon icon={faChevronRight} />
                </div>
            </div>
        </>
    );
}

export default ScreenOne;
