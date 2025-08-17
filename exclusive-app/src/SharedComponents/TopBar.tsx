export default function TopBar() {
  return (
    <div className="w-full bg-black text-white text-sm px-6 py-2 flex justify-center items-center">
      <p className="flex items-center gap-2">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        <a href="#" className="font-bold hover:opacity-80">
          Shop Now
        </a>
      </p>

      <div className="absolute right-6">
        <select className="bg-black text-white border-none focus:outline-none">
          <option>English</option>
          <option>French</option>
        </select>
      </div>
    </div>
  );
}
