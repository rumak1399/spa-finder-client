import { getCategories } from "@/app/actions/category/category";
import { getTags } from "@/app/actions/tags/tags";
import SearchForm from "../SearchForm/SearchForm";

export default async function BannerSection({ searchParams }) {
  const categories = await getCategories();
  const tags = await getTags();

  const selectedCategoryId = searchParams?.category || "";
  const selectedTags = searchParams?.tags ? searchParams.tags.split(",") : [];
  console.log(selectedCategoryId, selectedTags);

  return (
    <section className="bg-blue-400 dark:bg-blue-800 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Find the Perfect Massage & Spa Near You
          </h1>
          <p className="text-xl mb-8 text-white">
            Discover top-rated massage therapists and spa services in your area
          </p>
          <SearchForm
            categories={categories?.data}
            tags={tags}
            selectedCategoryId={selectedCategoryId}
            selectedTags={selectedTags}
          />
          {/* <form
            method="GET"
            className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow-md"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-1"
                >
                  Service Type
                </label>
                <select
                  id="service"
                  name="category"
                  defaultValue={selectedCategoryId}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-200"
                >
                  <option value="">All types of massages</option>
                  {categories?.data.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat?.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex-1">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-zinc-600 dark:text-zinc-200 mb-1"
                >
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Enter your address, city or zip code"
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  &nbsp;
                </label>
                <button
                  type="submit"
                  className="w-full px-3 py-3 rounded-lg font-medium bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 transition-all"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => {
                const isActive = selectedTags.includes(tag);
                const newTags = isActive
                  ? selectedTags.filter((t) => t !== tag)
                  : [...selectedTags, tag];

                const query = new URLSearchParams({
                  category: selectedCategoryId,
                  tags: newTags.join(","),
                }).toString();

                return (
                  <a
                    key={tag}
                    href={`?${query}`}
                    className={`px-3 py-1 rounded-full text-sm ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "bg-blue-100 dark:bg-blue-300 text-blue-800 dark:text-blue-900"
                    }`}
                  >
                    {tag}
                  </a>
                );
              })}
            </div>
          </form> */}

          {/* Example: Render filtered posts */}
          {/* <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts?.map((post) => (
              <div key={post._id} className="bg-white p-4 rounded shadow">
                <img
                  src={post.image.url}
                  alt={post.image.alt}
                  className="w-full h-48 object-cover rounded"
                />
                <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
                <p className="text-gray-600">{post.description}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
