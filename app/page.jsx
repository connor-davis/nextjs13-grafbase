import { auth } from "@clerk/nextjs";

const Home = () => {
  const { userId } = auth();

  return (
    <section>
      <h1>
        User Id: <span className="font-semibold">{userId}</span>
      </h1>
      <h1>Categories</h1>
      <h1>Posts</h1>
      <h1>Pagination</h1>
    </section>
  );
};

export default Home;
