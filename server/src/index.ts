import { fromHono } from "chanfana";
import { Hono } from "hono";
import { GetImage } from "./endpoints/getImage";
import { GetToken } from "endpoints/getToken";

// Start a Hono app
const app = new Hono();

// Setup OpenAPI registry
const openapi = fromHono(app, {
	docs_url: "/",
});

// Register OpenAPI endpoints
openapi.get("/api/image", GetImage);
openapi.get("/api/token", GetToken);

// Export the Hono app
export default app;
