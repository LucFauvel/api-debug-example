import { Str, OpenAPIRoute } from "chanfana";
import { z } from "zod";

export class GetImage extends OpenAPIRoute {
	schema = {
		tags: ["Image"],
		summary: "GetImage",
		request: {
            headers: z.object({
                'Authorization': z.string().describe("Token authentication"),
            }),
        },
		responses: {
			"301": {
				description: "Redirect"
			},
			"401": {
				description: "Bad or no token"
			}
		},
	};

	async handle(c) {
		const data = await this.getValidatedData<typeof this.schema>();
        const apiKey = data.headers['Authorization'];

		const splitKey = apiKey.split(' ');
		if (splitKey.length > 1 && splitKey[1] == "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NDM1NTM2MzIsImV4cCI6MTc3NTA4OTYzMiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.CF87oKW1ZHsGqc0-l0k4r8Ytd37N7h0ctlEuzbudU-E") {
			return c.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ", 301);
		}

		return c.body('Bad or no token', 401)
	}
}
