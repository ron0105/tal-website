// Settings for /call, the page Rohan sends when someone replies yes to an outreach message.
// Two values are filled in once, by hand, after setup:
//   videoId  the YouTube ID of Rohan's 2-minute hello (upload as Unlisted)
//   calLink  the Cal.com booking link, the part after cal.com/ (e.g. "rohan-tal/20min")
// Until calLink is set, step 3 falls back to WhatsApp, so the page works from day one.

export const CALL = {
  videoId: "",
  calLink: "",
  whatsapp: "918169315080",
  minutes: 20,
};

export type Question = {
  id: "business" | "enquiries" | "goal";
  label: string;
  short: string; // how the answer is labelled in the booking notes and the WhatsApp message
  options: string[];
  other?: string; // the option that opens a free-text box
};

export const QUESTIONS: Question[] = [
  {
    id: "business",
    label: "What kind of business do you run?",
    short: "Business",
    options: ["Clinic", "Real estate", "Factory or B2B", "Something else"],
    other: "Something else",
  },
  {
    id: "enquiries",
    label: "About how many enquiries come in each month?",
    short: "Enquiries a month",
    options: ["Under 30", "30 to 100", "100 to 300", "More than 300", "Not sure"],
  },
  {
    id: "goal",
    label: "What would you most like to get better at?",
    short: "Wants to improve",
    options: [
      "Replying to enquiries faster",
      "Turning enquiries into bookings",
      "Being found on Google",
      "Posts that bring enquiries",
      "Something else",
    ],
    other: "Something else",
  },
];

export type Answers = Record<Question["id"], string>;

// One line per answer, used for the Cal.com notes and the WhatsApp message
export function answerLines(answers: Answers): string[] {
  return QUESTIONS.map((q) => `${q.short}: ${answers[q.id]}`);
}

export function whatsappLink(text: string): string {
  return `https://wa.me/${CALL.whatsapp}?text=${encodeURIComponent(text)}`;
}
