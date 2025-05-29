function status(request, response) {
    response.status(200).json({ message: "muito bom, vamos avançando" });
}

export default status;
