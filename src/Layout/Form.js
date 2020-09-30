import React, {useState} from "react";
import axios from "axios";
import Messages from './Messages';

const Form = () => {
    const [mailSent, setmailSent] = useState(false);
    const [error, setError] = useState({});
    const [formData, setFormData] = useState({});

    const years = [];
    for (let i = (new Date().getFullYear() - 5); i >= (new Date().getFullYear() - 14); i--) {
        years.push(<option value={i} key={i}>{i}</option>);
    }

    const months = [];
    for (let i = 1; i <= 12; i++) {
        months.push(<option value={i} key={i}>{i}</option>);
    }

    const days = [];
    for (let i = 1; i <= 31; i++) {
        days.push(<option value={i} key={i}>{i}</option>)
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        axios({
            method: "post",
            url: "https://sww.tf/post/",
            headers: { "content-type": "application/json" },
            data: formData
        })
        .then(result => {
            setmailSent(true);
            if (result.data.sent) {
                setError({'sent': true});
            } else {
                if (result.data.message == 'Not all required fields are filled') {
                    setError({'sent': false, 'message': 'Je hebt niet alle verplichte velden ingevuld'});
                }
                else if (result.data.message == 'E-mail is not valid') {
                    setError({'sent': false, 'message': 'Je e-mailadres is niet geldig'});
                }
                else if (result.data.message == 'An unknown error has occurred while sending the e-mail') {
                    setError({'sent': false, 'message': 'Oeps, er is iets fout gegaan met het verzenden van de e-mail'});
                }
                else {
                    setError({'sent': false, 'message': result.data.message});
                }

                result.data.errors.map((error) => {
                    document.getElementById(error).style.boxShadow = 'inset 2px 2px 12px 1px rgba(255,0,0,0.8)';
                });
            }
        })
        .catch(error => setError( error.message ));
    };

    const handleChange = (e, field) => {
        let value = e.target.value;
        setFormData({
            ...formData,
            [field]: value,
        });
    };
  
  	return(
	  	<form action="#">
            <label htmlFor="naam_a">Naam</label>
            <input type="text" name="naam[]" id="naam_a" onChange={e => handleChange(e, 'naam_a')} />
            <input type="text" name="naam[]" id="naam_b" onChange={e => handleChange(e, 'naam_b')} /><br />

            <label htmlFor="adres_a">Adres</label>
            <input type="text" name="adres[]" id="adres_a" onChange={e => handleChange(e, 'adres_a')} />
            <input type="text" name="adres[]" id="adres_b" onChange={e => handleChange(e, 'adres_b')} /><br />

            <label htmlFor="postcode_a">Postcode</label>
            <input type="text" name="postcode[]" id="postcode_a" onChange={e => handleChange(e, 'postcode_a')} />
            <input type="text" name="postcode[]" id="postcode_b" onChange={e => handleChange(e, 'postcode_b')} /><br />

            <label htmlFor="woonplaats">Woonplaats</label>
            <input type="text" name="woonplaats" id="woonplaats" onChange={e => handleChange(e, 'woonplaats')} /><br />

            <label htmlFor="leeftijd_a">Geboortedatum</label>
            <select name="leeftijd[]" id="leeftijd_a" onChange={e => handleChange(e, 'leeftijd_a')}>
                <option>Dag</option>
                {days}
            </select>
            <select name="leeftijd[]" id="leeftijd_b" onChange={e => handleChange(e, 'leeftijd_b')}>
                <option>Maand</option>
                {months}
            </select>
            <select name="leeftijd[]" id="leeftijd_c" onChange={e => handleChange(e, 'leeftijd_c')}>
                <option>Jaar</option>
                {years}
            </select><br />

            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" onChange={e => handleChange(e, 'email')} /><br />

            <label htmlFor="telefoon_a">Telefoon</label>
            +31 <input type="text" name="telefoon[]" id="telefoon_a" onChange={e => handleChange(e, 'telefoon_a')} />
            <input type="text" name="telefoon[]" id="telefoon_b" onChange={e => handleChange(e, 'telefoon_b')} /><br />

            <label htmlFor="leerdoel">Leerdoel</label>
            <select name="leerdoel" id="leerdoel" onChange={e => handleChange(e, 'leerdoel')}>
                <option>Selecteer...</option>
                <option value="Zeggen wat je denkt en voelt">Zeggen wat je denkt en voelt</option>
                <option value="Sterk staan">Sterk staan</option>
                <option value="Solidariteit">Solidariteit</option>
                <option value="Assertiviteit">Assertiviteit</option>
                <option value="Weerbaar voor de brugklas">Weerbaar voor de brugklas</option>
                <option value="Meer zelfvertrouwen">Meer zelfvertrouwen</option>
                <option value="Meer zelfbeheersing">Meer zelfbeheersing</option>
                <option value="Meer zelfreflectie">Meer zelfreflectie</option>
                <option value="Grenzen aangeven">Grenzen aangeven</option>
                <option value="Grenzen aanvoelen">Grenzen aanvoelen</option>
                <option value="Zelfverdediging">Zelfverdediging</option>
            </select><br />

            <label htmlFor="vragen">Vragen / Opmerkingen</label>
            <textarea name="vragen" id="vragen" onChange={e => handleChange(e, 'vragen')}></textarea><br />
            
            <input type="submit" onClick={e => handleFormSubmit(e)} value="Verstuur" />
            
            {mailSent && error.sent && <Messages type="success" message="Aanmelding verzonden!"/>}
            {mailSent && !error.sent && <Messages type="error" message={error.message} />}
        </form>
	);
}

export default Form;