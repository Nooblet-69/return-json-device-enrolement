export default {
	async fetch(request): Promise<Response> {
		const data = {"Servers":[{"Version":"mdm-adde","BaseURL":"https:\/\/biz-40460.business.mosyle.io\/api\/v2enrollment\/enroll\/adde?model-family=Mac"}]};

		return Response.json(data);
	},
} satisfies ExportedHandler;
