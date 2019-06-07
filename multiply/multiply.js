const fs = require('fs')


createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limit)) {
            reject(`The entered value isn´t a number`)
            return
        }

        let tables = ''

        for (let index = 1; index <= limit; index++) {
            tables += `${base} X ${index} = ${(base * index)}\n`
        }

        fs.writeFile(`tables/table-${base}-to-${limit}.txt`, tables, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`table-${base}-to-${limit}.txt`)
            }
        })
    })
}

list = (base, limit = 10) => {
    if (!Number(base) || !Number(limit)) {
        console.log('Some value that you entered isn´t a number')
    }

    for (let index = 1; index <= limit; index++) {
        console.log(`${base} X ${index} = ${(base * index)}`)
    }
}

module.exports = {
    createFile,
    list
}