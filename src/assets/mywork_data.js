import notes1 from "../assets/notes1.png";
import event1 from "../assets/event1.png";
import trip1 from "../assets/trip1.png";
import notes2 from "../assets/notes2.png";
import event2 from "../assets/event2.png";
import trip2 from "../assets/trip2.png";

const mywork_data = [
  {
    w_no: 6,
    w_name: "Web design",
    w_img: notes1,
    w_img2: notes2,
    w_detail:
      "Tech Stack: React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Cloudinary, Google OAuth .",
    w_detail2:
      " Developed a fully responsive web app enabling users to upload, update, delete, and download academic notes with Google authentication. Added advanced filters (college, course, semester, subject) and profile features like saved notes, like/comment system, and download tracking. Built a secure admin panel for note verification and user management; used by 100+ students. ",
    w_title:
      "01.  CampusNotes – Notes Sharing Platform for University Students ",
    w_link: "https://campusnotes-amh9.onrender.com/",
  },
  {
    w_no: 5,
    w_name: "Web design",
    w_img: trip1,
    w_img2: trip2,
    w_detail:
      "Tech Stack: React.js, Node.js, Express.js, Firestore, Google Gemini API , Tailwind CSS.",
    w_detail2:
      "Designed an AI-powered platform that generates personalized, day-wise travel itineraries based on user preferences like destination, budget, accommodation, transport, and group type.  Enabled features like hotel recommendations, trip saving, Google Maps integration, and easy trip sharing for seamless travel planning.",
    w_title:
      "02.  TripGenie – AI-powered personalized travel planning platform",
    w_link: "https://ai-trip-planner-umber-beta.vercel.app/",
  },
  {
    w_no: 3,
    w_name: "Web design",
    w_img: event1,
    w_img2: event2,
    w_detail:
      "Tech Stack: React.js, Node.js, Express.js, MySQL , Cloudinary, Google OAuth.",
    w_detail2:
      "  Developed a full-stack event management platform with features for venue and service bookings,  vendor registration, and real-time updates. Integrated role-based access and service filtering to enhance user experience and streamline event planning.",
    w_title: "03.  Eventify – A streamlined event management system.",
    w_link: "",
  },
];

export default mywork_data;
