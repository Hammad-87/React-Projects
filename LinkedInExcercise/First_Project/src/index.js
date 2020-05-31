import React, {Component} from 'react'
import {render} from 'react-dom'

const bookList = [
  {"title": "Hunger", "Author": "Roxane", "pages": 320},
  {"title": "Munger", "Author": "Moxane", "pages": 420},
  {"title": "Dunger", "Author": "Doxane", "pages": 520},
  {"title": "Munger", "Author": "Moxane", "pages": 420},
  {"title": "Dunger", "Author": "Doxane", "pages": 520}
]
/* ONE OF THE MOST IMP COMPONENET IN REACT IS STATE: FOR USING STATE; WE WILL 
USE HERE ES6 CLASS COMPONENET */
const Book = ({title, Author, pages, bookmark}) => {
  return(
    <section>
      <h2>{title}</h2>
      <p>by: {Author}</p>
      <p>Pages: {pages} pages</p>
      <p>Bookmark: {bookmark ? 'Yes' : 'no'} </p>
    </section>
  )
}
const Hiring = ()=>
  <div>
    <p>Hiring, www.library.com</p>
  </div>

const NotHiring = () => 
  <div>
    <p>
      NotHiring, check later
    </p>
  </div>


class Library extends Component {  
state = { 
  open: true,
  freeBookmark:true,
  hiring: false,
  data:[],
  loading: false        
}
componentDidMount(){
  //console.log('The component is now mounted!')
  this.setState({loading: true})
  fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
  .then(data => data.json())
  .then(data => this.setState({data, loading: false}))
}
  toggleOpenClosed=() => {
    this.setState(prevState => ({
      open: !this.state.open
    }))
  }
  render() {
    //console.log(this.state)
    //const books = this.props.books
    const{books} = this.props
    return(
      <div >
         {this.state.hiring ? <Hiring/> : <NotHiring/>}
         {this.state.loading
          ? "loading..."
          : <div>
            {this.state.data.map (product => {
              return(
                <div key={product.id}>
                  <h3>Library Product of the Week!</h3>
                  <h4>{product.name}</h4>
                  <img src= {product.image} height={100}/>
               </div>
              )
            })}
            </div>}
        <h1>The library is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Change</button>
        {books.map (
          (book, i) => <Book 
                        key = {i}
                        title ={book.title} 
                        Author = {book.Author} 
                        pages ={book.pages}
                        bookmark = {this.state.freeBookmark}/>
        )}
        
      </div>
    )
  }
}
    
render(
  <Library books = {bookList}/>,
  document.getElementById('root')
)


// for checking the status
  /* constructor(props) {
    super(props)
    this.state = {
      open:true
      //open:false
    }
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
  }
 */
/* WITH FUNCTIONS */
/* const Book = ({title, Author, pages}) => {
  return(
    <section>
      <h2>{title}</h2>
      <p>by: {Author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  )
}

const Library = ({books})=>{
  return(
    <div>
      {books.map (
        (book, i) => <Book 
                      key = {i}
                      title ={book.title} 
                      Author = {book.Author} 
                      pages ={book.pages}/>
      )}
      
    </div>
  )
} */




/* const skiData={
  total:50,
  powder:20,
  backcountry:10,
  goal:100
}
const getPercent = decimal => {
  return decimal * 100 + '%'
}
const calcGoalProgress = (total, goal) =>{
  return getPercent(total/goal)
}


const SkiDayCounter = ({total, powder, backcountry, goal}) => {
  return (
    <section>
      <div>
    <p>Total Days: {total}</p>
    <p>Powder Days: {powder}</p>
    <p>backcountry Days: {backcountry}</p>
    <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
      </div>
    </section>
  )
}

render(
  <SkiDayCounter
    total = {skiData.total}
    powder= {skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}/>,
  
  document.getElementById('root')
)
 */
/* const skiData={
  total:50,
  powder:20,
  backcountry:10,
  goal:100
}

class SkiDayCounter extends React.Component{
  render() {
    return (
      <section>
        <div>
    <p>Total Days: {this.props.total}</p>
    <p>Powder: {this.props.powder}</p>
    <p>backcountry: {this.props.total}</p>
    <p>Goal: {this.props.goal}</p>
        </div>
      </section>
    )
  }
}

ReactDOM.render(
  <SkiDayCounter
    total = {skiData.total}
    powder= {skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}/>,
  
  document.getElementById('root')
) */



/* let style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'Arial'
}
 */
/* const title = React.createElement(
  'ul',
  {id: 'title', className: 'header', style: style},
  React.createElement(
    'li',
    {},
    'item on our list'
  )
)
 */
/* ReactDOM.render(
  title,
  document.getElementById('root')

) */
/* class Message extends React.Component {
  render(){
    console.log(this.props)
    return (
      <div>
        <h1 style={{color: this.props.color}}>{this.props.msg}</h1>
    <p> I will back in {this.props.minutes}</p>
      </div>
    )
  }
}
 */
/* class SkiDayCounter extends Component{
  getPercent = decimal => {
    return decimal * 100 +'%'
  }

  calcGoalProgress = (total, goal)=>{
    return this.getPercent(total/goal)
  }
  render() {
    const {total, powder, backcountry, goal} = this.props
    return (
      <section>
        <div>
    <p>Total Days: {total}</p>
    <p>Powder Days: {powder}</p>
    <p>backcountry Days: {backcountry}</p>
    <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
        </div>
      </section>
    )
  }
} */