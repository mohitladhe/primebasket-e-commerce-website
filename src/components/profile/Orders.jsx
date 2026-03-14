import { FiPackage } from "react-icons/fi";

function Orders() {

  const orders = [
    { id:"ORD-2024-001", date:"Mar 10, 2026", items:"2 items", price:"$429.98", status:"Shipped"},
    { id:"ORD-2024-002", date:"Feb 28, 2026", items:"1 item", price:"$189.99", status:"Delivered"},
    { id:"ORD-2024-003", date:"Feb 15, 2026", items:"3 items", price:"$139.98", status:"Delivered"},
    { id:"ORD-2024-004", date:"Jan 20, 2026", items:"1 item", price:"$1299.99", status:"Cancelled"}
  ];

  return (

    <div className="space-y-4">

      {orders.map(order => (

        <div key={order.id}
          className="bg-white rounded-xl shadow p-6 flex justify-between items-center">

          <div className="flex items-center gap-4">

            <div className="bg-gray-100 p-3 rounded-lg">
              <FiPackage size={20}/>
            </div>

            <div>
              <p className="font-semibold">{order.id}</p>
              <p className="text-sm text-gray-500">
                {order.date} · {order.items}
              </p>
            </div>

          </div>

          <div className="flex items-center gap-6">

            <span className={`text-sm px-3 py-1 rounded-full
              ${order.status==="Delivered" && "bg-green-100 text-green-600"}
              ${order.status==="Shipped" && "bg-blue-100 text-blue-600"}
              ${order.status==="Cancelled" && "bg-red-100 text-red-600"}
            `}>
              {order.status}
            </span>

            <p className="font-semibold">{order.price}</p>

          </div>

        </div>

      ))}

    </div>

  );
}

export default Orders;