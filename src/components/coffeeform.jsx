import { useState } from 'react';

function CoffeeForm({ onSubmit, initialData = {}, buttonText = "Add Coffee"}){
    const [formData, setFormData] = useState({
        name: initialData.name || "",
        price: initialData.price || "",
        description: initialData.description || "",
        image: initialData.image || "",
    
    });

    function handleChange(e) {
        const {name,value}=e.target;
        setFormData({...formData,[name]:value,

        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit(formData);

    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Coffee Name</label>
            <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter coffee name"
            required
            />

            <label htmlFor='price'>Price</label>
            <input
            id="price"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
            />

            <label htmlFor='description'>Description</label>
            <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter coffee description"
            required
            />

            <label htmlFor='image'>Image URL</label>
            <textarea
            id="image"
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            required
            />

            <button type="submit">{buttonText}</button>
        </form>
    );

}

export default CoffeeForm;