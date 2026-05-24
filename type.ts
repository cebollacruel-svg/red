type Question = {
    q: string;
    o: string[];
    a: string;
};

const questions: Question[] = [

{
q:"1. What do open palms usually communicate?",
o:["Aggression","Honesty and openness","Fear","Sadness"],
a:"Honesty and openness"
},

{
q:"2. What does crossed arms commonly indicate?",
o:["Confidence","Relaxation","Defensiveness","Excitement"],
a:"Defensiveness"
},

{
q:"3. Which gesture is associated with dominance?",
o:["Palm-up gesture","Cowboy stance","Head tilt","Lip biting"],
a:"Cowboy stance"
},

{
q:"4. What does a head nod usually mean?",
o:["Disagreement","Agreement","Fear","Anxiety"],
a:"Agreement"
},

{
q:"5. What does shaking the head mean in most cultures?",
o:["Agreement","Approval","Negation","Excitement"],
a:"Negation"
}

];

const quizForm = document.getElementById("quizForm") as HTMLFormElement | null;

const result = document.getElementById("result") as HTMLDivElement | null;

if(!quizForm || !result){
    throw new Error("HTML elements not found");
}

questions.forEach((item: Question, index: number) => {

    const questionDiv = document.createElement("div");

    questionDiv.classList.add("question");

    questionDiv.innerHTML = `
        <p>${item.q}</p>

        ${item.o.map((option: string) => `
            <label>
                <input 
                    type="radio" 
                    name="q${index}" 
                    value="${option}"
                >
                ${option}
            </label>
        `).join("")}
    `;

    quizForm.appendChild(questionDiv);

});

function gradeQuiz(): void {

    let score: number = 0;

    questions.forEach((item: Question, index: number) => {

        const selected = document.querySelector(
            \`input[name="q\${index}"]:checked\`
        ) as HTMLInputElement | null;

        if(selected && selected.value === item.a){
            score++;
        }

    });

    const percentage: number = Math.round(
        (score / questions.length) * 100
    );

    result.innerHTML = `
        <h2>You scored ${score}/${questions.length}</h2>
        <h1>${percentage}%</h1>
    `;

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

}

(window as any).gradeQuiz = gradeQuiz;
