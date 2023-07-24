import { db } from 'firebase/firebase';
import { ref, onValue} from 'firebase/database';

const starCountRef = ref(db, 'Gateway_location/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  const newPost = updateStarCount(postElement, data);
});
console.log(newPost);