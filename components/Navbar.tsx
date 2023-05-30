import { FC } from 'react';

import Link from 'next/link';

import { useRouter } from 'next/router';

import Image from 'next/image';

import styles from '../styles/Navbar.module.scss';

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar: FC = () => {
  const { pathname } = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <a href="https://zhuravlovalex.github.io/my-site-project/">
          <Image src="/Cadillac_logo.png" width={60} height={60} alt="logo" />
        </a>
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link legacyBehavior key={id} href={path}>
            <a className={pathname === path ? styles.active : null}>{title}</a>
          </Link>
        ))}
        {/* <Link legacyBehavior href="/">
          <a>Home</a>
        </Link>
        <Link legacyBehavior href="/posts">
          <a>Posts</a>
        </Link>
        <Link legacyBehavior href="/contacts">
          <a>Contacts</a>
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
