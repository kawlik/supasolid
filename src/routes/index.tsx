// @solid
import { Outlet } from "solid-start";

export default function () {
	// component logic

	// component layout
	return (
		<main class="h-screen w-screen overflow-hidden">
			<h2>Hello Solid!</h2>
			<Outlet />
		</main>
	);
}
