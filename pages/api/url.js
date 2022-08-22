/** @format */

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const Wappalyzer = require('wappalyzer');

export default function handler(req, res) {
	const { url } = req.query;

	const options = {
		debug: false,
		delay: 500,
		headers: {},
		maxDepth: 3,
		maxUrls: 1,
		maxWait: 7000,
		recursive: false,
		probe: true,
		proxy: false,
		userAgent:
			'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
		htmlMaxCols: 2000,
		htmlMaxRows: 2000,
		noScripts: false,
		noRedirect: false,
	};

	const wappalyzer = new Wappalyzer(options);

	(async function () {
		try {
			await wappalyzer.init();

			// Optionally set additional request headers
			const headers = {};

			const site = await wappalyzer.open(url, headers);

			// Optionally capture and output errors
			site.on('error', console.error);

			const results = await site.analyze();

			console.log(JSON.stringify(results, null, 2));
			res.status(200).json({ ...results, status: 200 });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: error, ...error, status: 400 });
		}

		await wappalyzer.destroy();
	})();
}
