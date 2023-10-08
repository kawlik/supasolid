export function AlertSuccess(props: { ref: HTMLDialogElement }) {
	// component logic

	// component layout
	return (
		<dialog class="modal backdrop-blur" ref={props.ref}>
			<div class="modal-box max-w-sm">
				<h2>Success!</h2>
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
