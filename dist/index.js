"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
const rootDir = path_1.default.join(__dirname, '..', 'src');
app.use(express_1.default.static(rootDir));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(rootDir, 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path_1.default.join(rootDir, 'about.html'));
});
app.get('/services', (req, res) => {
    res.sendFile(path_1.default.join(rootDir, 'services.html'));
});
app.get('/testimonials', (req, res) => {
    res.sendFile(path_1.default.join(rootDir, 'testimonials.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path_1.default.join(rootDir, 'contact.html'));
});
app.get('/subjects', (req, res) => {
    res.sendFile(path_1.default.join(rootDir, 'subjects.html'));
});
app.get('/img/:imgName', (req, res) => {
    const imgName = req.params.imgName;
    res.sendFile(path_1.default.join(rootDir, `img/${imgName}`));
});
app.get('/js/:jsName', (req, res) => {
    const jsName = req.params.jsName;
    res.sendFile(path_1.default.join(rootDir, `js/${jsName}`));
});
app.get('/css/:cssName', (req, res) => {
    const cssName = req.params.cssName;
    res.sendFile(path_1.default.join(rootDir, `css/${cssName}`));
});
//code on top of server thing
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
