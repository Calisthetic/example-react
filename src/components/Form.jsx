import React, { useState } from 'react';
import './Form.css';

function Form() {
    const [countMessage, setCountMessage] = useState(0);
    return(
        <div className="Form__box">
            <div className="Box__title">
                Сообщения {countMessage}
            </div>
            <div className="Box__messages">
                Тут сообщения будут короче
            </div>
            <div className="Box__send">
                <label>
                    Имя
                    <input/>
                </label>
                <label>
                    Сообщение
                    <textarea/>
                </label>
                <button>
                    Добавить
                </button>
            </div>
        </div>
    )
}

export default Form