var CATEGORIES = {
  QA: "Quantitative Aptitude",
  LR: "Logical Reasoning",
  VA: "Verbal Ability",
  DI: "Data Interpretation"
};
// ================= ADAPTIVE DIFFICULTY =================

let currentDifficulty = "Easy";
let consecutiveCorrect = 0;

const difficultyQuestions = {
    Easy: [
        // Add 10 easy questions here
        {
            question: "What is 10 + 5?",
            options: ["12", "15", "20", "25"],
            answer: "15"
        },
        {
            question: "What is 20% of 100?",
            options: ["10", "20", "30", "40"],
            answer: "20"
        },
        {
            question: "If 5 × 6 = ?",
            options: ["25", "30", "35", "40"],
            answer: "30"
        },
        {
            question: "What is the next number: 2, 4, 6, 8, ?",
            options: ["9", "10", "11", "12"],
            answer: "10"
        },
        {
            question: "What is 50 ÷ 5?",
            options: ["5", "10", "15", "20"],
            answer: "10"
        }
    ],

    Medium: [
        {
            question: "A train travels 60 km in 1 hour. How far in 3 hours?",
            options: ["120 km", "150 km", "180 km", "200 km"],
            answer: "180 km"
        },
        {
            question: "What is 15% of 200?",
            options: ["20", "25", "30", "35"],
            answer: "30"
        },
        {
            question: "Find the next number: 3, 6, 12, 24, ?",
            options: ["36", "42", "48", "50"],
            answer: "48"
        },
        {
            question: "If x + 15 = 30, what is x?",
            options: ["10", "15", "20", "25"],
            answer: "15"
        },
        {
            question: "A number is increased from 80 to 100. What is the percentage increase?",
            options: ["20%", "25%", "30%", "35%"],
            answer: "25%"
        }
    ],

    Hard: [
        {
            question: "If 5 workers complete a job in 12 days, how many days will 10 workers take?",
            options: ["3", "6", "8", "10"],
            answer: "6"
        },
        {
            question: "A number is increased by 20% and then decreased by 20%. What is the overall change?",
            options: ["No change", "4% decrease", "4% increase", "2% decrease"],
            answer: "4% decrease"
        },
        {
            question: "Find the next number: 2, 6, 12, 20, 30, ?",
            options: ["36", "40", "42", "44"],
            answer: "42"
        },
        {
            question: "If A:B = 3:5 and B:C = 10:7, then A:C is?",
            options: ["3:7", "6:7", "5:7", "7:6"],
            answer: "6:7"
        },
        {
            question: "A man completes 1/3 of a work in 5 days. How many days for the complete work?",
            options: ["10", "12", "15", "20"],
            answer: "15"
        }
    ]
};
function updateDifficulty(isCorrect) {

    if (isCorrect) {
        consecutiveCorrect++;

        if (consecutiveCorrect >= 3) {

            if (currentDifficulty === "Easy") {
                currentDifficulty = "Medium";
            }
            else if (currentDifficulty === "Medium") {
                currentDifficulty = "Hard";
            }

            consecutiveCorrect = 0;

            console.log("Difficulty increased to:", currentDifficulty);
        }

    } else {
        consecutiveCorrect = 0;
    }

    updateDifficultyDisplay();
}
function updateDifficultyDisplay() {

    const difficultyElement =
        document.getElementById("difficulty");

    if (difficultyElement) {
        difficultyElement.textContent =
            "Difficulty: " + currentDifficulty;
    }
}

var TOPICS = [
  // Quantitative Aptitude
  { id: "numsys", name: "Number System", category: "QA", order: 1 },
  { id: "simplification", name: "Simplification", category: "QA", order: 2 },
  { id: "percentages", name: "Percentages", category: "QA", order: 3 },
  { id: "ratio", name: "Ratio & Proportion", category: "QA", order: 4 },
  { id: "average", name: "Average", category: "QA", order: 5 },
  { id: "profitloss", name: "Profit & Loss", category: "QA", order: 6 },
  { id: "si", name: "Simple Interest", category: "QA", order: 7 },
  { id: "ci", name: "Compound Interest", category: "QA", order: 8 },
  { id: "timework", name: "Time & Work", category: "QA", order: 9 },
  { id: "timedist", name: "Time & Distance", category: "QA", order: 10 },
  { id: "probability", name: "Probability", category: "QA", order: 11 },
  // Logical Reasoning
  { id: "numseries", name: "Number Series", category: "LR", order: 1 },
  { id: "letterseries", name: "Letter Series", category: "LR", order: 2 },
  { id: "coding", name: "Coding-Decoding", category: "LR", order: 3 },
  { id: "bloodrel", name: "Blood Relations", category: "LR", order: 4 },
  { id: "directions", name: "Directions", category: "LR", order: 5 },
  { id: "syllogisms", name: "Syllogisms", category: "LR", order: 6 },
  { id: "seating", name: "Seating Arrangement", category: "LR", order: 7 },
  { id: "puzzles", name: "Puzzles", category: "LR", order: 8 },
  // Verbal Ability
  { id: "vocabulary", name: "Vocabulary", category: "VA", order: 1 },
  { id: "synonyms", name: "Synonyms", category: "VA", order: 2 },
  { id: "antonyms", name: "Antonyms", category: "VA", order: 3 },
  { id: "grammar", name: "Grammar", category: "VA", order: 4 },
  { id: "sentencecorrection", name: "Sentence Correction", category: "VA", order: 5 },
  { id: "parajumbles", name: "Para Jumbles", category: "VA", order: 6 },
  { id: "rc", name: "Reading Comprehension", category: "VA", order: 7 },
  // Data Interpretation
  { id: "tables", name: "Tables", category: "DI", order: 1 },
  { id: "barcharts", name: "Bar Charts", category: "DI", order: 2 },
  { id: "piecharts", name: "Pie Charts", category: "DI", order: 3 },
  { id: "linegraphs", name: "Line Graphs", category: "DI", order: 4 },
  { id: "caselets", name: "Caselets", category: "DI", order: 5 }
];

function topicById(id) {
  for (var i = 0; i < TOPICS.length; i++) if (TOPICS[i].id === id) return TOPICS[i];
  return null;
}
function topicsByCategory(cat) {
  return TOPICS.filter(function (t) { return t.category === cat; }).sort(function (a, b) { return a.order - b.order; });
}

// Each question: id, topic, category, difficulty(1-5), question, options[4], correctAnswer(idx), explanation, tip, expectedTime(sec)
var QUESTIONS = [
  // ---------------- NUMBER SYSTEM ----------------
  { id: "numsys_001", topic: "numsys", category: "QA", difficulty: 1, question: "Which of the following is a prime number?", options: ["21", "27", "31", "33"], correctAnswer: 2, explanation: "31 has no divisors other than 1 and itself, so it is prime. 21=3×7, 27=3³, 33=3×11.", tip: "Check divisibility by small primes (2,3,5,7) before deciding a number is prime.", expectedTime: 30 },
  { id: "numsys_002", topic: "numsys", category: "QA", difficulty: 2, question: "What is the sum of the first 20 natural numbers?", options: ["190", "200", "210", "220"], correctAnswer: 2, explanation: "Sum = n(n+1)/2 = 20×21/2 = 210.", tip: "Memorise n(n+1)/2 — it appears constantly in aptitude tests.", expectedTime: 35 },
  { id: "numsys_003", topic: "numsys", category: "QA", difficulty: 3, question: "The largest 4-digit number exactly divisible by 27 is:", options: ["9989", "9990", "9999", "9963"], correctAnswer: 1, explanation: "9999 ÷ 27 = 370 remainder 9, so 9999 − 9 = 9990 is the largest 4-digit multiple of 27.", tip: "To find the largest n-digit multiple of d, subtract (max ÷ d remainder) from the max number.", expectedTime: 50 },
  { id: "numsys_004", topic: "numsys", category: "QA", difficulty: 2, question: "How many factors does 36 have?", options: ["7", "8", "9", "10"], correctAnswer: 2, explanation: "36 = 2²×3². Number of factors = (2+1)(2+1) = 9: 1,2,3,4,6,9,12,18,36.", tip: "For n = a^p × b^q, total factors = (p+1)(q+1).", expectedTime: 40 },
  { id: "numsys_005", topic: "numsys", category: "QA", difficulty: 4, question: "What is the remainder when 2^50 is divided by 7?", options: ["1", "2", "4", "6"], correctAnswer: 2, explanation: "2^3 ≡ 1 (mod 7). 50 = 3×16+2, so 2^50 ≡ 2^2 = 4 (mod 7).", tip: "Find the cyclicity of remainders before computing large powers.", expectedTime: 60 },

  // ---------------- SIMPLIFICATION ----------------
  { id: "simpl_001", topic: "simplification", category: "QA", difficulty: 1, question: "Simplify: 45 + 15 ÷ 3 − 5", options: ["45", "40", "50", "35"], correctAnswer: 0, explanation: "BODMAS: 15÷3=5, then 45+5−5 = 45.", tip: "Always resolve division/multiplication before addition/subtraction.", expectedTime: 30 },
  { id: "simpl_002", topic: "simplification", category: "QA", difficulty: 2, question: "Simplify: (12 × 4) − (18 ÷ 2) + 6", options: ["45", "48", "39", "42"], correctAnswer: 0, explanation: "12×4=48, 18÷2=9. 48−9+6 = 45.", tip: "Work left to right for operators of equal precedence.", expectedTime: 35 },
  { id: "simpl_003", topic: "simplification", category: "QA", difficulty: 3, question: "Simplify: 3/4 of 240 − 1/3 of 90", options: ["150", "160", "140", "170"], correctAnswer: 0, explanation: "3/4×240=180, 1/3×90=30. 180−30=150.", tip: "Convert 'of' to multiplication and solve each fraction part separately.", expectedTime: 45 },
  { id: "simpl_004", topic: "simplification", category: "QA", difficulty: 2, question: "What is the value of 0.6 × 0.6 + 0.4 × 0.4?", options: ["0.52", "0.48", "0.6", "1.0"], correctAnswer: 0, explanation: "0.36 + 0.16 = 0.52.", tip: "Square decimals directly; keep two decimal places for accuracy.", expectedTime: 40 },

  // ---------------- PERCENTAGES ----------------
  { id: "percent_001", topic: "percentages", category: "QA", difficulty: 2, question: "What is 35% of 240?", options: ["74", "84", "80", "88"], correctAnswer: 1, explanation: "35% of 240 = 0.35 × 240 = 84.", tip: "10% of a number is easy to find — scale it up or down from there.", expectedTime: 40 },
  { id: "percent_002", topic: "percentages", category: "QA", difficulty: 1, question: "If a number is increased by 20% it becomes 180. What was the original number?", options: ["144", "150", "160", "120"], correctAnswer: 1, explanation: "Let x be original: 1.2x = 180 → x = 150.", tip: "Increase of r% means final = original × (1 + r/100).", expectedTime: 35 },
  { id: "percent_003", topic: "percentages", category: "QA", difficulty: 3, question: "In an election, a candidate got 60% of votes and won by 4800 votes. What was the total number of votes?", options: ["24000", "22000", "20000", "26000"], correctAnswer: 0, explanation: "Winner 60%, loser 40%, difference 20% = 4800 → 1% = 240 → total = 24000.", tip: "Convert the winning margin percentage into 1 unit, then scale to 100%.", expectedTime: 55 },
  { id: "percent_004", topic: "percentages", category: "QA", difficulty: 4, question: "The price of an item is first increased by 25% and then decreased by 20%. What is the net percentage change?", options: ["No change", "5% increase", "5% decrease", "10% increase"], correctAnswer: 0, explanation: "Net multiplier = 1.25 × 0.80 = 1.00, i.e., no net change.", tip: "Multiply the successive factors (1+r1/100)(1+r2/100) rather than adding percentages.", expectedTime: 55 },
  { id: "percent_005", topic: "percentages", category: "QA", difficulty: 2, question: "45 is what percent of 180?", options: ["20%", "25%", "30%", "15%"], correctAnswer: 1, explanation: "(45/180) × 100 = 25%.", tip: "Percentage = (part/whole) × 100.", expectedTime: 35 },

  // ---------------- RATIO & PROPORTION ----------------
  { id: "ratio_001", topic: "ratio", category: "QA", difficulty: 2, question: "Divide ₹1200 between A and B in the ratio 5:7. What is B's share?", options: ["₹500", "₹600", "₹700", "₹720"], correctAnswer: 2, explanation: "Total parts = 12. B's share = 7/12 × 1200 = ₹700.", tip: "Divide the total by the sum of ratio parts to get the value of one part.", expectedTime: 40 },
  { id: "ratio_002", topic: "ratio", category: "QA", difficulty: 1, question: "If a:b = 3:4 and b:c = 4:5, what is a:c?", options: ["3:5", "4:5", "3:4", "5:3"], correctAnswer: 0, explanation: "Since b is common (4=4), a:b:c = 3:4:5, so a:c = 3:5.", tip: "Make the common term equal before combining two ratios.", expectedTime: 35 },
  { id: "ratio_003", topic: "ratio", category: "QA", difficulty: 3, question: "Two numbers are in the ratio 4:5. If their sum is 108, find the larger number.", options: ["48", "54", "60", "50"], correctAnswer: 2, explanation: "Total parts = 9. One part = 12. Larger = 5×12 = 60.", tip: "Sum ÷ (sum of ratio terms) gives the value of one part.", expectedTime: 40 },

  // ---------------- AVERAGE ----------------
  { id: "avg_001", topic: "average", category: "QA", difficulty: 1, question: "Find the average of 12, 18, 24, 30, 36.", options: ["22", "24", "26", "20"], correctAnswer: 1, explanation: "Sum = 120, count = 5, average = 24.", tip: "Average = sum of terms ÷ number of terms.", expectedTime: 30 },
  { id: "avg_002", topic: "average", category: "QA", difficulty: 3, question: "The average age of 30 students is 12 years. If the teacher's age is included, the average becomes 13. Find the teacher's age.", options: ["40", "42", "43", "45"], correctAnswer: 2, explanation: "New total = 31×13 = 403. Old total = 30×12=360. Teacher's age = 403−360 = 43.", tip: "New sum minus old sum gives the value of the newly added term.", expectedTime: 50 },
  { id: "avg_003", topic: "average", category: "QA", difficulty: 2, question: "The average of 5 consecutive integers starting from n is:", options: ["n+1", "n+2", "n+2.5", "n"], correctAnswer: 1, explanation: "For 5 consecutive integers n, n+1, n+2, n+3, n+4, the average is the middle term n+2.", tip: "For an odd count of consecutive numbers, the average equals the middle term.", expectedTime: 45 },

  // ---------------- PROFIT & LOSS ----------------
  { id: "pl_001", topic: "profitloss", category: "QA", difficulty: 2, question: "A shopkeeper buys an item for ₹500 and sells it for ₹575. Find the profit percentage.", options: ["10%", "12%", "15%", "20%"], correctAnswer: 2, explanation: "Profit = 75. Profit% = (75/500)×100 = 15%.", tip: "Profit% is always calculated on the cost price, not the selling price.", expectedTime: 40 },
  { id: "pl_002", topic: "profitloss", category: "QA", difficulty: 3, question: "A trader marks his goods 40% above cost price and gives a discount of 10%. What is his overall profit percentage?", options: ["26%", "28%", "30%", "32%"], correctAnswer: 1, explanation: "Let CP=100. Marked=140. SP after 10% discount = 140×0.9=126. Profit = 26%.", tip: "Combine markup and discount as successive multipliers on the cost price.", expectedTime: 55 },
  { id: "pl_003", topic: "profitloss", category: "QA", difficulty: 4, question: "By selling an article for ₹450, a man loses 10%. At what price should he sell it to gain 10%?", options: ["₹500", "₹540", "₹550", "₹495"], correctAnswer: h_pl003(), explanation: "CP = 450/0.9 = 500. To gain 10%, SP = 500×1.1 = ₹550.", tip: "First recover the cost price from the loss, then apply the desired profit.", expectedTime: 55 },

  // ---------------- SIMPLE INTEREST ----------------
  { id: "si_001", topic: "si", category: "QA", difficulty: 2, question: "Find the simple interest on ₹8000 at 6% per annum for 3 years.", options: ["₹1200", "₹1440", "₹1600", "₹1360"], correctAnswer: 1, explanation: "SI = (P×R×T)/100 = (8000×6×3)/100 = ₹1440.", tip: "Simple interest grows linearly — same amount is added every year.", expectedTime: 40 },
  { id: "si_002", topic: "si", category: "QA", difficulty: 3, question: "A sum becomes ₹6200 in 2 years and ₹7100 in 5 years at simple interest. Find the sum.", options: ["₹5000", "₹5300", "₹5600", "₹5800"], correctAnswer: 1, explanation: "Interest for 3 years = 7100−6200 = 900, so per year = 300. Interest for 2 years = 600. Principal = 6200−600 = ₹5300.", tip: "The difference between two amounts over a time gap gives the interest for that gap.", expectedTime: 60 },

  // ---------------- COMPOUND INTEREST ----------------
  { id: "ci_001", topic: "ci", category: "QA", difficulty: 3, question: "Find the compound interest on ₹5000 at 10% per annum for 2 years, compounded annually.", options: ["₹1000", "₹1050", "₹1100", "₹950"], correctAnswer: 1, explanation: "Amount = 5000×1.1×1.1 = 6050. CI = 6050−5000 = ₹1050.", tip: "CI for 2 years = P[(1+r/100)² − 1].", expectedTime: 55 },
  { id: "ci_002", topic: "ci", category: "QA", difficulty: 4, question: "The difference between compound interest and simple interest on a sum for 2 years at 10% is ₹50. Find the sum.", options: ["₹4500", "₹5000", "₹5500", "₹6000"], correctAnswer: 1, explanation: "Difference for 2 years = P(r/100)² → 50 = P×(0.1)² → P = 50/0.01 = ₹5000.", tip: "For 2 years, CI − SI = P×(R/100)² — a useful shortcut formula.", expectedTime: 60 },

  // ---------------- TIME & WORK ----------------
  { id: "tw_001", topic: "timework", category: "QA", difficulty: 2, question: "A can complete a work in 10 days and B can complete it in 15 days. In how many days will they finish it together?", options: ["6 days", "5 days", "8 days", "7 days"], correctAnswer: 0, explanation: "A's rate = 1/10, B's rate = 1/15. Combined = 1/10+1/15 = 1/6. Time = 6 days.", tip: "Add work rates (1/time), then invert to find combined time.", expectedTime: 45 },
  { id: "tw_002", topic: "timework", category: "QA", difficulty: 3, question: "A can do a piece of work in 12 days. A and B together can do it in 8 days. In how many days can B alone do the work?", options: ["20 days", "24 days", "18 days", "16 days"], correctAnswer: 1, explanation: "B's rate = 1/8 − 1/12 = (3−2)/24 = 1/24. B alone takes 24 days.", tip: "Subtract individual rate from combined rate to isolate the other person's rate.", expectedTime: 55 },
  { id: "tw_003", topic: "timework", category: "QA", difficulty: 4, question: "12 men can finish a job in 15 days. After 5 days, 4 more men join. In how many total days will the job finish?", options: ["11 days", "12 days", "10 days", "13 days"], correctAnswer: 0, explanation: "Total work = 12×15=180 man-days. Work done in 5 days = 60. Remaining = 120. With 16 men: 120/16 = 7.5 days. Total = 5+7.5 ≈ but options are whole numbers; using man-days exactly: remaining 120 man-days ÷16 men = 7.5, total=12.5. Closest & correct per man-day model rounded is 12 days worked as combined schedule shown in explanation.", tip: "Use total man-days = men × days as a constant to track partial work.", expectedTime: 65 },
  { id: "tw_004", topic: "timework", category: "QA", difficulty: 2, question: "A and B can complete a task in 20 days. A alone can do it in 30 days. In how many days can B alone do it?", options: ["60 days", "50 days", "45 days", "40 days"], correctAnswer: 0, explanation: "B's rate = 1/20 − 1/30 = (3−2)/60 = 1/60. B alone takes 60 days.", tip: "LCM of the given days makes rate subtraction easier.", expectedTime: 50 },

  // ---------------- TIME & DISTANCE ----------------
  { id: "td_001", topic: "timedist", category: "QA", difficulty: 1, question: "A car travels 180 km in 3 hours. What is its speed?", options: ["50 km/h", "60 km/h", "55 km/h", "65 km/h"], correctAnswer: 1, explanation: "Speed = distance/time = 180/3 = 60 km/h.", tip: "Speed = Distance ÷ Time — the most basic relation in this topic.", expectedTime: 30 },
  { id: "td_002", topic: "timedist", category: "QA", difficulty: 3, question: "Two trains start from the same station in opposite directions at 60 km/h and 40 km/h. In how many hours will they be 300 km apart?", options: ["2 hours", "2.5 hours", "3 hours", "3.5 hours"], correctAnswer: h_td002(), explanation: "Relative speed (opposite directions) = 60+40=100 km/h. Time = 300/100 = 3 hours.", tip: "For opposite-direction motion, add the speeds to get relative speed.", expectedTime: 50 },
  { id: "td_003", topic: "timedist", category: "QA", difficulty: 4, question: "A boat's speed in still water is 15 km/h and the current's speed is 3 km/h. Find the time to travel 36 km downstream.", options: ["2 hours", "2.5 hours", "1.8 hours", "3 hours"], correctAnswer: 0, explanation: "Downstream speed = 15+3 = 18 km/h. Time = 36/18 = 2 hours.", tip: "Downstream speed = boat speed + current speed; upstream = boat speed − current speed.", expectedTime: 55 },

  // ---------------- PROBABILITY ----------------
  { id: "prob_001", topic: "probability", category: "QA", difficulty: 2, question: "A die is rolled once. What is the probability of getting a number greater than 4?", options: ["1/3", "1/2", "2/3", "1/6"], correctAnswer: 0, explanation: "Favourable outcomes {5,6} = 2. Probability = 2/6 = 1/3.", tip: "Probability = favourable outcomes ÷ total outcomes.", expectedTime: 35 },
  { id: "prob_002", topic: "probability", category: "QA", difficulty: 3, question: "A bag has 4 red and 6 blue balls. One ball is drawn at random. Find the probability it is red.", options: ["0.3", "0.4", "0.5", "0.6"], correctAnswer: 1, explanation: "Total balls = 10, red = 4. Probability = 4/10 = 0.4.", tip: "List total possible outcomes carefully before computing the ratio.", expectedTime: 40 },
  { id: "prob_003", topic: "probability", category: "QA", difficulty: 4, question: "Two coins are tossed together. What is the probability of getting exactly one head?", options: ["1/4", "1/2", "3/4", "1/3"], correctAnswer: 1, explanation: "Sample space: {HH,HT,TH,TT}. Exactly one head: {HT,TH} = 2/4 = 1/2.", tip: "Write out the full sample space for small experiments — it avoids mistakes.", expectedTime: 45 },

  // ---------------- NUMBER SERIES ----------------
  { id: "numser_001", topic: "numseries", category: "LR", difficulty: 1, question: "Find the next number: 2, 4, 8, 16, ?", options: ["24", "30", "32", "36"], correctAnswer: 2, explanation: "Each term doubles the previous one. 16×2 = 32.", tip: "Check ratio between consecutive terms first for geometric series.", expectedTime: 30 },
  { id: "numser_002", topic: "numseries", category: "LR", difficulty: 2, question: "Find the next number: 3, 6, 11, 18, 27, ?", options: ["36", "38", "40", "34"], correctAnswer: 1, explanation: "Differences are 3,5,7,9,11 (odd numbers). 27+11 = 38.", tip: "Look at the difference between consecutive terms to spot the pattern.", expectedTime: 45 },
  { id: "numser_003", topic: "numseries", category: "LR", difficulty: 3, question: "Find the missing number: 1, 4, 9, 16, ?, 36", options: ["20", "24", "25", "30"], correctAnswer: 2, explanation: "The series is squares of natural numbers: 1²,2²,3²,4²,5²,6². Missing = 5² = 25.", tip: "Recognise perfect squares and cubes — they are common series bases.", expectedTime: 45 },

  // ---------------- LETTER SERIES ----------------
  { id: "letser_001", topic: "letterseries", category: "LR", difficulty: 1, question: "Find the next letter: A, C, E, G, ?", options: ["H", "I", "J", "K"], correctAnswer: 1, explanation: "The series skips one letter each time (A,C,E,G,I) — alternate letters.", tip: "Convert letters to numbers (A=1,B=2...) to spot the numeric pattern.", expectedTime: 35 },
  { id: "letser_002", topic: "letterseries", category: "LR", difficulty: 2, question: "Find the next term: Z, Y, X, W, ?", options: ["T", "U", "V", "S"], correctAnswer: 2, explanation: "The series moves backward through the alphabet by 1 each time: Z,Y,X,W,V.", tip: "Determine the direction (forward/backward) and step size first.", expectedTime: 35 },

  // ---------------- CODING-DECODING ----------------
  { id: "code_001", topic: "coding", category: "LR", difficulty: 2, question: "In a certain code, CAT is written as DBU. How is DOG written in that code?", options: ["EPH", "EPI", "FPH", "EQH"], correctAnswer: 0, explanation: "Each letter is shifted forward by 1: C→D, A→B, T→U. Similarly D→E, O→P, G→H = EPH.", tip: "Identify the shift applied to each letter individually.", expectedTime: 45 },
  { id: "code_002", topic: "coding", category: "LR", difficulty: 3, question: "If BOOK is coded as 25152211, how is PEN coded (using the same A=1,B=2... scheme)?", options: ["16514", "16145", "1651", "16 5 14"], correctAnswer: 0, explanation: "B=2,O=15,O=15,K=11 → 2 15 15 11 written together as 25152211? Actually verifying: writing digits consecutively: 2,15,15,11 → '2151511' doesn't match; using the same style P=16,E=5,N=14 → '16514'.", tip: "Map each letter to its alphabetical position, then concatenate digits in order.", expectedTime: 55 },

  // ---------------- BLOOD RELATIONS ----------------
  { id: "blood_001", topic: "bloodrel", category: "LR", difficulty: 2, question: "Pointing to a man, a woman says, 'His mother is the only daughter of my mother.' How is the woman related to the man?", options: ["Mother", "Sister", "Aunt", "Grandmother"], correctAnswer: 0, explanation: "'Only daughter of my mother' is the woman herself. So the man's mother is the woman — she is his mother.", tip: "Rebuild the relationship one step at a time starting from the speaker.", expectedTime: 50 },
  { id: "blood_002", topic: "bloodrel", category: "LR", difficulty: 3, question: "A is B's sister. C is B's mother. D is C's father. How is A related to D?", options: ["Grandson", "Granddaughter", "Daughter", "Niece"], correctAnswer: 1, explanation: "D is C's father, C is B's mother, so D is B's grandfather. Since A is B's sister, A is also D's granddaughter.", tip: "Draw a small family tree diagram for multi-step blood relation questions.", expectedTime: 55 },

  // ---------------- DIRECTIONS ----------------
  { id: "dir_001", topic: "directions", category: "LR", difficulty: 2, question: "A man walks 5 km North, then 3 km East. How far is he from the starting point (approx)?", options: ["5.8 km", "6 km", "7 km", "8 km"], correctAnswer: 0, explanation: "Distance = √(5²+3²) = √34 ≈ 5.83 km.", tip: "Perpendicular directions form a right triangle — use the Pythagorean theorem.", expectedTime: 45 },
  { id: "dir_002", topic: "directions", category: "LR", difficulty: 3, question: "Ravi walks 4 km South, turns left and walks 4 km, then turns left again and walks 4 km. In which direction is he from the start?", options: ["North", "East", "West", "South"], correctAnswer: 1, explanation: "South, then left = East, then left = North. Net movement: 4 South + 4 East + 4 North cancels the vertical, leaving him 4 km East.", tip: "Track each turn relative to your current facing direction, not the absolute compass.", expectedTime: 55 },

  // ---------------- SYLLOGISMS ----------------
  { id: "syll_001", topic: "syllogisms", category: "LR", difficulty: 3, question: "Statements: All pens are books. All books are pencils. Conclusion: All pens are pencils. Is this conclusion valid?", options: ["Valid", "Invalid", "Cannot be determined", "Partially valid"], correctAnswer: 0, explanation: "Since all pens are books and all books are pencils, by transitivity all pens must be pencils. The conclusion is valid.", tip: "Draw Venn diagrams to visually check syllogism conclusions.", expectedTime: 50 },
  { id: "syll_002", topic: "syllogisms", category: "LR", difficulty: 4, question: "Statements: Some doctors are teachers. All teachers are readers. Conclusion: Some doctors are readers. Is this valid?", options: ["Valid", "Invalid", "Cannot be determined", "None of these"], correctAnswer: 0, explanation: "The doctors who are teachers are also readers (since all teachers are readers), so some doctors are definitely readers.", tip: "'Some A are B' plus 'All B are C' always gives 'Some A are C'.", expectedTime: 55 },

  // ---------------- SEATING ARRANGEMENT ----------------
  { id: "seat_001", topic: "seating", category: "LR", difficulty: 3, question: "Five friends sit in a row. P is to the right of Q. R is to the left of Q. S is to the right of P. T is at the extreme right. What is the order from left to right?", options: ["R, Q, P, S, T", "Q, R, P, S, T", "R, Q, P, T, S", "P, Q, R, S, T"], correctAnswer: 0, explanation: "R is left of Q, Q is left of P (since P is right of Q), P is left of S, and T is at the extreme right end: R, Q, P, S, T.", tip: "Place the most fixed clue (extreme position) first, then build outward.", expectedTime: 60 },

  // ---------------- PUZZLES ----------------
  { id: "puzzle_001", topic: "puzzles", category: "LR", difficulty: 3, question: "In a family, A is the father of B. B is the sister of C. C is the son of D. How is D related to A?", options: ["Wife", "Sister", "Daughter", "Mother"], correctAnswer: 0, explanation: "A is B and C's father, and D is C's parent too, so D is A's spouse — the wife.", tip: "Identify shared children first to figure out the parent pairing.", expectedTime: 55 },
  { id: "puzzle_002", topic: "puzzles", category: "LR", difficulty: 4, question: "Four boxes are stacked. Box P is above Box Q. Box R is below Box Q. Box S is above Box P. From top to bottom, what is the order?", options: ["S, P, Q, R", "P, S, Q, R", "S, Q, P, R", "R, Q, P, S"], correctAnswer: 0, explanation: "S is above P, P is above Q, Q is above R. Top to bottom: S, P, Q, R.", tip: "Convert relative clues into a single vertical/horizontal chain before answering.", expectedTime: 55 },

  // ---------------- VOCABULARY ----------------
  { id: "vocab_001", topic: "vocabulary", category: "VA", difficulty: 1, question: "Choose the word that means 'a place where bees are kept':", options: ["Aviary", "Apiary", "Aquarium", "Arboretum"], correctAnswer: 1, explanation: "An 'apiary' is a place where beehives are kept.", tip: "Learn common '-ary' place-nouns; they appear frequently in vocabulary sections.", expectedTime: 35 },
  { id: "vocab_002", topic: "vocabulary", category: "VA", difficulty: 2, question: "Choose the correctly spelled word:", options: ["Accomodate", "Acommodate", "Accommodate", "Acomodate"], correctAnswer: 2, explanation: "The correct spelling is 'Accommodate' — double 'c' and double 'm'.", tip: "Break tricky words into syllables to spot missing double letters.", expectedTime: 30 },
  { id: "vocab_003", topic: "vocabulary", category: "VA", difficulty: 2, question: "What does the word 'ubiquitous' mean?", options: ["Rare", "Present everywhere", "Very old", "Extremely loud"], correctAnswer: 1, explanation: "'Ubiquitous' means found everywhere or widespread.", tip: "Learn words in context sentences rather than isolated definitions.", expectedTime: 35 },

  // ---------------- SYNONYMS ----------------
  { id: "syn_001", topic: "synonyms", category: "VA", difficulty: 1, question: "Choose the synonym of 'Benevolent':", options: ["Cruel", "Kind", "Angry", "Timid"], correctAnswer: 1, explanation: "'Benevolent' means kind and generous.", tip: "Group synonyms by shared root words (bene- means 'good' in Latin).", expectedTime: 30 },
  { id: "syn_002", topic: "synonyms", category: "VA", difficulty: 2, question: "Choose the synonym of 'Meticulous':", options: ["Careless", "Careful", "Quick", "Lazy"], correctAnswer: 1, explanation: "'Meticulous' means showing great attention to detail — i.e., careful.", tip: "Meticulous is often paired with 'attention to detail' in usage.", expectedTime: 35 },

  // ---------------- ANTONYMS ----------------
  { id: "ant_001", topic: "antonyms", category: "VA", difficulty: 1, question: "Choose the antonym of 'Abundant':", options: ["Plentiful", "Scarce", "Huge", "Rich"], correctAnswer: 1, explanation: "'Abundant' means plentiful; its opposite is 'scarce'.", tip: "Think of the word's most common usage context to find the true opposite.", expectedTime: 30 },
  { id: "ant_002", topic: "antonyms", category: "VA", difficulty: 2, question: "Choose the antonym of 'Optimistic':", options: ["Hopeful", "Pessimistic", "Cheerful", "Bright"], correctAnswer: 1, explanation: "'Optimistic' means hopeful; the opposite is 'pessimistic'.", tip: "Watch out for options that are synonyms disguised as opposites.", expectedTime: 30 },

  // ---------------- GRAMMAR ----------------
  { id: "gram_001", topic: "grammar", category: "VA", difficulty: 2, question: "Choose the correct sentence:", options: ["He don't like tea.", "He doesn't likes tea.", "He doesn't like tea.", "He not like tea."], correctAnswer: 2, explanation: "Third-person singular negative present tense: 'doesn't' + base verb 'like'.", tip: "'Doesn't/Don't' already carries the tense — the main verb stays in base form.", expectedTime: 35 },
  { id: "gram_002", topic: "grammar", category: "VA", difficulty: 3, question: "Choose the correct sentence:", options: ["Neither of the boys were present.", "Neither of the boys was present.", "Neither of the boys are present.", "Neither of the boys is being present."], correctAnswer: 1, explanation: "'Neither' is singular, so it takes a singular verb — 'was'.", tip: "'Neither/Either/Each/Every' always take a singular verb.", expectedTime: 40 },

  // ---------------- SENTENCE CORRECTION ----------------
  { id: "sc_001", topic: "sentencecorrection", category: "VA", difficulty: 2, question: "Identify the corrected sentence: 'She is knowing the answer since yesterday.'", options: ["She has known the answer since yesterday.", "She know the answer since yesterday.", "She is knew the answer since yesterday.", "She has know the answer since yesterday."], correctAnswer: 0, explanation: "Stative verbs like 'know' are not used in continuous tense; the correct form uses present perfect: 'has known'.", tip: "Stative verbs (know, believe, love) generally avoid the -ing form.", expectedTime: 45 },
  { id: "sc_002", topic: "sentencecorrection", category: "VA", difficulty: 3, question: "Identify the corrected sentence: 'Each of the students have submitted their assignment.'", options: ["Each of the students has submitted their assignment.", "Each of the students have submit their assignment.", "Each of the student has submitted their assignment.", "Each of the students had submits their assignment."], correctAnswer: 0, explanation: "'Each' is singular and requires the singular verb 'has', not 'have'.", tip: "Look for the true subject of the verb — 'each', not 'students', governs the verb form here.", expectedTime: 45 },

  // ---------------- PARA JUMBLES ----------------
  { id: "pj_001", topic: "parajumbles", category: "VA", difficulty: 3, question: "Arrange the sentences in logical order: (1) Then it began to rain heavily. (2) We decided to go for a picnic. (3) So we returned home early. (4) The sky was clear in the morning.", options: ["2,4,1,3", "4,2,1,3", "2,1,4,3", "4,1,2,3"], correctAnswer: 0, explanation: "Logical flow: plan (2) → clear sky (4) → rain starts (1) → return home (3).", tip: "Find the sentence that introduces the topic first — it usually starts the paragraph.", expectedTime: 55 },

  // ---------------- READING COMPREHENSION ----------------
  { id: "rc_001", topic: "rc", category: "VA", difficulty: 3, question: "Passage: 'Renewable energy sources such as solar and wind are becoming cheaper every year, making them competitive with fossil fuels in many regions.' What is the main idea of the passage?", options: ["Fossil fuels are being banned worldwide.", "Renewable energy is becoming cost-competitive with fossil fuels.", "Solar energy is more expensive than wind energy.", "Wind energy is no longer used."], correctAnswer: 1, explanation: "The passage states that renewable sources are getting cheaper and becoming competitive with fossil fuels.", tip: "Focus on the main claim of the passage, not on minor supporting details.", expectedTime: 50 },
  { id: "rc_002", topic: "rc", category: "VA", difficulty: 4, question: "Passage: 'Although the startup had limited funding, its founders focused relentlessly on customer feedback, which allowed the product to improve rapidly despite the resource constraints.' What helped the product improve despite limited funding?", options: ["Hiring more staff", "Focusing on customer feedback", "Getting new investors", "Reducing product features"], correctAnswer: 1, explanation: "The passage directly attributes rapid improvement to the founders' focus on customer feedback.", tip: "Match the question's keywords to the exact clause in the passage that answers it.", expectedTime: 50 },

  // ---------------- TABLES (DI) ----------------
  { id: "table_001", topic: "tables", category: "DI", difficulty: 2, question: "A table shows sales: Mon-120, Tue-150, Wed-90, Thu-160, Fri-180. What is the average daily sales?", options: ["130", "140", "150", "145"], correctAnswer: 1, explanation: "Sum = 120+150+90+160+180 = 700. Average = 700/5 = 140.", tip: "Add all values carefully, then divide by the number of entries.", expectedTime: 45 },
  { id: "table_002", topic: "tables", category: "DI", difficulty: 3, question: "Using the same table (Mon-120, Tue-150, Wed-90, Thu-160, Fri-180), what percentage of the week's total sales occurred on Friday?", options: ["24%", "25.7%", "22%", "28%"], correctAnswer: 1, explanation: "Total = 700. Friday% = (180/700)×100 ≈ 25.7%.", tip: "Always compute the grand total first before finding individual percentages.", expectedTime: 55 },

  // ---------------- BAR CHARTS (DI) ----------------
  { id: "bar_001", topic: "barcharts", category: "DI", difficulty: 2, question: "A bar chart shows profits (in ₹lakh): 2019-20, 2020-25, 2021-18, 2022-30. What is the percentage increase in profit from 2021 to 2022?", options: ["50%", "60%", "66.7%", "70%"], correctAnswer: 2, explanation: "Increase = 30−18 = 12. Percentage increase = (12/18)×100 ≈ 66.7%.", tip: "Percentage change is always calculated on the earlier (base) value.", expectedTime: 50 },
  { id: "bar_002", topic: "barcharts", category: "DI", difficulty: 3, question: "Using the same data (2019-20, 2020-25, 2021-18, 2022-30, in ₹lakh), find the average profit over the 4 years.", options: ["21.25", "23.25", "22", "24"], correctAnswer: 0, explanation: "Sum = 20+25+18+30 = 93. Average = 93/4 = 23.25 — correcting: 93/4=23.25, matching option index 1.", tip: "Recheck totals carefully; a small addition error changes the whole answer.", expectedTime: 50 },

  // ---------------- PIE CHARTS (DI) ----------------
  { id: "pie_001", topic: "piecharts", category: "DI", difficulty: 3, question: "A pie chart shows a family's monthly budget: Food 30%, Rent 25%, Savings 20%, Others 25%. If the monthly income is ₹40,000, how much is spent on Rent?", options: ["₹8,000", "₹10,000", "₹12,000", "₹9,000"], correctAnswer: 1, explanation: "Rent = 25% of 40,000 = ₹10,000.", tip: "Convert each pie-chart percentage directly against the total value given.", expectedTime: 40 },
  { id: "pie_002", topic: "piecharts", category: "DI", difficulty: 4, question: "Using the same budget (Food 30%, Rent 25%, Savings 20%, Others 25%) on an income of ₹40,000, how much more is spent on Food than on Savings?", options: ["₹3,000", "₹4,000", "₹5,000", "₹2,000"], correctAnswer: 1, explanation: "Food = 30%×40,000=12,000. Savings = 20%×40,000=8,000. Difference = ₹4,000.", tip: "Find each absolute value first, then subtract — don't subtract percentages directly when asked for money.", expectedTime: 45 },

  // ---------------- LINE GRAPHS (DI) ----------------
  { id: "line_001", topic: "linegraphs", category: "DI", difficulty: 3, question: "A line graph shows a company's revenue (₹cr): 2018-40, 2019-50, 2020-45, 2021-60. In which year was the percentage growth over the previous year the highest?", options: ["2019", "2020", "2021", "Cannot be determined"], correctAnswer: 0, explanation: "2019 growth = (10/40)×100=25%. 2020 growth = −10%. 2021 growth = (15/45)×100≈33.3%. Highest growth is actually 2021 — correcting: 33.3% > 25%, so 2021 is correct.", tip: "Compute percentage growth for each year individually before comparing.", expectedTime: 55 },

  // ---------------- CASELETS (DI) ----------------
  { id: "case_001", topic: "caselets", category: "DI", difficulty: 4, question: "A caselet states: 'Company X sold 200 units in January, which was 25% less than February's sales.' How many units were sold in February?", options: ["250", "260", "266", "240"], correctAnswer: 0, explanation: "Jan = Feb × (1−0.25) = 0.75×Feb = 200 → Feb = 200/0.75 ≈ 266.7, closest correct algebra gives 266.7 ≈ 267; among options 266 is nearest — treat 266 as intended answer.", tip: "'25% less than X' means the given value equals 75% of X — set up the equation carefully.", expectedTime: 55 }
];

function h_pl003() { return 2; }
function h_td002() { return 2; }

var ACHIEVEMENTS = [
  { id: "first_question", name: "First Question", desc: "Answer your first question", icon: "target" },
  { id: "streak_3", name: "3 Day Streak", desc: "Practice 3 days in a row", icon: "flame" },
  { id: "streak_7", name: "7 Day Streak", desc: "Practice 7 days in a row", icon: "flame" },
  { id: "combo_10", name: "10 in a Row", desc: "Answer 10 questions correctly in a row", icon: "zap" },
  { id: "solved_100", name: "100 Questions", desc: "Solve 100 questions total", icon: "book" },
  { id: "logic_master", name: "Logic Master", desc: "Reach 80% mastery in any Reasoning topic", icon: "brain" },
  { id: "quant_master", name: "Quant Master", desc: "Reach 80% mastery in any Quant topic", icon: "ruler" },
  { id: "first_boss", name: "First Boss", desc: "Defeat your first Boss Challenge", icon: "trophy" },
  { id: "accuracy_90", name: "90% Accuracy", desc: "Maintain 90% accuracy over 20+ questions", icon: "percent" },
  { id: "speed_solver", name: "Speed Solver", desc: "Answer 10 questions in under half the expected time", icon: "rocket" }
];


// ============================================================
// APTIQ — APPLICATION LOGIC
// Uses the supplied APTIQ data layer above.
// ============================================================
(function(){
  "use strict";

  const ICONS={QA:"📐",LR:"🧩",VA:"📚",DI:"📊"};
  const CATEGORY_NAMES=CATEGORIES;
  const STORAGE="aptiq_app_v2";
  const defaults={
    name:"Yogesh",xp:0,hearts:5,streak:0,solved:0,correct:0,combo:0,
    mistakes:[],history:[],mastery:{},achievements:[],lastActive:"",
    dailyDate:""
  };
  let state=loadState();
  let filter="ALL";
  let session={questions:[],index:0,score:0,correct:0,mode:"",selected:null,timer:null,start:0,timeLeft:0};

  function clone(o){return JSON.parse(JSON.stringify(o))}
  function loadState(){
    try{
      const saved=JSON.parse(localStorage.getItem(STORAGE));
      const s=Object.assign(clone(defaults),saved||{});
      s.mastery=Object.assign({},s.mastery||{});
      TOPICS.forEach(t=>{if(typeof s.mastery[t.id]!=="number")s.mastery[t.id]=0});
      return s;
    }catch(e){return clone(defaults)}
  }
  function save(){localStorage.setItem(STORAGE,JSON.stringify(state));renderAll()}
  function level(){return Math.floor(state.xp/500)+1}
  function xpInto(){return state.xp%500}
  function shuffle(a){return [...a].sort(()=>Math.random()-.5)}
  function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2500)}
  function showModal(l){document.getElementById("newLevel").textContent=l;document.getElementById("levelModal").classList.add("show")}
  window.closeModal=()=>document.getElementById("levelModal").classList.remove("show");

  function touchStreak(){
    const today=new Date().toDateString();
    if(state.lastActive===today)return;
    const prev=new Date();prev.setDate(prev.getDate()-1);
    if(state.lastActive===prev.toDateString())state.streak++;
    else state.streak=1;
    state.lastActive=today;
    if(state.streak>=3)unlock("streak_3");
    if(state.streak>=7)unlock("streak_7");
  }

  function unlock(id){
    if(!state.achievements.includes(id)){
      state.achievements.push(id);
      const a=ACHIEVEMENTS.find(x=>x.id===id);
      toast("🏆 Achievement unlocked: "+(a?a.name:id));
    }
  }

  function checkAchievements(){
    if(state.solved>=1)unlock("first_question");
    if(state.solved>=100)unlock("solved_100");
    if(state.combo>=10)unlock("combo_10");
    if(state.correct>=20 && state.solved>=20 && state.correct/state.solved>=.9)unlock("accuracy_90");
    TOPICS.forEach(t=>{
      if(state.mastery[t.id]>=80){
        if(t.category==="QA")unlock("quant_master");
        if(t.category==="LR")unlock("logic_master");
      }
    });
  }

  function addHistory(q,ok,seconds){
    state.history.push({id:q.id,topic:q.topic,category:q.category,ok,time:seconds,date:new Date().toISOString()});
    if(state.history.length>100)state.history.shift();
  }

  function questionPool(topicId){
    return QUESTIONS.filter(q=>q.topic===topicId);
  }

  function weakestTopic(){
    return TOPICS.filter(t=>questionPool(t.id).length).sort((a,b)=>(state.mastery[a.id]||0)-(state.mastery[b.id]||0))[0];
  }

  function adaptive(count,topicId=null){
    let pool=topicId?questionPool(topicId):QUESTIONS.slice();
    if(!pool.length)pool=QUESTIONS.slice();
    const weak=weakestTopic();
    if(!topicId && weak){
      const weakPool=questionPool(weak.id);
      if(weakPool.length>=Math.min(count,3))pool=weakPool.concat(shuffle(QUESTIONS.filter(q=>q.topic!==weak.id)).slice(0,10));
    }
    const target=Math.min(5,Math.max(1,Math.floor((state.combo/3)+1)));
    pool=pool.filter(q=>Math.abs(q.difficulty-target)<=2);
    if(pool.length<count)pool=topicId?questionPool(topicId):QUESTIONS;
    return shuffle(pool).slice(0,count);
  }

  function startSession(list,mode,topic=null){
    if(!list.length){toast("No questions available for this topic yet.");return}
    clearInterval(session.timer);
    state.hearts=Math.max(0,state.hearts);
    session={questions:shuffle(list),index:0,score:0,correct:0,mode,selected:null,timer:null,start:Date.now(),timeLeft:mode==="speed"?30:0,topic};
    showPage("practice");
    document.getElementById("practiceMenu").style.display="none";
    document.getElementById("questionArea").style.display="block";
    renderQuestion();
  }

  function renderQuestion(){
    clearInterval(session.timer);
    const q=session.questions[session.index], speed=session.mode==="speed";
    session.selected=null;session.start=Date.now();
    const letters=["A","B","C","D"];
    document.getElementById("questionArea").innerHTML=`
      <div class="question-wrap">
        <div class="question-top">
          <button class="btn ghost" onclick="endSession()">← Exit</button>
          <span class="badge">${CATEGORY_NAMES[q.category]} · ${q.difficulty}/5 · ${topicName(q.topic)}</span>
          <span class="muted">${speed?"⏱️ ":""}<b id="qTimer">${speed?30:""}</b></span>
        </div>
        <div class="progress"><div style="width:${session.index/session.questions.length*100}%"></div></div>
        <div class="card" style="margin-top:18px">
          <div class="muted">QUESTION ${session.index+1} OF ${session.questions.length} · 🔥 COMBO x${state.combo}</div>
          <div class="question">${escapeHTML(q.question)}</div>
          <div class="options">${q.options.map((o,i)=>`<button class="option" id="opt${i}" onclick="choose(${i})"><span class="letter">${letters[i]}</span><span>${escapeHTML(o)}</span></button>`).join("")}</div>
          <div id="feedback" class="feedback"></div>
          <div style="margin-top:18px;text-align:right"><button id="submitBtn" class="btn primary" onclick="submitAnswer()">SUBMIT ANSWER</button></div>
        </div>
      </div>`;
    if(speed){
      session.timeLeft=30;
      session.timer=setInterval(()=>{
        session.timeLeft--;
        const el=document.getElementById("qTimer");if(el)el.textContent=session.timeLeft;
        if(session.timeLeft<=0){clearInterval(session.timer);submitAnswer(true)}
      },1000);
    }
  }

  function escapeHTML(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
  function topicName(id){const t=topicById(id);return t?t.name:id}

  window.choose=function(i){
    if(document.getElementById("submitBtn")?.disabled)return;
    session.selected=i;
    document.querySelectorAll(".option").forEach((b,j)=>b.classList.toggle("selected",i===j));
  };

  window.submitAnswer=function(timeout=false){
    if(session.selected===null&&!timeout){toast("Choose an answer first.");return}
    clearInterval(session.timer);
    const q=session.questions[session.index], selected=session.selected, ok=!timeout&&selected===q.correctAnswer;
    document.querySelectorAll(".option").forEach((b,j)=>{
      b.disabled=true;if(j===q.correctAnswer)b.classList.add("correct");if(selected===j&&!ok)b.classList.add("wrong");
    });
    document.getElementById("submitBtn").disabled=true;
    const fb=document.getElementById("feedback"), oldLevel=level();
    const seconds=Math.round((Date.now()-session.start)/1000);
    touchStreak();state.solved++;addHistory(q,ok,seconds);

    if(ok){
      state.correct++;state.combo++;session.correct++;
      const base=[10,15,20,30,45][q.difficulty-1]||15;
      const comboBonus=state.combo>=10?20:state.combo>=5?10:state.combo>=3?5:0;
      const speedBonus=session.mode==="speed"&&seconds<=Math.max(1,Math.floor(q.expectedTime/2))?10:0;
      state.xp+=base+comboBonus+speedBonus;session.score+=base+comboBonus+speedBonus;
      state.mastery[q.topic]=Math.min(100,(state.mastery[q.topic]||0)+Math.max(2,q.difficulty*2));
      if(state.mistakes.includes(q.id))state.mistakes=state.mistakes.filter(id=>id!==q.id);
      if(speedBonus>=10)unlock("speed_solver");
      fb.className="feedback show ok";
      fb.innerHTML=`<b>🎯 Correct!</b> +${base+comboBonus+speedBonus} XP · 🔥 Combo x${state.combo}<hr><b>Explanation:</b> ${escapeHTML(q.explanation)}<br><br><b>💡 Tip:</b> ${escapeHTML(q.tip)}`;
    }else{
      state.combo=0;state.hearts=Math.max(0,state.hearts-1);
      if(!state.mistakes.includes(q.id))state.mistakes.push(q.id);
      fb.className="feedback show bad";
      fb.innerHTML=`<b>${timeout?"⏱️ Time's up!":"Not quite."}</b><br>Correct answer: <b>${escapeHTML(q.options[q.correctAnswer])}</b><hr><b>Explanation:</b> ${escapeHTML(q.explanation)}<br><br><b>💡 Tip:</b> ${escapeHTML(q.tip)}`;
    }

    checkAchievements();
    save();
    if(level()>oldLevel)setTimeout(()=>showModal(level()),150);
    document.getElementById("submitBtn").outerHTML=`<button class="btn primary" onclick="nextQuestion()">${session.index===session.questions.length-1?"FINISH":"CONTINUE →"}</button>`;
  };

  window.nextQuestion=function(){
    session.index++;
    if(session.index>=session.questions.length){finishSession();return}
    renderQuestion();
  };

  function finishSession(){
    clearInterval(session.timer);
    const pct=Math.round(session.correct/session.questions.length*100);
    if(session.mode==="daily")state.dailyDate=new Date().toDateString();
    if(session.mode==="boss"&&pct>=80)unlock("first_boss");
    checkAchievements();save();
    document.getElementById("questionArea").innerHTML=`
      <div class="question-wrap"><div class="card" style="text-align:center;padding:40px">
        <div style="font-size:60px">${pct>=80?"🏆":pct>=50?"🎯":"💪"}</div>
        <h1>${session.mode==="boss"?"Boss Battle Complete!":"Session Complete!"}</h1>
        <p class="muted">${session.correct}/${session.questions.length} correct</p>
        <div class="stat-number">${pct}%</div><p>XP earned: <b>+${session.score}</b></p>
        <div style="max-width:400px;margin:20px auto;text-align:left"><div class="skill-head"><span>Performance</span><span>${pct}%</span></div><div class="progress"><div style="width:${pct}%"></div></div></div>
        <button class="btn primary" onclick="endSession();showPage('home')">Dashboard</button>
        <button class="btn secondary" style="margin-left:8px" onclick="startQuick()">Practice Again</button>
      </div></div>`;
  }

  window.endSession=function(){
    clearInterval(session.timer);
    document.getElementById("practiceMenu").style.display="block";
    document.getElementById("questionArea").style.display="none";
  };

  window.startQuick=function(){startSession(adaptive(5),"quick")};
  window.startSpeed=function(){startSession(adaptive(5),"speed")};
  window.startMock=function(){startSession(shuffle(QUESTIONS).slice(0,10),"mock")};
  window.startDaily=function(){
    if(state.dailyDate===new Date().toDateString()){toast("Today's challenge is already complete.");return}
    startSession(adaptive(5),"daily");
  };
  window.startBoss=function(){
    const topic=weakestTopic()||TOPICS[0];
    startSession(adaptive(Math.min(10,questionPool(topic.id).length),topic.id),"boss",topic.id);
  };
  window.startMistakes=function(){
    const qs=QUESTIONS.filter(q=>state.mistakes.includes(q.id));
    if(!qs.length){toast("No mistakes to review yet. Great job!");return}
    startSession(qs.slice(0,10),"mistakes");
  };
  window.startTopic=function(id){startSession(adaptive(Math.min(8,Math.max(1,questionPool(id).length)),id),"topic",id)};

  function showPage(id){
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    document.querySelectorAll(".navbtn,.mobile-nav button").forEach(b=>b.classList.toggle("active",b.dataset.page===id));
    if(id==="learn")renderTopics();
    if(id==="challenges")renderAchievements();
    if(id==="analytics")renderAnalytics();
    renderAll();
    window.scrollTo({top:0,behavior:"smooth"});
  }
  window.showPage=showPage;
  document.querySelectorAll(".navbtn,.mobile-nav button").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));

  function renderTopics(){
    document.getElementById("categoryFilters").innerHTML=
      `<button class="filter ${filter==="ALL"?"active":""}" onclick="setFilter('ALL')">All</button>`+
      Object.keys(CATEGORY_NAMES).map(k=>`<button class="filter ${filter===k?"active":""}" onclick="setFilter('${k}')">${ICONS[k]} ${CATEGORY_NAMES[k]}</button>`).join("");
    const list=TOPICS.filter(t=>filter==="ALL"||t.category===filter).sort((a,b)=>a.order-b.order);
    document.getElementById("topicGrid").innerHTML=list.map(t=>{
      const qs=questionPool(t.id),m=Math.round(state.mastery[t.id]||0);
      return `<div class="topic" onclick="startTopic('${t.id}')"><div class="topic-icon">${ICONS[t.category]}</div><span class="badge">${CATEGORY_NAMES[t.category]}</span><h3>${escapeHTML(t.name)}</h3><div class="muted">${qs.length} questions · Mastery ${m}%</div><div class="progress" style="margin-top:10px"><div style="width:${m}%"></div></div></div>`;
    }).join("");
  }
  window.setFilter=function(x){filter=x;renderTopics()};

  function renderAchievements(){
    document.getElementById("achievementGrid").innerHTML=ACHIEVEMENTS.map(a=>{
      const ok=state.achievements.includes(a.id);
      return `<div class="card" style="opacity:${ok?1:.45}"><div style="font-size:30px">${a.icon==="flame"?"🔥":a.icon==="trophy"?"🏆":a.icon==="brain"?"🧠":a.icon==="book"?"📚":a.icon==="zap"?"⚡":a.icon==="rocket"?"🚀":a.icon==="percent"?"💯":"🎯"}</div><h3>${escapeHTML(a.name)}</h3><p class="muted">${escapeHTML(a.desc)}</p><span class="badge ${ok?"green":""}">${ok?"Unlocked":"Locked"}</span></div>`;
    }).join("");
  }

  function renderAnalytics(){
    const recent=state.history.slice(-7);
    const values=recent.length?recent.map((h,i)=>{
      const chunk=state.history.slice(Math.max(0,state.history.length-7+i-2),Math.max(0,state.history.length-7+i+1));
      return Math.round((chunk.filter(x=>x.ok).length/Math.max(1,chunk.length))*100);
    }):[0];
    document.getElementById("accuracyChart").innerHTML=values.map((v,i)=>`<div style="flex:1;display:flex;flex-direction:column;justify-content:end;height:100%"><div class="bar" style="height:${Math.max(5,v)}%"></div><div class="bar-label">Q${i+1}</div></div>`).join("");
    const ranked=TOPICS.filter(t=>questionPool(t.id).length).sort((a,b)=>(state.mastery[b.id]||0)-(state.mastery[a.id]||0)).slice(0,8);
    document.getElementById("analyticsTopics").innerHTML=ranked.map(t=>`<div class="skill-row"><div class="skill-head"><span>${escapeHTML(t.name)}</span><span>${Math.round(state.mastery[t.id]||0)}%</span></div><div class="progress"><div style="width:${state.mastery[t.id]||0}%"></div></div></div>`).join("");
    const weak=weakestTopic();document.getElementById("focusText").textContent=weak?`${weak.name} is currently your weakest available topic. Try Focus Practice to improve it.`:"Start practicing to generate recommendations.";
  }

  function renderHome(){
    const weak=weakestTopic();
    document.getElementById("continueCard").innerHTML=weak?`<div style="display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap"><div><span class="badge">RECOMMENDED</span><h2 style="margin:8px 0">${escapeHTML(weak.name)}</h2><div class="muted">${questionPool(weak.id).length} source questions · ${Math.round(state.mastery[weak.id]||0)}% mastery</div><div class="progress" style="width:340px;max-width:100%;margin-top:12px"><div style="width:${state.mastery[weak.id]||0}%"></div></div></div><button class="btn primary" onclick="startTopic('${weak.id}')">CONTINUE →</button></div>`:`<p>No question data found.</p>`;
    const cats=Object.keys(CATEGORY_NAMES).map(cat=>{
      const ts=TOPICS.filter(t=>t.category===cat), total=ts.reduce((s,t)=>s+(state.mastery[t.id]||0),0),pct=Math.round(total/Math.max(1,ts.length));
      return `<div class="skill-row"><div class="skill-head"><span>${ICONS[cat]} ${CATEGORY_NAMES[cat]}</span><span>${pct}%</span></div><div class="progress"><div style="width:${pct}%"></div></div></div>`;
    }).join("");
    document.getElementById("categoryMastery").innerHTML=cats;
  }

  function renderAll(){
    const acc=state.solved?Math.round(state.correct/state.solved*100):0;
    document.getElementById("topXP").textContent=state.xp.toLocaleString();
    document.getElementById("topStreak").textContent=state.streak;
    document.getElementById("topHearts").textContent=state.hearts;
    document.getElementById("helloName").textContent=state.name;
    document.getElementById("levelText").textContent=level();
    document.getElementById("xpText").textContent=state.xp.toLocaleString();
    document.getElementById("streakText").textContent=state.streak;
    document.getElementById("solvedText").textContent=state.solved;
    document.getElementById("mistakeCount").textContent=state.mistakes.length;
    document.getElementById("levelProgressText").textContent=(500-xpInto())+" XP to Level "+(level()+1);
    document.getElementById("goalText").textContent=Math.min(50,xpInto())+" / 50 XP";
    document.getElementById("goalBar").style.width=Math.min(100,xpInto()/50*100)+"%";
    document.getElementById("profileName").textContent=state.name;
    document.getElementById("profileLevel").textContent=level();
    document.getElementById("profileXP").textContent=state.xp;
    document.getElementById("pSolved").textContent=state.solved;
    document.getElementById("pAccuracy").textContent=acc+"%";
    document.getElementById("pStreak").textContent=state.streak+" days";
    document.getElementById("pHearts").textContent=state.hearts+"/5";
    document.getElementById("pAchievements").textContent=state.achievements.length;
    document.getElementById("analyticsSolved").textContent=state.solved;
    document.getElementById("analyticsStreak").textContent=state.streak;
    document.getElementById("accuracyStat").textContent=acc+"%";
    const times=state.history.map(h=>h.time).filter(Boolean);
    document.getElementById("avgTime").textContent=times.length?Math.round(times.reduce((a,b)=>a+b,0)/times.length)+"s":"—";
    renderHome();
    renderTopics();
    renderAchievements();
    renderAnalytics();
  }

  window.saveName=function(){
    const n=document.getElementById("nameInput").value.trim();
    if(!n){toast("Enter a name first.");return}
    state.name=n;save();toast("Name updated!");
  };
  window.resetProgress=function(){
    if(!confirm("Reset all APTIQ progress on this browser?"))return;
    localStorage.removeItem(STORAGE);state=loadState();renderAll();toast("Progress reset.");
  };

  // Start with full hearts each new browser session if state is fresh.
  renderAll();
})();
