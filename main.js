import './style.css'

document.querySelector('#app').innerHTML = `
<header>
        <h3 class="title">My Tasks</h3>
    <nav>
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
    </nav>
</header>
<div class="NovaTask">
    <div class = "button">
            <input type="text" class="text" placeholder= "Add New Task Here">
            <button class="button1" onclick = "Adicionar1()">></button><button class="button2" onclick = "Adicionar2()">></button>
    </div>
</div>
<div class = "Tasks">
    <ul class="lista">
    </ul>
    <div class="Completed">
        <h3>Completed</h3>
        <ul class="TaskCompleta">
        </ul>
    </div>
</div>
<div class = "Add" onclick="NovaTask()">
    <span class = "h"></span><span class = "v"></span>
</div>
`
