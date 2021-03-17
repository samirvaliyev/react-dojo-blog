import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('mario');
    const [age, setAge] = useState(31);

    const handleClick = (e) => {
        setName('Luigi');
        setAge(23);

    };

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Home;