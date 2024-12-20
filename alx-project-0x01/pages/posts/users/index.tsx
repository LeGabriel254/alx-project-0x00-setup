// pages/users/index.tsx
import UserCard from '@/components/common/UserCard'; 
import { Header } from '@/components/layout/Header';
import { UserProps } from '@/interfaces'; 

interface UsersProps {
  users: UserProps[];
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div className="container mx-auto p-6">
      <Header />
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Users List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

// Fetch user data
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}


export default Users;
