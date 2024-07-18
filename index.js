const controller = require('./controller');
const app = controller.initApp();

app.get('/', (req, resp) => controller.aboutUsPage(resp));
app.get('/cars', (req, resp) => controller.carsPage(resp));
app.get('/contact', (req, resp) => controller.contactPage(resp));

app.get('/*', (req, resp) => controller.notFoundPage(resp));

