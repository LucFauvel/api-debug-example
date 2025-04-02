import { OpenAPIRoute, Str } from "chanfana";
import { z } from "zod";

export class GetToken extends OpenAPIRoute {
	schema = {
		tags: ["Token"],
		summary: "GetToken",
		responses: {
			"200": {
				description: "Token",
                content: {
                    "application/json": {
						schema: z.object({
							token: Str()
                        })
					},
                }
			},
		},
	};

	async handle(c) {
		const data = await this.getValidatedData<typeof this.schema>();

		return { token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NDM1NTM2MzIsImV4cCI6MTc3NTA4OTYzMiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.CF87oKW1ZHsGqc0-l0k4r8Ytd37N7h0ctlEuzbudU-E" };
	}
}
