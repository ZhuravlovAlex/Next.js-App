export type contactType = {
  id: string;
  name: string;
  email: string;
  address: addressType;
};

export type addressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type postType = {
  id: string;
  title: string;
  body: string;
};
