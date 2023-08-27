import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Ninjas.module.css';
const ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <Link href={`/ninjas/${ninja.id}`} className={styles.single}>
            <h3>{ninja.name} </h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    props: { ninjas: data },
  };
};
export default ninjas;
