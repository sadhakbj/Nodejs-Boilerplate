import chalk from 'chalk'
import app from './app'
import appConfig from './config/app'
const { name, port } = appConfig

app.listen(port, () =>
    console.log(
        `${name} development server started: ` +
            chalk.underline.bgBlue(`http://127.0.0.1:${port}`)
    )
)
