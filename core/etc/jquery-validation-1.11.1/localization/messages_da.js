/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: DA (Danish; dansk)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "Dette felt er p  kr  vet.",
		maxlength: $.validator.format("Indtast h  jst {0} tegn."),
		minlength: $.validator.format("Indtast mindst {0} tegn."),
		rangelength: $.validator.format("Indtast mindst {0} og h  jst {1} tegn."),
		email: "Indtast en gyldig email-adresse.",
		url: "Indtast en gyldig URL.",
		date: "Indtast en gyldig dato.",
		number: "Indtast et tal.",
		digits: "Indtast kun cifre.",
		equalTo: "Indtast den samme v  rdi igen.",
		range: $.validator.format("Angiv en v  rdi mellem {0} og {1}."),
		max: $.validator.format("Angiv en v  rdi der h  jst er {0}."),
		min: $.validator.format("Angiv en v  rdi der mindst er {0}."),
		creditcard: "Indtast et gyldigt kreditkortnummer."
	});
}(jQuery));