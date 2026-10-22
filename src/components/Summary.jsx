// Displays totals calculated from the courses array (passed as props).
export default function Summary({ total, completed, active }) {
  return (
    <section className="summary" aria-label="Course summary">
      <div className="stat"><strong>{total}</strong><span>Total courses</span></div>
      <div className="stat"><strong>{active}</strong><span>In progress</span></div>
      <div className="stat"><strong>{completed}</strong><span>Completed</span></div>
    </section>
  );
}
