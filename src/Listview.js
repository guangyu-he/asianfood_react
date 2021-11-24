const Listview = () => {
  return (
    <div className=" container min-w-full z-10 top-14 absolute">
      <div className="flex justify-center">
        <div className="bg-white shadow-xl rounded-lg w-1/2">
          <ul className="divide-y divide-gray-300">
            <li className="p-4 hover:bg-gray-50 cursor-pointer">
              Peli list ni item
            </li>
            <li className="p-4 hover:bg-gray-50 cursor-pointer">
              Biji list ni item{" "}
            </li>
            <li className="p-4 hover:bg-gray-50 cursor-pointer">
              Triji list ni item
            </li>
            <li className="p-4 hover:bg-gray-50 cursor-pointer">
              Chothi list ni item
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Listview;
