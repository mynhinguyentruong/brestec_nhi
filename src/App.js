import { useState } from "react";
import GladiatorService from "./services/gladiatorService.js";

function App() {
    const [data, setData] = useState(null)
  
    const valuesOnlyArray = data && data.map(obj => {
        return Object.values(obj)
    })

    async function getData() {
        try {
            let parsedData = await (GladiatorService.get)()
            setData(parsedData)
        } catch (err) {
            console.log(err)
        }
    }


    return data ? 
    (
        <>
        <table className="table-auto border-collapse border border-slate-400">
        <thead className="flex">
        <tr className="text-3xl">
            <th>Gladiator name</th>
            <th>Real name</th>
            <th>First year</th>
            <th >Last year</th>
        </tr>
        </thead>
        <tbody>
            {/* Ideally should have a unique key for mapping but in this case we only render info to UI without method to modify so array index key is sufficient*/}
            {valuesOnlyArray.map((el, elIndex) => (
                <tr key={elIndex}>
                    {el.map((val, valIndex) => <td className="text-bold" key={valIndex}>{val}</td>)}
                </tr>
            ))}
        </tbody>
    </table>
    </>
    ) : <button onClick={getData}>Get data</button>;
}

export default App;
