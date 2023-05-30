import { FC } from 'react';

import { GetStaticProps } from 'next';

import Heading from '../../components/Heading';

import Head from 'next/head';

import Link from 'next/link';

import { contactType } from '../../types';

type contactsTypeProps = {
  contacts: [contactType];
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { contacts: data },
  };
};

const Contacts: FC<contactsTypeProps> = ({ contacts }) => {
  // const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => res.json())
  //     .then((res) => setContacts(res));
  // }, []);

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {contacts.map(({ id, name, email }) => (
          <li key={id}>
            {/* <p>
              {name}({email}){' '}
            </p> */}
            <Link href={`/contacts/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
