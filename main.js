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
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}