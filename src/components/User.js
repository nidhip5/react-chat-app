import React, { useState } from "react";
import Contacts from "./Contacts";
import Chat from "./Chat";
import { BsChat } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { users } from "../constants/Users";
import { MdAdd } from "react-icons/md";

const User = () => {
  const [tab, setTab] = useState("contacts");
  return (
    <div className="h-screen relative">
      <div className="px-4 py-3 flex justify-between items-center border border-b-gray-200 border-t-0 border-l-0 border-r-0 fixed top-0 z-40 bg-white w-full">
        <MdAdd className="text-3xl text-gray-400" />
        <span className="font-semibold text-black text-lg">
          {tab == "contacts" ? "Contacts" : "Chat"}
        </span>
        <img src="/dummy1.jpeg" alt="" className="rounded-full h-10 w-10" />
      </div>
      <div className="mt-16 overflow-scroll h-[calc(100vh-146px)]">
        {users?.map((item) => {
          if (tab == "contacts") {
            return <Contacts item={item} />;
          } else {
            return <Chat item={item} />;
          }
        })}
      </div>
      <div className="px-4 py-3 flex justify-between fixed bottom-0 bg-white w-full border border-t-gray-200 border-b-0 border-r-0 border-l-0">
        <div
          className="grid justify-items-center"
          onClick={() => setTab("contacts")}
        >
          <FaRegUser />
          <span
            className={`text-sm mt-1 ${
              tab == "contacts" ? "text-orange-400" : "text-black"
            }`}
          >
            Contacts
          </span>
        </div>
        <div
          className="grid justify-items-center"
          onClick={() => setTab("chat")}
        >
          <BsChat />
          <span
            className={`text-sm mt-1 ${
              tab == "chat" ? "text-orange-400" : "text-black"
            }`}
          >
            Chats
          </span>
        </div>
      </div>
    </div>
  );
};

export default User;
