import { MenuAlt2Icon } from "@heroicons/react/outline";
import { PencilIcon } from "@heroicons/react/solid";
import AddModule from "./NavbarModule/AddModule";
import Notification from "./Notification";
import ProfileModal from "./ProfileModal";
function Navbar({ userNavigation, setSidebarOpen, classNames }) {
  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <div className="flex-1 px-4 flex justify-between items-center">
        <div className="">
          <div className="dropdown">
            <div
              tabIndex={0}
              className="m-1 flex flex-row justify-between items-center border-2 px-5 py-2 rounded-3xl border-none bg-violet-500"
            >
              <PencilIcon className="-ml-2 mr-1 h-4 w-4" aria-hidden="true" />
              <span className="text-white text-sm">Tùy chỉnh</span>
            </div>
            <div
              tabIndex={0}
              className="p-2 mt-3 shadow menu dropdown-content bg-white rounded-md w-96"
            >
              <div className="px-3">
                <span className="text-black font-bold block mb-3">Màu sắc</span>
                <div className="grid grid-cols-4 gap-3">
                  <div className="w-20 h-10 bg-red-600"></div>
                  <div className="w-20 h-10 bg-green-600"></div>
                  <div className="w-20 h-10 bg-yellow-600"></div>
                  <div className="w-20 h-10 bg-orange-600"></div>
                </div>
              </div>
              <div className="px-3 mt-3">
                <span className="text-black font-bold block mb-3">
                  Hình nền
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-4 flex items-center md:ml-6">
          <AddModule />
          <Notification />
          <ProfileModal />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
