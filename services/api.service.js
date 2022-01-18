"use strict";

const ApiGateway = require("moleculer-web");

module.exports = {
	name: "api",
	mixins: [ApiGateway],
	settings: {
		port: process.env.PORT || 8080,
		routes: [
			{
				authorization: true,
				path: "/api",
				aliases: {
					"POST /test": "ContatosService.auth",
				},
				whitelist: [
					// Access to any actions in all services under "/api" URL
					"**",
				],
			},
		],
	},
	methods: {}
};
