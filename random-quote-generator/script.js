
const quotes = [
  { quote: "Stay hungry, stay foolish.", owner: "Steve Jobs" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", owner: "Winston Churchill" },
  { quote: "The only way to do great work is to love what you do.", owner: "Steve Jobs" },
  { quote: "Believe you can and you're halfway there.", owner: "Theodore Roosevelt" },
  { quote: "Don’t let yesterday take up too much of today.", owner: "Will Rogers" },
  { quote: "Dream big and dare to fail.", owner: "Norman Vaughan" },
  { quote: "Hard work beats talent when talent doesn’t work hard.", owner: "Tim Notke" },
  { quote: "Your time is limited, so don’t waste it living someone else’s life.", owner: "Steve Jobs" },
  { quote: "Do what you can, with what you have, where you are.", owner: "Theodore Roosevelt" },
  { quote: "It always seems impossible until it’s done.", owner: "Nelson Mandela" },
  { quote: "Discipline is the bridge between goals and accomplishment.", owner: "Jim Rohn" },
  { quote: "The future depends on what you do today.", owner: "Mahatma Gandhi" },
  { quote: "Opportunities don't happen, you create them.", owner: "Chris Grosser" },
  { quote: "If you are working on something exciting, you don’t have to be pushed.", owner: "Steve Jobs" },
  { quote: "Success usually comes to those who are too busy to be looking for it.", owner: "Henry David Thoreau" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", owner: "Sam Levenson" },
  { quote: "Great things never come from comfort zones.", owner: "Unknown" },
  { quote: "Push yourself, because no one else is going to do it for you.", owner: "Unknown" },
  { quote: "Dreams don’t work unless you do.", owner: "John C. Maxwell" },
  { quote: "Small progress is still progress.", owner: "Unknown" },
  { quote: "Consistency is what transforms average into excellence.", owner: "Unknown" },
  { quote: "Work hard in silence, let success make the noise.", owner: "Frank Ocean" },
  { quote: "The secret of getting ahead is getting started.", owner: "Mark Twain" },
  { quote: "Focus on being productive instead of busy.", owner: "Tim Ferriss" },
  { quote: "You don’t have to be great to start, but you have to start to be great.", owner: "Zig Ziglar" },
  { quote: "Learning never exhausts the mind.", owner: "Leonardo da Vinci" },
  { quote: "Code is like humor. When you have to explain it, it’s bad.", owner: "Cory House" },
  { quote: "First, solve the problem. Then, write the code.", owner: "John Johnson" },
  { quote: "Simplicity is the soul of efficiency.", owner: "Austin Freeman" },
  { quote: "Make it work, make it right, make it fast.", owner: "Kent Beck" }
];
const button = document.querySelector('button')
const quote = document.querySelector('h1')
const author = document.querySelector('h2')


button.addEventListener('click', ()=>{
    const index = Math.floor(Math.random() * 30);

    quote.textContent = quotes[index].quote;
    author.textContent = quotes[index].owner;
    
})
