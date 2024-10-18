/**
 *  @typedef {Object} CLICommand
 *  @property {string} name Name for the command.
 *  @property {Array<string>} aliases Aliases for the command.
 *  @property {function} exec The function to execute.
 */


/**
 * @param {string[]} argvArray `process.argv` Array parsed after slice(2) performed
 * @param {CLICommand[]} commands 
 */

export function handleArgvOptions(argvArray, commands) {
    argvArray.forEach((argv) => {

        const command = commands.find((c) => c.name === argv || c.aliases.includes(argv));
        if (!command) return console.log(`${argv.replace("--", "")}`);

        command.exec()

    })
}