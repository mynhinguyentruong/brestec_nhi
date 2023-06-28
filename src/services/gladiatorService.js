import csvFile from '../assets/gladiators.csv'
import Papa from 'papaparse';

// var records = ""
// Papa.parse(csvFile, {
//     download: true,
//     header: true,
//     complete: function (input) {
//          records = input.data;
//     }
// });

const GladiatorService = {
    get: () => {
        return new Promise((resolve) => {
            Papa.parse(csvFile, {
                download: true,
                header: true,
                complete: function (input) {
                     resolve(input.data);
                }
            });
        })
    }
    // function() {
    //     return records;
    // },
};

export default GladiatorService;