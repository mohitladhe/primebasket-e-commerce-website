import { FiMapPin, FiEdit2, FiTrash2 } from "react-icons/fi";

function Addresses() {

  return (

    <div className="space-y-6">

      {/* ADDRESS CARD */}

      <div className="border border-green-400 rounded-xl p-6 bg-white">

        <div className="flex justify-between">

          <div className="flex gap-4">

            <FiMapPin size={20}/>

            <div>

              <h3 className="font-semibold">Home</h3>

              <p className="text-gray-500 text-sm">
                Alex Johnson
              </p>

              <p className="text-gray-500 text-sm">
                123 Oak Street, Apt 4B
              </p>

              <p className="text-gray-500 text-sm">
                San Francisco, CA 94102
              </p>

              <p className="text-gray-500 text-sm">
                United States
              </p>

            </div>

          </div>

          <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
            DEFAULT
          </span>

        </div>

      </div>


      {/* SECOND ADDRESS */}

      <div className="border rounded-xl p-6 bg-white">

        <div className="flex gap-4">

          <FiMapPin size={20}/>

          <div>

            <h3 className="font-semibold">Office</h3>

            <p className="text-gray-500 text-sm">
              Alex Johnson
            </p>

            <p className="text-gray-500 text-sm">
              456 Market Street, Suite 200
            </p>

            <p className="text-gray-500 text-sm">
              San Francisco, CA 94105
            </p>

            <p className="text-gray-500 text-sm">
              United States
            </p>

            <button className="text-green-600 text-sm mt-2">
              Set as default
            </button>

          </div>

        </div>

      </div>


      {/* ADD ADDRESS */}

      <div className="border-dashed border-2 rounded-xl p-6 text-center text-gray-500 cursor-pointer">
        + Add New Address
      </div>

    </div>

  );
}

export default Addresses;