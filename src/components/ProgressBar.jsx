// Receives a numeric `value` (0-100) and draws a progress bar.
export default function ProgressBar({ value, completed }) {
  return (
    <div
      className="progress"
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Progress ${value} percent`}
    >
      <div
        className={completed ? 'progress-fill done' : 'progress-fill'}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
