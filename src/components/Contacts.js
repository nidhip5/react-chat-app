import React from "react";
import { MdAdd } from "react-icons/md";
import { users } from "../constants/Users";
import { FaRegUser } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="h-screen grid grid-rows-[0fr,1fr,0fr]">
      <div className="p-4 flex justify-between items-center border border-b-gray-100">
        <MdAdd className="text-3xl text-gray-400" />
        <span className="font-semibold text-black text-lg">Contacts</span>
        <img src="/dummy1.jpeg" alt="" className="rounded-full h-10 w-10" />
      </div>
      {users?.map((item) => (
        <div className="grid grid-cols-[0.5fr,1fr,0fr] gap-2 p-4">
          <img src={item.image} alt="" className="rounded-full h-10 w-10" />
          <div className="">
            <div className="text-black">{item.name}</div>
            <div className="text-gray-400 text-xs">{item.lastSeen}</div>
          </div>
          <div className="text-sm text-orange-400">Message</div>
        </div>
      ))}
      <div className="p-4 flex justify-between">
        <div className="grid justify-items-center">
          <FaRegUser />
          <span className="text-orange-400">Contacts</span>
        </div>
        <div className="grid justify-items-center">
          <FaRegUser />
          <span className="text-black">Chats</span>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
