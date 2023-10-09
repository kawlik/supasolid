// @soild
import { Outlet } from "solid-start";

export default function () {
	// component logic

	// component layout
	return (
		<main class="grid h-full w-full place-content-center">
			<Outlet />
		</main>
	);
}
