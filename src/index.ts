import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;
const rootDir = path.join(__dirname, '..', 'src');

app.use(express.static(rootDir));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(rootDir, 'index.html'));
});

app.get('/about', (req: Request, res: Response) => {
  res.sendFile(path.join(rootDir, 'about.html'));
});

app.get('/services', (req: Request, res: Response) => {
  res.sendFile(path.join(rootDir, 'services.html'));
});

app.get('/testimonials', (req: Request, res: Response) => {
  res.sendFile(path.join(rootDir, 'testimonials.html'));
});

app.get('/contact', (req: Request, res: Response) => {
  res.sendFile(path.join(rootDir, 'contact.html'));
});

app.get('/subjects', (req: Request, res: Response) => {
  res.sendFile(path.join(rootDir, 'subjects.html'));
});

app.get('/img/:imgName', (req: Request, res: Response) => {
  const imgName = req.params.imgName;
  res.sendFile(path.join(rootDir, `img/${imgName}`));
});

app.get('/js/:jsName', (req: Request, res: Response) => {
  const jsName = req.params.jsName;
  res.sendFile(path.join(rootDir, `js/${jsName}`));
});

app.get('/css/:cssName', (req: Request, res: Response) => {
  const cssName = req.params.cssName;
  res.sendFile(path.join(rootDir, `css/${cssName}`));
});

//code on top of server thing

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


