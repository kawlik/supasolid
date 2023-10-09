export function AlertSuccess(props: { ref: HTMLDialogElement }) {
	// component logic

	// component layout
	return (
		<dialog class="modal backdrop-blur" ref={props.ref}>
			<div class="modal-box flex max-w-sm flex-col gap-6">
				<img alt="Success" src="/public/success.svg" />
				<div>
					<h3 class="text-2xl font-bold">Success!</h3>
					<p class="text-justify text-lg font-thin">
						Open your email address and click the magic link to continue. If you
						don't see your email client on the list below, just use a browser.
					</p>
				</div>
				<div class="flex flex-nowrap justify-center gap-2">
					<LinkMail href="#" icon="/icon/apple.svg" name="iCloud" />
					<LinkMail href="#" icon="/icon/google.svg" name="Gmail" />
					<LinkMail href="#" icon="/icon/microsoft.svg" name="Outlook" />
					<LinkMail href="#" icon="/icon/yahoo.svg" name="Yahoo" />
				</div>
				<form class="mx-auto w-2/3" method="dialog">
					<input
						class="btn btn-success w-full rounded-full normal-case text-base-100"
						type="submit"
						value="Got it!"
					/>
				</form>
			</div>
		</dialog>
	);
}

export function LinkMail(props: { href: string; icon: string; name: string }) {
	// component logic

	// component layout
	return (
		<a class="btn btn-circle btn-outline p-3" href={props.href}>
			<img alt={props.name} src={props.icon} />
		</a>
	);
}
