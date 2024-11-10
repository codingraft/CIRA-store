import  { useContext } from "react";
import myContext from "../../context/data/myContext";

import Loader from "../../components/loader/Loader";

function Order() {
  const userid = JSON.parse(localStorage.getItem("user")).user.uid;
  const context = useContext(myContext);
  const { mode, loading, order } = context;
  return (
    <>
      {loading && <Loader />}
      {order.length > 0 ? (
        <div className="h-full pt-10">
          {order
            .filter((obj) => obj.userid === userid)
            .map((order) => (
              <div
                key={order.id}
                className="mx-auto max-w-5xl px-6 md:flex md:space-x-6 xl:px-0"
              >
                {order.cartItems.map((item) => (
                  <div key={item.id} className="rounded-lg md:w-2/3">
                    <div
                      className={`justify-between mb-6 rounded-lg p-6 shadow-md sm:flex sm:justify-start ${
                        mode === "dark" ? "bg-gray-800 text-white" : "bg-white"
                      }`}
                    >
                      <img
                        src={item.imageUrl}
                        alt="product"
                        className="w-full rounded-lg sm:w-40"
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2
                            className={`text-lg font-bold ${
                              mode === "dark" ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {item.title}
                          </h2>
                          <p
                            className={`mt-1 text-xs ${
                              mode === "dark" ? "text-white" : "text-gray-700"
                            }`}
                          >
                            {item.description}
                          </p>
                          <p
                            className={`mt-1 text-xs ${
                              mode === "dark" ? "text-white" : "text-gray-700"
                            }`}
                          >
                            {item.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      ) : (
        <h2 className="text-center text-2xl text-white">No Orders</h2>
      )}
    </>
  );
}

export default Order;
