// @solid
import { Body, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from "solid-start";

// @style
import "./root.css";

export default function () {
	// component logic

	// component layout
	return (
		<Html lang="en" data-theme="emerald">
			<Head>
				<Title>SupaSolid</Title>
				<Meta charset="utf-8" />
				<Meta
					name="viewport"
					content="initial-scale=1, width=device-width, viewport-fit=cover"
				/>
			</Head>
			<Body class="h-screen w-screen overflow-hidden">
				<Routes>
					<FileRoutes />
				</Routes>
				<Scripts />
			</Body>
		</Html>
	);
}
