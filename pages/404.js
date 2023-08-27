import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // router.go(-1);
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div className='not-found'>
      <h1>Ooooops.....</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the <Link href='/'>Homepae</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
