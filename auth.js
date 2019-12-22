db.collection('data').get().then(snapshot => {
	console.log(snapshot.docs);
})