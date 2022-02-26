import fs from 'fs'

export const fileArray = () => {
    fs.readdir('../content/profile', (err, files) => {
        if (err) throw err
        files.forEach(file => {
            console.log(file)
        })
    })
}