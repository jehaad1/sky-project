const Express = require("express");
const Path = require("path")
const Open = require("opn");
const App = Express();
const Port = 5000;

App.get("/", (Request, Response) => {
    Response.sendFile(Path.join(__dirname, "App.html"));
});

App.use("/Icons", Express.static(Path.join(__dirname, "Icons")));
App.use("/Assets", Express.static(Path.join(__dirname, "Assets")));

App.listen(Port, (Error) => {
    if(Error) return console.error(Error);
    Open(`http://localhost:${Port}`).then(() => {
        console.log("Project Started!");
    }).catch((Error) => console.error(Error));
});