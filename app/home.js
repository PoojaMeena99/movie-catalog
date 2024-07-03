import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/Login">
            <a>Login</a>
          </Link>
        </li>
        <li>
          <Link href="/registration">
            <a>Registration</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
