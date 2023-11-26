import UserHeader from "../components/UserHeader";
import UserPosts from "../components/UserPosts";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPosts
        likes={200}
        replies={12}
        postImg={""}
        postTitle={"Hello Thread!"}
      />
      <UserPosts
        likes={200}
        replies={12}
        postImg={"/post3.png"}
        postTitle={"Hey, what do you think about this man"}
      />
      <UserPosts
        likes={200}
        replies={12}
        postImg={"/directorPro.jpeg"}
        postTitle={"I too fine abeg"}
      />
      <UserPosts
        likes={200}
        replies={12}
        postImg={"/post1.png"}
        postTitle={"Hey, Zuck!"}
      />
    </>
  );
};

export default UserPage;
