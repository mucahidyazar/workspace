/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'trello-clone\'">' + entity + '</span>' + html;
	}
	var icons = {
		'bs-svg0': '&#xe900;',
		'bs-svg1': '&#xe901;',
		'bs-svg2': '&#xe902;',
		'bs-svg3': '&#xe903;',
		'bs-svg4': '&#xe904;',
		'bs-svg5': '&#xe905;',
		'bs-svg6': '&#xe906;',
		'bs-svg7': '&#xe907;',
		'bs-svg8': '&#xe908;',
		'bs-svg9': '&#xe909;',
		'bs-svg10': '&#xe90a;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/bs-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
