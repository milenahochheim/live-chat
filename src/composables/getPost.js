import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let response = await projectFirestore.collection("posts").doc(id).get();

      post.value = { ...response.data(), id: response.id };

      if (!response.exists) {
        throw Error("That post does not exist");
      }
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
