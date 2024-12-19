// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces"; // UserProps interface

interface UserCardProps {
  user: UserProps;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-md w-72">
      <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
      <p className="text-gray-600"><strong>Username:</strong> {user.username}</p>
      <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
      <p className="text-gray-600"><strong>Phone:</strong> {user.phone}</p>
      <p className="text-gray-600"><strong>Website:</strong> {user.website}</p>

      <div className="mt-4">
        <h4 className="font-semibold text-gray-700">Address</h4>
        <p className="text-gray-600">{user.address.street}, {user.address.suite}</p>
        <p className="text-gray-600">{user.address.city} - {user.address.zipcode}</p>
        <p className="text-gray-600">Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold text-gray-700">Company</h4>
        <p className="text-gray-600">{user.company.name}</p>
        <p className="text-gray-600">{user.company.catchPhrase}</p>
        <p className="text-gray-600">{user.company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
