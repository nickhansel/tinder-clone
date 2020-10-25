export const mockData = [
  {
    id: "12can1",
    name: "Jenn Janson",
    position: "VP of Makreting",
    accountId: { name: "RGC", healthScore: 4.1 },
    activity: "Last response a week ago",
    avatarId: "happyGirl",
    strategy: { items: [] },
    renewalDate: "12/10/2020",
    isDecisionMaker: true,
    lastContact: "Last activity is at 1:37PM on 9/23/2020",
  },
  {
    id: 2,
    name: "Alex Abrams",
    position: "Marketing Manager",
    accountId: { name: "AirNinja", healthScore: 4.7 },
    activity: "New email",
    avatarId: "champBoy",
    strategy: { items: [] },
    renewalDate: "02/10/2021",
    isDecisionMaker: true,
    lastContact: "Last activity is at 1:37PM on 9/23/2020",
  },
  {
    id: 3,
    name: "Tom Tollins",
    position: "Marketing Executive",
    accountId: { name: "Looking Glass", healthScore: 2.4 },
    activity: "Last activity is at 9:23PM on 24/08/2020",
    avatarId: "sadBoy",
    strategy: {
      items: [
        {
          badgeName: "attention",
          title: "Extra Attention",
          content: `Alex is not getting full use out of our platform and seems confused by certain features. 
    I will make a point to reach out weekly 
    with tips and strateges relevent to AirNinja’s 
    needs to provide more tangible value.`,
        },
        {
          badgeName: "bug",
          title: "Bug - Add User Issue",
          content: `Alex is not able to add his Team Member Alison to our
         platform. This is disapointing becasue he is trying to 
         increase adoption internally at Airninja but is enoutering a 
         bug on our end preventing this. He says Alison is not recieving 
         the confirmation email. I will follow up with the support team
          to get this resolved. `,
        },
      ],
    },
    renewalDate: "12/10/2020",
    lastContact: "Last activity is at 1:37PM on 9/23/2020",
  },
  {
    id: "9can1",
    name: "Emma Jones",
    position: "General Manager",
    accountId: { name: "Walk About", healthScore: 4.8, contract: 1100 },
    isDecisionMaker: true,
    avatarId: "champGirl",
    strategy: {
      items: [
        {
          badgeName: "attention",
          title: "Extra Attention",
          content: `Alex is not getting full use out of our platform and seems confused by certain features. 
    I will make a point to reach out weekly 
    with tips and strateges relevent to AirNinja’s 
    needs to provide more tangible value.`,
        },
      ],
    },
    renewalDate: "12/20/2020",
    lastContact: "Last activity is at 1:37PM on 9/23/2020",
  },
  {
    id: 5,
    name: "Mike Toulliver",
    position: "VP of Sales",
    accountId: { name: "Pear", healthScore: 2.8, contract: 21100 },
    avatarId: "indiffBoy",
    strategy: {
      items: [
        {
          badgeName: "bug",
          title: "Bug - Add User Issue",
          content: `Alex is not able to add his Team Member Alison to our
       platform. This is disapointing becasue he is trying to 
       increase adoption internally at Airninja but is enoutering a 
       bug on our end preventing this. He says Alison is not recieving 
       the confirmation email. I will follow up with the support team
        to get this resolved. `,
        },
      ],
    },
    renewalDate: "11/18/2020",
    lastContact: "Last activity is at 1:37PM on 9/23/2020",
  },
  {
    id: 6,
    name: "Ben Holloway",
    position: "Director of PR",
    accountId: { name: "SendDoc", healthScore: 4.3, contract: 3300 },
    activity: "Last activity is at 9:23PM on 24/08/2020",
    avatarId: "happyGirl",
    strategy: { items: [] },
    renewalDate: "12/10/2020",
    lastContact: "Last activity is at 1:37PM on 9/23/2020",
  },
  {
    id: 7,
    name: "Grace Gathers",
    position: "Region Assistant Manager",
    accountId: { name: "Jumpr", healthScore: 3.2, contract: 7300 },
    activity: "Last activity is at 9:23PM on 24/08/2020",
    avatarId: "impatientGirl",
    strategy: { items: [] },
    renewalDate: "12/10/2020",
    lastContact: "Last activity is at 1:37PM on 9/23/2020",
  },
  {
    id: 8,
    name: "Vanessa Aubrey",
    position: "Communication Manager",
    accountId: { name: "BlockFlow", healthScore: 3.9, contract: 9000 },
    activity: "Last activity is at 9:23PM on 24/08/2020",
    avatarId: "curiousGirl",
    strategy: { items: [] },
    renewalDate: "12/10/2020",
    lastContact: "Last activity is at 1:37PM on 9/23/2020",
  },
  {
    id: 9,
    name: "Tale Storm",
    position: "Manager",
    accountId: { name: "BlockFlow", healthScore: 3.9, contract: 9000 },
    activity: "Last response today",
    avatarId: "happyBoy",
    health: 4.3,
    strategy: { items: [] },
    renewalDate: "12/10/2020",
    lastContact: "Last activity is at 1:37PM on 9/23/2020",
  },
  {
    id: 10,
    name: "Emma Jones",
    position: "General Manager",
    accountId: { name: "BlockFlow", healthScore: 3.9, contract: 9000 },
    activity: "New email",
    avatarId: "champGirl",
    health: 4.9,
    strategy: { items: [] },
    renewalDate: "12/10/2020",
    lastContact: "Last activity is at 1:37PM on 9/23/2020",
  },
  {
    id: 11,
    name: "Vanessa Aubrey",
    position: "Communication Manager",
    accountId: { name: "BlockFlow", healthScore: 3.9, contract: 9000 },
    activity: "Last activity is at 9:23PM on 24/08/2020",
    avatarId: "impatientGirl",
    health: 1.9,
    strategy: {
      items: [
        {
          badgeName: "escalation",
          title: "Escalate - Add User Issue",
          content: `Alex is not able to add his Team Member Alison to our
       platform. This is disapointing becasue he is trying to 
       increase adoption internally at Airninja but is enoutering a 
       bug on our end preventing this.`,
        },
        {
          badgeName: "contact",
          title: "Add New Contact",
          content: `Alex is not able to add his Team Member Alison to our
       platform. This is disapointing becasue he is trying to 
  `,
        },
      ],
    },
    renewalDate: "12/10/2020",
    lastContact: "Last activity is at 1:37PM on 9/23/2020",
  },
  {
    id: 12,
    name: "Tyler Middleton",
    position: "Position",
    accountId: { name: "BlockFlow", healthScore: 3.9, contract: 9000 },
    activity: "Last activity is at 9:23PM on 24/08/2020",
    avatarId: "sadBoy",
    health: 3.1,
    strategy: { items: [] },
    renewalDate: "11/10/2020",
    lastContact: "Last activity is at 1:37PM on 9/23/2020",
  },
  {
    id: 13,
    name: "Rick Mighty",
    position: "Position",
    accountId: { name: "BlockFlow", healthScore: 3.9, contract: 9000 },
    activity: "Last activity is at 9:23PM on 24/08/2020",
    avatarId: "indiffBoy",
    health: 3.2,
    strategy: { items: [] },
    renewalDate: "12/10/2021",
    lastContact: "Last activity is at 1:37PM on 9/23/2020",
  },
  {
    id: 14,
    name: "Grace Gathers",
    position: "Region Assistant Manager",
    accountId: { name: "BlockFlow", healthScore: 3.9, contract: 9000 },
    activity: "Last activity is at 9:23PM on 24/08/2020",
    avatarId: "indiffBoy",
    health: 4.2,
    strategy: { items: [] },
    renewalDate: "05/20/2021",
    lastContact: "Last activity is at 1:37PM on 9/23/2020",
  },
  {
    id: 15,
    name: "Ben Holloway",
    position: "Director of PR",
    accountId: { name: "BlockFlow", healthScore: 3.9, contract: 9000 },
    activity: "...",
    avatarId: "happyBoy",
    health: 4.2,
    strategy: { items: [] },
    renewalDate: "04/10/2021",
    lastContact: "Last activity is at 1:37PM on 9/23/2020",
  },
];

const STORAGE_URL = "https://empava-storage.s3.amazonaws.com/";

export const mockMoods = {
  happyBoy: `${STORAGE_URL}boy_happy.gif`,
  sadBoy: `${STORAGE_URL}boy_sad.gif`,
  champBoy: `${STORAGE_URL}boy_champ.gif`,
  indiffBoy: `${STORAGE_URL}boy_indifferent.gif`,
  champGirl: `${STORAGE_URL}girl_champ.gif`,
  happyGirl: `${STORAGE_URL}girl_happy.gif`,
  impatientGirl: `${STORAGE_URL}girl_impatient.gif`,
  curiousGirl: `${STORAGE_URL}girl_curious.gif`,
};
export const touchPointsMock = [
  {
    text: `Lorem ipsum dolor sit amet, consect s acing elit, 
    sed dos eat oaset Lorem ipsum dolor sit amet, consect s acing 
    elit, sed dos eat oaset `,
    createdAt: "6/19/20 1:34 PM",
  },
  {
    text: `Lorem ipsum dolor sit amet, consect s acing elit, 
    sed dos eat oaset Lorem ipsum dolor sit amet, consect s acing 
    elit, sed dos eat oaset `,
    createdAt: "6/19/20 1:34 PM",
  },
  {
    text: `Lorem ipsum dolor sit amet, consect s acing elit, 
    sed dos eat oaset Lorem ipsum dolor sit amet, consect s acing 
    elit, sed dos eat oaset `,
    createdAt: "6/19/20 1:34 PM",
  },
  {
    text: `Lorem ipsum dolor sit amet, consect s acing elit, 
    sed dos eat oaset Lorem ipsum dolor sit amet, consect s acing 
    elit, sed dos eat oaset `,
    createdAt: "6/19/20 1:34 PM",
  },
  {
    text: `Lorem ipsum dolor sit amet, consect s acing elit, 
    sed dos eat oaset Lorem ipsum dolor sit amet, consect s acing 
    elit, sed dos eat oaset `,
    createdAt: "6/19/20 1:34 PM",
  },
];

export const notesMock = [
  {
    id: 20,
    clientId: 4,
    contactId: 2,
    createdAt: "6/19/20 1:34 PM",
    title: "Video chat going over our new features",
    text:
      "I went over our new features in our latest update to make sure Mike is comfortable using them and understands the value they can add for his team. I will follow up on this with an email next week.",
  },
  {
    id: 21,
    clientId: 4,
    contactId: 2,
    createdAt: "6/19/20 1:34 PM",
    title: "More focus on social marketing",
    text:
      "I’ve been sending more email touchpoints with a social marketing focus lately. I think our social marketing features will really help AirNinja grow their social presence. Mike seems interested in utilizing more of our social marketing tools. We should set up a meeting some time next week. Make a note to reach out to the Mike and set up some time.",
  },
  {
    id: 22,
    clientId: 4,
    contactId: 2,
    createdAt: "6/19/20 1:34 PM",
    title: "Video chat going over our new features",
    text:
      "Chatted with Mike about a bug he is currently experiencing. He is having trouble getting his other team members signed up on the platform. I assigned a bug badge with further notes to the account and will follow...",
  },
  {
    id: 26,
    clientId: 4,
    contactId: 2,
    createdAt: "6/19/20 1:34 PM",
    title: "Video chat going over our new features",
    text:
      "Chatted with Mike about a bug he is currently experiencing. He is having trouble getting his other team members signed up on the platform. I assigned a bug badge with further notes to the account and will follow...",
  },
  {
    id: 28,
    clientId: 4,
    contactId: 2,
    createdAt: "6/19/20 1:34 PM",
    title: "Video chat going over our new features",
    text:
      "Chatted with Mike about a bug he is currently experiencing. He is having trouble getting his other team members signed up on the platform. I assigned a bug badge with further notes to the account and will follow...",
  },
  {
    id: 29,
    clientId: 4,
    contactId: 2,
    createdAt: "6/19/20 1:34 PM",
    title: "Video chat going over our new features",
    text:
      "Chatted with Mike about a bug he is currently experiencing. He is having trouble getting his other team members signed up on the platform. I assigned a bug badge with further notes to the account and will follow...",
  },
];

export const clientNames = [
  {
    name: "Jackie at FNN",
    change: "up",
  },
  {
    name: "David at Mooble",
    change: "down",
  },
  {
    name: "Emma at StartTech",
    change: "up",
  },
  {
    name: "David at Spotter",
    change: "up",
  },
  {
    name: "Alex at RockSlide",
    change: "down",
  },
  {
    name: "Anna at Grabr",
    change: "up",
  },
  {
    name: "Sarah at Jones & Waller",
    change: "down",
  },
];

export const CURRENT_USER = "ut001";
