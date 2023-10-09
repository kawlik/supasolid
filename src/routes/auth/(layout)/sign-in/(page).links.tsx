export function Links() {
	// component logic

	// component layout
	return (
		<aside class="flex items-center justify-center">
			<Link href="/docs/privacy-policy" text="Privacy policy" />
			<Divider />
			<Link href="/docs/therms-of-service" text="Therms of Service" />
		</aside>
	);
}

function Divider() {
	// component logic

	// component layout
	return <>&#x2022</>;
}

function Link(props: { href: string; text: string }) {
	// component logic

	// component layout
	return (
		<a class="btn btn-link btn-sm normal-case" href={props.href} target="_blank">
			{props.text}
		</a>
	);
}
