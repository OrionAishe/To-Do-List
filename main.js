import './style.css'

document.querySelector('#app').innerHTML = `
<header>
        <h3>My Tasks</h3>
    <nav onclick="NovaTask()">
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
    </nav>
</header>
<div class="NovaTask">
    <ul class="lista">
    </ul>
</div>
<div>
    <h3>Completed</h3>
</div>
`
