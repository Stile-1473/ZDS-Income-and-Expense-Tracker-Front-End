const DeleteAlert = ({ onDelete, content }) => {
    return (
        <div className="p-2">
            <p className="text-neutral-700 text-sm mb-6 leading-relaxed">{content}</p>

            <div className="flex justify-end gap-3">
                <button
                    type="button"
                    className="btn-ghost px-4 py-2.5"
                >
                    Cancel
                </button>

                <button
                    onClick={onDelete}
                    type="button"
                    className="btn-danger px-4 py-2.5 flex items-center gap-2"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DeleteAlert;