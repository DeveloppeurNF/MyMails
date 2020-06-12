// Compteur
var nombremessage = document.getElementsByClassName('Message').length;
document.getElementById('NumberMessage').textContent = nombremessage
// Compteur

// Supression messages
for (var i = 0;i<document.getElementsByClassName('trash').length;i++) {
    document.getElementsByClassName('trash')[i].addEventListener("click",
    function(){

        this.parentNode.remove()
        nombremessage = document.getElementsByClassName('Message').length;
        document.getElementById('NumberMessage').textContent = nombremessage

        }
    );
}
// Supression messages

// Ajout Message

document.getElementById('ButtonAddMessage').addEventListener("click",
function(){

    if (document.getElementById('inputNewmessage').value !="") {
    console.log("Le message envoyé est : "+document.getElementById('inputNewmessage').value);
    

    // Création d'un nouveau message
    
    var newdiv = document.createElement('div');
    //Création d'une div
    newdiv.className = "Message";
    // création d'une classe du nom de Message.
    document.getElementById("ListMessages").append(newdiv);
    // récupérer l'élément qui comporte l'id : ListMessages et lui ajouter newdiv et son contenue
    
    var avatar = document.createElement("img");
    avatar.className = "avatar";
    avatar.src = "./Assets/avatar-1.jpg";
    newdiv.append(avatar);

    var divcontenue = document.createElement("div");
    divcontenue.className = "divcontenue";
    newdiv.append(divcontenue);
    
    var pseudo = document.createElement("h4");
    pseudo.className = "Pseudo";
    pseudo.textContent = "Martin MOORE";
    divcontenue.append(pseudo);

    
    var message = document.createElement("p");
    message.className= "MessageText";
    message.textContent = document.getElementById('inputNewmessage').value;
    divcontenue.append(message);

    var trash = document.createElement("img");
    trash.className="trash";
    trash.src="./Assets/trash.png";
    newdiv.append(trash);
    // Création d'un nouveau message

    // Actualisation du compteur
    nombremessage = document.getElementsByClassName('Message').length;
    document.getElementById('NumberMessage').textContent = nombremessage;
    // Actualisation du compteur

    // rajout mécanique supression
    trash.addEventListener("click",
    function(){
            this.parentNode.remove()
            nombremessage = document.getElementsByClassName('Message').length;
            document.getElementById('NumberMessage').textContent = nombremessage;
        }
     );

    }else{
        window.alert("Hello c'est mieux d'envoyer un message non vide.")
    }
    }
);
