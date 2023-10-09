export function AlertSuccess(props: { ref: HTMLDialogElement }) {
	// component logic

	// component layout
	return (
		<dialog class="modal backdrop-blur" ref={props.ref}>
			<div class="modal-box flex max-w-sm flex-col gap-6">
				<img alt="Success" src="/undraw/envelope.svg" />
				<div>
					<h3 class="text-2xl font-bold">Success!</h3>
					<p class="text-justify text-lg font-thin">
						Open your email address and click the magic link to continue. If you
						don't see your email client on the list below, just use a browser.
					</p>
				</div>
				<div class="flex flex-nowrap justify-center gap-2">
					<LinkMail href="https://icloud.com/" icon="/iconscout/apple.svg" />
					<LinkMail href="https://gmail.com/" icon="/iconscout/google.svg" />
					<LinkMail
						href="https://outlook.office365.com/"
						icon="/iconscout/microsoft.svg"
					/>
					<LinkMail href="https://mail.yahoo.com/" icon="/iconscout/yahoo.svg" />
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

export function LinkMail(props: { href: string; icon: string }) {
	// component logic

	// component layout
	return (
		<a class="btn btn-circle btn-outline p-3" href={props.href} target="_blank">
			<img src={props.icon} />
		</a>
	);
}
