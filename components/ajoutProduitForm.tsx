"use client"
import React, { useState, ChangeEvent, FormEvent } from "react"


export default function AjoutProduitForm() {
    // USETSATE pour gerer les champs de formulaires 
    const [formData, setFormData] = useState({ name: "", price: "" });

    // USELESS USESTATE FOR HANDLING UI EVENTS 
    const [formSuccess, setFormSuccess] = useState(false);
    const [formSuccessMessage, setFormSuccessMessage] = useState("");

    
    //This mechanism allows you to dynamically update the component's state based on user 
    //input, making the form responsive and interactive.
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // FONCTION FOR FORM SUBMISSION 
    const submitForm = (e: FormEvent) => {
        e.preventDefault();

        const formURL = "http://localhost:3000/api/produits";
        const data = JSON.stringify(formData);

        fetch(formURL, {
            method: "POST",
            body: data,
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (!response.ok) { // Check if the response status code is not okay (200-299)
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(() => {
                setFormData({ name: "", price: "" }); // Reset form data
                setFormSuccess(true);
                setFormSuccessMessage("Product added successfully!");
                // Optionally, manage formSuccessMessage based on responseData
            })
            .catch((error) => {
                console.error("Error submitting form:", error);
                setFormSuccessMessage("Failed to add product.");
            });
    };



    return (

        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-200 rounded-lg shadow-lg">
            <h1 className="text-xl font-semibold text-gray-700 mb-6">Ajouter un nouveau Produit </h1>
            {formSuccess ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg">{formSuccessMessage}</div>
            ) : (
                <form onSubmit={submitForm} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nom:</label>
                        <input
                            type="text"
                            name="name"
                            onChange={handleInput}
                            value={formData.name}
                            required
                            className="text-black mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Prix:</label>
                        <input
                            type="number"
                            step="0.01"
                            name="price"
                            onChange={handleInput}
                            value={formData.price}
                            required
                            className="text-black mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>

                    <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Submit
                    </button>
                </form>
            )}
        </div>


    )



}