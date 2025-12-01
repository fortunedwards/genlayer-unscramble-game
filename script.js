// Word data with definitions
const wordData = [
    { word: "GENLAYER", definition: "The first AI-native blockchain and 'The Intelligence Layer of the Internet.'" },
    { word: "INTELLIGENT", definition: "The type of advanced smart contracts on GenLayer capable of reasoning and adapting." },
    { word: "OPTIMISTIC", definition: "The first word of the consensus mechanism that handles subjective decisions." },
    { word: "DEMOCRACY", definition: "The full consensus mechanism is Optimistic ________." },
    { word: "VALIDATORS", definition: "Nodes that execute transactions, connect to LLMs, and vote on outcomes." },
    { word: "CONSENSUS", definition: "The collective agreement mechanism for every transaction, even those involving AI outputs." },
    { word: "EQUIVALENCE", definition: "The principle validators use to reach agreement on non-deterministic results." },
    { word: "NONDETERMINISTIC", definition: "Describes operations with unpredictable outputs that GenLayer can handle." },
    { word: "PYTHON", definition: "The programming language used to build Intelligent Contracts with the GenVM SDK." },
    { word: "GENVM", definition: "The execution environment designed solely to run Intelligent Contracts." },
    { word: "STUDIO", definition: "The web-based interface for developing, testing, and deploying Intelligent Contracts." },
    { word: "APPEAL", definition: "The process where a participant can dispute a provisional transaction outcome." },
    { word: "SLASHING", definition: "An economic penalty mechanism for dishonest validators." },
    { word: "MOCHI", definition: "The name of the cat that is the inspiration for the GenLayer Mascot Design Contest." },
    { word: "WEBAPI", definition: "Contracts can actively interact with these to fetch real-time information." },
    { word: "LLMS", definition: "The AI models, like GPT, that validators connect to for complex reasoning." },
    { word: "JURY", definition: "The theorem that GenLayer consensus leverages, referring to the 'wisdom of the crowd.'" },
    { word: "HEXADECIMAL", definition: "The format used to represent GenLayer account addresses, often prefixed with 0x" },
    { word: "PRIVATE", definition: "The type of key that must be securely managed to control an EOA." },
    { word: "ARBITRATION", definition: "A key use case: using AI for dispute _______ in contracts." },
    { word: "LEADER", definition: "The designated validator who proposes the initial provisional transaction result." },
    { word: "PROVISIONAL", definition: "The initial status of a transaction outcome before the appeal window closes." },
    { word: "FINALITY", definition: "The state where an Intelligent Contract's decision becomes unchangeable." },
    { word: "BOND", definition: "The stake or collateral required from an Appellant to challenge a decision." },
    { word: "APPELLANT", definition: "The party that initiates an appeal to overturn a provisional outcome." },
    { word: "GAS", definition: "The fee required to process a transaction on the GenLayer network." },
    { word: "TRUSTLESS", definition: "GenLayer's core goal: enabling _______ Decision-Making." },
    { word: "STATE", definition: "The object in a Python Intelligent Contract that holds the persistent memory or data." },
    { word: "ACTION", definition: "The object in a Python Intelligent Contract that models a transaction or function call." },
    { word: "CONTRACT", definition: "The Python class that defines an Intelligent Contract's identity and logic." },
    { word: "WHITEPAPER", definition: "The formal document that details the entire GenLayer protocol and architecture." },
    { word: "ORACLES", definition: "The traditional Web3 intermediaries that GenLayer bypasses by allowing contracts to fetch live web data directly." },
    { word: "SYNTHETIC", definition: "GenLayer is described as a ________ Jurisdiction, designed for autonomous agents." },
    { word: "GRAYBOXING", definition: "A security measure that isolates AI models in a sandboxed environment to prevent attacks like prompt injection." },
    { word: "ASIMOV", definition: "The name of the GenLayer Testnet, named after the famous science fiction writer." },
    { word: "ZKSTACK", definition: "The rollup technology GenLayer is built upon for scalability and secure state updates." },
    { word: "GHOST", definition: "The type of proxy contracts on the consensus layer that facilitate interactions with Intelligent Contracts." },
    { word: "DELEGATED", definition: "The D in the dPoS consensus variant that underlies Optimistic Democracy." },
    { word: "DOCKER", definition: "The containerization platform required to run the local GenLayer Studio environment." },
    { word: "STAKING", definition: "The act of locking up tokens required for validators to participate in the network's security and validation." },
    { word: "REWARDS", definition: "The positive incentives validators receive for correctly validating transactions and blocks." },
    { word: "DECENTRALIZATION", definition: "One of the core principles: power must be distributed across systems and agents." },
    { word: "TRANSPARENCY", definition: "A core principle ensuring open governance and auditable code are the default." },
    { word: "IMMUTABLE", definition: "The nature of the final, unchangeable state of the contract once consensus is reached." },
    { word: "ROLLUPS", definition: "The type of Layer 2 technology, specifically the ZK-_________, used for scalability." },
    { word: "ETHEREUM", definition: "The blockchain GenLayer aligns with for security and leverages its aligned rollup technology." },
    { word: "GOVERNANCE", definition: "The system, set of rules, and principles (like Deepthought DAO) that direct the protocol's operations." },
    { word: "ARBITRATOR", definition: "In an AI Arbitration use case, the AI acts as the decentralized _________." },
    { word: "NUANCE", definition: "What traditional deterministic code lacks but Intelligent Contracts can comprehend." },
    { word: "FAUCET", definition: "What developers use to get free GEN tokens for testing on the public network." },
    { word: "MOLECULE", definition: "The entry-level role, assigned after passing a simple quiz." },
    { word: "NEURON", definition: "The Level 7 role, required to participate in Poker tournaments." },
    { word: "SYNAPSE", definition: "The Level 18 role that grants access to the music bot channel." },
    { word: "BRAIN", definition: "The Level 36 role with access to the exclusive photography channel." },
    { word: "SINGULARITY", definition: "The highest community role at Level 54, granting influence on new initiatives." },
    { word: "NEUROCREATIVE", definition: "A special role for community members who create 8+ quality posts on X." },
    { word: "NEUROENGINEER", definition: "The developer subgroup that opens the door to deeper technical channels." },
    { word: "POAP", definition: "The abbreviation for a badge required to progress past the 'Intern' stage (e.g., Synapse Intern)." },
    { word: "HYPERDRIVE", definition: "The name of the weekly AMA held every Monday." },
    { word: "CHESSLAYER", definition: "The name of the weekly strategy tournament open exclusively to the Brain role." },
    { word: "GARTIC", definition: "A game played every Tuesday with Rumble for XP prizes." },
    { word: "GENFREN", definition: "The name of the community quiz that tests knowledge on everything GenLayer." }
];

// Game state
let currentWord = {};
let score = 0;
let highScore = 0;
let timer = null;
let timeLeft = 30;
let roundWords = [];
let wordsCompleted = 0;
let misses = 0;
let hintsUsed = 0;
let wordResults = [];
let playerName = '';

// DOM elements
const scrambledWordEl = document.getElementById('scrambled-word');
const wordInputEl = document.getElementById('word-input');
const scoreEl = document.getElementById('score');
const timerEl = document.getElementById('timer');
const wordsProgressEl = document.getElementById('words-progress');
const missesEl = document.getElementById('misses');
const loginScreen = document.getElementById('login-screen');
const gameScreen = document.getElementById('game-screen');
const playerNameInput = document.getElementById('player-name');
const startGameBtn = document.getElementById('start-game-btn');
const leaderboardBtn = document.getElementById('leaderboard-btn');
const leaderboardScreen = document.getElementById('leaderboard-screen');
const leaderboardList = document.getElementById('leaderboard-list');
const backToLoginBtn = document.getElementById('back-to-login-btn');
const performanceScreen = document.getElementById('performance-screen');
const roundScoreEl = document.getElementById('round-score');
const wordsCompletedEl = document.getElementById('words-completed');
const accuracyEl = document.getElementById('accuracy');
const hintsUsedEl = document.getElementById('hints-used');
const nextRoundBtn = document.getElementById('next-round-btn');
const viewLeaderboardBtn = document.getElementById('view-leaderboard-btn');
const homeBtn = document.getElementById('home-btn');
const wordsListEl = document.getElementById('words-list');
const loginMessage = document.getElementById('login-message');
const playerInfo = document.getElementById('player-info');
const highScoreDisplay = document.getElementById('high-score-display');
const strikesDisplay = document.getElementById('strikes-display');
const messageEl = document.getElementById('message');
const hintTextEl = document.getElementById('hint-text');
const checkBtn = document.getElementById('check-btn');
const hintBtn = document.getElementById('hint-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const newWordBtn = document.getElementById('new-word-btn');

// Scramble function
function scrambleWord(word) {
    const letters = word.split('');
    for (let i = letters.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }
    return letters.join('');
}

// Start new round
function startNewRound() {
    roundWords = [...wordData].sort(() => Math.random() - 0.5).slice(0, 10);
    wordsCompleted = 0;
    misses = 0;
    hintsUsed = 0;
    wordResults = [];
    score = 0;
    scoreEl.textContent = score;
    updateRoundDisplay();
    performanceScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    loadNewWord();
}

// Show performance screen
function showPerformanceScreen() {
    const accuracy = Math.round((wordsCompleted / (wordsCompleted + misses)) * 100) || 0;
    
    roundScoreEl.textContent = score;
    wordsCompletedEl.textContent = wordsCompleted;
    accuracyEl.textContent = accuracy;
    hintsUsedEl.textContent = hintsUsed;
    
    // Display words list (only words that were actually shown)
    wordsListEl.innerHTML = '';
    const wordsShown = Math.min(roundWords.length, wordsCompleted + (misses >= 3 ? 1 : 0));
    for (let i = 0; i < wordsShown; i++) {
        const word = roundWords[i];
        const result = wordResults[i] || { completed: false };
        const isEven = i % 2 === 1;
        const wordDiv = document.createElement('div');
        wordDiv.className = `flex items-start gap-4 p-4 ${i < wordsShown - 1 ? 'border-b border-b-[#dbdfe6] dark:border-b-gray-700' : ''} ${isEven ? 'bg-background-light/20 dark:bg-white/5' : ''}`;
        wordDiv.innerHTML = `
            <div class="flex-1">
                <div class="flex items-center gap-3">
                    <p class="text-[#111318] dark:text-white text-base font-bold leading-normal">${word.word}</p>
                    <span class="inline-flex items-center justify-center rounded-full ${result.completed ? 'bg-[#198754]' : 'bg-[#DC3545]'} px-3 py-1 text-xs font-medium text-white">${result.completed ? 'CORRECT' : 'MISSED/SKIPPED'}</span>
                </div>
                <p class="text-[#606e8a] dark:text-gray-400 text-sm font-normal leading-normal mt-1">${word.definition}</p>
            </div>
        `;
        wordsListEl.appendChild(wordDiv);
    }
    
    gameScreen.style.display = 'none';
    performanceScreen.style.display = 'block';
}

// Load new word
function loadNewWord() {
    clearInterval(timer);
    
    if (wordsCompleted >= 10) {
        showPerformanceScreen();
        return;
    }
    
    currentWord = roundWords[wordsCompleted];
    
    let scrambled = scrambleWord(currentWord.word);
    while (scrambled === currentWord.word && currentWord.word.length > 1) {
        scrambled = scrambleWord(currentWord.word);
    }
    
    scrambledWordEl.textContent = scrambled;
    wordInputEl.value = '';
    wordInputEl.disabled = false;
    checkBtn.disabled = false;
    hintBtn.disabled = false;
    const hintSpan = hintBtn.querySelector('span:last-child');
    if (hintSpan) hintSpan.textContent = 'Hint';
    if (messageEl) messageEl.textContent = '';
    if (hintTextEl) hintTextEl.textContent = '';
    timeLeft = 30;
    timerEl.textContent = timeLeft;
    
    startTimer();
}

// Update round display
function updateRoundDisplay() {
    wordsProgressEl.textContent = `${wordsCompleted}/10`;
    if (missesEl) missesEl.textContent = `${misses}/3`;
    updateStrikesDisplay();
}

// Update strikes display
function updateStrikesDisplay() {
    if (!strikesDisplay) return;
    const circles = strikesDisplay.querySelectorAll('.material-symbols-outlined');
    circles.forEach((circle, index) => {
        if (index < misses) {
            circle.className = 'material-symbols-outlined text-4xl text-[#DC3545]';
            circle.style.fontVariationSettings = "'FILL' 1";
        } else {
            circle.className = 'material-symbols-outlined text-4xl text-slate-300 dark:text-slate-600';
            circle.style.fontVariationSettings = "'FILL' 0";
        }
    });
}

// Game over
function gameOver() {
    clearInterval(timer);
    wordInputEl.disabled = true;
    checkBtn.disabled = true;
    hintBtn.disabled = true;
    showMessage(`Game Over! Final Score: ${score}`, 'error');
    setTimeout(showPerformanceScreen, 3000);
}

// Start timer
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            wordInputEl.disabled = true;
            checkBtn.disabled = true;
            hintBtn.disabled = true;
            misses++;
            updateRoundDisplay();
            
            wordResults[wordsCompleted] = { completed: false };
            wordsCompleted++;
            
            if (misses >= 3) {
                showMessage(`Time's up! The word was: ${currentWord.word}. Game Over!`, 'timeout');
                setTimeout(gameOver, 3000);
            } else {
                showMessage(`Time's up! The word was: ${currentWord.word}`, 'timeout');
                setTimeout(loadNewWord, 3000);
            }
        }
    }, 1000);
}

// Update score
function updateScore(points) {
    score += points;
    scoreEl.textContent = score;
    
    if (score > highScore) {
        highScore = score;
        if (highScoreDisplay) highScoreDisplay.textContent = highScore;
        saveScore(score);
    }
}

// API functions
async function loadHighScore() {
    try {
        const response = await fetch('/api/highscore');
        const data = await response.json();
        highScore = data.highScore;

        if (highScoreDisplay) highScoreDisplay.textContent = highScore;
    } catch (err) {
        // Fallback for local testing
        highScore = localStorage.getItem('highScore') || 0;
        if (highScoreDisplay) highScoreDisplay.textContent = highScore;
    }
}

async function saveScore(score) {
    try {
        await fetch('/api/score', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ score, playerName })
        });
    } catch (err) {
        // Fallback for local testing
        localStorage.setItem('highScore', Math.max(score, localStorage.getItem('highScore') || 0));
    }
}

async function loadLeaderboard() {
    try {
        const response = await fetch('/api/leaderboard');
        const data = await response.json();
        
        leaderboardList.innerHTML = '';
        data.leaderboard.forEach((entry, index) => {
            const rank = index + 1;
            const isEven = index % 2 === 1;
            const isCurrentUser = entry.player_name.toLowerCase() === playerName.toLowerCase();
            
            const row = document.createElement('tr');
            let rowClass = `border-b border-slate-200/50 dark:border-slate-800/50`;
            
            if (isCurrentUser) {
                rowClass += ` bg-primary/10 dark:bg-primary/20 ring-1 ring-inset ring-primary/50`;
            } else if (isEven) {
                rowClass += ` bg-slate-50 dark:bg-slate-800/50`;
            } else {
                rowClass += ` bg-white dark:bg-slate-900`;
            }
            
            if (index === data.leaderboard.length - 1) {
                rowClass = rowClass.replace('border-b border-slate-200/50 dark:border-slate-800/50', '');
            }
            
            row.className = rowClass;
            
            let rankContent = '';
            if (rank <= 3) {
                const iconColor = rank === 1 ? 'text-yellow-500' : rank === 2 ? 'text-gray-400' : 'text-amber-700';
                rankContent = `
                    <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined ${iconColor}" style="font-variation-settings: 'FILL' 1;">military_tech</span>
                        <span>${rank}</span>
                    </div>
                `;
            } else {
                rankContent = rank.toString();
            }
            
            const playerNameDisplay = isCurrentUser ? `${entry.player_name} (You)` : entry.player_name;
            const nameClass = isCurrentUser ? 'font-bold text-primary dark:text-blue-300' : 'font-medium text-[#111318] dark:text-white';
            const scoreClass = isCurrentUser ? 'font-bold text-primary dark:text-blue-300' : 'font-bold text-primary';
            
            row.innerHTML = `
                <td class="h-[72px] px-4 py-2 text-slate-600 dark:text-slate-300">${rankContent}</td>
                <td class="h-[72px] px-4 py-2 ${nameClass}">${playerNameDisplay}</td>
                <td class="h-[72px] px-4 py-2 ${scoreClass}">${entry.total_score.toLocaleString()}</td>
                <td class="h-[72px] px-4 py-2 text-slate-600 dark:text-slate-300">${entry.best_score.toLocaleString()}</td>
            `;
            
            leaderboardList.appendChild(row);
        });
    } catch (err) {
        // Fallback for local testing
        leaderboardList.innerHTML = '<tr><td colspan="4" class="h-[72px] px-4 py-2 text-center text-slate-500 dark:text-slate-400">Leaderboard requires database connection</td></tr>';
    }
}

// Show popup notification
function showPopup(text, type = 'success') {
    const popup = document.getElementById('popup-notification');
    const popupText = document.getElementById('popup-text');
    const popupIcon = document.getElementById('popup-icon');
    const popupClose = document.getElementById('popup-close');
    
    if (!popup || !popupText || !popupIcon) return;
    
    popupText.textContent = text;
    
    // Set color and icon based on type
    let bgColor, iconSvg;
    if (type === 'success') {
        bgColor = 'bg-green-500';
        iconSvg = '<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>';
    } else if (type === 'error') {
        bgColor = 'bg-red-500';
        iconSvg = '<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>';
    } else {
        bgColor = 'bg-orange-500';
        iconSvg = '<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>';
    }
    
    popup.className = `fixed top-16 sm:top-20 left-1/2 transform -translate-x-1/2 ${bgColor} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-2xl z-50 transition-all duration-500 ease-out max-w-sm sm:max-w-md mx-4 cursor-pointer hover:scale-105 opacity-100 translate-y-0 scale-100`;
    
    popupIcon.innerHTML = `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">${iconSvg}</svg>`;
    
    popup.style.display = 'block';
    
    // Close button functionality
    const closePopup = () => {
        popup.className = popup.className.replace('opacity-100 translate-y-0 scale-100', 'opacity-0 -translate-y-8 scale-95');
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    };
    
    // Click to close
    popup.onclick = closePopup;
    if (popupClose) popupClose.onclick = (e) => { e.stopPropagation(); closePopup(); };
    
    // Auto-hide after 3 seconds
    setTimeout(closePopup, 3000);
}

// Show message
function showMessage(text, className) {
    // Use popup for all messages
    showPopup(text, className);
    
    // Clear the message element
    if (messageEl) {
        messageEl.textContent = '';
    }
}

// Check answer
function checkAnswer() {
    const guess = wordInputEl.value.toUpperCase().trim();
    
    if (!guess) {
        showMessage('Please enter a word!', 'error');
        return;
    }
    
    if (guess === currentWord.word) {
        clearInterval(timer);
        updateScore(10);
        wordResults[wordsCompleted] = { completed: true };
        wordsCompleted++;
        updateRoundDisplay();
        showMessage('Correct! Well done!', 'success');
        setTimeout(loadNewWord, 1500);
    } else {
        misses++;
        updateRoundDisplay();
        
        if (misses >= 3) {
            wordResults[wordsCompleted] = { completed: false };
            showMessage('Incorrect! Game Over!', 'error');
            setTimeout(gameOver, 1500);
        } else {
            showMessage('Incorrect! Try again.', 'error');
            wordInputEl.value = '';
        }
    }
}

// Show hint
function showHint() {
    updateScore(-5);
    hintsUsed++;
    if (hintTextEl) hintTextEl.textContent = `Hint: ${currentWord.definition}`;
    hintBtn.disabled = true;
    const hintSpan = hintBtn.querySelector('span:last-child');
    if (hintSpan) hintSpan.textContent = 'Hint (5s)';
    let cooldown = 5;
    const cooldownTimer = setInterval(() => {
        cooldown--;
        if (hintSpan) hintSpan.textContent = `Hint (${cooldown}s)`;
        if (cooldown <= 0) {
            clearInterval(cooldownTimer);
            hintBtn.disabled = false;
            if (hintSpan) hintSpan.textContent = 'Hint';
        }
    }, 1000);
}

// Login function
async function login(name) {
    console.log('Login function called with name:', name);
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        });
        const data = await response.json();
        
        playerName = name;
        loginMessage.textContent = data.message;
        startGame();
    } catch (err) {
        console.log('API failed, using fallback');
        // Fallback for local testing without database
        playerName = name;
        if (loginMessage) loginMessage.textContent = `Welcome to GenLayer Word Scramble, ${name}!`;
        startGame();
    }
}

function startGame() {
    console.log('startGame function called');
    console.log('loginScreen:', loginScreen);
    console.log('gameScreen:', gameScreen);
    
    if (loginScreen) loginScreen.style.display = 'none';
    if (gameScreen) gameScreen.style.display = 'block';
    
    if (playerInfo) {
        playerInfo.textContent = playerName.charAt(0).toUpperCase();
        playerInfo.title = `Player: ${playerName}`;
    }
    loadHighScore();
    startNewRound();
}

// Load high score on page load
loadHighScore();

// Event listeners
checkBtn.addEventListener('click', checkAnswer);
hintBtn.addEventListener('click', showHint);
shuffleBtn.addEventListener('click', () => {
    let scrambled = scrambleWord(currentWord.word);
    while (scrambled === currentWord.word && currentWord.word.length > 1) {
        scrambled = scrambleWord(currentWord.word);
    }
    scrambledWordEl.textContent = scrambled;
});
newWordBtn.addEventListener('click', () => {
    clearInterval(timer);
    
    if (wordsCompleted >= 10) {
        startNewRound();
        return;
    }
    
    wordResults[wordsCompleted] = { completed: false };
    wordsCompleted++;
    misses++;
    updateRoundDisplay();
    
    if (misses >= 3) {
        gameOver();
    } else {
        loadNewWord();
    }
});

wordInputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

startGameBtn.addEventListener('click', () => {
    console.log('Start game button clicked!');
    const name = playerNameInput.value.trim();
    console.log('Player name:', name);
    if (name) {
        login(name);
    } else {
        alert('Please enter your name first!');
    }
});

nextRoundBtn.addEventListener('click', () => {
    startNewRound();
});

viewLeaderboardBtn.addEventListener('click', () => {
    performanceScreen.style.display = 'none';
    leaderboardScreen.style.display = 'block';
    loadLeaderboard();
});

homeBtn.addEventListener('click', () => {
    performanceScreen.style.display = 'none';
    loginScreen.style.display = 'block';
});

leaderboardBtn.addEventListener('click', () => {
    loginScreen.style.display = 'none';
    leaderboardScreen.style.display = 'block';
    loadLeaderboard();
});

backToLoginBtn.addEventListener('click', () => {
    leaderboardScreen.style.display = 'none';
    loginScreen.style.display = 'block';
});

playerNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const name = playerNameInput.value.trim();
        if (name) login(name);
    }
});

// Header event listeners
const headerLeaderboardLink = document.getElementById('header-leaderboard-link');
const logoImg = document.querySelector('img[src="logo.png"]');

if (headerLeaderboardLink) {
    headerLeaderboardLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Hide all screens first
        const allScreens = [loginScreen, gameScreen, performanceScreen, leaderboardScreen];
        allScreens.forEach(screen => {
            if (screen) screen.style.display = 'none';
        });
        // Show leaderboard screen
        if (leaderboardScreen) {
            leaderboardScreen.style.display = 'block';
            loadLeaderboard();
        }
    });
}

if (logoImg) {
    logoImg.addEventListener('click', () => {
        loginScreen.style.display = 'block';
        gameScreen.style.display = 'none';
        performanceScreen.style.display = 'none';
        leaderboardScreen.style.display = 'none';
    });
    logoImg.style.cursor = 'pointer';
}