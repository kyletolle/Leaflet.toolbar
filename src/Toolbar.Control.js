L.Toolbar.Control = L.Toolbar.extend({
	statics: {
		baseClass: 'leaflet-control-toolbar ' + L.Toolbar.baseClass
	},

	initialize: function(options) {
		L.Toolbar.prototype.initialize.call(this, options);

		this._control = new L.Control.Toolbar(this.options);
	},

	onAdd: function(map) {
		this._control.addTo(map);

		this.appendToContainer(this._control.getContainer());
	},

	onRemove: function(map) {
		this._control.removeFrom(map);
	}
});

L.Control.Toolbar = L.Control.extend({
	onAdd: function() {
		return L.DomUtil.create('div', '');
	}
});