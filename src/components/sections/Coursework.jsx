import user_info from "../../data/user_info.js";

function Coursework() {
  return (
    <section id="coursework" className="mt-16 px-6 lg:px-24">
      <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-12">
        Relevant <span className="text-red-800 dark:text-red-500">Coursework</span>
      </h4>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {user_info.coursework.map((course, index) => (
          <div
            key={index}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h5 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2">
              {course.title}
            </h5>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              {course.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Coursework;
