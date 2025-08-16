export default function CategoriesSidebar() {
  const categories = [
    "Women's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];
  return (
    <aside className="w-1/2 space-y-3 mt-8 border-r border-gray-200">
      <ul className="space-y-7">
        {categories.map((cat, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-red-500 transition"
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}