import { AxiosResponse } from 'axios';
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';

interface FakeResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type PiniaState = {
  list: FakeResponse[];
};

export const useFakeStore = defineStore('fakeData', {
  state: (): PiniaState => ({
    list: [],
  }),
  actions: {
    fetchFakePosts(): Promise<FakeResponse[]> {
      return new Promise((resolve, reject) => {
        api
          .get('https://jsonplaceholder.typicode.com/posts')
          .then((response: AxiosResponse<FakeResponse[]>) => {
            this.list = response.data;
            resolve(response.data);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
  },
});
