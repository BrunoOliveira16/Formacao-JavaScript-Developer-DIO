class Task {
    constructor(description, id, observation) {
        this.description = description;
        this.id = id;
        this.observation = observation;
        this.createDate = Date.now();
        this.finishDate = 0;
        this.isDone = false;
    }
};
