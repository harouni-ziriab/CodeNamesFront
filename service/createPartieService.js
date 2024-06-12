export class CreatePartieService {
    constructor() {

    }

    static async CreatePartie(nom, role) {
        const response = await fetch("http://localhost:8080/CreatePartie", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "nom": nom,
                "role": role
            })
        });
        if (response.status === 200) {
            const data = await response.json();
            console.log(data);
            return data;
        }
        else {
            console.log("Erreur lors de la création de la partie");
        }
    }
}



