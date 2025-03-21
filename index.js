import express from "express";
import fs from "fs";

const port = 3000;
const app = express();

// Load user data from data.json
// const userData = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

const userData = [
    {
        "id": 1,
        "first_name": "Siddheshav",
        "last_name": "Malhotra",
        "email": "siddheshav.malhotra@example.com",
        "phone": "+91-8611362941",
        "dob": "1985-04-25"
    },
    {
        "id": 2,
        "first_name": "Rajendraan",
        "last_name": "Thakur",
        "email": "rajendraan.thakur@example.com",
        "phone": "+91-9714775128",
        "dob": "1991-09-13"
    },
    {
        "id": 3,
        "first_name": "Amilant",
        "last_name": "Bose",
        "email": "amilant.bose@example.com",
        "phone": "+91-6720004865",
        "dob": "1982-08-18"
    },
    {
        "id": 4,
        "first_name": "Devendra",
        "last_name": "Bose",
        "email": "devendra.bose@example.com",
        "phone": "+91-6444727880",
        "dob": "1991-01-30"
    },
    {
        "id": 5,
        "first_name": "Yashesh",
        "last_name": "Khanna",
        "email": "yashesh.khanna@example.com",
        "phone": "+91-7082952450",
        "dob": "1971-03-24"
    },
    {
        "id": 6,
        "first_name": "Manishal",
        "last_name": "Gupta",
        "email": "manishal.gupta@example.com",
        "phone": "+91-6554433399",
        "dob": "2001-05-14"
    },
    {
        "id": 7,
        "first_name": "Shivaeshwar",
        "last_name": "Verma",
        "email": "shivaeshwar.verma@example.com",
        "phone": "+91-8595616936",
        "dob": "1973-04-29"
    },
    {
        "id": 8,
        "first_name": "Arjitesh",
        "last_name": "Chopra",
        "email": "arjitesh.chopra@example.com",
        "phone": "+91-6230359141",
        "dob": "2008-05-09"
    },
    {
        "id": 9,
        "first_name": "Siddhikaan",
        "last_name": "Patel",
        "email": "siddhikaan.patel@example.com",
        "phone": "+91-9466484682",
        "dob": "1988-10-30"
    },
    {
        "id": 10,
        "first_name": "Ujjwaldeep",
        "last_name": "Agarwal",
        "email": "ujjwaldeep.agarwal@example.com",
        "phone": "+91-6418870711",
        "dob": "2006-04-20"
    },
    {
        "id": 11,
        "first_name": "Karunal",
        "last_name": "Bose",
        "email": "karunal.bose@example.com",
        "phone": "+91-8047224014",
        "dob": "1995-01-18"
    },
    {
        "id": 12,
        "first_name": "Amishdeep",
        "last_name": "Singh",
        "email": "amishdeep.singh@example.com",
        "phone": "+91-7613935527",
        "dob": "1976-04-14"
    },
    {
        "id": 13,
        "first_name": "Rishavay",
        "last_name": "Khanna",
        "email": "rishavay.khanna@example.com",
        "phone": "+91-9473805951",
        "dob": "1991-04-15"
    },
    {
        "id": 14,
        "first_name": "Paraniteshwar",
        "last_name": "Patel",
        "email": "paraniteshwar.patel@example.com",
        "phone": "+91-7018152756",
        "dob": "1998-02-13"
    },
    {
        "id": 15,
        "first_name": "Devesh",
        "last_name": "Mishra",
        "email": "devesh.mishra@example.com",
        "phone": "+91-8860542732",
        "dob": "1976-10-04"
    },
    {
        "id": 16,
        "first_name": "Samarveer",
        "last_name": "Thakur",
        "email": "samarveer.thakur@example.com",
        "phone": "+91-6238023472",
        "dob": "1976-01-12"
    },
    {
        "id": 17,
        "first_name": "Siddhanthav",
        "last_name": "Sharma",
        "email": "siddhanthav.sharma@example.com",
        "phone": "+91-6193609489",
        "dob": "2004-09-06"
    },
    {
        "id": 18,
        "first_name": "Amitabhant",
        "last_name": "Gupta",
        "email": "amitabhant.gupta@example.com",
        "phone": "+91-9358240139",
        "dob": "1991-06-06"
    },
    {
        "id": 19,
        "first_name": "Siddharthita",
        "last_name": "Mehta",
        "email": "siddharthita.mehta@example.com",
        "phone": "+91-8267171779",
        "dob": "1995-01-21"
    },
    {
        "id": 20,
        "first_name": "Amitabhendra",
        "last_name": "Mishra",
        "email": "amitabhendra.mishra@example.com",
        "phone": "+91-6793328648",
        "dob": "1977-12-05"
    },
    {
        "id": 21,
        "first_name": "Mandeepan",
        "last_name": "Patel",
        "email": "mandeepan.patel@example.com",
        "phone": "+91-6222775813",
        "dob": "2000-12-27"
    },
    {
        "id": 22,
        "first_name": "Rahuldeep",
        "last_name": "Dutta",
        "email": "rahuldeep.dutta@example.com",
        "phone": "+91-6136794933",
        "dob": "2004-05-15"
    },
    {
        "id": 23,
        "first_name": "Devikaeshwar",
        "last_name": "Malhotra",
        "email": "devikaeshwar.malhotra@example.com",
        "phone": "+91-8046580309",
        "dob": "1985-11-29"
    },
    {
        "id": 24,
        "first_name": "Rishavveer",
        "last_name": "Rao",
        "email": "rishavveer.rao@example.com",
        "phone": "+91-6477223063",
        "dob": "1994-08-26"
    },
    {
        "id": 25,
        "first_name": "Vinaydeep",
        "last_name": "Sharma",
        "email": "vinaydeep.sharma@example.com",
        "phone": "+91-8931257374",
        "dob": "1996-01-16"
    },
    {
        "id": 26,
        "first_name": "Amirdeep",
        "last_name": "Yadav",
        "email": "amirdeep.yadav@example.com",
        "phone": "+91-9841556406",
        "dob": "1997-11-12"
    },
    {
        "id": 27,
        "first_name": "Raj",
        "last_name": "Singh",
        "email": "raj.singh@example.com",
        "phone": "+91-7778882637",
        "dob": "1999-08-03"
    },
    {
        "id": 28,
        "first_name": "Raj",
        "last_name": "Singh",
        "email": "raj.singh@example.com",
        "phone": "+91-8497979044",
        "dob": "2008-05-11"
    },
    {
        "id": 29,
        "first_name": "Sampreetita",
        "last_name": "Das",
        "email": "sampreetita.das@example.com",
        "phone": "+91-8426181500",
        "dob": "1971-04-16"
    },
    {
        "id": 30,
        "first_name": "Siddhesheshwar",
        "last_name": "Khanna",
        "email": "siddhesheshwar.khanna@example.com",
        "phone": "+91-9299615393",
        "dob": "2007-11-13"
    },
    {
        "id": 31,
        "first_name": "Yashveer",
        "last_name": "Verma",
        "email": "yashveer.verma@example.com",
        "phone": "+91-8960603037",
        "dob": "1981-01-20"
    },
    {
        "id": 32,
        "first_name": "Vivek",
        "last_name": "Kapoor",
        "email": "vivek.kapoor@example.com",
        "phone": "+91-9333072507",
        "dob": "1997-07-27"
    },
    {
        "id": 33,
        "first_name": "Amita",
        "last_name": "Chatterjee",
        "email": "amita.chatterjee@example.com",
        "phone": "+91-9974084240",
        "dob": "1974-06-09"
    },
    {
        "id": 34,
        "first_name": "Devanshraj",
        "last_name": "Chatterjee",
        "email": "devanshraj.chatterjee@example.com",
        "phone": "+91-7178051778",
        "dob": "1978-06-06"
    },
    {
        "id": 35,
        "first_name": "Uday",
        "last_name": "Jain",
        "email": "uday.jain@example.com",
        "phone": "+91-6986843227",
        "dob": "2007-03-10"
    },
    {
        "id": 36,
        "first_name": "Vikrantita",
        "last_name": "Patel",
        "email": "vikrantita.patel@example.com",
        "phone": "+91-7820703637",
        "dob": "1993-01-07"
    },
    {
        "id": 37,
        "first_name": "Samarik",
        "last_name": "Kapoor",
        "email": "samarik.kapoor@example.com",
        "phone": "+91-6814798303",
        "dob": "1988-08-22"
    },
    {
        "id": 38,
        "first_name": "Amilita",
        "last_name": "Khanna",
        "email": "amilita.khanna@example.com",
        "phone": "+91-9692239780",
        "dob": "1987-06-19"
    },
    {
        "id": 39,
        "first_name": "Arnabant",
        "last_name": "Patel",
        "email": "arnabant.patel@example.com",
        "phone": "+91-9298514400",
        "dob": "2001-11-16"
    },
    {
        "id": 40,
        "first_name": "Parth",
        "last_name": "Mishra",
        "email": "parth.mishra@example.com",
        "phone": "+91-6152275668",
        "dob": "1998-02-21"
    },
    {
        "id": 41,
        "first_name": "Siddhikaay",
        "last_name": "Patel",
        "email": "siddhikaay.patel@example.com",
        "phone": "+91-8072345590",
        "dob": "1970-01-18"
    },
    {
        "id": 42,
        "first_name": "Yatinveer",
        "last_name": "Kapoor",
        "email": "yatinveer.kapoor@example.com",
        "phone": "+91-7095592502",
        "dob": "1973-09-21"
    },
    {
        "id": 43,
        "first_name": "Kabirav",
        "last_name": "Dutta",
        "email": "kabirav.dutta@example.com",
        "phone": "+91-8531191156",
        "dob": "1999-10-28"
    },
    {
        "id": 44,
        "first_name": "Uditeshwar",
        "last_name": "Chatterjee",
        "email": "uditeshwar.chatterjee@example.com",
        "phone": "+91-7969718839",
        "dob": "1996-04-18"
    },
    {
        "id": 45,
        "first_name": "Amishesh",
        "last_name": "Mishra",
        "email": "amishesh.mishra@example.com",
        "phone": "+91-8538188165",
        "dob": "1994-05-07"
    },
    {
        "id": 46,
        "first_name": "Aryaal",
        "last_name": "Mehta",
        "email": "aryaal.mehta@example.com",
        "phone": "+91-8825184927",
        "dob": "2010-07-15"
    },
    {
        "id": 47,
        "first_name": "Paramant",
        "last_name": "Chopra",
        "email": "paramant.chopra@example.com",
        "phone": "+91-6937625501",
        "dob": "1995-03-28"
    },
    {
        "id": 48,
        "first_name": "Mananeshwar",
        "last_name": "Kapoor",
        "email": "mananeshwar.kapoor@example.com",
        "phone": "+91-8605937211",
        "dob": "1999-01-19"
    },
    {
        "id": 49,
        "first_name": "Devansheshwar",
        "last_name": "Rao",
        "email": "devansheshwar.rao@example.com",
        "phone": "+91-8692247749",
        "dob": "1991-05-13"
    },
    {
        "id": 50,
        "first_name": "Ameyik",
        "last_name": "Yadav",
        "email": "ameyik.yadav@example.com",
        "phone": "+91-8394107933",
        "dob": "1997-01-25"
    },
    {
        "id": 51,
        "first_name": "Mandeepan",
        "last_name": "Malhotra",
        "email": "mandeepan.malhotra@example.com",
        "phone": "+91-8913068377",
        "dob": "2005-02-13"
    },
    {
        "id": 52,
        "first_name": "Shivanandveer",
        "last_name": "Patel",
        "email": "shivanandveer.patel@example.com",
        "phone": "+91-8331398167",
        "dob": "2005-09-11"
    },
    {
        "id": 53,
        "first_name": "Arjunita",
        "last_name": "Kapoor",
        "email": "arjunita.kapoor@example.com",
        "phone": "+91-8791633233",
        "dob": "1995-06-06"
    },
    {
        "id": 54,
        "first_name": "Amilul",
        "last_name": "Yadav",
        "email": "amilul.yadav@example.com",
        "phone": "+91-9589631077",
        "dob": "1987-12-11"
    },
    {
        "id": 55,
        "first_name": "Amitabhay",
        "last_name": "Chopra",
        "email": "amitabhay.chopra@example.com",
        "phone": "+91-9571123070",
        "dob": "1972-08-26"
    },
    {
        "id": 56,
        "first_name": "Manavendra",
        "last_name": "Chatterjee",
        "email": "manavendra.chatterjee@example.com",
        "phone": "+91-7890365783",
        "dob": "2002-07-14"
    },
    {
        "id": 57,
        "first_name": "Uditav",
        "last_name": "Khanna",
        "email": "uditav.khanna@example.com",
        "phone": "+91-8588407305",
        "dob": "2006-02-09"
    },
    {
        "id": 58,
        "first_name": "Devikaan",
        "last_name": "Kapoor",
        "email": "devikaan.kapoor@example.com",
        "phone": "+91-9776680036",
        "dob": "1976-08-19"
    },
    {
        "id": 59,
        "first_name": "Amey",
        "last_name": "Agarwal",
        "email": "amey.agarwal@example.com",
        "phone": "+91-7724926684",
        "dob": "1983-09-17"
    },
    {
        "id": 60,
        "first_name": "Amitabhal",
        "last_name": "Malhotra",
        "email": "amitabhal.malhotra@example.com",
        "phone": "+91-8216755888",
        "dob": "1977-03-28"
    },
    {
        "id": 61,
        "first_name": "Amolay",
        "last_name": "Sharma",
        "email": "amolay.sharma@example.com",
        "phone": "+91-7893036754",
        "dob": "1978-09-13"
    },
    {
        "id": 62,
        "first_name": "Vikramish",
        "last_name": "Singh",
        "email": "vikramish.singh@example.com",
        "phone": "+91-9959594825",
        "dob": "1988-07-09"
    },
    {
        "id": 63,
        "first_name": "Ameyik",
        "last_name": "Thakur",
        "email": "ameyik.thakur@example.com",
        "phone": "+91-7694964079",
        "dob": "1991-04-16"
    },
    {
        "id": 64,
        "first_name": "Devikaeshwar",
        "last_name": "Mehta",
        "email": "devikaeshwar.mehta@example.com",
        "phone": "+91-7689475511",
        "dob": "1991-09-11"
    },
    {
        "id": 65,
        "first_name": "Samareshwar",
        "last_name": "Patel",
        "email": "samareshwar.patel@example.com",
        "phone": "+91-8514035984",
        "dob": "1978-02-15"
    },
    {
        "id": 66,
        "first_name": "Amirita",
        "last_name": "Thakur",
        "email": "amirita.thakur@example.com",
        "phone": "+91-8493449937",
        "dob": "2008-05-10"
    },
    {
        "id": 67,
        "first_name": "Amolita",
        "last_name": "Mishra",
        "email": "amolita.mishra@example.com",
        "phone": "+91-8961439524",
        "dob": "1997-07-26"
    },
    {
        "id": 68,
        "first_name": "Siddhesh",
        "last_name": "Rao",
        "email": "siddhesh.rao@example.com",
        "phone": "+91-8154045348",
        "dob": "2003-01-02"
    },
    {
        "id": 69,
        "first_name": "Yatinveer",
        "last_name": "Kapoor",
        "email": "yatinveer.kapoor@example.com",
        "phone": "+91-8330261483",
        "dob": "1980-06-14"
    },
    {
        "id": 70,
        "first_name": "Rishabhita",
        "last_name": "Gupta",
        "email": "rishabhita.gupta@example.com",
        "phone": "+91-7077153925",
        "dob": "1971-07-17"
    },
    {
        "id": 71,
        "first_name": "Rishiendra",
        "last_name": "Jain",
        "email": "rishiendra.jain@example.com",
        "phone": "+91-8735425083",
        "dob": "1991-02-11"
    },
    {
        "id": 72,
        "first_name": "Shivaman",
        "last_name": "Bose",
        "email": "shivaman.bose@example.com",
        "phone": "+91-8370993443",
        "dob": "1992-03-29"
    },
    {
        "id": 73,
        "first_name": "Samal",
        "last_name": "Gupta",
        "email": "samal.gupta@example.com",
        "phone": "+91-6029922827",
        "dob": "1971-11-02"
    },
    {
        "id": 74,
        "first_name": "Rajeshant",
        "last_name": "Bose",
        "email": "rajeshant.bose@example.com",
        "phone": "+91-9793012697",
        "dob": "1971-08-12"
    },
    {
        "id": 75,
        "first_name": "Karthikay",
        "last_name": "Kapoor",
        "email": "karthikay.kapoor@example.com",
        "phone": "+91-6991034689",
        "dob": "1996-03-20"
    },
    {
        "id": 76,
        "first_name": "Kavyaeshwar",
        "last_name": "Mishra",
        "email": "kavyaeshwar.mishra@example.com",
        "phone": "+91-9280712335",
        "dob": "2002-12-16"
    },
    {
        "id": 77,
        "first_name": "Rajendraita",
        "last_name": "Mehta",
        "email": "rajendraita.mehta@example.com",
        "phone": "+91-9443850011",
        "dob": "1970-12-14"
    },
    {
        "id": 78,
        "first_name": "Samratay",
        "last_name": "Bose",
        "email": "samratay.bose@example.com",
        "phone": "+91-7782085922",
        "dob": "1976-03-07"
    },
    {
        "id": 79,
        "first_name": "Amirdeep",
        "last_name": "Chopra",
        "email": "amirdeep.chopra@example.com",
        "phone": "+91-7842074684",
        "dob": "2009-11-20"
    },
    {
        "id": 80,
        "first_name": "Rishenendra",
        "last_name": "Gupta",
        "email": "rishenendra.gupta@example.com",
        "phone": "+91-6763930506",
        "dob": "2008-11-02"
    },
    {
        "id": 81,
        "first_name": "Yogeshdeep",
        "last_name": "Thakur",
        "email": "yogeshdeep.thakur@example.com",
        "phone": "+91-9725206943",
        "dob": "2004-02-07"
    },
    {
        "id": 82,
        "first_name": "Mandeepal",
        "last_name": "Jain",
        "email": "mandeepal.jain@example.com",
        "phone": "+91-9858382514",
        "dob": "1997-10-09"
    },
    {
        "id": 83,
        "first_name": "Yashveerendra",
        "last_name": "Rao",
        "email": "yashveerendra.rao@example.com",
        "phone": "+91-9046926677",
        "dob": "1983-08-20"
    },
    {
        "id": 84,
        "first_name": "Aryaeshwar",
        "last_name": "Kapoor",
        "email": "aryaeshwar.kapoor@example.com",
        "phone": "+91-7883499296",
        "dob": "2009-08-21"
    },
    {
        "id": 85,
        "first_name": "Siddharth",
        "last_name": "Patel",
        "email": "siddharth.patel@example.com",
        "phone": "+91-9782154154",
        "dob": "1993-05-14"
    },
    {
        "id": 86,
        "first_name": "Mananeshwar",
        "last_name": "Rao",
        "email": "mananeshwar.rao@example.com",
        "phone": "+91-6718609529",
        "dob": "1978-08-17"
    },
    {
        "id": 87,
        "first_name": "Rishankita",
        "last_name": "Dutta",
        "email": "rishankita.dutta@example.com",
        "phone": "+91-8841690991",
        "dob": "1976-01-04"
    },
    {
        "id": 88,
        "first_name": "Samirveer",
        "last_name": "Verma",
        "email": "samirveer.verma@example.com",
        "phone": "+91-9756881363",
        "dob": "1976-10-24"
    },
    {
        "id": 89,
        "first_name": "Paramdeep",
        "last_name": "Chatterjee",
        "email": "paramdeep.chatterjee@example.com",
        "phone": "+91-9306781463",
        "dob": "1970-02-19"
    },
    {
        "id": 90,
        "first_name": "Manojal",
        "last_name": "Dutta",
        "email": "manojal.dutta@example.com",
        "phone": "+91-6657894725",
        "dob": "2006-01-03"
    },
    {
        "id": 91,
        "first_name": "Sameerveer",
        "last_name": "Mishra",
        "email": "sameerveer.mishra@example.com",
        "phone": "+91-8078601563",
        "dob": "1978-12-04"
    },
    {
        "id": 92,
        "first_name": "Samant",
        "last_name": "Kapoor",
        "email": "samant.kapoor@example.com",
        "phone": "+91-7474375852",
        "dob": "1997-04-23"
    },
    {
        "id": 93,
        "first_name": "Parasveer",
        "last_name": "Dutta",
        "email": "parasveer.dutta@example.com",
        "phone": "+91-7674694412",
        "dob": "1990-12-07"
    },
    {
        "id": 94,
        "first_name": "Devveer",
        "last_name": "Kapoor",
        "email": "devveer.kapoor@example.com",
        "phone": "+91-7408620720",
        "dob": "1989-03-01"
    },
    {
        "id": 95,
        "first_name": "Devikaraj",
        "last_name": "Chopra",
        "email": "devikaraj.chopra@example.com",
        "phone": "+91-6327980052",
        "dob": "1975-02-27"
    },
    {
        "id": 96,
        "first_name": "Amirul",
        "last_name": "Bose",
        "email": "amirul.bose@example.com",
        "phone": "+91-8993480056",
        "dob": "1996-09-02"
    },
    {
        "id": 97,
        "first_name": "Amishraj",
        "last_name": "Patel",
        "email": "amishraj.patel@example.com",
        "phone": "+91-7170872837",
        "dob": "2004-03-16"
    },
    {
        "id": 98,
        "first_name": "Sameerish",
        "last_name": "Singh",
        "email": "sameerish.singh@example.com",
        "phone": "+91-8019153638",
        "dob": "1986-03-12"
    },
    {
        "id": 99,
        "first_name": "Samardeep",
        "last_name": "Sharma",
        "email": "samardeep.sharma@example.com",
        "phone": "+91-9932550754",
        "dob": "1982-07-24"
    },
    {
        "id": 100,
        "first_name": "Samyakant",
        "last_name": "Agarwal",
        "email": "samyakant.agarwal@example.com",
        "phone": "+91-8319580429",
        "dob": "1981-10-03"
    },
    {
        "id": 101,
        "first_name": "Rajdeepeshwar",
        "last_name": "Jain",
        "email": "rajdeepeshwar.jain@example.com",
        "phone": "+91-7178400112",
        "dob": "1978-09-12"
    },
    {
        "id": 102,
        "first_name": "Kabirveer",
        "last_name": "Gupta",
        "email": "kabirveer.gupta@example.com",
        "phone": "+91-8037738786",
        "dob": "2005-07-30"
    },
    {
        "id": 103,
        "first_name": "Kavyaish",
        "last_name": "Thakur",
        "email": "kavyaish.thakur@example.com",
        "phone": "+91-6493209771",
        "dob": "1985-01-20"
    },
    {
        "id": 104,
        "first_name": "Uditesh",
        "last_name": "Bose",
        "email": "uditesh.bose@example.com",
        "phone": "+91-7972800525",
        "dob": "1977-01-27"
    },
    {
        "id": 105,
        "first_name": "Armanul",
        "last_name": "Sharma",
        "email": "armanul.sharma@example.com",
        "phone": "+91-9381033835",
        "dob": "1978-07-13"
    },
    {
        "id": 106,
        "first_name": "Amitveer",
        "last_name": "Thakur",
        "email": "amitveer.thakur@example.com",
        "phone": "+91-9626218371",
        "dob": "1989-06-30"
    },
    {
        "id": 107,
        "first_name": "Paragik",
        "last_name": "Mishra",
        "email": "paragik.mishra@example.com",
        "phone": "+91-9834253892",
        "dob": "1973-01-20"
    },
    {
        "id": 108,
        "first_name": "Armanita",
        "last_name": "Rao",
        "email": "armanita.rao@example.com",
        "phone": "+91-6568605910",
        "dob": "2005-11-26"
    },
    {
        "id": 109,
        "first_name": "Manojeshwar",
        "last_name": "Mehta",
        "email": "manojeshwar.mehta@example.com",
        "phone": "+91-8162511687",
        "dob": "1975-03-12"
    },
    {
        "id": 110,
        "first_name": "Amilant",
        "last_name": "Bose",
        "email": "amilant.bose@example.com",
        "phone": "+91-9728344888",
        "dob": "1971-04-29"
    },
    {
        "id": 111,
        "first_name": "Devika",
        "last_name": "Chatterjee",
        "email": "devika.chatterjee@example.com",
        "phone": "+91-7301967642",
        "dob": "1987-04-05"
    },
    {
        "id": 112,
        "first_name": "Devendraesh",
        "last_name": "Yadav",
        "email": "devendraesh.yadav@example.com",
        "phone": "+91-9642953985",
        "dob": "2006-12-07"
    },
    {
        "id": 113,
        "first_name": "Manaval",
        "last_name": "Chopra",
        "email": "manaval.chopra@example.com",
        "phone": "+91-8298645731",
        "dob": "1972-11-15"
    },
    {
        "id": 114,
        "first_name": "Kabirveer",
        "last_name": "Patel",
        "email": "kabirveer.patel@example.com",
        "phone": "+91-6399051884",
        "dob": "2007-06-30"
    },
    {
        "id": 115,
        "first_name": "Yatinay",
        "last_name": "Khanna",
        "email": "yatinay.khanna@example.com",
        "phone": "+91-7672970754",
        "dob": "1970-06-06"
    },
    {
        "id": 116,
        "first_name": "Shivaant",
        "last_name": "Khanna",
        "email": "shivaant.khanna@example.com",
        "phone": "+91-8886634750",
        "dob": "1980-07-03"
    },
    {
        "id": 117,
        "first_name": "Siddhanthul",
        "last_name": "Gupta",
        "email": "siddhanthul.gupta@example.com",
        "phone": "+91-7618293493",
        "dob": "2003-06-01"
    },
    {
        "id": 118,
        "first_name": "Arnaban",
        "last_name": "Thakur",
        "email": "arnaban.thakur@example.com",
        "phone": "+91-6748430753",
        "dob": "1982-03-02"
    },
    {
        "id": 119,
        "first_name": "Amirav",
        "last_name": "Malhotra",
        "email": "amirav.malhotra@example.com",
        "phone": "+91-6421893181",
        "dob": "1976-10-23"
    },
    {
        "id": 120,
        "first_name": "Uditendra",
        "last_name": "Dutta",
        "email": "uditendra.dutta@example.com",
        "phone": "+91-8372400719",
        "dob": "1994-03-01"
    },
    {
        "id": 121,
        "first_name": "Raghavish",
        "last_name": "Yadav",
        "email": "raghavish.yadav@example.com",
        "phone": "+91-9428359039",
        "dob": "1987-12-14"
    },
    {
        "id": 122,
        "first_name": "Arjunay",
        "last_name": "Malhotra",
        "email": "arjunay.malhotra@example.com",
        "phone": "+91-7479428490",
        "dob": "1984-09-03"
    },
    {
        "id": 123,
        "first_name": "Rameshveer",
        "last_name": "Mishra",
        "email": "rameshveer.mishra@example.com",
        "phone": "+91-8129071945",
        "dob": "1983-01-18"
    },
    {
        "id": 124,
        "first_name": "Yogeshendra",
        "last_name": "Dutta",
        "email": "yogeshendra.dutta@example.com",
        "phone": "+91-9346058556",
        "dob": "1976-10-08"
    },
    {
        "id": 125,
        "first_name": "Manishav",
        "last_name": "Yadav",
        "email": "manishav.yadav@example.com",
        "phone": "+91-8840862433",
        "dob": "2001-02-25"
    },
    {
        "id": 126,
        "first_name": "Amitaal",
        "last_name": "Chopra",
        "email": "amitaal.chopra@example.com",
        "phone": "+91-6160383875",
        "dob": "1971-12-15"
    },
    {
        "id": 127,
        "first_name": "Rishavish",
        "last_name": "Yadav",
        "email": "rishavish.yadav@example.com",
        "phone": "+91-9418436623",
        "dob": "2004-02-19"
    },
    {
        "id": 128,
        "first_name": "Amilraj",
        "last_name": "Singh",
        "email": "amilraj.singh@example.com",
        "phone": "+91-8570324546",
        "dob": "2001-06-30"
    },
    {
        "id": 129,
        "first_name": "Samyakita",
        "last_name": "Agarwal",
        "email": "samyakita.agarwal@example.com",
        "phone": "+91-9272972916",
        "dob": "2010-07-15"
    },
    {
        "id": 130,
        "first_name": "Yatinish",
        "last_name": "Malhotra",
        "email": "yatinish.malhotra@example.com",
        "phone": "+91-7490561792",
        "dob": "2005-10-04"
    },
    {
        "id": 131,
        "first_name": "Arpiteshwar",
        "last_name": "Chopra",
        "email": "arpiteshwar.chopra@example.com",
        "phone": "+91-9225127782",
        "dob": "2001-07-08"
    },
    {
        "id": 132,
        "first_name": "Yogeshita",
        "last_name": "Thakur",
        "email": "yogeshita.thakur@example.com",
        "phone": "+91-9786671087",
        "dob": "2009-02-28"
    },
    {
        "id": 133,
        "first_name": "Ujjwalav",
        "last_name": "Jain",
        "email": "ujjwalav.jain@example.com",
        "phone": "+91-6113781781",
        "dob": "1975-05-04"
    },
    {
        "id": 134,
        "first_name": "Siddhanthveer",
        "last_name": "Thakur",
        "email": "siddhanthveer.thakur@example.com",
        "phone": "+91-7197464973",
        "dob": "1981-08-29"
    },
    {
        "id": 135,
        "first_name": "Kabir",
        "last_name": "Malhotra",
        "email": "kabir.malhotra@example.com",
        "phone": "+91-7185871985",
        "dob": "2008-04-08"
    },
    {
        "id": 136,
        "first_name": "Devendraan",
        "last_name": "Khanna",
        "email": "devendraan.khanna@example.com",
        "phone": "+91-8117962801",
        "dob": "1998-01-16"
    },
    {
        "id": 137,
        "first_name": "Armandeep",
        "last_name": "Khanna",
        "email": "armandeep.khanna@example.com",
        "phone": "+91-8809484528",
        "dob": "1984-09-23"
    },
    {
        "id": 138,
        "first_name": "Shivaita",
        "last_name": "Dutta",
        "email": "shivaita.dutta@example.com",
        "phone": "+91-7189708744",
        "dob": "1989-02-26"
    },
    {
        "id": 139,
        "first_name": "Rishitant",
        "last_name": "Yadav",
        "email": "rishitant.yadav@example.com",
        "phone": "+91-7537767103",
        "dob": "2000-07-04"
    },
    {
        "id": 140,
        "first_name": "Raghaval",
        "last_name": "Jain",
        "email": "raghaval.jain@example.com",
        "phone": "+91-6906170948",
        "dob": "1986-04-08"
    },
    {
        "id": 141,
        "first_name": "Yatinveer",
        "last_name": "Thakur",
        "email": "yatinveer.thakur@example.com",
        "phone": "+91-9378909484",
        "dob": "1995-06-08"
    },
    {
        "id": 142,
        "first_name": "Shivadeep",
        "last_name": "Malhotra",
        "email": "shivadeep.malhotra@example.com",
        "phone": "+91-9122795892",
        "dob": "1991-06-19"
    },
    {
        "id": 143,
        "first_name": "Parasan",
        "last_name": "Chopra",
        "email": "parasan.chopra@example.com",
        "phone": "+91-6954932483",
        "dob": "1975-07-31"
    },
    {
        "id": 144,
        "first_name": "Umeshita",
        "last_name": "Jain",
        "email": "umeshita.jain@example.com",
        "phone": "+91-7342271238",
        "dob": "1992-06-30"
    },
    {
        "id": 145,
        "first_name": "Devjiteshwar",
        "last_name": "Kapoor",
        "email": "devjiteshwar.kapoor@example.com",
        "phone": "+91-7794083920",
        "dob": "2002-04-29"
    },
    {
        "id": 146,
        "first_name": "Umeshant",
        "last_name": "Mehta",
        "email": "umeshant.mehta@example.com",
        "phone": "+91-8418501523",
        "dob": "1977-02-24"
    },
    {
        "id": 147,
        "first_name": "Aryaay",
        "last_name": "Jain",
        "email": "aryaay.jain@example.com",
        "phone": "+91-9923666317",
        "dob": "1990-06-21"
    },
    {
        "id": 148,
        "first_name": "Umeshdeep",
        "last_name": "Patel",
        "email": "umeshdeep.patel@example.com",
        "phone": "+91-8167408098",
        "dob": "2005-11-22"
    },
    {
        "id": 149,
        "first_name": "Amishay",
        "last_name": "Chopra",
        "email": "amishay.chopra@example.com",
        "phone": "+91-8174986188",
        "dob": "1988-06-03"
    },
    {
        "id": 150,
        "first_name": "Rishabhendra",
        "last_name": "Malhotra",
        "email": "rishabhendra.malhotra@example.com",
        "phone": "+91-7230058683",
        "dob": "1977-01-12"
    },
    {
        "id": 151,
        "first_name": "Devjitan",
        "last_name": "Jain",
        "email": "devjitan.jain@example.com",
        "phone": "+91-6513940460",
        "dob": "2003-10-18"
    },
    {
        "id": 152,
        "first_name": "Devik",
        "last_name": "Thakur",
        "email": "devik.thakur@example.com",
        "phone": "+91-6890707282",
        "dob": "1998-02-17"
    },
    {
        "id": 153,
        "first_name": "Shivanandish",
        "last_name": "Thakur",
        "email": "shivanandish.thakur@example.com",
        "phone": "+91-7293604918",
        "dob": "1997-02-28"
    },
    {
        "id": 154,
        "first_name": "Shivamesh",
        "last_name": "Singh",
        "email": "shivamesh.singh@example.com",
        "phone": "+91-7003040272",
        "dob": "1984-01-24"
    },
    {
        "id": 155,
        "first_name": "Rajdeepish",
        "last_name": "Chatterjee",
        "email": "rajdeepish.chatterjee@example.com",
        "phone": "+91-6251412689",
        "dob": "1997-12-02"
    },
    {
        "id": 156,
        "first_name": "Armanal",
        "last_name": "Das",
        "email": "armanal.das@example.com",
        "phone": "+91-8274110277",
        "dob": "2009-03-29"
    },
    {
        "id": 157,
        "first_name": "Vinitraj",
        "last_name": "Yadav",
        "email": "vinitraj.yadav@example.com",
        "phone": "+91-8409432812",
        "dob": "1988-09-27"
    },
    {
        "id": 158,
        "first_name": "Shivendraay",
        "last_name": "Chopra",
        "email": "shivendraay.chopra@example.com",
        "phone": "+91-7897469564",
        "dob": "2008-11-28"
    },
    {
        "id": 159,
        "first_name": "Sameeral",
        "last_name": "Mishra",
        "email": "sameeral.mishra@example.com",
        "phone": "+91-7336132172",
        "dob": "1985-02-06"
    },
    {
        "id": 160,
        "first_name": "Karanita",
        "last_name": "Sharma",
        "email": "karanita.sharma@example.com",
        "phone": "+91-6893713538",
        "dob": "2006-03-05"
    },
    {
        "id": 161,
        "first_name": "Shivaik",
        "last_name": "Rao",
        "email": "shivaik.rao@example.com",
        "phone": "+91-7611190391",
        "dob": "1983-07-16"
    },
    {
        "id": 162,
        "first_name": "Rishabhdeep",
        "last_name": "Chatterjee",
        "email": "rishabhdeep.chatterjee@example.com",
        "phone": "+91-8143365570",
        "dob": "2003-06-10"
    },
    {
        "id": 163,
        "first_name": "Yashveerraj",
        "last_name": "Bose",
        "email": "yashveerraj.bose@example.com",
        "phone": "+91-9505796766",
        "dob": "1995-05-02"
    },
    {
        "id": 164,
        "first_name": "Siddhanthita",
        "last_name": "Chatterjee",
        "email": "siddhanthita.chatterjee@example.com",
        "phone": "+91-8198408967",
        "dob": "1972-08-05"
    },
    {
        "id": 165,
        "first_name": "Rameshish",
        "last_name": "Singh",
        "email": "rameshish.singh@example.com",
        "phone": "+91-8996180355",
        "dob": "1976-12-30"
    },
    {
        "id": 166,
        "first_name": "Devikaesh",
        "last_name": "Chopra",
        "email": "devikaesh.chopra@example.com",
        "phone": "+91-9669518675",
        "dob": "1972-12-26"
    },
    {
        "id": 167,
        "first_name": "Paramish",
        "last_name": "Chatterjee",
        "email": "paramish.chatterjee@example.com",
        "phone": "+91-9451757896",
        "dob": "1998-11-23"
    },
    {
        "id": 168,
        "first_name": "Devansheshwar",
        "last_name": "Mehta",
        "email": "devansheshwar.mehta@example.com",
        "phone": "+91-9180771528",
        "dob": "2005-04-06"
    },
    {
        "id": 169,
        "first_name": "Yatinay",
        "last_name": "Agarwal",
        "email": "yatinay.agarwal@example.com",
        "phone": "+91-6700024349",
        "dob": "1986-04-30"
    },
    {
        "id": 170,
        "first_name": "Parageshwar",
        "last_name": "Thakur",
        "email": "parageshwar.thakur@example.com",
        "phone": "+91-8249607829",
        "dob": "1994-09-01"
    },
    {
        "id": 171,
        "first_name": "Amitaesh",
        "last_name": "Thakur",
        "email": "amitaesh.thakur@example.com",
        "phone": "+91-8444656518",
        "dob": "1986-07-30"
    },
    {
        "id": 172,
        "first_name": "Shivikadeep",
        "last_name": "Yadav",
        "email": "shivikadeep.yadav@example.com",
        "phone": "+91-8060326892",
        "dob": "2003-11-25"
    },
    {
        "id": 173,
        "first_name": "Raghavik",
        "last_name": "Chopra",
        "email": "raghavik.chopra@example.com",
        "phone": "+91-6763564338",
        "dob": "1982-07-16"
    },
    {
        "id": 174,
        "first_name": "Devikaan",
        "last_name": "Sharma",
        "email": "devikaan.sharma@example.com",
        "phone": "+91-7842795923",
        "dob": "1994-12-18"
    },
    {
        "id": 175,
        "first_name": "Amitaant",
        "last_name": "Yadav",
        "email": "amitaant.yadav@example.com",
        "phone": "+91-7443578876",
        "dob": "1982-07-14"
    },
    {
        "id": 176,
        "first_name": "Karunita",
        "last_name": "Yadav",
        "email": "karunita.yadav@example.com",
        "phone": "+91-6667049452",
        "dob": "1987-06-23"
    },
    {
        "id": 177,
        "first_name": "Yatinant",
        "last_name": "Dutta",
        "email": "yatinant.dutta@example.com",
        "phone": "+91-8197196136",
        "dob": "1998-08-24"
    },
    {
        "id": 178,
        "first_name": "Rishial",
        "last_name": "Mishra",
        "email": "rishial.mishra@example.com",
        "phone": "+91-9766051130",
        "dob": "1998-09-14"
    },
    {
        "id": 179,
        "first_name": "Rajesh",
        "last_name": "Sharma",
        "email": "rajesh.sharma@example.com",
        "phone": "+91-6525995657",
        "dob": "1984-03-10"
    },
    {
        "id": 180,
        "first_name": "Yashveereshwar",
        "last_name": "Yadav",
        "email": "yashveereshwar.yadav@example.com",
        "phone": "+91-7918139420",
        "dob": "1973-01-01"
    },
    {
        "id": 181,
        "first_name": "Parashveer",
        "last_name": "Singh",
        "email": "parashveer.singh@example.com",
        "phone": "+91-7759433942",
        "dob": "1982-07-29"
    },
    {
        "id": 182,
        "first_name": "Vinitveer",
        "last_name": "Khanna",
        "email": "vinitveer.khanna@example.com",
        "phone": "+91-8658132413",
        "dob": "1982-09-03"
    },
    {
        "id": 183,
        "first_name": "Kartikesh",
        "last_name": "Thakur",
        "email": "kartikesh.thakur@example.com",
        "phone": "+91-7364954995",
        "dob": "1990-12-23"
    },
    {
        "id": 184,
        "first_name": "Arjitesh",
        "last_name": "Jain",
        "email": "arjitesh.jain@example.com",
        "phone": "+91-9944588983",
        "dob": "1978-09-05"
    },
    {
        "id": 185,
        "first_name": "Shivamav",
        "last_name": "Yadav",
        "email": "shivamav.yadav@example.com",
        "phone": "+91-8661369849",
        "dob": "2007-04-26"
    },
    {
        "id": 186,
        "first_name": "Yogeshant",
        "last_name": "Bose",
        "email": "yogeshant.bose@example.com",
        "phone": "+91-7257045537",
        "dob": "2001-01-31"
    },
    {
        "id": 187,
        "first_name": "Arjunesh",
        "last_name": "Rao",
        "email": "arjunesh.rao@example.com",
        "phone": "+91-9745325248",
        "dob": "1996-04-21"
    },
    {
        "id": 188,
        "first_name": "Paranitay",
        "last_name": "Jain",
        "email": "paranitay.jain@example.com",
        "phone": "+91-9586731007",
        "dob": "1986-05-11"
    },
    {
        "id": 189,
        "first_name": "Shivaal",
        "last_name": "Das",
        "email": "shivaal.das@example.com",
        "phone": "+91-8438622374",
        "dob": "1972-03-10"
    },
    {
        "id": 190,
        "first_name": "Parveshish",
        "last_name": "Patel",
        "email": "parveshish.patel@example.com",
        "phone": "+91-8694046713",
        "dob": "1970-09-09"
    },
    {
        "id": 191,
        "first_name": "Rajdeepeshwar",
        "last_name": "Rao",
        "email": "rajdeepeshwar.rao@example.com",
        "phone": "+91-6693808301",
        "dob": "2005-03-12"
    },
    {
        "id": 192,
        "first_name": "Deveshwar",
        "last_name": "Rao",
        "email": "deveshwar.rao@example.com",
        "phone": "+91-6861068502",
        "dob": "1984-02-04"
    },
    {
        "id": 193,
        "first_name": "Rishankendra",
        "last_name": "Yadav",
        "email": "rishankendra.yadav@example.com",
        "phone": "+91-9649066173",
        "dob": "2000-08-29"
    },
    {
        "id": 194,
        "first_name": "Devanshik",
        "last_name": "Khanna",
        "email": "devanshik.khanna@example.com",
        "phone": "+91-8274969772",
        "dob": "2005-04-11"
    },
    {
        "id": 195,
        "first_name": "Rishabhul",
        "last_name": "Singh",
        "email": "rishabhul.singh@example.com",
        "phone": "+91-8787679641",
        "dob": "1990-06-06"
    },
    {
        "id": 196,
        "first_name": "Rishabhav",
        "last_name": "Sharma",
        "email": "rishabhav.sharma@example.com",
        "phone": "+91-8524153249",
        "dob": "1985-04-24"
    },
    {
        "id": 197,
        "first_name": "Ujjwaldeep",
        "last_name": "Singh",
        "email": "ujjwaldeep.singh@example.com",
        "phone": "+91-6253876185",
        "dob": "1976-06-04"
    },
    {
        "id": 198,
        "first_name": "Sampreetav",
        "last_name": "Verma",
        "email": "sampreetav.verma@example.com",
        "phone": "+91-8144371452",
        "dob": "1971-12-22"
    },
    {
        "id": 199,
        "first_name": "Aaryan",
        "last_name": "Yadav",
        "email": "aaryan.yadav@example.com",
        "phone": "+91-9644406871",
        "dob": "1982-02-13"
    },
    {
        "id": 200,
        "first_name": "Siddheshesh",
        "last_name": "Malhotra",
        "email": "siddheshesh.malhotra@example.com",
        "phone": "+91-7573657574",
        "dob": "1990-03-04"
    },
    {
        "id": 201,
        "first_name": "Rajdeepish",
        "last_name": "Sharma",
        "email": "rajdeepish.sharma@example.com",
        "phone": "+91-8444799743",
        "dob": "2004-03-03"
    },
    {
        "id": 202,
        "first_name": "Amitesh",
        "last_name": "Sharma",
        "email": "amitesh.sharma@example.com",
        "phone": "+91-8800706488",
        "dob": "1995-02-14"
    },
    {
        "id": 203,
        "first_name": "Arjunal",
        "last_name": "Jain",
        "email": "arjunal.jain@example.com",
        "phone": "+91-9084693044",
        "dob": "1999-11-19"
    },
    {
        "id": 204,
        "first_name": "Karanish",
        "last_name": "Malhotra",
        "email": "karanish.malhotra@example.com",
        "phone": "+91-7563345490",
        "dob": "1996-02-09"
    },
    {
        "id": 205,
        "first_name": "Shivamesh",
        "last_name": "Thakur",
        "email": "shivamesh.thakur@example.com",
        "phone": "+91-9908903020",
        "dob": "1991-12-07"
    },
    {
        "id": 206,
        "first_name": "Siddharthan",
        "last_name": "Malhotra",
        "email": "siddharthan.malhotra@example.com",
        "phone": "+91-6963266967",
        "dob": "1984-02-29"
    },
    {
        "id": 207,
        "first_name": "Sameerita",
        "last_name": "Kapoor",
        "email": "sameerita.kapoor@example.com",
        "phone": "+91-8569665044",
        "dob": "1989-12-30"
    },
    {
        "id": 208,
        "first_name": "Siddhantheshwar",
        "last_name": "Chatterjee",
        "email": "siddhantheshwar.chatterjee@example.com",
        "phone": "+91-7634930396",
        "dob": "1981-06-07"
    },
    {
        "id": 209,
        "first_name": "Aaryanraj",
        "last_name": "Mishra",
        "email": "aaryanraj.mishra@example.com",
        "phone": "+91-8630302120",
        "dob": "1989-11-03"
    },
    {
        "id": 210,
        "first_name": "Amilay",
        "last_name": "Chatterjee",
        "email": "amilay.chatterjee@example.com",
        "phone": "+91-6361777607",
        "dob": "1977-12-20"
    },
    {
        "id": 211,
        "first_name": "Shivikaveer",
        "last_name": "Mehta",
        "email": "shivikaveer.mehta@example.com",
        "phone": "+91-7643778923",
        "dob": "1978-09-08"
    },
    {
        "id": 212,
        "first_name": "Ramesheshwar",
        "last_name": "Chopra",
        "email": "ramesheshwar.chopra@example.com",
        "phone": "+91-7176982264",
        "dob": "1972-07-07"
    },
    {
        "id": 213,
        "first_name": "Rishavik",
        "last_name": "Mishra",
        "email": "rishavik.mishra@example.com",
        "phone": "+91-7705525965",
        "dob": "1992-06-28"
    },
    {
        "id": 214,
        "first_name": "Paragan",
        "last_name": "Jain",
        "email": "paragan.jain@example.com",
        "phone": "+91-9939799298",
        "dob": "1979-11-22"
    },
    {
        "id": 215,
        "first_name": "Rajendraendra",
        "last_name": "Kapoor",
        "email": "rajendraendra.kapoor@example.com",
        "phone": "+91-7293211537",
        "dob": "2010-05-21"
    },
    {
        "id": 216,
        "first_name": "Vikrantik",
        "last_name": "Das",
        "email": "vikrantik.das@example.com",
        "phone": "+91-6454075124",
        "dob": "1974-11-09"
    },
    {
        "id": 217,
        "first_name": "Devikaan",
        "last_name": "Rao",
        "email": "devikaan.rao@example.com",
        "phone": "+91-6019412594",
        "dob": "1972-08-16"
    },
    {
        "id": 218,
        "first_name": "Vikramant",
        "last_name": "Yadav",
        "email": "vikramant.yadav@example.com",
        "phone": "+91-9247300834",
        "dob": "1973-10-03"
    },
    {
        "id": 219,
        "first_name": "Manaval",
        "last_name": "Gupta",
        "email": "manaval.gupta@example.com",
        "phone": "+91-8883219835",
        "dob": "1980-09-27"
    },
    {
        "id": 220,
        "first_name": "Udayul",
        "last_name": "Dutta",
        "email": "udayul.dutta@example.com",
        "phone": "+91-7118252982",
        "dob": "1989-02-17"
    },
    {
        "id": 221,
        "first_name": "Vinayik",
        "last_name": "Yadav",
        "email": "vinayik.yadav@example.com",
        "phone": "+91-7448335851",
        "dob": "1986-05-17"
    },
    {
        "id": 222,
        "first_name": "Yash",
        "last_name": "Sharma",
        "email": "yash.sharma@example.com",
        "phone": "+91-8899361775",
        "dob": "1991-08-24"
    },
    {
        "id": 223,
        "first_name": "Vinitita",
        "last_name": "Agarwal",
        "email": "vinitita.agarwal@example.com",
        "phone": "+91-9613124764",
        "dob": "1985-01-21"
    },
    {
        "id": 224,
        "first_name": "Parameshwar",
        "last_name": "Das",
        "email": "parameshwar.das@example.com",
        "phone": "+91-6465698058",
        "dob": "2007-08-21"
    },
    {
        "id": 225,
        "first_name": "Amilendra",
        "last_name": "Gupta",
        "email": "amilendra.gupta@example.com",
        "phone": "+91-8787281940",
        "dob": "1995-10-13"
    },
    {
        "id": 226,
        "first_name": "Armanita",
        "last_name": "Jain",
        "email": "armanita.jain@example.com",
        "phone": "+91-8083863996",
        "dob": "1986-09-19"
    },
    {
        "id": 227,
        "first_name": "Samish",
        "last_name": "Singh",
        "email": "samish.singh@example.com",
        "phone": "+91-9727794977",
        "dob": "1997-08-31"
    },
    {
        "id": 228,
        "first_name": "Mandeep",
        "last_name": "Dutta",
        "email": "mandeep.dutta@example.com",
        "phone": "+91-6165445381",
        "dob": "2008-10-16"
    },
    {
        "id": 229,
        "first_name": "Mandeepeshwar",
        "last_name": "Agarwal",
        "email": "mandeepeshwar.agarwal@example.com",
        "phone": "+91-8251477254",
        "dob": "2004-12-05"
    },
    {
        "id": 230,
        "first_name": "Devendraeshwar",
        "last_name": "Malhotra",
        "email": "devendraeshwar.malhotra@example.com",
        "phone": "+91-8802373555",
        "dob": "2006-11-19"
    },
    {
        "id": 231,
        "first_name": "Kartikesh",
        "last_name": "Malhotra",
        "email": "kartikesh.malhotra@example.com",
        "phone": "+91-9806737447",
        "dob": "2008-09-27"
    },
    {
        "id": 232,
        "first_name": "Samiray",
        "last_name": "Mehta",
        "email": "samiray.mehta@example.com",
        "phone": "+91-7833714529",
        "dob": "1991-07-15"
    },
    {
        "id": 233,
        "first_name": "Samarendra",
        "last_name": "Rao",
        "email": "samarendra.rao@example.com",
        "phone": "+91-6660014027",
        "dob": "1982-03-02"
    },
    {
        "id": 234,
        "first_name": "Parveshav",
        "last_name": "Kapoor",
        "email": "parveshav.kapoor@example.com",
        "phone": "+91-7431064209",
        "dob": "1975-02-26"
    },
    {
        "id": 235,
        "first_name": "Parasal",
        "last_name": "Thakur",
        "email": "parasal.thakur@example.com",
        "phone": "+91-9160628325",
        "dob": "2009-08-16"
    },
    {
        "id": 236,
        "first_name": "Manojendra",
        "last_name": "Chopra",
        "email": "manojendra.chopra@example.com",
        "phone": "+91-7974163655",
        "dob": "1989-03-05"
    },
    {
        "id": 237,
        "first_name": "Parageshwar",
        "last_name": "Verma",
        "email": "parageshwar.verma@example.com",
        "phone": "+91-7411696062",
        "dob": "1971-09-12"
    },
    {
        "id": 238,
        "first_name": "Karanendra",
        "last_name": "Mehta",
        "email": "karanendra.mehta@example.com",
        "phone": "+91-9109898374",
        "dob": "1999-10-20"
    },
    {
        "id": 239,
        "first_name": "Parthul",
        "last_name": "Khanna",
        "email": "parthul.khanna@example.com",
        "phone": "+91-7206282187",
        "dob": "1973-08-09"
    },
    {
        "id": 240,
        "first_name": "Rishabhish",
        "last_name": "Kapoor",
        "email": "rishabhish.kapoor@example.com",
        "phone": "+91-8229557750",
        "dob": "1992-06-26"
    },
    {
        "id": 241,
        "first_name": "Devjitveer",
        "last_name": "Chopra",
        "email": "devjitveer.chopra@example.com",
        "phone": "+91-8181984822",
        "dob": "1999-08-19"
    },
    {
        "id": 242,
        "first_name": "Devendraraj",
        "last_name": "Kapoor",
        "email": "devendraraj.kapoor@example.com",
        "phone": "+91-6091722941",
        "dob": "1985-01-14"
    },
    {
        "id": 243,
        "first_name": "Aaryanal",
        "last_name": "Sharma",
        "email": "aaryanal.sharma@example.com",
        "phone": "+91-9340600425",
        "dob": "1987-05-28"
    },
    {
        "id": 244,
        "first_name": "Amilish",
        "last_name": "Gupta",
        "email": "amilish.gupta@example.com",
        "phone": "+91-7684647904",
        "dob": "1996-02-07"
    },
    {
        "id": 245,
        "first_name": "Karthikay",
        "last_name": "Chopra",
        "email": "karthikay.chopra@example.com",
        "phone": "+91-6334649541",
        "dob": "1994-02-21"
    },
    {
        "id": 246,
        "first_name": "Udayesh",
        "last_name": "Kapoor",
        "email": "udayesh.kapoor@example.com",
        "phone": "+91-6773670433",
        "dob": "1992-10-30"
    },
    {
        "id": 247,
        "first_name": "Rishankan",
        "last_name": "Rao",
        "email": "rishankan.rao@example.com",
        "phone": "+91-9850313954",
        "dob": "2003-12-18"
    },
    {
        "id": 248,
        "first_name": "Mandeepul",
        "last_name": "Mehta",
        "email": "mandeepul.mehta@example.com",
        "phone": "+91-6845448024",
        "dob": "1995-10-22"
    },
    {
        "id": 249,
        "first_name": "Amish",
        "last_name": "Sharma",
        "email": "amish.sharma@example.com",
        "phone": "+91-8146168118",
        "dob": "1999-01-21"
    },
    {
        "id": 250,
        "first_name": "Shivanshant",
        "last_name": "Sharma",
        "email": "shivanshant.sharma@example.com",
        "phone": "+91-6201583534",
        "dob": "1989-03-22"
    },
    {
        "id": 251,
        "first_name": "Samendra",
        "last_name": "Dutta",
        "email": "samendra.dutta@example.com",
        "phone": "+91-6230569942",
        "dob": "2002-09-27"
    },
    {
        "id": 252,
        "first_name": "Paragik",
        "last_name": "Yadav",
        "email": "paragik.yadav@example.com",
        "phone": "+91-9289978355",
        "dob": "2008-05-09"
    },
    {
        "id": 253,
        "first_name": "Arjitesh",
        "last_name": "Mehta",
        "email": "arjitesh.mehta@example.com",
        "phone": "+91-9070857487",
        "dob": "1971-04-03"
    },
    {
        "id": 254,
        "first_name": "Siddhikaan",
        "last_name": "Rao",
        "email": "siddhikaan.rao@example.com",
        "phone": "+91-6173487558",
        "dob": "1995-06-22"
    },
    {
        "id": 255,
        "first_name": "Sameerish",
        "last_name": "Sharma",
        "email": "sameerish.sharma@example.com",
        "phone": "+91-7547518563",
        "dob": "1991-03-22"
    },
    {
        "id": 256,
        "first_name": "Devjitay",
        "last_name": "Khanna",
        "email": "devjitay.khanna@example.com",
        "phone": "+91-9392551335",
        "dob": "1970-01-28"
    },
    {
        "id": 257,
        "first_name": "Amil",
        "last_name": "Rao",
        "email": "amil.rao@example.com",
        "phone": "+91-9424461415",
        "dob": "1999-08-12"
    },
    {
        "id": 258,
        "first_name": "Rajdeepveer",
        "last_name": "Jain",
        "email": "rajdeepveer.jain@example.com",
        "phone": "+91-8881192569",
        "dob": "1970-12-04"
    },
    {
        "id": 259,
        "first_name": "Rajeshul",
        "last_name": "Mehta",
        "email": "rajeshul.mehta@example.com",
        "phone": "+91-7299697156",
        "dob": "1994-05-27"
    },
    {
        "id": 260,
        "first_name": "Aaryanveer",
        "last_name": "Sharma",
        "email": "aaryanveer.sharma@example.com",
        "phone": "+91-7768699830",
        "dob": "2010-05-09"
    },
    {
        "id": 261,
        "first_name": "Arpitik",
        "last_name": "Agarwal",
        "email": "arpitik.agarwal@example.com",
        "phone": "+91-9830978810",
        "dob": "2003-03-11"
    },
    {
        "id": 262,
        "first_name": "Parveshul",
        "last_name": "Malhotra",
        "email": "parveshul.malhotra@example.com",
        "phone": "+91-9616269457",
        "dob": "2000-07-23"
    },
    {
        "id": 263,
        "first_name": "Rajdeepan",
        "last_name": "Singh",
        "email": "rajdeepan.singh@example.com",
        "phone": "+91-9960647870",
        "dob": "1982-03-07"
    },
    {
        "id": 264,
        "first_name": "Shivanandan",
        "last_name": "Patel",
        "email": "shivanandan.patel@example.com",
        "phone": "+91-9031057920",
        "dob": "2009-12-01"
    },
    {
        "id": 265,
        "first_name": "Parashav",
        "last_name": "Sharma",
        "email": "parashav.sharma@example.com",
        "phone": "+91-6673878398",
        "dob": "1979-06-09"
    },
    {
        "id": 266,
        "first_name": "Kartikay",
        "last_name": "Malhotra",
        "email": "kartikay.malhotra@example.com",
        "phone": "+91-9945721450",
        "dob": "1997-10-22"
    },
    {
        "id": 267,
        "first_name": "Rishankveer",
        "last_name": "Singh",
        "email": "rishankveer.singh@example.com",
        "phone": "+91-9690697017",
        "dob": "1995-01-11"
    },
    {
        "id": 268,
        "first_name": "Devikaik",
        "last_name": "Malhotra",
        "email": "devikaik.malhotra@example.com",
        "phone": "+91-6638310689",
        "dob": "1981-04-11"
    },
    {
        "id": 269,
        "first_name": "Umeshita",
        "last_name": "Jain",
        "email": "umeshita.jain@example.com",
        "phone": "+91-6319501894",
        "dob": "1991-09-21"
    },
    {
        "id": 270,
        "first_name": "Shivamul",
        "last_name": "Sharma",
        "email": "shivamul.sharma@example.com",
        "phone": "+91-8325452636",
        "dob": "1975-02-28"
    },
    {
        "id": 271,
        "first_name": "Utkarshish",
        "last_name": "Chopra",
        "email": "utkarshish.chopra@example.com",
        "phone": "+91-6190374667",
        "dob": "1979-11-16"
    },
    {
        "id": 272,
        "first_name": "Sampreetendra",
        "last_name": "Kapoor",
        "email": "sampreetendra.kapoor@example.com",
        "phone": "+91-6021419715",
        "dob": "1971-03-22"
    },
    {
        "id": 273,
        "first_name": "Devjitav",
        "last_name": "Malhotra",
        "email": "devjitav.malhotra@example.com",
        "phone": "+91-9448628434",
        "dob": "1994-05-21"
    },
    {
        "id": 274,
        "first_name": "Devanshish",
        "last_name": "Kapoor",
        "email": "devanshish.kapoor@example.com",
        "phone": "+91-9543278362",
        "dob": "1997-03-15"
    },
    {
        "id": 275,
        "first_name": "Sameerant",
        "last_name": "Mishra",
        "email": "sameerant.mishra@example.com",
        "phone": "+91-8636684370",
        "dob": "1978-09-15"
    },
    {
        "id": 276,
        "first_name": "Karanraj",
        "last_name": "Mehta",
        "email": "karanraj.mehta@example.com",
        "phone": "+91-6250178374",
        "dob": "1999-04-06"
    },
    {
        "id": 277,
        "first_name": "Paragan",
        "last_name": "Patel",
        "email": "paragan.patel@example.com",
        "phone": "+91-9604583375",
        "dob": "1988-11-30"
    },
    {
        "id": 278,
        "first_name": "Umeshdeep",
        "last_name": "Agarwal",
        "email": "umeshdeep.agarwal@example.com",
        "phone": "+91-9171947775",
        "dob": "1993-10-14"
    },
    {
        "id": 279,
        "first_name": "Vinayav",
        "last_name": "Yadav",
        "email": "vinayav.yadav@example.com",
        "phone": "+91-6222011906",
        "dob": "1977-02-03"
    },
    {
        "id": 280,
        "first_name": "Amirveer",
        "last_name": "Bose",
        "email": "amirveer.bose@example.com",
        "phone": "+91-7843203246",
        "dob": "1993-05-11"
    },
    {
        "id": 281,
        "first_name": "Arjitendra",
        "last_name": "Rao",
        "email": "arjitendra.rao@example.com",
        "phone": "+91-9864881840",
        "dob": "1989-09-29"
    },
    {
        "id": 282,
        "first_name": "Arman",
        "last_name": "Das",
        "email": "arman.das@example.com",
        "phone": "+91-7147273521",
        "dob": "2006-11-09"
    },
    {
        "id": 283,
        "first_name": "Yashveer",
        "last_name": "Verma",
        "email": "yashveer.verma@example.com",
        "phone": "+91-7119358585",
        "dob": "1972-07-10"
    },
    {
        "id": 284,
        "first_name": "Manishay",
        "last_name": "Chopra",
        "email": "manishay.chopra@example.com",
        "phone": "+91-6079642451",
        "dob": "1997-01-17"
    },
    {
        "id": 285,
        "first_name": "Devdeep",
        "last_name": "Patel",
        "email": "devdeep.patel@example.com",
        "phone": "+91-8898606191",
        "dob": "1989-02-26"
    },
    {
        "id": 286,
        "first_name": "Umeshul",
        "last_name": "Thakur",
        "email": "umeshul.thakur@example.com",
        "phone": "+91-8366753315",
        "dob": "1972-10-17"
    },
    {
        "id": 287,
        "first_name": "Armanish",
        "last_name": "Verma",
        "email": "armanish.verma@example.com",
        "phone": "+91-7950934511",
        "dob": "1986-12-25"
    },
    {
        "id": 288,
        "first_name": "Vinitik",
        "last_name": "Jain",
        "email": "vinitik.jain@example.com",
        "phone": "+91-8385375521",
        "dob": "1996-11-23"
    },
    {
        "id": 289,
        "first_name": "Udital",
        "last_name": "Sharma",
        "email": "udital.sharma@example.com",
        "phone": "+91-6522967287",
        "dob": "1994-04-18"
    },
    {
        "id": 290,
        "first_name": "Deveshwar",
        "last_name": "Chatterjee",
        "email": "deveshwar.chatterjee@example.com",
        "phone": "+91-6813572530",
        "dob": "2006-08-11"
    },
    {
        "id": 291,
        "first_name": "Rajeshish",
        "last_name": "Agarwal",
        "email": "rajeshish.agarwal@example.com",
        "phone": "+91-9215001898",
        "dob": "2003-05-21"
    },
    {
        "id": 292,
        "first_name": "Shivanshveer",
        "last_name": "Sharma",
        "email": "shivanshveer.sharma@example.com",
        "phone": "+91-7433399709",
        "dob": "1975-03-05"
    },
    {
        "id": 293,
        "first_name": "Karunul",
        "last_name": "Patel",
        "email": "karunul.patel@example.com",
        "phone": "+91-9745855123",
        "dob": "2001-05-30"
    },
    {
        "id": 294,
        "first_name": "Arjitay",
        "last_name": "Thakur",
        "email": "arjitay.thakur@example.com",
        "phone": "+91-8086431607",
        "dob": "1996-01-23"
    },
    {
        "id": 295,
        "first_name": "Devik",
        "last_name": "Chopra",
        "email": "devik.chopra@example.com",
        "phone": "+91-8215587102",
        "dob": "1983-06-19"
    },
    {
        "id": 296,
        "first_name": "Arpiteshwar",
        "last_name": "Mishra",
        "email": "arpiteshwar.mishra@example.com",
        "phone": "+91-6947583357",
        "dob": "1973-02-21"
    },
    {
        "id": 297,
        "first_name": "Mandeepul",
        "last_name": "Bose",
        "email": "mandeepul.bose@example.com",
        "phone": "+91-9322669456",
        "dob": "2001-08-04"
    },
    {
        "id": 298,
        "first_name": "Paramraj",
        "last_name": "Agarwal",
        "email": "paramraj.agarwal@example.com",
        "phone": "+91-9482247735",
        "dob": "1995-03-03"
    },
    {
        "id": 299,
        "first_name": "Shivanandant",
        "last_name": "Kapoor",
        "email": "shivanandant.kapoor@example.com",
        "phone": "+91-8289878273",
        "dob": "1975-07-27"
    },
    {
        "id": 300,
        "first_name": "Shivanshay",
        "last_name": "Patel",
        "email": "shivanshay.patel@example.com",
        "phone": "+91-8906484363",
        "dob": "2002-01-13"
    }
]

app.get("/", (req, res) => {
  res.send("Hi, the server is working!");
});

// Search endpoint
app.get("/search", (req, res) => {
  const query = req.query.q; // Query parameter for name search
  const limit = parseInt(req.query.limit) || 5; // Limit parameter with default value of 5

  if (!query) {
    return res.status(400).json({ error: "Query parameter 'q' is required" });
  }

  const results = userData
    .filter((user) => user.first_name.toLowerCase().startsWith(query.toLowerCase()))
    .slice(0, limit);

  res.json({ results });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
