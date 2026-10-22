import ProgressBar from './ProgressBar';

// Reusable card. All data arrives through the `course` prop.
export default function CourseCard({ course }) {
  const { title, lecturer, progress, completed } = course;

  return (
    <article className={completed ? 'card card-completed' : 'card'}>
      <div className="card-top">
        <h2>{title}</h2>
        {/* Conditional rendering: badge text and style depend on the data */}
        <span className={completed ? 'badge badge-done' : 'badge badge-active'}>
          {completed ? '✔ Completed' : 'In progress'}
        </span>
      </div>

      <p className="lecturer">Lecturer: {lecturer}</p>

      <ProgressBar value={progress} completed={completed} />
      <p className="progress-label">{progress}% complete</p>
    </article>
  );
}
