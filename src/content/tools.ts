// ─── Free Tools (/tools) ─────────────────────────────────────────────────────
// Rebuild master prompt section 5.7. The Idea Score questions are new copy, built on TAL's
// 6-stage validation framework (market gap → research → problem framing → assumptions →
// validation → business model → decision gate). Each "no" carries the risk it points to.

export const TOOLS = {
  meta: {
    title: "Free tools to grow your business",
    description: "A free check of your Google listing, website and WhatsApp replies, a lead loss calculator, and a 10-question Idea Score Test for founders.",
  },
  h1: "Free tools to grow your business.",
  cards: [
    {
      id: "free-check",
      title: "Free Business Check",
      body: "We check your Google listing, website and WhatsApp replies for gaps that lose customers. Report sent on WhatsApp.",
      button: "Get My Free Check",
    },
    {
      id: "lead-loss",
      title: "Lead Loss Calculator",
      body: "Put in your leads, how fast you reply and what a customer is worth. See an estimate of the money at risk each month.",
      button: "Work out my number",
    },
    {
      id: "idea-score",
      title: "Idea Score Test",
      body: "10 yes or no questions. Get a score out of 10 and the 3 biggest risks in your idea.",
      button: "Take the test",
    },
  ],
};

export const CALCULATOR = {
  title: "Lead Loss Calculator",
  inputs: {
    enquiries: "Leads you get each month",
    replied: "Leads you reply to within 1 hour (%)",
    value: "What one customer is worth to you (₹)",
  },
  button: "Show my estimate",
  resultLabel: "Estimated revenue at risk each month",
  formula: "Formula: leads × share not answered within 1 hour × value of one customer.",
  caveat: "This is an estimate, not a forecast. It treats every slow reply as a customer you could lose, so read it as the most that's at risk.",
  cta: "Book a call to fix it",
};

export const IDEA_SCORE = {
  title: "Idea Score Test",
  intro: "Answer honestly. There are no wrong answers, only risks you'd rather find now.",
  questions: [
    { q: "Have you spoken to at least 10 people who have this problem?", risk: "You haven't heard the problem from enough real customers yet." },
    { q: "Can you describe the problem in one sentence, in your customer's words?", risk: "The problem isn't framed clearly, so it will be hard to sell." },
    { q: "Do people already spend money or time trying to solve it today?", risk: "There may be no real gap: nobody pays to fix this today." },
    { q: "Have you written down what must be true for your idea to work?", risk: "Your assumptions aren't mapped, so you can't test the risky ones first." },
    { q: "Have you tested your riskiest assumption with real people?", risk: "Your riskiest assumption is still untested." },
    { q: "Has anyone paid, pre-ordered or signed up before the product exists?", risk: "Nobody has committed yet. Kind words are not demand." },
    { q: "Do you know who your first 10 customers are, by name?", risk: "You don't yet know who your first customers will be." },
    { q: "Have you asked customers what they would pay?", risk: "Your price is a guess, and a wrong price can sink a good idea." },
    { q: "Do you know what it costs to win and serve one customer?", risk: "You don't know if each customer makes or loses you money." },
    { q: "Have you decided what result would make you stop or change the idea?", risk: "There's no decision point, so you could keep spending on a weak idea." },
  ],
  gateTitle: "Where should we send your score?",
  gateBody: "Add your WhatsApp number to see your score and your 3 biggest risks.",
  gateButton: "See my score",
  scoreLabel: "Your idea score",
  risksTitle: "Your 3 biggest risks",
  noRisks: "No big gaps from these questions. Now prove it with paying customers.",
  next: "Want an honest verdict in 14 days? That's the Idea Check.",
  nextLink: "See the Idea Check",
};
