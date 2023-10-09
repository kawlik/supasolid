// @solid
import { createMemo } from "solid-js";
import { A, useLocation } from "solid-start";

export function Footer() {
	// component logic

	// component layout
	return (
		<footer class="btm-nav static h-20 border-t pb-4">
			<ButtonNav href="/home/ledgers" icon="/heroicons/pencil.svg" text="Ledgers" />
			<ButtonNav href="/home/reports" icon="/heroicons/calendar.svg" text="Reports" />
			<ButtonNav href="/home/account" icon="/heroicons/user.svg" text="Account" />
		</footer>
	);
}

function ButtonNav(props: { href: string; icon: string; text: string }) {
	// component logic
	const location = useLocation();
	const isActive = createMemo(() => location.pathname === props.href);

	// component layout
	return (
		<A classList={{ active: isActive() }} href={props.href}>
			<img class="h-6 w-6" src={props.icon} />
			<span class="text-sm">{props.text}</span>
		</A>
	);
}
