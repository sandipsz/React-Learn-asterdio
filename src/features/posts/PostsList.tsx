import { useAppSelector } from "@/app/hooks";

const PostsList = () => {
  const posts = useAppSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <article
      className="bg-sky-300 my-4 p-2 w-60 border border-blue-600 rounded-[10px]"
      key={post.id}
    >
      <h3 className="text-xl font-medium">{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ));
  return (
    <section className="mx-10 my-5">
      <h2 className="text-3xl  font-semibold">Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
