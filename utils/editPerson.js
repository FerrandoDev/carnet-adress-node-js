import fs from "fs"

function UpdatePerson(person) {
    try {
        let csvData = fs.readFileSync('./data/person.csv', 'utf8');
            csvData = updateCsvRow(csvData, person);

        fs.writeFileSync('./data/person.csv', csvData);
        console.log('Données de toutes les personnes mises à jour avec succès.');
    } catch (error) {
        throw new Error('Erreur lors de la mise à jour des données des personnes.');
    }
}
function updateCsvRow(csvData, updatedPerson) {
    const rows = csvData.split('\n');
    const headers = rows[0].split(',');
    const personIdIndex = headers.indexOf('id');

    for (let i = 1; i < rows.length; i++) {
        const currentRow = rows[i].split(',');
        const currentPersonId = currentRow[personIdIndex];

        if (currentPersonId === updatedPerson.id) {
            for (const key in updatedPerson) {
                if (key !== 'id') {
                    const columnIndex = headers.indexOf(key);
                    currentRow[columnIndex] = updatedPerson[key];
                }
            }
            rows[i] = currentRow.join(',');
            break;
        }
    }
    return rows.join('\n');
}

export default UpdatePerson;
