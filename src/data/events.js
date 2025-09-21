import ganeshChaturthi_SSS_ISC from '../data/ganesh_chaturthi_sss_isc.ics';
import ganeshChaturthi_SSS from '../data/ganesh_chaturthi_sss.ics';
import biweeklyKirtans from '../data/biweeklyKirtans.ics';
import navratriDurgaPuja from '../data/navratri_durgaPooja.ics';

const events = [
    {
        eventName: "Ganesh Chaturthi - Collaboration of Sanatan Students' Society (SSS) and Indian Society of Calgary (ISC)",
        date: "August 23, 2025",
        time: "11:00am",
        location: "Genesis Centre, Calgary NE",
        description: "Ganesh Chaturthi is a Hindu festival celebrating the birth of Lord Ganesha, the God of wisdom and prosperity. We will celebrate it by doing religious festivities, and announcing the winners to the EmpowerHer Maya Scholarship 2025.",
        registration: "Paid entry, click on the link to register: https://www.showpass.com/ganesh-chaturthi-the-symphony-of-india-2025/",
        icsFile: ganeshChaturthi_SSS_ISC
    },
    {
        eventName: "Ganesh Chaturthi - Sanatan Students Society (SSS)",
        date: "September 6, 2025",
        time: "6:00pm to 10:00pm",
        location: "Vitruvian Space, Dining Centre Firmitas A & B (DC12A & DC14), University of Calgary",
        description: "Ganesh Chaturthi is a Hindu festival celebrating the birth of Lord Ganesha, the God of wisdom and prosperity. We will celebrate it by doing Pooja, Kirtan, Aarti, Performances, Activities and Prasadam.",
        registration: "Free entry, click on the link to register: https://forms.gle/XcEmEhYuCP1Qstts6",
        icsFile: ganeshChaturthi_SSS
    },
    {
        eventName: "Biweekly Kirtan",
        startDate: "September 22, 2025",
        endDate: "December 1, 2025",
        dayOfWeek: "Monday",
        time: "6:00pm to 7:00pm",
        location: "Venustas DC12, Dining Centre, University of Calgary",
        description: "Join us every other Monday for singing Bhajans, spiritual uplifting, and religious discussions.",
        recurring: true,
        interval: 2,
        icsFile: biweeklyKirtans
    },
    {
        eventName: "Navratri & Durga Puja - Sanatan Students Society (SSS)",
        date: "October 5, 2025",
        time: "6:00pm to 10:30pm",
        location: "Vitruvian Space, Dining Centre Firmitas A & B (DC12A & DC14), University of Calgary",
        description: "Navratri and Durga is a Hindu festival celebrating the victory of good over evil. We will celebrate it by doing Pooja, Kirtan, Aarti, Performances, Dance, Music and Prasadam.",
        registration: "Free entry, will post the registration link soon :)",
        icsFile: navratriDurgaPuja
    }

];
export default events;
