function startClassification() {

navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/j-mFxpfM7/model.json', modelReady);


}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);

    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'I can hear -'+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy -'+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
+random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('elliepic.png');
    img1 = document.getElementById('pocopic.png');
    img2 = document.getElementById('Patopic.png');
    img3 = document.getElementById('loupy.png');
   
if (results[0].label == "page flipping") {
    img.src = 'ellie.gif';
    img1.src = 'pocopic.png'
    img2.src = 'Patopic.png'
    img3.src = 'loupy.png'

   
}
 else if (results[0].label == "sucking") {
        img.src = 'elliepic.png';
        img1.src = 'pocoyo.gif'
        img2.src = 'Patopic.png'
        img3.src = 'loupy.png'
    }

    else if (results[0].label == "punching") {
        img.src = 'elliepic.png';
        img1.src = 'pocopic.png'
        img2.src = 'pato.gif'
        img3.src = 'loupy.png'
    }
else {
        img.src = 'elliepic.png';
        img1.src = 'pocopic.png'
        img2.src = 'Patopic.png'
        img3.src = 'Loula.gif'
    }
}


}