import Hero from "./Hero";
import Specials from "./Specials";
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
    ]
    return (
        <main>
            <Hero />
            <Specials specials={specials}/>
        </main>
    )
}

export default Main;