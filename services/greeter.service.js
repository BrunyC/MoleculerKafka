"use strict";

module.exports = {
	name: "ContatosService",
	actions: {
		auth: {
			rest: {
				method: "POST",
				path: "/",
			},
			params: {
				// timestamp: { type: "number" },
				// user: { type: "string" },
				// message: { type: "string" },
			},
			async handler(ctx) {
				console.log(ctx.params);
				let result = {
					message: "Some Message"
				};
				return result;
			},
		},
	},
};
