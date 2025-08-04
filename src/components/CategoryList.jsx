// components/CategoryList.tsx
import { getCategories } from "@/app/actions/category/category";
import Link from "next/link";

export default async function CategoryList() {
  try {
    const categories = await getCategories();

    if (!categories || categories?.data?.length === 0) {
      return <p className="text-gray-500">No categories found.</p>;
    }

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories?.data.map((item) => (
          <Link
            href={`/category/${item?.slug}`}
            key={item?._id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow text-center cursor-pointer"
          >
            <div className="text-5xl mb-4">{item?.icon}</div>
            <h3 className="font-semibold text-black">{item?.name}</h3>
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Failed to load categories:", error);
    throw new Error("ErrorDisplay");
  }
}
