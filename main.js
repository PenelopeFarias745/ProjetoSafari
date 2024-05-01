function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LEu0sf8oX/model.json', modelReady)
}

function modelReady()
{
    classifier.classify(gotResults);
    console.log("Modelo pronto");
}

function gotResults(error, results)
{
    if(error)
    {
        console.error;
    }
    else
    {
        console.log(results);

        colorRed = Math.floor(Math.random() * 255) + 1;
        colorBlue = Math.floor(Math.random() * 255) + 1;
        colorGreen = Math.floor(Math.random() * 255) + 1;

        document.getElementById("animalResult").innerHTML = results[0].label;
        document.getElementById("animalPrecision").innerHTML = (results[0].confidence*100).toFixed(2) + " %";
        document.getElementById("animalResult").style.color = "rgb("+colorRed+", "+colorBlue+", "+colorGreen+")";
        document.getElementById("animalPrecision").style.color = "rgb("+colorRed+", "+colorBlue+", "+colorGreen+")";

        img = document.getElementById('safari')
        img1 = document.getElementById('giraffe')
        img2 = document.getElementById('hyena')
        img3 = document.getElementById('zebra')
        img4 = document.getElementById('elephant')

        if(results[0].label == "Background Noise")
        {
            img.src = 'safari.png';
            img1.src = 'lion.webp';
            img2.src = 'hyena1.jpg';
            img4.src = 'elephant1.jpg';
            img3.src = 'zebra1.webp';
        }
        else if(results[0].label == "Zebra")
        {
            img.src = 'safari1.webp';
            img1.src = 'lion.webp';
            img2.src = 'hyena1.jpg';
            img4.src = 'elephant1.jpg';
            img3.src = 'zebra.gif';
        }
        else if(results[0].label == "Elefante")
        {
            img.src = 'safari1.webp';
            img1.src = 'lion.webp';
            img2.src = 'hyena1.jpg';
            img4.src = 'elephant.gif';
            img3.src = 'zebra1.webp';
        }
        else if(results[0].label == "Leão")
        {
            img.src = 'safari1.webp';
            img1.src = 'lion.gif';
            img2.src = 'hyena1.jpg';
            img4.src = 'elephant1.jpg';
            img3.src = 'zebra1.webp';
        }
        else if(results[0].label == "Hiena")
        {
            img.src = 'safari1.webp';
            img1.src = 'lion.webp';
            img2.src = 'hyena.webp';
            img4.src = 'elephant1.jpg';
            img3.src = 'zebra1.webp';
        }
    }
}