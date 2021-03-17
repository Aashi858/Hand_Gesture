Webcam.set({
    width : 250,
    height : 200,
    image_format : "png",
    png_quality : 90
});
camera = document.getElementById("camera");
Webcam.attach(camera);

function captureImage(){
    Webcam.snap(function(data_url){
        document.getElementById("snapshot").innerHTML = "<img id = 'captured_image' src =" + data_url + ">";
    })
}

console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/HyRNZQ4cX/model.json",model_loaded);
function model_loaded(){
    console.log("Model Loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "The first prediction is" + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function predict(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("gesture").innerHTML = results[0].label;
        prediction = results[0].label;
        speak();
      if(results[0].label == "Amazing"){
           document.getElementById("gesture_image").innerHTML = "&#128076";
           console.log("Amazing");
     }
     if(results[0].label == "Best"){
        document.getElementById("gesture_image").innerHTML = "&#128077";
        console.log("Best");
     }
     if(results[0].label == "Victory"){
        document.getElementById("gesture_image").innerHTML = "&#9996";
        console.log("Victory");
     }
   }
 }