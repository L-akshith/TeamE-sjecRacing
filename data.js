/* ============================================
   DATA.JS — EDIT THIS FILE TO UPDATE THE WEBSITE
   ============================================
   
   FOLDER STRUCTURE FOR IMAGES:
   
   images/
   ├── team/          ← Team member photos (square, min 300x300px)
  │   ├── ramyashree.png
   │   ├── kiran.jpg
   │   └── ...
   ├── gallery/       ← Event photos & videos
   │   ├── sae-baja-2024.jpg
   │   ├── atvc-2023.mp4
   │   └── ...
   └── sponsors/      ← Sponsor logos (transparent PNG preferred)
       ├── sjec.png
       └── ...

   IMAGE TIPS:
   - Team photos: Square crop, 300x300px minimum, JPG/PNG
   - Gallery: Any aspect ratio, JPG/PNG for images, MP4 for videos
   - Sponsors: Transparent PNG logos work best
   
   HOW TO UPDATE EACH YEAR:
   1. Add team member photos to images/team/
   2. Add event photos/videos to images/gallery/
   3. Update this file with the correct filenames
   4. Add new team, achievements, gallery items at the TOP of each array

   ============================================ */

const SITE_DATA = {

  // ===== STATS (shown in the stats bar) =====
  stats: [
    { count: 7, label: "Seasons" },
    { count: 50, label: "Team Members" },
    { count: 12, label: "Competitions" },
    { count: 1, label: "AIR Best Rank" },
  ],

  // ===== TEAMS =====
  // Add the latest team at the TOP of the array.
  //
  // For member photos, add the filename from images/team/ folder:
  //   image: "ramyashree.png"
  //
  // If no photo is available, leave image as null or "" — 
  // the site will show initials instead.
  teams: [
     {
      name: "Beetle 8.0",
      year: "2026-27",
      captain: { name: "Prateek Moras",image: "Prateek Moras.png" },
      viceCaptain: { name: "Lakshith",image: "Lakshith.jpg" },
      subsystems: [
        {
          name: "Rollcage",
          hod: "Lakshith",
          image: "Lakshith.jpg",
          members: [
            { name: "Yashraj Shetty", image: "Yashraj.jpeg" },
            { name: "Bhavin D S", image: "bhavin d s.jpg" },
            { name: "Ashwin", image: "Ashwin.jpg" },
          ],
        },
        {
          name: "Suspension & Steering",
          hod: "Prateek Moras",
          image: "Prateek Moras.png",
          members: [
            { name: "Anson Rodrigues", image: "Anson.png" },
            { name: "Faustina Fernandes", image: "Faustina M F.jpg" },
            { name: "Ashton", image: "Ashton Calvin Pinto.png" },
            { name: "Issac Rodrigues", image: "Isaac Rodrigues.jpg" },
            { name: "Jessel", image: "Jessel Crasta.jpg" },
          ],
        },
        {
          name: "Braking",
          hod: "Akash K Y",
          image: "Akash KY.jpg",
          members: [
            { name: "Jeswin", image: "Jeswin Colaco.jpg" },
          ],
        },
        {
          name: "E-Powertrain & DAQ",
          hod: "Yashas G",
          image: "Yashas G.jpg",
          members: [
            { name: "Tanisha Shetty", image: "Tanisha Shetty.jpeg" },
            { name: "Chithara", image: "Chitthara .jpg" },
            { name: "Jasmine", image: "jasmine.jpg" },
            { name: "Prathik Ganiga", image: "Prathik.png" },
            { name: "Neha Katarki", image: "Neha.jpg" },
            { name: "Prathvish", image: "Prathvish .jpg" },
            { name: "Yashvith", image: "Yashvith.jpg" },
            { name: "Avinia", image: "Avinia Viola Pinto.jpeg" },
            { name: "Deyon", image: "Deyon Dsouza.jpg" },
            { name: "Prajwal", image: "" }

          ],
        },
        {
          name: "M-Powertrain",
          hod: "Nishanth",
          image: "Nishanth.jpg",
          members: [
            { name: "Jeevan", image: "Jeevan V S.jpg" },
             ],
        },
      ],
    },
     {
      name: "Beetle 7.0",
      year: "2025-26",
      captain: { name: "Dayal",image: "Dayal.jpeg" },
      viceCaptain: { name: "Prateek Moras",image: "Prateek Moras.png" },
      subsystems: [
        {
          name: "Rollcage",
          hod: "Selvin Fernandes",
          image:"Selvin.jpeg",
          members: [
            { name: "Lakshith", image: "Lakshith.jpg" },
            { name: "Yashraj Shetty", image: "Yashraj.jpeg" },
          ],
        },
        {
          name: "Suspension & Steering",
          hod: "Briden Springfield",
          image:"Briden.jpeg",
          members: [
            { name: "Anupam Pradeep", image: "Anupam Pradeep.jpg" },
            { name: "Christina Fernandes", image: "" },
            { name: "Pranav R", image: "Pranav.jpg" },
            { name: "Pratheek Moras", image: "Prateek Moras.png" },
            { name: "Anson Rodrigues", image: "Anson.png" },
            { name: "Faustina Fernandes", image: "Faustina M F.jpg" },
          ],
        },
        {
          name: "Braking",
          hod: "Denzil Pinto",
          image: "",
          members: [
            { name: "Akash K Y", image: "Akash KY.jpg" },
          ],
        },
        {
          name: "E-Powertrain & DAQ",
          hod: "Rakesh P L",
          image: "Rakesh P L.jpeg",
          members: [
            { name: "Cedric Fernandes", image: "" },
            { name: "Nikhil Kulal", image: "Nikhil.png" },
            { name: "Tanisha Shetty", image: "Tanisha Shetty.jpeg" },
            { name: "Yashas G", image: "Yashas G.jpg" },
            { name: "Chithara", image: "Chitthara .jpg" },
            { name: "Jasmine", image: "jasmine.jpg" },
            { name: "Prathik Ganiga", image: "Prathik.png" },
            { name: "Neha Katarki", image: "Neha.jpg" },
          ],
        },
        {
          name: "M-Powertrain",
          hod: "Lawrence Mithan Mathias",
          image: "Lawrence.jpeg",
          members: [
            { name: "Zaki Hanif", image: "Zaki.jpeg" },
            { name: "Nishanth", image: "Nishanth.jpg" },
             ],
        },
      ],
    },
    {
      name: "Beetle 6.0",
      year: "2024-25",
      captain: { name: "Ramyashree K T",image: "ramyashree.png" },
      viceCaptain: { name: "Dayal",image: "Dayal.jpeg" },
      subsystems: [
        {
          name: "Rollcage",
          hod: "Kiran Pinto",
          image:"",
          members: [

            { name: "Vaibhava K", image: "" },
            { name: "Selvin Fernandes", image: "Selvin.jpeg" },
            { name: "Lakshith", image: "Lakshith.jpg" },
            { name: "Nawal", image: "Nawal.jpg" },
          ],
        },
        {
          name: "Suspension & Steering",
          hod: "Anupam Pradeep",
          image:"Anupam Pradeep.jpg",
          members: [
            { name: "Briden Springfield", image: "Briden.jpeg" },
            { name: "Christina Fernandes", image: "" },
            { name: "Pranav R", image: "Pranav.jpg" },
            { name: "Pratheek Moras", image: "Prateek Moras.png" },
          ],
        },
        {
          name: "Braking",
          hod: "Juvence Lobo",
          image:"",
          members: [
            { name: "Denzil Pinto", image: "" },
          ],
        },
        {
          name: "E-Powertrain & DAQ",
          hod: "Shashank Devadiga",
          image:"",
          members: [
            { name: "Cedric Fernandes", image: "" },
            { name: "Rakesh P L", image: "Rakesh P L.jpeg" },
            { name: "Nikhil", image: "Nikhil.png" },
            { name: "Christopher", image: "christopher.jpg" },
            { name: "Tanisha Shetty", image: "Tanisha Shetty.jpeg" },
            { name: "Yashas", image: "Yashas G.jpg" },
          ],
        },
        {
          name: "M-Powertrain",
          hod: "Prathik Rao",
          image:"",
          members: [
            { name: "Akshay P Nair", image: "" },
            { name: "Lawrence Mithan Mathias", image: "Lawrence.jpeg" },
            { name: "Zaki Hanif", image: "Zaki.jpeg" },
            { name: "Nidhish", image: "Nidhish Bhaskar.png" },
            { name: "Rakshith", image: "rakshith.jpg" },
             ],
        },
      ],
    },
    {
      name: "Beetle 5.0",
      year: "2023-24",
      captain: { name: "Kiran Pinto",image: "" },
      viceCaptain: { name: "Ramyashree K T",image: "ramyashree.png" },
      subsystems: [
        {
          name: "Rollcage",
          hod: "Vaibhava K",
          image: "",
          members: [
            { name: "Kiran Pinto", image: "" },
            { name: "Selvin Fernandes", image: "Selvin.jpeg" },
            { name: "Rimesha Dsilva", image: "" },
          ],
        },
        {
          name: "Suspension & Steering",
          hod: "Muhammad Mukthar",
          image: "",
          members: [
            { name: "Mohammed Sahal", image: "" },
            { name: "Merlyn Gudinho", image: "" },
            { name: "Mohammed Humail", image: "" },
            { name: "Briden Springfield", image: "Briden.jpeg" },
            { name: "Christina Fernandes", image: "" },
            { name: "Anupam Pradeep", image: "Anupam Pradeep.jpg" },
          ],
        },
        {
          name: "Braking",
          hod: "Juvence Lobo",
          image: "",
          members: [],
        },
        {
          name: "E-Powertrain & DAQ",
          hod: "Shashank Devadiga",
          image: "",
          members: [
            { name: "Cedric Fernandes", image: "" },
            { name: "Rakesh P L", image: "Rakesh P L.jpeg" },
            { name: "Dayal", image: "Dayal.jpeg" },
            { name: "Ramyashree K T", image: "ramyashree.png" },
          ],
        },
        {
          name: "M-Powertrain & DAQ",
          hod: "Prathik Rao",
          image: "",
          members: [
            { name: "Akshay Nair", image: "" },
            { name: "Natasha Correia", image: "" },
            { name: "Zaki Hanif", image: "Zaki.jpeg" },
            { name: "Lawrence Mithan Mathias", image: "Lawrence.jpeg" },
          ],
        },
      ],
    },
    {
      name: "Beetle 4.0",
      year: "2022-23",
      captain: { name: "Clifford Noronha",image: "" },
      viceCaptain: { name: "Russel Dsouza",image: "" },
      subsystems: [
        {
          name: "Rollcage",
          hod: "Russel Dsouza",
          image: "",
          members: [
            { name: "Kiran Pinto", image: "" },
            { name: "Abrar M H", image: "" },
            { name: "Rimesha Dsilva", image: "" },
            { name: "Vaibhava K", image: "" },
          ],
        },
        {
          name: "Suspension & Steering",
          hod: "Clifford Noronha",
          image: "",
          members: [
            { name: "Ken Noronha", image: "" },
            { name: "Mohammed Sahal", image: "" },
            { name: "Merlyn Gudinho", image: "" },
            { name: "Mohammed Humail", image: "" },
            { name: "Muhammad Mukthar", image: "" },
            { name: "Vinith", image: "" },
          ],
        },
        {
          name: "Braking",
          hod: "Natraj S",
          image: "",
          members: [
            { name: "Juvence Lobo", image: "" },
            { name: "Supritha Kotegar", image: "" },
          ],
        },
        {
          name: "E-Powertrain & DAQ",
          hod: "Shravan M",
          image: "",
          members: [
            { name: "Deepansh Arekere", image: "" },
            { name: "Shashank Devadiga", image: "" },
            { name: "Ramyashree K T", image: "ramyashree.png" },
            { name: "Dayal", image: "Dayal.jpeg" },
            { name: "Preetham Dsouza", image: "" },
            { name: "Nikhil Vernon", image: "" },
            { name: "Abhishek V", image: "" },
          ],
        },
        {
          name: "M-Powertrain & DAQ",
          hod: "Neril Dsouza",
          image: "",
          members: [
            { name: "Akshay Nair", image: "" },
            { name: "Natasha Correia", image: "" },
            { name: "Prathik Rao", image: "" },
          ],
        }
      ],
    },
    {
      
      name: "Beetle 3.0",
      year: "2021-22",
      captain: { name: "Nihal",image: "" },
      viceCaptain: { name: "Nischal Naik",image: "" },
      subsystems: [
        {
          name: "Rollcage",
          hod: "Nihal",
          image: "",
          members: [
            { name: "Ale Rasool", image: "" },
            { name: "Abrar M H", image: "" },
            { name: "Sai Praneeth", image: "" },
            { name: "Aleema Parakatta", image: "" },
            { name: "Russel Dsouza", image: "" },
            { name: "Rimesha Dsilva", image: "" },
          ],
        },
        {
          name: "Suspension & Steering",
          hod: "Supreeth P Amin",
          image: "",
          members: [
            { name: "Ken Noronha", image: "" },
            { name: "Mohammed Sahal", image: "" },
            { name: "Uttham U", image: "" },
            { name: "Anees Ali", image: "" },
            { name: "Muhammad Mukthar", image: "" },
            { name: "Clifford Noronha", image: "" },
            { name: "Kevin Claudy", image: "" },
            { name: "Merlyn Gudinho", image: "" },
          ],
        },
        {
          name: "Braking",
          hod: "Nishchal Naik",
          image: "",
          members: [
            { name: "Rahul C", image: "" },
            { name: "Nataraj S", image: "" },
            { name: "Samrudh A U", image: "" },
            { name: "Supritha Kotegar", image: "" },
          ],
        },
      ]
      },
      {
      
      name: "Beetle 2.0",
      year: "2020-21",
      captain: { name: "Supreeth P Amin",image: "" },
      viceCaptain: { name: "Nihal",image: "" },
      subsystems: [
        {
          name: "Rollcage",
          hod: "Nihal",
          image: "",
          members: [
            { name: "Hitesh Shetty", image: "" },
            { name: "Vishal Moterio", image: "" },
            { name: "Aleema Parakatta", image: "" },
            { name: "Rahul C", image: "" },
          ],
        },
        {
          name: "Suspension & Steering",
          hod: "Uttham U",
          image: "",
          members: [
            { name: "Ken Noronha", image: "" },
            { name: "Desmond", image: "" },
            { name: "Neeraj Shetty", image: "" },
            { name: "Anees Ali", image: "" },
            { name: "Clifford Noronha", image: "" },
            { name: "Kevin Claudy", image: "" },
          ],
        },
        {
          name: "Braking",
          hod: "Floyd Saldanha",
          image: "",
          members: [
            { name: "Nischal Naik", image: "" },
            { name: "Puneeth Suvarna", image: "" },
            { name: "Ale Rasool", image: "" },
            { name: "Nagashree", image: "" },
          ],
        },
        {
          name: "E-Powertrain & DAQ",
        }
      ]
    },
    {
      
      name: "Beetle 1.0",
      year: "2019-20",
      captain: { name: "Aloysius Dsilva",image: "" },
      viceCaptain: { name: "Vikyath R",image: "" },
      subsystems: [
        {
          name: "Rollcage",
          hod: "Yvon Fernandes",
          image: "",
          members: [
            { name: "Nihal", image: "" },
            { name: "Melroy Fernandes", image: "" },
            { name: "Maria Steffi", image: "" },
          ],
        },
        {
          name: "Suspension & Steering",
          hod: "Aloysius Dsilva",
          image: "",
          members: [
            { name: "Supreeth P Amin", image: "" },
            { name: "Desmond Dsouza", image: "" },
            { name: "Sai Praneeth", image: "" },
            { name: "Shibinraj", image: "" },
            { name: "Kevin Claudy", image: "" },
            { name: "Nigel Fernandes", image: "" },
            { name: "Neeraj Shetty", image: "" },
            { name: "Uttham U", image: "" },
          ],
        },
        {
          name: "Braking",
          hod: "AShton Lobo",
          image: "",
          members: [
            { name: "Nischal Naik", image: "" },
            { name: "Rakesh", image: "" },
            { name: "Floyd Saldanha", image: "" },
            { name: "Levin Lasrado", image: "" },
          ],
        },
        {
          name: "E-Powertrain & DAQ",
          hod: "Vikyath R",
          image: "",
        }
      ]
    },
    

    // -----------------------------------------------
    //  TO ADD A NEW TEAM — copy this template to the TOP:
    // -----------------------------------------------
    // {
    //   name: "Beetle 7.0",
    //   year: "2025-26",
    //   captain: { name: "Captain Name", initials: "CN", image: "captain.jpg" },
    //   viceCaptain: { name: "VC Name", initials: "VC", image: "vc.jpg" },
    //   subsystems: [
    //     {
    //       name: "Rollcage",
    //       hod: "HOD Name",
    //       members: [
    //         { name: "Member 1", image: "member1.jpg" },
    //         { name: "Member 2", image: "" },
    //       ],
    //     },
    //   ],
    // },
  ],

  // ===== ACHIEVEMENTS =====
  achievements: [
    {
      year: "2026",
      title: "SAE BAJA - Madya Pradesh",
      highlights: [
        "AIR 67"
      ],
    },
    {
      year: "2025",
      title: "SAE BAJA - Hyderabad",
      highlights: [
        "AIR 42"
      ],
    },
    {
      year: "2024",
      title: "SAE BAJA - Hyderabad",
      highlights: [
        "Endurance AIR 9",
        "Manuverability AIR 13",
        "Suspension & Traction AIR 12",
        "CAE Event AIR 13",
      ],
    },
    {
      year: "2023",
      title: "ATVC Championship",
      highlights: [
        "Overall Championship Winner",
        "Best Electric Vehicle Award",
        "Innovation Award",
      ],
    },
    {
      year: "2023",
      title: "SAE BAJA - Chandigarh",
      highlights: [
        "Design AIR 8",
        "Virtual Dynamics AIR 9",
        "Endurance AIR 9",
        "Acceleration AIR 4",
        "CAE Event AIR 7",
        "Overall Ranking AIR 10",
      ],
    },
    {
      year: "2022",
      title: "E-BAJA SAE India (Virtual)",
      highlights: [
        "Successfully cleared all virtual rounds",
        "Design presentation finalist",
      ],
    },
    {
      year: "2020",
      title: "E-BAJA SAE India",
      highlights: [
        "Debut season — qualified for nationals",
        "Completed all static events",
      ],
    },
  ],

  // ===== GALLERY =====
  // type: "image" or "video"
  // src: filename inside images/gallery/ folder
  // caption: text shown on hover
  // size: "normal", "tall", or "wide" (for grid layout)
  gallery: [
    { type: "image", src: "Beetle 3.0.JPG", caption: "Beetle 3.0 Showcase", size: "tall" },
    { type: "image", src: ",jvnefvnrjl.jpg", caption: "Endurance Testing", size: "normal" },
    { type: "video", src: "24142_TeameSJECRacing_BAJA_Diaries.mp4", caption: "BAJA Diaries - Recruitment & Highlights", size: "wide" },
    { type: "image", src: "beetle 3.0 (1).JPG", caption: "Beetle 3.0 Track Run", size: "normal" },
    { type: "image", src: "BT 6-1.jpg", caption: "Beetle 6.0 Rollout", size: "normal" },
    { type: "image", src: "Beetle - Copy 3-2.jpg", caption: "All-Terrain vehicle in Action", size: "normal" },
    { type: "image", src: "beetle 3.0 (2).JPG", caption: "Off-Road Endurance Run", size: "wide" },
    { type: "image", src: "DSC04315_2.jpg", caption: "SAE India Event Highlights", size: "normal" },
    { type: "image", src: "IMG_0303.JPG", caption: "National Championship Team", size: "tall" },
    { type:"image", src: "img1.jpeg",size: "normal" },
    { type:"image", src: "img2.jpeg",size: "tall" },
    { type:"image", src: "img3.jpeg",size: "tall" },
    { type:"image", src: "img4.jpeg",size: "tall" },
    { type:"image", src: "img5.jpeg",size: "tall" },
    { type:"image", src: "img6.jpeg",size: "tall" },
    { type:"image", src: "img7.jpeg",size: "tall" },
    { type:"image", src: "img8.jpeg",size: "tall" },
    { type:"image", src: "img9.jpeg" },
    { type:"image", src: "img10.jpeg",size: "tall" },
    { type:"image", src: "img11.jpeg",size: "tall" },
    
  ],

  // ===== SPONSORS =====
  // logo: filename in images/sponsors/ (optional, shows text if empty)
  sponsors: [
    { name: "SJEC", description: "St. Joseph Engineering College", logo: "sjec-full-logo.png" },
    { name: "SAE", description: "SAE India", logo: "saeindia.png" },
    { name: "BAJA", description: "BAJA SAE India", logo: "baja-logo-2017.png" },
    { name: "SolidWorks", description: "SolidWorks", logo: "solidworks.jpg" },
    { name: "ANSYS", description: "ANSYS Inc.", logo: "ansys.png" },
  ],

  // ===== CONTACT =====
  contact: {
    address: "St. Joseph Engineering College\nVamanjoor, Mangalore - 575028\nKarnataka, India",
    email: "teamesjecracing@sjec.ac.in",
    socials: {
      instagram: "https://www.instagram.com/team_esjec_racing/",
      twitter: "https://twitter.com/TEAMeSJECRACING",
      youtube: "https://www.youtube.com/watch?v=Nn1R199X9Zc",
    },
  },

  // ===== SPONSOR CTA =====
  sponsorCTA: {
    description: "Team eSJEC Racing is a completely student-based organization that manufactures a fully electric all-terrain vehicle competing with teams all over India. The overall budget for building our dream vehicle is estimated to be ₹15 lakh. With your help, we expect to extend our success and finish among the top teams.",
    brochureLink: "https://drive.google.com/file/d/1xPP_Yfj90VJWwGikbjEa6OB46NbesAfv/view?usp=sharing",
  },
};
