import { useState } from "react";

import FormContent from '../app-form-content/app-form-content';
import { TextAccept, TextExp } from "../app-from-text/app-from-text";

import "./app-form-cv.scss";

const FormCv = () => {

    const [validate, setValidate] = useState(false);


    
    return (
        <div className="container">
            <div className={validate ? "from__wrapper accept__mode": "from__wrapper"}>
                <div className="title__page">
                    <h1 className="titel">{validate ? "Ждем тебя!": "Работа твоей мечты"}</h1>
                </div>
                <div className="form__content_holder">
                    <div className="column_item _left">
                        {validate ? <TextAccept /> : <FormContent setValidate={setValidate} />}
                    </div>
                    <div className="column_item _rigth">
                        <div className="head_col">
                            <h2 className="titel_sec">{validate ? "Остались вопросы?": "Наша суперцель"}</h2>
                        </div>
                            {validate ? null : <TextExp/>}
                        <div className="call__back_holder">
                             <a className="link__phone" href={"tel:79264331416"}>+7 (926) 433-14-16</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormCv;