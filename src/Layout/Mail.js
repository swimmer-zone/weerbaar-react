<body>
	<style type="text/css">
		body {
			background-color:#ff9900;
		}
		h1 {
			color:#ff6600;
			font-size:29px;
			font-weight:bold;
			letter-spacing:4px;
			font-family:"Helvetica","Verdana",sans-serif;
		}
		table {
			width:960px;
			background-color:#0069b3;
			margin:10px auto;
		}
		td {
			color:#00ffbb;
			padding:8px;
			font-size:14px;
		}
		td:first-child {
			width:400px;
		}
	</style>
	<table>
		<tr>
			<td><img src="http://www.weerbaarworden.nl/images/rwbg.png"></td>
			<td><h1>Weerbaar Worden</h1></td>
		<tr>
			<td style="">Naam: </td>
			<td><strong>{{ $naam }}</strong></td>
		</tr>
		<tr>
			<td>Adres: </td>
			<td><strong>{{ $adres }}</strong></td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td><strong>{{ $postcode }} {{ $woonplaats }}</strong></td>
		</tr>
		<tr>
			<td>Geboortedatum: </td>
			<td><strong>{{ $leeftijd }}</strong></td>
		</tr>
		<tr>
			<td>E-mail: </td>
			<td><strong>{{ $email }}</strong></td>
		</tr>
		<tr>
			<td>Telefoon: </td>
			<td><strong>+31 {{ $telefoon }}</strong></td>
		</tr>
		<tr>
			<td>Leerdoel:</td>
			<td><strong>{{ $leerdoel }}</strong></td>
		</tr>
		<tr>
			<td colspan="2">Vragen / Opmerkingen:<br><br>{{ $vragen }}</td>
		</tr>
	</table>
</body>