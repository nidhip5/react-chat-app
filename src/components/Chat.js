import React from "react";

const Chat = ({ item }) => {
  return (
    <div className="grid grid-cols-[40px,1fr,0.5fr] gap-5 px-4 py-6 border border-b-gray-100 border-l-0 border-r-0 border-t-0">
      <img src={item.image} alt="" className="rounded-full h-10 w-10" />
      <div className="">
        <div className="text-black">{item.name}</div>
        <div className="text-orange-400 text-xs">{item.message}</div>
      </div>
      <div className="grid justify-items-end gap-0.5">
        <span className="text-xs text-gray-400">2 min ago</span>
        <span className="h-4 w-4 bg-orange-400 text-white text-xs rounded-full flex items-center justify-center">
          1
        </span>
      </div>
    </div>
  );
};

export default Chat;
