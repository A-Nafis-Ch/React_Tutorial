
// const h2title = "Title";
// const para = "Sea rebum sadipscing lorem dolor ipsum ea ipsum dolores ea..";
const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

function Card(props){

    const {titleText,descText} = props; //destructuring props

    return  <>
    

            <div className='card'>
            <h2 className='cardTitle'>{titleText}</h2>
            <p className='cardDesc'>{descText}</p>
            <p className='cardFooter'>{day + '/' + month + '/' + year}</p>
            </div>

            </>

}



export default Card;