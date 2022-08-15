export default () => {
    const container = document.createElement("div");
    container.classList.add("container");

    container.innerHTML = ` 
    <section>
        <div class="container">
            <h2 class="text">CADASTRE SUA TAREFA</h2>

            <div class="input-group">
                <label for="Titulo">Titulo</label>
                <input type="text" class="form-control" placeholder="Adicionar Titulo" id="Titulo">
            </div>

            <div class="input-group">
                <label for="text">Tarefa</label>
                <input type="text" class="form-control" placeholder="Adicionar Tarefa" id="text">
            </div>

            <div class="input-group">
                <label for="data">Data de Inicio</label>
                <input type="date" class="form-control" placeholder="Adicionar Data" id="data">
            </div>

            <div class="input-group">
                <label for="hora">Hora de Inicio</label>
                <input type="time" class="form-control" placeholder="Adicionar Hora 00:00" id="hora">
            </div>

            <div class="input-group">
                <label for="tempo">Duração da Atividade</label>
                <input type="time" class="form-control col-sm-6" placeholder="Adicionar Duração" id="tempo">
            </div>

            <div class="button">
                <button class="btn-primary" type="submit">Enviar dados</button>
            </div>
        </div>
        
        <div class="list"></div>

    </section>`

    return container;

}