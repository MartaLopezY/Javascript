/*Foco en el Último Input
Crea un aplicación en javascript que coloque el foco en el último input de tipo texto del último formulario de la página.
 */
let forms = Array.from(document.forms);
let lastForm = forms[forms.length - 1];
let textInputs = Array.from(lastForm.querySelectorAll('input[type="text"]'));
let lastTextInput = textInputs[textInputs.length - 1];
lastTextInput.focus();
