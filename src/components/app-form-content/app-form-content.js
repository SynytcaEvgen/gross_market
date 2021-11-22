import { useState, useRef} from "react";

import DatePicker from "react-datepicker";
import {registerLocale} from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import NumberFormat from 'react-number-format';

import FileUpload from '../app-upload-file/app-upload-file';
import SelectArea from '../app-select-area/app-select-area';
import PostResourse from '../../services/post-data';
import LoadingNow from "../app-loading/app-loading";

import captcha from './captcha.png';

import "react-datepicker/dist/react-datepicker.css";

registerLocale('ru', ru);

const reg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const FormContent = ({setValidate}) => {

    const [startDate, setStartDate] = useState(new Date("2010/01/01"));
    const [selectState, setSelectState] = useState(false);
    const [valDate, setValDate] = useState(true);
    const [valName, setValName] = useState(false);
    const [valNumb, setValNumb] = useState(false);
    const [checkNumb, setCheckNumb] = useState(true);
    const [emailVal, setEmailVal] = useState(true);
    const [emailValArr, setEmailValArr] = useState(false);
    const [valCheck, setValCheck] = useState(false);
    const [fileUploade, setFileUploade] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selcetId, setSelcetId] = useState('');
    const [loading, setLoading] = useState(false);

    const postThisForm = new PostResourse();

    const form = useRef(null)
   
    const onCheackValidation = () => {
        // setValidate(true);
        // window.scrollTo(0, 0);
    }
    const checkChange = (e) => {
        setSelectState(selectState => selectState = true);
        setSelcetId(e.value);
    }
    const onValName = (e) => {
        e.target.value = e.target.value.replace(/\d/g, "");
        e.target.value = e.target.value.replace(/[.*_~`+;₴$₽'":%#@!*?^$-=<>№{}()|[\]\\]/g, "");
        if (e.target.value.length > 0) {
            setValName(valName => valName = true);
        } else {
            setValName(valName => valName = false);
        }
    }
    const onSetDate = (date, e) => {
        setStartDate(date);
        if (e.target.value === undefined) {
            setValDate(valDate => valDate = true);
        } else {
            setValDate(valDate => valDate = false);
        }
    }
    const onValNumber = (value) => {
        setPhoneNumber(value.formattedValue);
        if (value.value.length < 10) {
            setValNumb(valNumb => valNumb = false);
            setCheckNumb(checkNumb => checkNumb = false);
        } else {
            setValNumb(valNumb => valNumb = true);
            setCheckNumb(checkNumb => checkNumb = true);
        }
    }
    const onEmailVal = (e) => {
        if (!reg.test(e.target.value) && e.target.value) {
            setEmailVal(emailVal => emailVal = false);
            setEmailValArr(emailValArr => emailValArr = false);
        } else {
            setEmailVal(emailVal => emailVal = true);
            setEmailValArr(emailValArr => emailValArr = true);
        }
    }
    const onValCheckBox = (e) => {
        if (e.target.checked) {
            setValCheck(valCheck => valCheck = true);
            
        } else {
            setValCheck(valCheck => valCheck = false);
            
        }
    }
    const onGetFile = (arry) => {
          setFileUploade(arry)
    }
    const onSubmitForm = (e) => {
        e.preventDefault();
        let data = new FormData(form.current);
        data.append('vacancy_id', selcetId);
        data.append("birthday", startDate.getDate().toString().padStart(2, "0") + '.' + (startDate.getMonth() + 1).toString().padStart(2, "0") + '.' + startDate.getFullYear());
        data.append('phone', phoneNumber);
        data.append('resume_file', fileUploade === undefined ? '' : fileUploade);
        setLoading(loading => loading = true)
        postThisForm.sendToForm(data)
            .then(data => {
                if (data.success) {
                    setLoading(loading => loading = false)
                    setValidate(true);
                    window.scrollTo(0, 0);
                } else {
                    alert(`'Упс... что то пошло не так - ${data.error}`)
                    setLoading(loading => loading = false)
                }
                
            }).catch(() => {
                alert('Упс... что то пошло не так попробуйде еще раз')
            }).finally(() => {
                
            });
    }

    return (
        
        <form action="/" ref={form} className="send__form" onSubmit={onSubmitForm}>
            <div className="input_wrapper select_style">
                <label htmlFor="job" className={ selectState ? "input_lable valid": "input_lable" }>Вакансия *</label>
                <SelectArea change={checkChange} name="vacancy_id"/>
            </div>
            <div className="input_wrapper">
                <label htmlFor="job" className={valName ? "input_lable valid" : "input_lable" }>ФИО *</label>
                <input type="text" className="text__input" name="fio" onChange={onValName}/>
            </div>
            <div className="to__column">
                <div className="input_wrapper">
                    <label className={valDate ? "input_lable valid" : "input_lable" }>Дата рождения *</label>
                    <DatePicker
                        selected={startDate}
                        onChange={onSetDate}
                        locale="ru"
                        dateFormat="dd.MM.yyyy"
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        className="text__input"
                    />
                </div>
                <div className="input_wrapper">
                    <div className="input_lable valid">Пол</div>
                    <div className="input__radio_container">
                        <div className="input__radio_btn">
                            <input type="radio" id="male" name="gender" value="мужской" defaultChecked/>
                            <label htmlFor="male" className="radio_lable" >мужской</label>
                        </div>
                        <div className="input__radio_btn">
                            <input type="radio" id="female" name="gender" value="женский"/>
                            <label htmlFor="female" className="radio_lable" >женский</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="to__column">
                <div className={checkNumb ? "input_wrapper" : "input_wrapper error__input not_full" }>
                    <label className={valNumb ? "input_lable valid" : "input_lable" }>Контактый телефон *</label>
                    <NumberFormat onValueChange={onValNumber} className="text__input" format="+7 (###) ###-####" allowEmptyFormatting mask="_" />
                </div>
                <div className={emailVal ? "input_wrapper" : "input_wrapper error__input"}>
                    <label className={emailValArr ? "input_lable valid" : "input_lable"}>Электронная почта</label>
                    <input type="email" className="text__input" name="email" onChange={onEmailVal}/>
                </div>
            </div>
            <div className="input_wrapper _text_area">
                <label className="input_lable">Резюме</label>
                <textarea className="text__input text_area" name="resume_text"></textarea>
            </div>
            <div className="input_wrapper">
                <FileUpload onGetFile={onGetFile}/>
            </div>
            <div className="to__column _captcha">
                <div className="input_wrapper">
                    <span className="input_lable">Капча</span>
                    <div className="img_wrapper">
                        <img src={captcha} alt="капча" />
                    </div>
                </div>
                <div className="text__from_val">
                    <p className="text">* поля для обязательного заполнения</p>
                </div>
            </div>
            <div className="input_wrapper _checkbox">
                <input id="check_it" type="checkbox" name="agremment" className="check_input" onChange={onValCheckBox}/>
                <label htmlFor="check_it" className="checkbox_label">я подтверждаю согласие на обработку персональныхданных и принимаю условия рассмотрения обращений *</label>
            </div>
            <div className="input_wrapper">
                <input type="submit" value="отправить" className={selectState && valDate && valName && valNumb && valCheck && emailVal ? "form_submit_btn from__submited" : "form_submit_btn"} onClick={onCheackValidation}/>
            </div>
            <div className={loading ? "loading_process active" : "loading_process"}>
                {loading ? <LoadingNow/> : null}
            </div>
        </form>
    )
}

export default FormContent;