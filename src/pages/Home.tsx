import React from "react";
import FriendsIcon from "../components/svg/FriendsIcon";
import GarganLogo from "../components/svg/GarganLogo";
import UserIcon from "../components/svg/UserIcon";

export const Home = () => (
  <div className="flex justify-around p-2">
    <GarganLogo />
    <UserIcon />
    <FriendsIcon />
  </div>
);
