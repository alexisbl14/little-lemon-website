import Hero from "./Hero";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import bruschettaImg from "./bruschetta.svg";
import greekSaladImg from "./greek-salad.svg";
import lemonDessertImg from "./lemon-dessert.svg";


function Main() {
    const specials = [
        {
            name: "Greek Salad",
            price: 4.00,
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            img: greekSaladImg,
        },
        {
            name: "Bruschetta",
            price: 4.00,
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            img: bruschettaImg,
        },
        {
            name: "Lemon Dessert",
            price: 4.00,
            description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            img: lemonDessertImg,
        }
    ];

    const reviews = [
        {
            rating: 4.5,
            name: "J. Smith",
            notes: "Very pleasant atmosphere!"
        },
        {
            rating: 5.0,
            name: "A. Jones",
            notes: "Great menu!"
        },
        {
            rating: 4.2,
            name: "H. James",
            notes: "Super kind waiters!"
        },
        {
            rating: 4.7,
            name: "L. Adams",
            notes: "Highly recommend if in Chicago!"
        },
    ];

    return (
        <main>
            <Hero />
            <Specials specials={specials}/>
            <CustomersSay reviews={reviews}/>
        </main>
    )
}

export default Main;