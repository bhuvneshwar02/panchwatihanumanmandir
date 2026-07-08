// ============================================================
// EDIT THIS FILE to update your temple's details.
// Nothing here touches design/layout code — just fill in facts.
// ============================================================

const content = {
  templeName: "Shri Hanuman Mandir",
  templeNameHindi: "श्री हनुमान मंदिर",
  tagline: "Where devotion finds a home",
  location: "Rampur, Uttar Pradesh",           // TODO: replace with your village/town + district
  address: "Khutiya Panch Mandir , Milak Rampur , Uttar Pradesh", // TODO: full address
  phone: "+91 7617482XXX",                     // TODO: temple contact number
  email: "bhuvneshwarsharma44@gmail.com",                                    // optional

  whatsappCommunityLink: "https://whatsapp.com/channel/0029VbCs0EpEawdmvBua7j2I",

  mapEmbedQuery: "28.6056135,79.120293", // from https://maps.app.goo.gl/nwZSH3QEHdVRNtRm6
  googleMapsLink: "https://maps.app.goo.gl/nwZSH3QEHdVRNtRm6", // opens Google Maps app directly, better for mobile "Get Directions"
  about: {
    heading: "About the Temple",
    paragraphs: [
      "Shri Hanuman Mandir has stood at the heart of this village as a place of daily prayer, festival gatherings and quiet refuge for generations of devotees. Its sanctum houses the beloved murti of Hanuman ji, adorned each day with fresh garlands and sindoor, alongside shrines to the Ram Darbar, Shiv Parivar and Devi Maa.",
      "The temple's marble-floored mandap, hand-painted arches and courtyard have witnessed countless aartis, Hanuman Jayanti celebrations and community gatherings. Whether you come for a quiet moment of darshan or to join the community on a festival day, you are always welcome here.",
    ],
  },

  history: {
    heading: "Our Story",
    paragraphs: [
      "Panchwati Hanuman Mandir was established by Late Shri S.I. Tejpal in loving memory of his father, with the vision of creating a sacred place where people from all communities could come together to worship, seek blessings, and find peace.",
      "Since its foundation, the temple has been lovingly managed and maintained by the Tejpal family, who continue to preserve its traditions with devotion and dedication. Every year, during the month of November, the family organizes a grand Bhandara (community feast), welcoming devotees from nearby villages and beyond. This tradition has been carried forward with great faith and will continue for generations to come.",
      "The temple is open to everyone and has become a place of hope, faith, and spiritual strength. Countless devotees visit to offer prayers to Shree Hanuman Ji, seeking blessings for health, happiness, success, and peace in their lives. Many believe their prayers have been answered, making the temple a cherished spiritual destination for the community.",
      "Tuesday, the sacred day dedicated to Shree Hanuman Ji, is the busiest day at the temple. Hundreds of devotees gather to offer prayers, participate in the aarti, and experience the divine atmosphere filled with devotion and positivity.",
    ],
  },

  timings: {
    heading: "Darshan & Aarti Timings",
    daily: [
      { label: "Mandir Opens", time: "5:00 AM" },
      { label: "Morning Aarti", time: "6:00 AM" },
      { label: "Afternoon Darshan", time: "12:00 PM – 4:00 PM" },
      { label: "Evening Aarti", time: "7:00 PM" },
      { label: "Mandir Closes", time: "9:00 PM" },
    ],
    note: "Timings may extend on Tuesdays, Saturdays and during festivals. TODO: confirm exact timings with the temple committee.",
  },

  events: {
    heading: "Festivals & Events",
    list: [
       {
        name: "Kartik Purnima",
        detail: "Every year we have Ramayana Path & Bhandara in the month of the November and in 2026 the date is defind 24th November.",
        image: "hanuman-murti-2.jpeg",
      },
      {
        name: "Hanuman Jayanti",
        detail: "The temple's biggest celebration — special decoration, bhog, and community celebration through the day and night.",
        image: "hanuman-jayanti-1.jpeg",
      },
      {
        name: "Tuesday & Saturday Sankat Mochan Path",
        detail: "Weekly Hanuman Chalisa path and special aarti, open to all devotees.",
        image: "hanuman-murti-2.jpeg",
      },
      {
        name: "Navratri — Devi Shringar",
        detail: "Special shringar and daily aarti at the Devi shrine through Navratri.",
        image: "devi-shrine.jpeg",
      },
      {
        name: "Ram Navami",
        detail: "Celebration at the Ram Darbar shrine with bhajans and prasad distribution.",
        image: "ram-darbar-shrine.jpeg",
      },
    ],
  },

  donation: {
    heading: "Support the Temple",
    paragraphs: [
      "The temple's daily worship, upkeep and festival celebrations are made possible entirely through the generosity of devotees like you. Your contribution — big or small — helps maintain the sanctum, fund festival celebrations, and care for this sacred space for the next generation.",
    ],
    bankDetails: {
      note: "For donations, please contact the temple committee directly using the details below, or visit in person.",
      accountName: "Bhuvneshwar",   // TODO
      accountNumber: "0749371089", // TODO
      ifsc: "KKBK0000677",          // TODO
      bankName: "Kotak Mahindra Bank",      // TODO
      upiId: "bhuvneshwarsharma@ptaxis",         // TODO — e.g. templename@upi
    },
  },

  contact: {
    heading: "Visit Us",
  },

  gallery: {
    heading: "Gallery",
    images: [
      { src: "hanuman-murti-1.jpeg", caption: "Shri Hanuman ji, adorned in daily shringar" },
      { src: "hanuman-jayanti-1.jpeg", caption: "Hanuman Jayanti celebrations" },
      { src: "ram-darbar-shrine.jpeg", caption: "Ram Darbar shrine" },
      { src: "devi-shrine.jpeg", caption: "Devi Maa shrine" },
      { src: "shiv-parivar-shrine.jpeg", caption: "Shiv Parivar shrine" },
      { src: "garbhagriha-hall.jpeg", caption: "The main hall and sanctum" },
      { src: "hall-arches.jpeg", caption: "Painted arches of the mandap" },
      { src: "main-gate.jpeg", caption: "Temple entrance, decorated for darshan" },
      { src: "temple-facade.jpeg", caption: "Temple facade" },
      { src: "temple-terrace-view.jpeg", caption: "View from the temple terrace" },
      { src: "hibiscus-flower.jpeg", caption: "Flowers offered in daily puja" },
      { src: "hanuman-jayanti-2.jpeg", caption: "Festival night at the temple" },
    ],
  },
};

export default content;
