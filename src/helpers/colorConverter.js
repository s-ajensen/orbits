function RGBAToHexA(rgba) {
	let ex = /^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i;
	if (ex.test(rgba)) {
		let sep = rgba.indexOf(",") > -1 ? "," : " ";
		rgba = rgba.substr(5).split(")")[0].split(sep);
		
		// strip the slash if using space-separated syntax
		if (rgba.indexOf("/") > -1)
			rgba.splice(3,1);

		for (let R in rgba) {
			let r = rgba[R];
			if (r.indexOf("%") > -1) {
				let p = r.substr(0,r.length - 1) / 100;

				if (R < 3) {
					rgba[R] = Math.round(p * 255);
				} else {
					rgba[R] = p;
				}
			}
		}

		let r = (+rgba[0]).toString(16),
			g = (+rgba[1]).toString(16),
			b = (+rgba[2]).toString(16),
			a = Math.round(+rgba[3] * 255).toString(16);
		
		if (r.length == 1)
			r = "0" + r;
		if (g.length == 1)
			g = "0" + g;
		if (b.length == 1)
			b = "0" + b;
		if (a.length == 1)
			a = "0" + a;
		
		return "#" + r + g + b + a;

	} else {
		return "Invalid input color";
	}
}

export { RGBAToHexA }