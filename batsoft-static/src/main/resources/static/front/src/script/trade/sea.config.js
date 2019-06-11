seajs.config({
	alias : {
		module_base : "dist/module.base",
		module_method : "dist/module.method",
		module_numeral : "dist/module.numeral",
		module_lang : "dist/module.lang",
		module_common : "dist/module.common",
		module_user : "dist/module.user",
		module_asset : "dist/module.asset",
		module_p2p : "dist/module.p2p",
		module_bill : "dist/module.bill",
		module_account : "dist/module.account",
		module_trans : "dist/module.trans",
		module_market : "dist/module.market",
		module_tmpl : "dist/module.tmpl",
		module_range : "dist/module.range",
		module_pako : "dist/module.pako",
		module_encrypt : "dist/module.encrypt",
		module_simChart : "dist/module.simchart",
		module_index : "dist/module.index",
		module_highCharts : "dist/module.highcharts",
		module_highStock : "dist/module.highstock",
		module_jqueryUi : "dist/module.jquery-ui.min",
		module_html5Qrcode : "dist/module.html5qrcode"
	},
	paths : {
		dev : "statics/js/v2",
		dist : "statics/js/v2"
	},
	debug : false,
	base : DOMAIN_STATIC,
	map : [ [ /^(.*\/statics\/.*\.(?:css|js))(?:.*)$/i, "$1?" + VERSION ] ],
	charset : "utf-8"
});