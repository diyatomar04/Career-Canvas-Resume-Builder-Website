const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
require("dotenv").config();
const axios = require("axios");

//import { GoogleGenerativeAI } from '@google/generative-ai'; 

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
//console.log(process.env.GEMINI_API_KEY);
const app = express();
const port = 5000;

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // Use the appropriate model here
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Careercanvas',
    password: 'minor1',
    database: 'careercanvas'
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        throw err;
    }
    console.log('Connected to MySQL Database.');
});

app.get('/Steps', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML', 'Steps.html'));
});

app.get('/Choose_template', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML/Choose_Template_1.html'));
});


  app.get('/template_1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML/Detail_1.html'));
  });

  
app.get('/template_2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML/Detail_2.html'));
  });
  
  // Add routes for other templates as needed
app.get('/template_3', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML/Detail_3.html'));
  });

  app.get('/template_4', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML/Detail_4.html'));
  });
  
  app.get('/template_5', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML/Detail_5.html'));
  });
  
  // Add routes for other templates as needed
  app.get('/template_6', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML/Detail_6.html'));
  });

  app.get('/template_7', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML/Detail_7.html'));
  });
  
  app.get('/template_8', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML/Detail_8.html'));
  });
  
  app.get('/brown_page', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML/choose_brown_pg.html'));
});

app.get('/blue_page', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML/choose_blue_pg.html'));
});

app.get('/green_page', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML/choose_green_pg.html'));
});

app.get('/orange_page', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML/choose_orange_pg.html'));
});

app.get('/red_page', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/HTML/choose_red_pg.html'));
});

app.get('/template_1br', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'Detail_1_Brown.html'));
});

app.get('/template_2br', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'Detail_2_Brown.html'));
});

app.get('/template_3br', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'Detail_3_Brown.html'));
});

app.get('/template_4br', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'Detail_4_Brown.html'));
});

app.get('/template_5br', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'Detail_5_Brown.html'));
});

app.get('/template_6br', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'Detail_6_Brown.html'));
});

app.get('/template_1b', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'Detail_1_Blue.html'));
});

app.get('/template_1g', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'Detail_1_Green.html'));
});

app.get('/template_2g', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'Detail_2_Green.html'));
});

app.get('/template_4g', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'Detail_4_Green.html'));
});

app.get('/template_5gr', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'Detail_5_Green.html'));
});

app.get('/template_7or', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HTML', 'Detail_7_Oranges.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Home.html'));
});



app.post('/insertData', (req, res) => {
    console.log('Received data:', req.body);

    const inputData = req.body;

    const query = `
        INSERT INTO resumedata (
            fname, lname, mname, pin, city, country, phone, email, address,
            SchoolName_10, PERCENT_10, SchoolName_12, PERCENT_12,
            CGPA_Bachelors, CollegeName_Bachelors, Bachelors_Education,
            Checking_Master, CollegeName_Masters, CGPA_masters, Masters_Education,
            Job_Title1, Employer1, Joining_date1, Leaving_date1,
            Job_Title2, Employer2, Joining_date2, Leaving_date2,
            Job_Title3, Employer3, Joining_date3, Leaving_date3
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
        inputData.Output1, 
        inputData.Output2, 
        inputData.Output8, 
        inputData.Output3, 
        inputData.Output4,
        inputData.Output5, 
        inputData.Output6, 
        inputData.Output7, 
        inputData.Output9, 
        inputData.Output10,
        parseFloat(inputData.Output11) / 100,
        inputData.Output12, 
        parseFloat(inputData.Output13) / 100,
        parseFloat(inputData.Output14),
        inputData.Output15, 
        inputData.Output16, 
        inputData.Output17 === 'Yes' ? 1 : 0, // Convert 'No' to 0 and 'Yes' to 1
        inputData.Output18, 
        parseFloat(inputData.Output19),
        inputData.Output20,
        inputData.Output21, 
        inputData.Output22, 
        inputData.Output23, 
        inputData.Output24,
        inputData.Output25, 
        inputData.Output26, 
        inputData.Output27, 
        inputData.Output28, 
        inputData.Output29, 
        inputData.Output30,
        inputData.Output31, 
        inputData.Output32
];
    

    db.query(query, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).json({ message: 'Error inserting data' });
            return;
        }
        res.json({ message: 'Data inserted successfully', result });
    });
});


app.get('/signup_pg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', '/HTML/signup_pg.html'));
});

app.post('/signup_pg', (req, res) => {
    const { fname, email, password } = req.body;

    const sql = 'INSERT INTO users (fname, email, password) VALUES (?, ?, ?)';
    db.query(sql, [fname, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting the database:', err);
            return res.redirect('/signup?error=Database%20error');
        }
        else{
       console.log('User data inserted:', result);
        return res.redirect('/login');
        }
    });
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'HTML/login.html'));
});


app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';

    db.query(sql, [email, password], (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            return res.redirect('/login?error=Database%20error');
        }

        if (results.length > 0) {
            //const user = results[0];
           // res.json({message: 'Login successful'});
            return res.redirect('/');

         } else {
            return res.redirect('/login?error=No%20user%20found%20with%20that%20username');
        }
    });
});

app.post("/rephrase", async (req, res) => {
    const { content1 } = req.body;

    if (!content1) {
        return res.status(400).json({ message: "Content is required" });
    }

    // Prepare the prompt for the Gemini API
    const prompt = `Rephrase this content for a resume in precise points: ${content1}`;

    try {
        const result = await model.generateContent(prompt); 
        // Output the generated response text to the console
        console.log(result.response.text());
        const rephrasedContent = result.response.text();
        res.status(200).json({rephrasedContent});

    } catch (error) {
        console.error("Error with Gemini API:", error);
        res.status(500).json({ message: "Error processing your request" });
    }
});


app.post("/rephrase_skill", async (req, res) => {
    const { skillcontent } = req.body;

    if (!skillcontent) {
        return res.status(400).json({ message: "Content is required" });
    }

    // Prepare the prompt for the Gemini API
    const prompt = `Rephrase this content for a resume in precise points: ${skillcontent}`;

    try {
        const result = await model.generateContent(prompt); 
        // Output the generated response text to the console
        console.log(result.response.text());
        const rephrasedContentskill = result.response.text();
        fetch_rephrase( rephrasedContentskill , res);

    } catch (error) {
        //console.error("Error with Gemini API:", error);
        res.status(500).json({ message: "Error processing your request" });
    }
});

function fetch_rephrase(rephrasedContentskill, res) {
    console.log("Sending rephrased content to frontend:", rephrasedContentskill);
    // Send the rephrased content as a response to the frontend
    res.json({ rephrasedContentskill });
}

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
