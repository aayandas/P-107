//https://teachablemachine.withgoogle.com/models/O4Ic8zKk8/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/O4Ic8zKk8/model.json', modelReady);   
}

function modelReady(){
    classifier.classify(gotResults);
}