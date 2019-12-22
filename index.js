const appIdea = document.querySelector("#appIdea");
const description = document.querySelector("#description");

db.collection("Ideas").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        appIdea.innerHTML += doc.data().name
    });
});
test.firestore.js;