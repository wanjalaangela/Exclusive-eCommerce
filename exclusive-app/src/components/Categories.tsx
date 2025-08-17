import { FaMobileAlt, FaLaptop, FaHeadphones, FaGamepad, FaCamera, FaClock } from "react-icons/fa";


const categories = [
  { name: "Phones", icon: <FaMobileAlt size={30} /> },
  { name: "Computers", icon: <FaLaptop size={30} /> },
  { name: "SmartWatch", icon: <FaClock size={30} /> },
  { name: "Camera", icon: <FaCamera size={30} /> },
  { name: "HeadPhones", icon: <FaHeadphones size={30} /> },
  { name: "Gaming", icon: <FaGamepad size={30} /> },
];
export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 ">
        <div className="flex items-center gap-4 mb-6">
                <div className="w-5 h-10 bg-red-500 rounded-sm"></div>
                <span className="text-red-500 font-semibold">Categories</span>
            </div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-semibold text-black">Browse by Categories</h2>
        <a
          href="#"
          className="text-red-500 font-medium hover:underline flex items-center"
        >
          View All Categories →
        </a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col items-center justify-center p-6 border rounded-md cursor-pointer transition-colors hover:bg-red-500 hover:text-white"
          >
            <div className="mb-3">{cat.icon}</div>
            <p className="font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

