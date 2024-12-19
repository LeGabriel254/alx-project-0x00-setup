import { UserProps } from "@/interfaces";

interface UserCardProps {
  user: UserProps; // The `user` prop is an object of type `UserProps`
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p className="text-sm text-gray-600">Username: {user.username}</p>
      <p className="text-sm text-gray-600">Email: {user.email}</p>
      <p className="text-sm text-gray-600">Phone: {user.phone}</p>
      <p className="text-sm text-gray-600">Website: {user.website}</p>
      <p className="text-sm text-gray-600">
        Address: {user.address.street}, {user.address.city}
      </p>
      <p className="text-sm text-gray-600">Company: {user.company.name}</p>
    </div>
  );
};

export default UserCard;
