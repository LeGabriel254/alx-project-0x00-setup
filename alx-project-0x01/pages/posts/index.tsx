import PostCard from "@/components/common/PostCard";
import {Header} from "@/components/layout/Header";
import { PostProps } from "@/interfaces";
import UserCard from '@/components/common/UserCard';  
import { UserProps } from '@/interfaces';  
interface UsersProps {
  users: UserProps[];
}

const Posts: React.FC<PostProps[]> = ({ posts }) => {
  console.log(posts)
  return (
    <div className="flex flex-col h-screen">
      <Header />
     
      <main className="p-4">
        <div className="flex justify-between">
        <h1 className=" text-2xl font-semibold">Post Content</h1>
        <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
              <PostCard title={title} body={body} userId={userId} id={id} key={key} />
            ))
          }
        </div>
      </main>
    </div>
  )
}
const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Users List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
            address={user.address}
            phone={user.phone}
            website={user.website}
            company={user.company}
          />
        ))}
      </div>
    </div>
  );
};


export async function getStaticProps() {
  // Fetch data from both URLs using Promise.all to handle concurrent requests
  const [postsResponse, usersResponse] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/users"),
  ]);

  // Parse the JSON data from both responses
  const posts = await postsResponse.json();
  const users = await usersResponse.json();

  // Return the data as props to the page component
  return {
    props: {
      posts,
      users,
    },
  };
}


export default Posts;