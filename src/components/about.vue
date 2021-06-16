<template>
  <div>
    <h1>test</h1>
    <pre>{{ data }}</pre>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: {},
    };
  },
  created() {
    axios.get('http://localhost:4098/api/about')
      .then((res) => {
        console.log(res);
        this.data = res.data.coucou;
      });
  },
};
</script>
