let express = require("express");
let app = express();

let majors = {
    "Science": {
        "Computer Science": "Major",
        "Applied Mathematics": "Minor",
        "Biology": "Major",
        "Chemistry": "Major",
        "Computer Science": "Minor",
        "Mathematics": "Major",
        "Natural Science": "Minor",
        "Physics": "Major",
        "Psychology": "Major",
        "Psychology": "Minor"
    },
    "Engineering": {
        "Bioengineering": "Major",
        "Civil Engineering": "Major",
        "Computer Engineering": "Major",
        "Electrical Engineering": "Major",
        "General Engineering": "Major",
        "Mechanical Engineering": "Major",
        "Engineering": "Minor"
    },
    "Arts and Humanities": {
        "Anthropology": "Minor",
        "Arabic": "Minor",
        "Art History": "Minor",
        "Art Practice": "Minor",
        "Chinese": "Minor",
        "Creative Writing": "Minor",
        "Film and New Media": "Minor",
        "Design": "Minor",
        "History": "Minor",
        "Literature": "Minor",
        "Music": "Minor",
        "Philosophy": "Minor",
        "Theater": "Minor",
        "History": "Major",
        "Art and Art History": "Major",
        "Film and New Media": "Major",
        "Interactive Media": "Major",
        "Literature and Creative Writing": "Major",
        "Music": "Major",
        "Philosophy": "Major",
        "Theater": "Major"
    },
    "Social Science": {
        "Economics": "Major",
        "Business, Organizations and Society": "Major",
        "Political Science": "Major",
        "Social Research and Public Policy": "Major",
        "Economics": "Minor",
        "Political Science": "Minor",
        "Social Research and Public Policy": "Minor"
    },
    "Multidisciplinary": {
        "Arab Crossroads Studies": "Major",
        "Legal Studies": "Major",
        "Urbanization": "Minor",
        "African Studies": "Minor",
        "Ancient World": "Minor",
        "Arab Crossroads Studies": "Minor",
        "Arab Music Studies": "Minor",
        "Environmental Studies": "Minor",
        "Heritage Studies": "Minor",
        "Interactive Media": "Minor",
        "Legal Studies": "Minor",
        "Peace Studies": "Minor",
        "Sound and Music Computing": "Minor"
    }
}

app.use("/", express.static("public"))

app.get("/majors", (req,res) => {

    console.log(req.query.majorName);

    let major = req.query.majorName;

    if (majors[major]) {
        res.json(majors[major])        
    } else
    {
        res.json({"name": "Error, The Course does not exist"})
    }

})

app.listen(4000, () => {
    console.log("Server Port Is Up and Running!")
})