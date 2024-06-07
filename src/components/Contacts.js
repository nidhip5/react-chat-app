import React from "react";

const Contacts = ({ item }) => {
  return (
    <div className="grid grid-cols-[40px,1fr,0fr] gap-5 p-4 border border-b-gray-100 border-l-0 border-r-0 border-t-0">
      <img src={item.image} alt="" className="rounded-full h-10 w-10" />
      <div className="">
        <div className="text-black">{item.name}</div>
        <div className="text-gray-400 text-xs">{item.lastSeen}</div>
      </div>
      <div className="text-sm text-orange-400">Message</div>
    </div>
  );
};

export default Contacts;
