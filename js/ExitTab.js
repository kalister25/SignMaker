class ExitTab {
	/**
	 * Creates a new ExitTab.
	 * @param {string} number - Number to display on the exit tab.
	 * @param {string} [position=null] - Position to display the exit tab relative to the sign.
	 * @param {string} [width=null] - Width of the exit tab (narrow or wide).
	 */
	constructor (number = null, position = null, width = null) {
		this.number = number;
		if (this.positions.includes(position)) {
			this.position = position;
		} else {
			this.position = this.positions[5];
		}
		if (this.widths.includes(width)) {
			this.width = width;
		} else {
			this.width = this.widths[3];
		}
	}
}

ExitTab.prototype.positions = ["Left", "Center", "Right"];
ExitTab.prototype.widths = ["Narrow", "Wide", "Full", "Edge"];
