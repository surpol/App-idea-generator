
// For give and get idea buttons
function onButtonClick(){
	if(document.getElementById('appName').className == "hide"){
		document.getElementById('appName').className="show";
		document.getElementById('ideaInput').className="show";
		document.getElementById('button2').className="show";
		document.getElementById('reset1').className="show";
	}
	else{
		document.getElementById('appName').className="hide";
		document.getElementById('ideaInput').className="hide";
		document.getElementById('button2').className="hide";
		document.getElementById('reset1').className="hide";
	}
}

// Gets random app from database
function retrieve(){

	const appIdea = document.querySelector("#appIdea");
	var counter = Math.floor(Math.random() * 43); //number of docs in database
	var docRef = db.collection("myIdeas").doc(counter.toString());
	docRef.get().then(function(doc) {
		if (doc.exists) {
			console.log("counter " + counter);
			appIdea.innerHTML = "<div align='center' class ='appIdea' id='apps'><p><b> App: " + doc.data().Idea + "<br><br>" + doc.data().Description + "</b></p></div>";
				document.getElementById('apps').style.fontFamily = "Courier New";
				document.getElementById('apps').style.marginBottom = "3%";
				document.getElementById('apps').style.color = "white";
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}).catch(function(error) {
			console.log("Error getting document:", error);
	});
}

// For contact form 
function openForm() {
	if(document.getElementById('name').className == "hide"){
		document.getElementById('name').className="show";
		document.getElementById('email').className="show";
		document.getElementById('feedback').className="show";
		document.getElementById('button3').className="show";
		document.getElementById('button4').className="show";
	}	
	else{
		document.getElementById('name').className="hide";
		document.getElementById('email').className="hide";
		document.getElementById('feedback').className="hide";
		document.getElementById('button3').className="hide";
		document.getElementById('button4').className="hide";
	}
}