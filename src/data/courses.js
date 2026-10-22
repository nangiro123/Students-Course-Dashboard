// Course data for the dashboard. Every course has a unique, stable `id`
// that is used as the React `key` when the list is rendered.
const courses = [
  { id: 1, title: 'Web Development',      lecturer: 'Dr. Kato',    progress: 70,  completed: false },
  { id: 2, title: 'Database Systems',     lecturer: 'Ms. Auma',    progress: 100, completed: true  },
  { id: 3, title: 'Data Structures',      lecturer: 'Mr. Ssemanda', progress: 45,  completed: false },
  { id: 4, title: 'Computer Networks',    lecturer: 'Dr. Nakato',  progress: 100, completed: true  },
  { id: 5, title: 'Software Engineering', lecturer: 'Ms. Namubiru', progress: 20,  completed: false },
  { id: 6, title: 'Operating Systems',    lecturer: 'Mr. Okello',  progress: 85,  completed: false },
];

export default courses;
