import {KEY, POINT_CARDS, POINT_USERS} from './consts';
import {Question} from './mockApi';

enum Type {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

interface LoadProps {
  type?: Type;
  url: string;
  data?: any;
}

export const load = (props: LoadProps) => {
  const {
    url,
    type= Type.GET,
    data,
  } = props;

  let fetchParametrs;
  switch (type) {
  case Type.GET:
    fetchParametrs = {
      method: Type.GET,
      headers: {'content-type': 'application/json'},
    };
    break;
  case Type.POST:
    fetchParametrs = {
      method: Type.POST,
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(data),
    };
    break;
  default:
    throw new Error('there is no such case!');
  }

  return fetch(url, fetchParametrs).then((res) => {
    if (res.ok) {
      return res.json();
    }
  });
};

export const getCards = () => {
  const url = `${KEY}${POINT_CARDS}`;
  return api.get(url);
};

export const getCard = (id: Question['id']) => {
  const url = `${KEY}${POINT_CARDS}/${id}`;
  return api.get(url);
};

export const getUsers = () => {
  const url = `${KEY}${POINT_USERS}`;
  return api.get(url);
};

export const api = {
  get(url: string) {
    return load({
      url,
      type: Type.GET,
    });
  },

  post(url: string, data: any) {
    return load({
      url,
      type: Type.POST,
      data,
    });
  },
};
