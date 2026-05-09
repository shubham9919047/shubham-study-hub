fetch('data/physics.json')

.then(response => response.json())

.then(data => {

let output = "";

data.forEach((q,index)=>{

output += `

<div class="question-box">

<h2>Q${index+1}. ${q.question}</h2>

<ul>
<li>${q.options[0]}</li>
<li>${q.options[1]}</li>
<li>${q.options[2]}</li>
<li>${q.options[3]}</li>
</ul>

<p><b>Answer:</b> ${q.answer}</p>

</div>

`;

});

document.getElementById("questions").innerHTML = output;

});