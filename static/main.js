//equal to counter in retrieve and passes down to plusOne
var counterGlobal;

// For give and get idea buttons
function onButtonClick(){
	if(document.getElementById('appName').className == "hide"){
		document.getElementById('userEmail').className="show";
		document.getElementById('optional').className="show";
		document.getElementById('appName').className="show";
		document.getElementById('ideaInput').className="show";
		document.getElementById('button2').className="show";
		document.getElementById('reset1').className="show";
	}
	else{
		document.getElementById('userEmail').className="hide";
		document.getElementById('optional').className="hide";
		document.getElementById('appName').className="hide";
		document.getElementById('ideaInput').className="hide";
		document.getElementById('button2').className="hide";
		document.getElementById('reset1').className="hide";
	}
}

//no input entered
function empty(){
	var x;
	var y;
	x = document.getElementById("ideaInput").value;
	y = document.getElementById("appName").value;
	if (x == "" && y =="") {
		alert("You didn't enter an idea and app name");
        return false;
	}
    else if (x == "") {
        alert("You didn't enter an idea");
        return false;
    }
    else if (y==""){
    	alert("You didn't enter an app name");
        return false;
    };
}

// Gets random app from database
function retrieve(){
	const appIdea = document.querySelector("#appIdea");
	const counterUp = document.querySelector("#counterUp");
	var counter = Math.floor(Math.random() * 58); //number of docs in database
	counterGlobal = counter;
	var docRef = db.collection("myIdeas").doc(counter.toString());
	docRef.get().then(function(doc) {
		if (doc.exists) {
			console.log("counter: " + counter);
			appIdea.innerHTML = "<div align='center' class ='appIdea' id='apps'><p><b> App: " + doc.data().Idea + "<br><br>" + doc.data().Description + "</b></p></div>";
				document.getElementById('apps').style.fontFamily = "Courier New";
				document.getElementById('apps').style.marginBottom = "3%";
				document.getElementById('apps').style.color = "white";
				//shows upArrow
				document.getElementById('uparrow').className="show";
				document.getElementById('counterUp').className="show";
				// initializing arrow color and count
				counterUp.innerHTML = doc.data().upvote;
				uparrow.style.color = "white";
			
		} else {
			// doc.data() will be undefined in this case
			console.log("No such document!");
		}
	}).catch(function(error) {
			console.log("Error getting document:", error);
	});

}

//adding one for a click to up arrow and if double clicked goes back to original count
function plusOne(){
	const counterUp = document.querySelector("#counterUp");
	if (uparrow.style.color != "yellow"){
		for (const btn of document.querySelectorAll('#uparrow')) {
		  	var docRef = db.collection("myIdeas").doc(counterGlobal.toString());
			docRef.get().then(function(doc) {
			if (doc.exists) {
				console.log("counterGlobal: " + counterGlobal);
				docRef.update({
					upvote: doc.data().upvote + 1
				})
				counterUp.innerHTML = doc.data().upvote + 1;
				uparrow.style.color = "yellow";
			}
		else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
		}).catch(function(error) {
				console.log("Error getting document:", error);
		});
		    
		}
	}
	//re-clicking up arrow
	else{
		for (const btn of document.querySelectorAll('#uparrow')) {
	  	var docRef = db.collection("myIdeas").doc(counterGlobal.toString());
		docRef.get().then(function(doc) {
		if (doc.exists) {
			console.log("counterGlobal2: " + counterGlobal);
			docRef.update({
				upvote: doc.data().upvote - 1
			})
			counterUp.innerHTML = doc.data().upvote - 1;
			uparrow.style.color = "white";

		}
		else {
				// doc.data() will be undefined in this case
				console.log("No such document!");
			}
		}).catch(function(error) {
				console.log("Error getting document:", error);
		});
		}
	}
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
