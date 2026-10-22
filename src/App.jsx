import { useState } from 'react';
import courses from './data/courses';
import CourseCard from './components/CourseCard';
import EmptyState from './components/EmptyState';
import Summary from './components/Summary';
import Filters from './components/Filters';

export default function App() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const completedCount = courses.filter((c) => c.completed).length;
  const activeCount = courses.length - completedCount;

  // Apply the status filter and the search text
  const text = search.trim().toLowerCase();
  const visibleCourses = courses.filter((c) => {
    const matchesStatus =
      filter === 'all' || (filter === 'completed' ? c.completed : !c.completed);
    const matchesText =
      c.title.toLowerCase().includes(text) ||
      c.lecturer.toLowerCase().includes(text);
    return matchesStatus && matchesText;
  });

  return (
    <main>
      <header className="page-header">
        <h1>My Course Dashboard</h1>
        <p className="subtitle">Track your progress across all your courses.</p>
      </header>

      {courses.length === 0 ? (
        <EmptyState
          message="You are not enrolled in any courses yet."
          hint="Add courses to src/data/courses.js and they will appear here."
        />
      ) : (
        <>
          <Summary
            total={courses.length}
            completed={completedCount}
            active={activeCount}
          />

          <Filters
            search={search}
            onSearch={setSearch}
            filter={filter}
            onFilter={setFilter}
          />

          {visibleCourses.length === 0 ? (
            <EmptyState
              message="No courses match your search."
              hint="Try a different word or choose another filter."
            />
          ) : (
            <section className="grid">
              {visibleCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </section>
          )}
        </>
      )}
    </main>
  );
}
