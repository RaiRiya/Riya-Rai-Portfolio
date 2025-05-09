import user_info from "../../data/user_info.js";

function Research() {
  return (
    <section id="research" className="mt-16 px-6 lg:px-24">
      <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
        My <span className="text-red-800 dark:text-red-500">Research Work</span>
      </h4>

      <ul className="space-y-6">
        {user_info.research.map((paper, index) => (
          <li key={index}>
            <h5 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200">
              {paper.title}
            </h5>
            <p className="text-zinc-600 dark:text-zinc-400">
              {paper.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Research;
