const express = required("express");
const path = required("path");

const app = express();

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("spa-calendario-tarefas", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("server running..."));