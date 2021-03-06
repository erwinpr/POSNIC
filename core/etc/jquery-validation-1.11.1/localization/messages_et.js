/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ET (Estonian; eesti, eesti keel)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "See v  li peab olema t  idetud.",
		maxlength: $.validator.format("Palun sisestage v  hem kui {0} t  hem  rki."),
		minlength: $.validator.format("Palun sisestage v  hemalt {0} t  hem  rki."),
		rangelength: $.validator.format("Palun sisestage v    rtus vahemikus {0} kuni {1} t  hem  rki."),
		email: "Palun sisestage korrektne e-maili aadress.",
		url: "Palun sisestage korrektne URL.",
		date: "Palun sisestage korrektne kuup  ev.",
		dateISO: "Palun sisestage korrektne kuup  ev (YYYY-MM-DD).",
		number: "Palun sisestage korrektne number.",
		digits: "Palun sisestage ainult numbreid.",
		equalTo: "Palun sisestage sama v    rtus uuesti.",
		range: $.validator.format("Palun sisestage v    rtus vahemikus {0} kuni {1}."),
		max: $.validator.format("Palun sisestage v    rtus, mis on v  iksem v  i v  rdne arvuga {0}."),
		min: $.validator.format("Palun sisestage v    rtus, mis on suurem v  i v  rdne arvuga {0}."),
		creditcard: "Palun sisestage korrektne krediitkaardi number."
	});
}(jQuery));