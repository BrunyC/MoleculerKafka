const JaegerService = require("moleculer-jaeger");

module.exports = {
	mixins: [JaegerService],
	settings: {
		host: "localhost",
		port: 6832,
	},
};
