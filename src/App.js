import React from 'react';
import Messages from './Layout/Messages';
import './App.scss';

const App = () => {
	const birthday = '1986-03-01';

	function calcAge(dateString) {
	  	var birthday = +new Date(dateString);
	  	return ~~((Date.now() - birthday) / (31557600000));
	}

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

  	return (
		<>
		  	<header>
				<img src="/logo.png" alt="logo" />
				<h1>Weerbaar Worden</h1>
				<p>Rots &amp; Watertraining voor jongens en meisjes</p>
				<menu>
					<li class="current"><a href="#welkom">Welkom</a></li>
					<li><a href="#rots_en_water">Rots &amp; Water</a></li>
					<li><a href="#training">Training</a></li>
					<li><a href="#aanmelden">Meld je aan</a></li>
				</menu>
			</header>
			<div>
				<section id="welkom">
					<p>
						Welkom op de website van Weerbaar Worden.<br />Weerbaar Worden is een Rots- en Waterprogramma voor kinderen. Hier vind je alles wat je moet weten.
					</p>
				</section>
				<section id="rots_en_water">
					<h2>Wat is Rots &amp; Water?</h2>
					<p>
						Rots &amp; Water, een psychofysieke training voor jongens en meisjes voor basisonderwijs en voortgezet onderwijs, jeugdhulpverlening, jeugddetentie en GGZ.
					</p>
					<p>
						Rots &amp; Water is een puur Nederlands programma, ontwikkeld door Freerk Ykema, dat momenteel wereldwijd wordt ingezet in de begeleiding van jongens en meisjes. Het Rots &amp; Water programma kan worden beschouwd als een weerbaarheidsprogramma, maar dan &eacute;&eacute;n dat zich onderscheidt van andere programma's door zijn meervoudige doelstelling en het bredere pedagogische perspectief waarbinnen de training van weerbaarheid samen gaat met de ontwikkeling van positieve sociale vaardigheden. Weerbaarheid en solidariteit, rots en water, worden in balans gepresenteerd en getraind. Anno 2010 zijn ruim 30.000 trainers, verspreid over de gehele wereld getraind.
					</p>
					<p>
						Rots &amp; Water bestaat uit een basisprogramma, dat geschikt is voor leerlingen in het primair onderwijs (en ouder) en een vervolgprogramma dat op oudere leeftijdgroepen (14 jaar en ouder) is gericht. Rots en Water heeft als doel het verbeteren van zelfbeheersing, zelfreflectie, zelfvertrouwen, en communicatieve en sociale vaardigheden. Daarnaast zijn de preventie van geweld en van seksueel geweld, het leren maken van eigen keuzes en het leren gaan van een eigen weg belangrijke thema's. Rots en Water is oorspronkelijk ontwikkeld voor jongens maar wordt zowel in Nederland als ver daarbuiten nu ook ingezet voor meisjes. Rots en Water maakt gebruik van een psychofysieke didactiek, wat inhoudt dat startend vanuit een fysieke invalshoek, mentale en sociale vaardigheden worden aangereikt en verworven. Actie (spel, spelen en simpele zelfverdedigingsvormen) wordt afgewisseld door momenten van zelfreflectie en kringgesprekken.
					</p>
				</section>
				<section id="training">
					<h2>Indeling, inhoud en doelen</h2>

					<ul>
						<li><strong>7-8 jaar: </strong>Houding, stevig staan en technieken. Ogen-stemspellen. Zelfbewustzijn en keuzes maken.</li>
						<li><strong>9-10 jaar: </strong>Houding, stevig staan en technieken. Veel spelvormen en oefenen. Sociaal bewustzijn, zelfbeheersing en zelfreflectie. Versterken eigenwaarde en in actie komen.</li>
						<li><strong>11-12 jaar: </strong>Dezelfde indeling, inhoud en doelen als bij de 9 tot 10-jarigen, echter uitgebreid met het focussen op eigen doelen.</li>
					</ul>

					<h2>Wie ben ik?</h2>
					<p>
						Ik ben Marc van der Plaat en ben {calcAge(birthday)} jaar oud.
					</p>

					<h3>Gediplomeerd Rots &amp; Water trainer</h3>
					<p>
						Ik heb de PABO voor de vrijeschool gedaan en in 2012 heb ik mijn certificaat tot Rots &amp; Watertrainer behaald. Vanuit mijn liefde voor mens en ontwikkeling geef ik deze training.
					</p>

					<h2>Overige informatie</h2>
					<ul>
						<li>8 lessen van 1 uur</li>
						<li>De groep zal bestaan uit 6 tot 8 deelnemers</li>
						<li>Kosten: 150 euro</li>
						<li>Ik ben preventief inzetbaar op scholen</li>
					</ul>

					<h3>Publicaties</h3>
					<ul>
						<li><a href="http://rotsenwater.nl/download/research/NL/onderzoek_klassen.pdf">Onderzoek naar effect van Rots en Water Programma [pdf]</a></li>
						<li><a href="http://www.rotsenwater.nl/?action=main.content&article_nID=343&navID=2">Waarom scholen en maatschappelijke instellingen voor Rots en Water kiezen</a></li>
					</ul>
				</section>
				<section id="aanmelden">
					<h2>Meld je aan</h2>
					<p>
						Je kan je wensen vrijblijvend kenbaar maken via het onderstaande formulier. Je krijgt snel een reactie waarin je ge&iuml;nformeerd wordt over de laatste ontwikkelingen. Alle aanmeldingen worden verzameld en ingedeeld. Vervolgens stellen we (in overleg met de gegadigden) een agenda op. Er wordt een geschikte locatie bepaald en daarna volgt de mogelijkheid om de inschrijving definitief te maken.
					</p>

					<fieldset>
						<legend>Vul het formulier in</legend>

						<Messages type="error" message="Fout!" />

						<form method="post" action="/post">
							<input type="hidden" name="project" value="weerbaar" />
							<input type="hidden" name="fill_this" />

							<label for="naam_a">Naam</label>
							<input type="text" name="naam[]" id="naam_a" />
							<input type="text" name="naam[]" id="naam_b" /><br />

							<label for="adres_a">Adres</label>
							<input type="text" name="adres[]" id="adres_a" />
							<input type="text" name="adres[]" id="adres_b" /><br />

							<label for="postcode_a">Postcode</label>
							<input type="text" name="postcode[]" id="postcode_a" />
							<input type="text" name="postcode[]" id="postcode_b" /><br />

							<label for="woonplaats">Woonplaats</label>
							<input type="text" name="woonplaats" id="woonplaats" /><br />

							<label for="leeftijd_a">Geboortedatum</label>
							<select name="leeftijd[]" id="leeftijd_a">
								<option>Dag</option>
								{days}
							</select>
							<select name="leeftijd[]" id="leeftijd_b">
								<option>Maand</option>
								{months}
							</select>
							<select name="leeftijd[]" id="leeftijd_c">
								<option>Jaar</option>
								{years}
							</select><br />

							<label for="email">E-mail</label>
							<input type="email" name="email" id="email" /><br />

							<label for="telefoon_a">Telefoon</label>
							+31 <input type="text" name="telefoon[]" id="telefoon_a" />
							<input type="text" name="telefoon[]" id="telefoon_b" /><br />

							<label for="leerdoel">Leerdoel</label>
							<select name="leerdoel" id="leerdoel">
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

							<label for="vragen">Vragen / Opmerkingen</label>
							<textarea name="vragen" id="vragen"></textarea><br />
							
							<input type="submit" value="Verstuur" />
						</form>
					</fieldset>
					<p className="footer">
						<small>
							Rots &amp; Water is een programma van het <a href="http://www.rotsenwater.nl">Rots &amp; Water Instituut NL</a>
						</small>|
						<small>
							<a href="https://opendyslexic.org/">Open Dyslexic</a>
						</small>|
						<small>
							&copy; <a href="http://swimmer.zone/">Swimmer</a> 2011 - {(new Date().getFullYear())}
						</small>
					</p>
				</section>
			</div>
		</>
  	);
}

export default App;
