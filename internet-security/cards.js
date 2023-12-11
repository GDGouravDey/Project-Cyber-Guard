
var scenarios = [
  {
    hackerCard : {
      description : "You received an email from a well-known company, but its name is misspelt in the sender's address, you should:-",
      power : 4,
    },
    playerCards : [
      {
        description : "Click on the link in the email to check if it is genuine.",
        power : 2,
      },
      {
        description : "Delete the email and report it as spam.",
        power : 6,
      },
      {
        description : "Forward the email to a friend to check if it is genuine.",
        power : 3,
      }
    ]
  },
  {
    hackerCard : {
      description : "I set up a fake Wi-Fi station to steal people's email and track them online.",
      power : 4,
    },
    playerCards : [
      {
        description : "I browse the web, but I never do any personal business on a public wifi network.",
        power : 3,
      },
      {
        description : "I connect to any wifi network I can use in public.",
        power : 1,
      },
      {
        description : "I never use public wifi networks.",
        power : 5,
      }
    ]
  },
  {
    hackerCard : {
      description : "Which of these is a sign of malware on your computer?",
      power : 3,
    },
    playerCards : [
      {
        description : "You received a fraudulent email and your browser alerts it has blocked a pop-up window.",
        power : 2,
      },
      {
        description : "Your browser alerts you to update to a newer version.",
        power : 1,
      },
      {
        description : "Your homepage has changed unexpectedly.",
        power : 5,
      }
    ]
  },
  {
    hackerCard : {
      description : "I attempt to gain access to your accounts by bypassing two-factor authentication.",
      power : 3,
    },
    playerCards : [
      {
        description : "I disable two-factor authentication on all my accounts to avoid the inconvenience.",
        power : 2,
      },
      {
        description : "I use authentication apps rather than relying solely on SMS-based 2FA.",
        power : 4,
      },
      {
        description : "I share my 2FA codes with friends or family for easy account access.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I sent a fake email from your bank asking for your account details.",
      power : 3,
    },
    playerCards : [
      {
        description : "I checked the email address - the message didn't come from my bank.",
        power : 5,
      },
      {
        description : "I never give out personal information in response to an email.",
        power : 4,
      },
      {
        description : "I sent the details you asked for so you could check on my account.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "What should you do when choosing a password?",
      power : 3,
    },
    playerCards : [
      {
        description : "Use a combination of letters and numbers that mean something to you but no one else",
        power : 5,
      },
      {
        description : "Use something easy to remember like your pet's name.",
        power : 1,
      },
      {
        description : "Save all your passwords in a file on your computer in case you forget one.",
        power : 2,
      }
    ]
  },
  {
    hackerCard : {
      description : "What should you do if you accidentally click on a suspicious link?",
      power : 2,
    },
    playerCards : [
      {
        description : "Share the link with friends to warn them.",
        power : 1,
      },
      {
        description : "Close the window or tab immediately.",
        power : 3,
      },
      {
        description : "Reload the website.",
        power : 0,
      }
    ]
  },
  {
    hackerCard : {
      description : "You got urgent email from financial institution requesting your login credentials due to security breach.",
      power : 3,
    },
    playerCards : [
      {
        description : "I ignore the email without checking its legitimacy.",
        power : 2,
      },
      {
        description : "I immediately click on the link in the email to update my credentials.",
        power : 1,
      },
      {
        description : "I contact the institution through their official website or phone no. to verify the email's legitimacy.",
        power : 4,
      }
    ]
  },
  {
    hackerCard : {
      description : "I figured out where you live from all the personal information you share on social media.",
      power : 3,
    },
    playerCards : [
      {
        description : "I never share personal information on my social media accounts.",
        power : 4,
      },
      {
        description : "I keep my accounts private so only my friends can see them.",
        power : 3,
      },
      {
        description : "I tag everything so my friends always know what I'm doing.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I sent you a link to a website that looks like your bank's website, but actually it's fraudulent.",
      power : 3,
    },
    playerCards : [
      {
        description : "I click on links in emails if they look like they're from my bank.",
        power : 1,
      },
      {
        description : "I click on the links to see if it genuine.",
        power : 2,
      },
      {
        description : "I never click on links in emails. I always type the address in myself.",
        power : 4,
      }
    ]
  },
  {
    hackerCard : {
      description : "I watched you type your password and hacked your account.",
      power : 2,
    },
    playerCards : [
      {
        description : "I changed my password on all of my accounts because they are the same.",
        power : 2,
      },
      {
        description : "I use different passwords for all of my other accounts.",
        power : 4,
      },
      {
        description : "I deleted that account and started a new one. ",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I impersonate a colleague and request sensitive information from you.",
      power : 3,
    },
    playerCards : [
      {
        description : "I call my colleague to verify the request.",
        power : 5,
      },
      {
        description : "I discuss with my supervisor before sharing the information.",
        power : 4,
      },
      {
        description : "I question the request but still share the information via email without verification.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I looked at your browsing history on your phone to see what you do online.",
      power : 2,
    },
    playerCards : [
      {
        description : "I set my browser to delete my history every time I quit. ",
        power : 3,
      },
      {
        description : "I never clear my browser history because I don't like typing in big web addresses.",
        power : 1,
      },
      {
        description : "I always use a private browser that never keeps my history.",
        power : 4,
      }
    ]
  }, 
  {
    hackerCard : {
      description : "I attempt to crack your account password using commonly used passwords and dictionary words.",
      power : 3,
    },
    playerCards : [
      {
        description : "I write down all my passwords on a sticky note attached to my computer.",
        power : 1,
      },
      {
        description : "I use a reputable password manager to generate and store strong, unique passwords.",
        power : 4,
      },
      {
        description : "I use a single complex password for all of my online accounts for simplicity.",
        power : 2,
      }
    ]
  },
  {
    hackerCard : {
      description : "I hacked your system and all your data is deleted now.",
      power : 2,
    },
    playerCards : [
      {
        description : "I have my data backed up in local and external hard drive.",
        power : 3,
      },
      {
        description : "I never backed up my data in any way.",
        power : 1,
      },
      {
        description : "I follow the 3-2-1 backup rule. I have on-site as well as off-site location (cloud storage) backup.",
        power : 4,
      },
    ]
  }, 
  {
    hackerCard : {
      description : "What does a Phishing email contain?",
      power : 2,
    },
    playerCards : [
      {
        description : "It offers you products in which you may have no interest.",
        power : 0,
      },
      {
        description : "Requests a payment for goods you have not received.",
        power : 1,
      },
      {
        description : "It encourages you to click on a link to a fraudulent website.",
        power : 3,
      }
    ]
  },
  {
    hackerCard : {
      description : "Someone sends you a message threatening they are going to kill you. What do you do?",
      power : 2,
    },
    playerCards : [
      {
        description : "Threaten him back.",
        power : 1,
      },
      {
        description : "Report it to the Police.",
        power : 3,
      },
      {
        description : "Ignore and Delete the message.",
        power : 0,
      }
    ]
  },
  {
    hackerCard : {
      description : "Which of the following passwords is the most secure?",
      power : 3,
    },
    playerCards : [
      {
        description : "Boat1234",
        power : 1,
      },
      {
        description : "into*488",
        power : 2,
      },
      {
        description : "W.Th!5$Z",
        power : 4,
      }
    ]
  },
  {
    hackerCard : {
      description : "I provided you my USB for content transfer.",
      power : 2,
    },
    playerCards : [
      {
        description : "I refused to use your USB as my system was not having Anti-Virus Protection & Firewall.",
        power : 2,
      },
      {
        description : "I use Anti-Virus Protection & Firewall to protect my system.",
        power : 3,
      },
      {
        description : "I used your USB as I am not afraid of my system getting corrupted.",
        power : 1,
      }
    ]
  },
  {
    hackerCard : {
      description : "I will crash your vulnerable system using ransomware attacks, malware and data breaches.",
      power : 2,
    },
    playerCards : [
      {
        description : "I don't update my softwares nor do I download security updates.",
        power : 1,
      },
      {
        description : "You can't because I have turned on Automatic Updates for my operating system.",
        power : 3,
      },
      {
        description : "I use web browsers such as Chrome or Firefox that receive frequent, automatic security updates.",
        power : 3,
      }
    ]
  }
];