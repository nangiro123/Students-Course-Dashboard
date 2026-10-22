const OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'In progress' },
  { value: 'completed', label: 'Completed' },
];

// Extension feature: search box + status filter buttons.
// State lives in App; this component only receives values and callbacks.
export default function Filters({ search, onSearch, filter, onFilter }) {
  return (
    <div className="filters">
      <input
        type="search"
        placeholder="Search by course or lecturer..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        aria-label="Search courses"
      />
      <div className="filter-buttons">
        {OPTIONS.map((o) => (
          <button
            key={o.value}
            type="button"
            className={filter === o.value ? 'chip chip-on' : 'chip'}
            onClick={() => onFilter(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}
