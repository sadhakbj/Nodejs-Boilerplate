import chalk from 'chalk'
import Application from './app'
import appConfig from './config/app'
const { name, port } = appConfig

const booststrap = async () => {
    const app = Application.app
    await app.listen(port, () =>
        console.log(
            `${name} development server started: ` +
                chalk.underline.bgBlue(`http://127.0.0.1:${port}`)
        )
    )
}

booststrap()
