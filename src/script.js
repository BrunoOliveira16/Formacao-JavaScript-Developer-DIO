class Task {
    constructor(description, id, tarefa) {
        this.description = description;
        this.id = id;
        this.tarefa = tarefa;
        this.createDate = Date.now();
        this.finishDate = 0;
        this.isDone = false;
    }
};
