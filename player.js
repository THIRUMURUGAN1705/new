let playerImage=document.querySelector("#image");
let playerName=document.querySelector(".name");
let playerCountry=document.querySelector(".country");
let player=document.querySelector(".player")

allPlayerDetails=
[
    {
        Image:"images/1.jpg",
        name:"MS Dhoni",
        country:"India"
    },
    {
        Image:"images/2.png",
        name:"Virat Kholi",
        country:"India"
    },
    {
        Image:"images/3.jpg",
        name:"Faf Du Plessis",
        country:"South Africa"
    },
    {
        Image:"images/4.jpg",
        name:"Lasith Malinga",
        country:"Srilanka"
    },
    {
        Image:"images/5.jpg",
        name:"Gautham Gambhir ",
        country:"India"
    },
    {
        Image:"images/6.jpg",
        name:"Brendon Mccullum",
        country:"New zeland"
    },
    {
        Image:"images/7.jpg",
        name:"Sachin Tendulkhar",
        country:"India"
    },
    {
        Image:"images/8.jpg",
        name:"Dinesh Karthick",
        country:"India"
    },
    {
        Image:"images/9.jpg",
        name:"Misbah Ul Haq",
        country:"Pakistan"
    },
    {
        Image:"images/10.png",
        name:"Steve Smith",
        country:"Australlia"
    },
    {
        Image:"images/11.jpg",
        name:"Shakib Al Hasan",
        country:"Bangladesh"
    },
    {
        Image:"images/12.png",
        name:"Sam Curran",
        country:"England"
    },
    {
        Image:"images/13.png",
        name:"Andre Russel",
        country:"West Indies"
    }
];


let index_no=0;

function loadDetails(index_no)
{
    playerImage.src=allPlayerDetails[index_no].Image;
    playerName.innerHTML=allPlayerDetails[index_no].name;
    playerCountry.innerHTML=allPlayerDetails[index_no].country;
}

loadDetails(index_no);

function next()
{
    if(index_no<allPlayerDetails.length-1)
    {
        index_no+=1;
        loadDetails(index_no);
    }
    else
    {
        index_no=0;
        loadDetails(index_no);
    }
}

function previous()
{
    if(index_no==0)
    {
        index_no=allPlayerDetails.length-1;
        loadDetails(index_no);
    }
    else
    {
        index_no-=1;
        loadDetails(index_no);
    }
}