import ganeshChaturthi_SSS_ISC from '../data/ganesh_chaturthi_sss_isc_2025.ics';
import ganeshChaturthi_SSS from '../data/ganesh_chaturthi_sss_2025.ics';
import biweeklyKirtans from '../data/biweeklyKirtans_2025.ics';
import navratriDurgaPuja from '../data/navratri_durga_puja_2025.ics';
import diwali_sss from '../data/diwali_sss_2025.ics';
import saraswati_puja from '../data/saraswati_puja_2026.ics';
import mahaShivratri from '../data/maha_shivratri_2026.ics';
import krishnaJanmashtami_2026 from '../data/krishna_janmashtami_2026.ics';
import ganeshChaturthi_2026 from '../data/ganesh_chaturthi_2026.ics';
import navratriDurgaPuja_2026 from '../data/navratri_durga_puja_2026.ics';
import ramNavami_SAIT_2026 from '../data/ram_navami_sait_2026.ics';
import holiTemple_2026 from '../data/holi_temple_2026.ics';

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
    },
    {
        eventName: "Diwali (SSS)",
        date: "November 2, 2025",
        time: "6:00pm to 10:30pm",
        location: "Vitruvian Space, Dining Centre Firmitas A & B (DC12A & DC14), University of Calgary",
        description: "Join us in celebrating Diwali, the festival of lights that symbolizes the triumph of good over evil and light over darkness, with an evening of pooja, kirtan, aarti, and vibrant performances that bring our community together in joy and devotion.",
        icsFile: diwali_sss
    },
    {
        eventName: "Saraswati Puja",
        date: "January 27, 2026",
        time: "9:30am to 9:00pm",
        location: "9:30am - 4:00pm: MacEwan Student Centre South Courtyard, 6:00pm - 9:000pm: Vitruvian Space, Dining Centre Firmitas A & B (DC12A & DC14), University of Calgary",
        description: "Join us in celebrating Saraswati Puja for the second time on campus! Join us in a festival of worshipping Goddess Saraswati, along with showcasing art, dance, music and culture.",
        icsFile: saraswati_puja
    },
    {
        eventName: "Maha Shivratri",
        date: "February 19, 2026",
        time: "5:30pm to 7:30pm",
        location: "Vitruvian Space, Dining Centre Firmitas A & B (DC12A & DC14), University of Calgary",
        description: "Join us in celebrating Maha Shivratri with a night of pooja, kirtan, aarti, meditation and vibrant performances that bring our community together in devotion and celebration.",
        icsFile: mahaShivratri
    },
    {
        eventName: "Ram Navami at SAIT",
        date: "Wednesday, April 1, 2026",
        time: "5:30pm to 9:30pm",
        location: "CA121 East Aldred Event Space, SAIT",
        description: "Join us for a spiritually uplifting evening and our first event at SAIT. We invite students and community members to come together for a meaningful celebration of Ram Navami.",
        icsFile: ramNavami_SAIT_2026
    },
    {
        eventName: "SSS Holi Celebration at the Temple",
        date: "Monday, March 9, 2026",
        time: "5:30pm to 8:30pm",
        location: "Hindu Society of Calgary, 2225 24 Ave NE, Calgary, AB T2E 8M2",
        description: "This year, Sanatan Students' Society is celebrating Holi at the Hindu Society of Calgary Temple. Join us for an evening devoted to devotion, music, color, and community. We invite students and community members to come together in celebration of joy, unity, and the vibrant spirit of Holi.",
        icsFile: holiTemple_2026
    },
    {
        eventName: "Krishna Janmashtami Celebration & 2nd Anniversary of Sanatan Students' Society (SSS)",
        date: "Sunday, September 6, 2026",
        time: "6:00 pm – 10:00 pm",
        location: "Falconridge/Castleridge Community Association",
        description: "Join Sanatan Students’ Society for our Krishna Janmashtami Celebration & 2nd Anniversary! Enjoy Puja, Kirtan, Aarati, cultural performances, activities, stalls, and free Prasadam. Free entry and everyone is welcome!",
        icsFile: krishnaJanmashtami_2026
    },
    {
        eventName: "Ganesh Chaturthi",
        date: "Wednesday, September 16, 2026",
        time: "7:15 pm – 9:30 pm",
        location: "Vitruvian Space, Dining Centre Firmitas A & B (DC12A & DC14), University of Calgary",
        description: "Join us in celebrating Ganesh Chaturthi, a festival honoring Lord Ganesha, the remover of obstacles and the deity of wisdom and prosperity. The event will feature Pooja, Kirtan, Aarati, cultural performances, activities, and Prasadam.",
        icsFile: ganeshChaturthi_2026
    },
    {
        eventName: "Navratri & Durga Puja",
        date: "Monday, October 12, 2026",
        time: "6:00 pm – 9:00 pm",
        location: "Vitruvian Space, Dining Centre Firmitas A & B (DC12A & DC14), University of Calgary",
        description: "Join us in celebrating Navratri and Durga Puja, a festival honoring Goddess Durga and the victory of good over evil. The event will feature Pooja, Kirtan, Aarati, cultural performances, activities, and Prasadam.",
        registration: "https://www.eventbrite.com/e/navratri-durga-puja-with-sanatan-students-society-tickets-2002322242729",
        icsFile: navratriDurgaPuja_2026
    }

];
export default events;
