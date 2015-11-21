/**
* Expresión regular para validar que se introduce la contraseña
* con el siguiente formato:
* -Al menos un numero (?=.*\d)
* -Al menos una letra minuscula (?=.*[a-z])
* -Al menos una letra Mayuscula (?=.*[A-Z])
* -La cadena debe tener entre 6 y 20 carecteres {6,20}
*
* Info: http://www.regular-expressions.info/
* Para usar es necesario cargarlo en el index.html, Una buena practica el cargarlo en el app.json dentro de "js": [{"path": "app/CustomVTypes.js","includeInBundle": true}
*/
Ext.apply(Ext.form.field.VTypes, {
	clavePermitida: function(val, field) {
    //return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/.test(val);
		return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})/.test(val);
	},
	clavePermitidaText: 'Contraseña inválida. La Longitud debe estar entre 6 y 20 Caracteres. La contraseña debe contener un número,una letra miniscula y una mayuscula'
});