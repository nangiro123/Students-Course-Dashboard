// Shown when there is nothing to display. `message` and `hint` are props.
export default function EmptyState({ message, hint }) {
  return (
    <div className="empty" role="status">
      <p className="empty-icon" aria-hidden="true">📭</p>
      <h2>{message}</h2>
      {hint && <p>{hint}</p>}
    </div>
  );
}
