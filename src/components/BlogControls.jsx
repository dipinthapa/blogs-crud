const BlogControls = ({
  search,
  setSearch,
  sort,
  setSort,
  category,
  setCategory,
}) => {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

      {/* Search */}
      <div className="w-full md:w-1/2 relative">
        <input
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
        />

        {/* Icon */}
        <span className="absolute left-3 top-2.5 text-gray-400">
          🔍
        </span>
      </div>

      {/* Filters */}
      <div className="flex gap-3 w-full md:w-auto">

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-3 py-2 rounded-lg bg-white"
        >
          <option value="All">All</option>
          <option value="General">General</option>
          <option value="Tech">Tech</option>
          <option value="Life">Life</option>
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-3 py-2 rounded-lg bg-white"
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="title">Title A–Z</option>
        </select>
      </div>
    </div>
  );
};

export default BlogControls;