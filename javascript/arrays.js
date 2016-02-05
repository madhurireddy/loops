//create an array
var colorList = ["Red", "Black", "White", "Blue", "Ocher", "Yellow", "Pink"];

var groceriesList = ["Coffee", "Milk", "Orange Juice", "Apples", "Quinoa", "Greens", "Yogurt"];

var headersList = ["Countries", "Capitals", "Population", "Language"];
var countriesList = ["USA", "Sweden", "Canada", "Germany"];
var capitalsList = ["Washington D.C.", "Stockholm", "Ottawa", "Berlin"];
var populationList = ["309 million", "9 million", "35 million", "80 million"];
var languagesList = ["English", "Swedish", "English,French", "German"];


    
function buildTable()
{
    var tableDiv = document.getElementById("tableDiv");
  
    var headerRow = '<tr><th>'+ headersList[0] + '</th><th>'+ headersList[1] + '</th><th>' + headersList[2] +                         '</th><th>' + headersList[3] + '</th></tr>';
   
  
    var columnsList = new Array(4);
    for(var i=0; i < headersList.length; i++)
    {
        columnsList[i] = '<td>'+ countriesList[i] + '</td><td>'+ capitalsList[i] + '</td><td>' + populationList[i] +                   '</td><td>' + languagesList[i] + '</td>';
    }
    
  
    var rows = "";
    for(var i=0; i < headersList.length; i++)
    {
        rows += '<tr>' + columnsList[i] + '</tr>';
    }
    console.log('headerRow:'+ headerRow);
    console.log('rows:'+ rows);
    
    var output = '<table>' + headerRow + rows + '</table>';

    
    tableDiv.innerHTML = output;
}

var imageList = new Array();
imageList[0] = "images/drawing/thumbs/artwork_1.jpg";
imageList[1] = "images/drawing/thumbs/artwork_2.jpg";
imageList[2] = "images/drawing/thumbs/artwork_3.jpg";
imageList[3] = "images/drawing/thumbs/artwork_4.jpg";
imageList[4] = "images/drawing/thumbs/artwork_5.jpg";
imageList[5] = "images/drawing/thumbs/artwork_6.jpg";
imageList[6] = "images/drawing/thumbs/artwork_7.jpg";
imageList[7] = "images/drawing/thumbs/artwork_8.jpg";
imageList[8] = "images/drawing/thumbs/artwork_9.jpg";
imageList[9] = "images/drawing/thumbs/artwork_10.jpg";
imageList[10] = "images/drawing/thumbs/artwork_11.jpg";
imageList[11] = "images/drawing/thumbs/artwork_12.jpg";
imageList[12] = "images/drawing/thumbs/artwork_13.jpg";
imageList[13] = "images/drawing/thumbs/artwork_14.jpg";
imageList[14] = "images/drawing/thumbs/artwork_15.jpg";
imageList[15] = "images/drawing/thumbs/artwork_16.jpg";
imageList[16] = "images/drawing/thumbs/artwork_17.jpg";

function buildGroceriesList()
{
    var groceriesDiv = document.getElementById("groceries");
    
    var output = "";
    for(var i=0; i < groceriesList.length; i++)
    {
        output += '<li>' + groceriesList[i] + '</li>';
    }
    groceriesDiv.innerHTML = output;
}




function buildThumbnails()
{
    var thumbsDiv = document.getElementById("thumbs");
    var output = "";
    for(var i=0; i < imageList.length; i++)
    {
        output += '<img src="' + imageList[i] + '" />';
    }
    thumbsDiv.innerHTML = output;
}



window.onload = function()
{
    buildThumbnails();
    buildGroceriesList();
    buildTable();
    
};