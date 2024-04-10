import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoute = createRouteMatcher([
	"/",
	"/all-table",
	"/meeting(.*)",
	"/create-mapping-table",
]);

export default clerkMiddleware((auth, req) => {
	if (protectedRoute(req)) auth().protect();
});

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
