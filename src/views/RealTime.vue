<template>
  <h1>Real-Time Data</h1>
  <div v-for="post in posts" :key="post.id">
    <div>{{ post.title }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";
export default {
  setup() {
    const posts = ref([]);

    projectFirestore
      .collection("posts")
      .orderBy("createdAt", "desc")
      //real time listener to a store colletion
      //what the colletion looks like at any given time
      //connect to a collection and listen for snapshots being sent to us using this method one snapshot
      .onSnapshot((snap) => {
        let docs = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        posts.value = docs;
      });

    return { posts };
  },
};
</script>
