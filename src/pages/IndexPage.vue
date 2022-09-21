<template>
  <q-page class="row items-center justify-evenly">
    <q-table
      title="Fake Data"
      :rows="fakePosts"
      :columns="columns"
      row-key="id"
      wrap-cells
    />
  </q-page>
</template>

<script setup lang="ts">
import { QTableProps } from 'quasar';
import { useFakeStore } from 'src/stores/fake-store';
import { computed, onMounted } from 'vue';

const columns: QTableProps['columns'] = [
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left',
    field: 'id',
    sortable: true,
    style: 'width: 10%',
  },
  {
    name: 'useId',
    align: 'center',
    label: 'User Id',
    field: 'userId',
    sortable: true,
    style: 'width: 10%',
  },
  {
    name: 'title',
    align: 'left',
    label: 'Title',
    field: 'title',
    sortable: true,
    style: 'width: 30%',
  },
  {
    name: 'body',
    align: 'left',
    label: 'Body',
    field: 'body',
    style: 'width: 50%',
  },
];

const fakeStore = useFakeStore();
const fakePosts = computed(() => fakeStore.list);

onMounted(() => {
  console.log('APP MODE', process.env.APP_MODE);
  fakeStore.fetchFakePosts().then((res) => {
    console.log('FAKE RESPONSE =>', res);
  });
});
</script>
