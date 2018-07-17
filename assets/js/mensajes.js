function sendMessage(){
    const currentUser = firebase.auth().currentUser;
    const messageAreaText = messageArea.value;

    //Para tener una nueva llave en la colección messages
    const newMessageKey = firebase.database().ref().child('messages').push().key;

    firebase.database().ref(`messages/${newMessageKey}`).set({
        creator : currentUser.uid,
        creatorName : currentUser.displayName,
        text : messageAreaText
    });
}