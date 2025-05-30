import database from "../../../../infra/database.js";
async function status(request, response) {
    const result = await database.query("select 1 + 1 as soma2;");
    console.log(result.rows);
    response.status(200).json({ message: "muito bom, vamos avançando" });
}

export default status;
