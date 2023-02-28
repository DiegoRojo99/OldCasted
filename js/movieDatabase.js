
const actorsDatabase = {
    LeoDiCaprio:{name:"Leonardo Di Caprio", photo:"../img/LeoDiCaprio.jpg"},
    ElliotPage:{name:"Elliot Page", photo:"../img/ElliotPage.jpg"},
    GordonLevitt:{name:"Joseph Gordon-Levitt", photo:"../img/GordonLevitt.jpg"},
    CillianMurphy:{name:"Cillian Murphy", photo:"../img/CillianMurphy.jpg"},
    TomHardy:{name:"Tom Hardy", photo:"../img/TomHardy.jpg"},
    JackQuaid:{name:"Jack Quaid", photo:"../img/JackQuaid.jpg"},
    JenniferLawrence:{name:"Jennifer Lawrence", photo:"../img/JenniferLawrence.jpg"},
    MichaelCaine:{name:"Michael Caine", photo:"../img/MichaelCaine.jpg"},
    ChristianBale:{name:"Christian Bale", photo:"../img/ChristianBale.jpg"},
    GaryOldman:{name:"Gary Oldman", photo:"../img/GaryOldman.jpg"},
    HeathLedger:{name:"Heath Ledger", photo:"../img/HeathLedger.jpg"}


}

const movieDatabase = {
    movie1:{
        title:"The Hunger Games", 
        actors:[
            actorsDatabase.JackQuaid,
            actorsDatabase.JenniferLawrence
            
        ],
        spanishTitle:"Los Juegos del Hambre"
    }, 
    movie2:{
        title:"Back To The Future", 
        actors:[
            {name:"Emmet Brown", photo:"../img/"}
        ],
        spanishTitle:"Regreso Al Futuro"
    },
    movie3:{
        title:"Inception", 
        actors:[
            actorsDatabase.TomHardy,
            actorsDatabase.CillianMurphy,
            actorsDatabase.GordonLevitt,
            actorsDatabase.ElliotPage,
            actorsDatabase.LeoDiCaprio,
            actorsDatabase.MichaelCaine
        ],
        spanishTitle:"Origen"
    },
    movie4:{
        title:"The Dark Knight",
        actors:[
            actorsDatabase.CillianMurphy,
            actorsDatabase.MichaelCaine,
            actorsDatabase.HeathLedger,
            actorsDatabase.ChristianBale,
            actorsDatabase.GaryOldman
        ],
        spanishTitle:"El Caballero Oscuro"  
    },
    
};
