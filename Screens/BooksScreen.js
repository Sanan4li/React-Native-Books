import React, { Component } from 'react'
import { View, StyleSheet, Text , FlatList , Image , TouchableOpacity ,} from "react-native";



 class BooksScreen extends Component {
   
    static navigationOptions = ({ navigation }) => {
        return {
          title: navigation.getParam("title"),
        };
      };
      state = {
         books: [
            {id : "2" , category: "Adventure", title : "The Kite Runner", author: "Khaled Hosseini", votes :345 , rating : "4.2" , image : "https://images-na.ssl-images-amazon.com/images/I/51W7rAezdvL._SX323_BO1,204,203,200_.jpg", },
            {id : "211" , category: "Adventure", title : "Memoirs of a Geisha", author: "Arthur Golden", votes :315 , rating : "3.7" , image : "https://images-na.ssl-images-amazon.com/images/I/411cCQZgoSL._SX322_BO1,204,203,200_.jpg", },
            {id : "221" , category: "Adventure", title : "A Thousand Splendid Suns", author: "Markus Zusak ", votes :3485 , rating : "4.3" , image : "https://images-na.ssl-images-amazon.com/images/I/A1uFME3KaSL.jpg", },
            {id : "243" , category: "Adventure", title : "Life of Pi", author: "Yann Martel", votes :1245 , rating : "4.1" , image : "https://images-na.ssl-images-amazon.com/images/I/71dyS-5QetL._SY445_.jpg"},
            {id : "2123" , category: "Adventure", title : "The Diary of a Young Girl", author: "Anne Frank", votes :1345 , rating : "4.6" , image : "https://images-na.ssl-images-amazon.com/images/I/81xPFVVGesL.jpg", },
            {id : "234" , category: "Adventure", title : "The God of Small Things", author: "Arundhati Roy ", votes :3345 , rating : "4.1" , image : "https://images-na.ssl-images-amazon.com/images/I/51kJXkurtRL._SX317_BO1,204,203,200_.jpg", },
            {id : "2545" , category: "Adventure", title : "Angela's Ashes", author: " Frank McCourt", votes :3435 , rating : "4.2" , image : "https://images-na.ssl-images-amazon.com/images/I/51N%2BcbQFmlL._SX327_BO1,204,203,200_.jpg", },
            {id : "23455" , category: "Adventure", title : "Notes from a Small Island", author: "Bill Bryson", votes :34521 , rating : "4.8" , image : "https://images-na.ssl-images-amazon.com/images/I/51DpFru3htL._SX330_BO1,204,203,200_.jpg", },
            {id : "1" , category: "Action" , title : "The Hobbit, or There and Back Again", author: "J.R.R. Tolkien", votes :"244" , rating : "4.01" , image : "https://images-na.ssl-images-amazon.com/images/I/51zOT%2B%2B-FeL._SX331_BO1,204,203,200_.jpg", },
            {id : "121" , category: "Action" , title : "The Count of Monte Cristo", author: "Alexandre Dumas", votes :"5322" , rating : "4.2" , image : "https://images-na.ssl-images-amazon.com/images/I/41THtzOHoEL._SX324_BO1,204,203,200_.jpg", },
            {id : "111" , category: "Action" , title : "Deception Point", author: "Dan Brown", votes :"3442" , rating : "4.5" , image : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1551277487l/976._SY475_.jpg", },
            {id : "112" , category: "Action" , title : "The Girl Who Played with Fire", author: "Stieg Larsson", votes :"322" , rating : "3.9" , image : "https://images-na.ssl-images-amazon.com/images/I/718ibMIKUBL._SY445_.jpg", },
            {id : "114" , category: "Action" , title : "And Then There Were None", author: "Agatha Christie", votes :"431" , rating : "4.7" , image : "https://kbimages1-a.akamaihd.net/3a43258f-8286-40f4-8fef-26b23223be56/353/569/90/False/and-then-there-were-none-1.jpg", },
            {id : "115" , category: "Action" , title : "Shutter Island", author: "Dennis Lehane ", votes :"546" , rating : "4.5" , image : "https://images-na.ssl-images-amazon.com/images/I/51cnH4ytqxL.jpg", },
            {id : "113" , category: "Action" , title : "Amazonia", author: "James Rollins ", votes :"345" , rating : "3.5" , image : "https://covers.audiobooks.com/images/covers/full/9780061961441.jpg", },
            {id : "189" , category: "Action" , title : "The Elephant Tree", author: "R.D. Ronald", votes :"432" , rating : "3.8" , image : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327248026l/9293020.jpg", },
            {id : "41" , category: "Autobiography ", title : "The Glass Castle", author: "Anne Frank", votes :"712" , rating : "4.1" , image : "https://images-eu.ssl-images-amazon.com/images/I/51rcwTNey0L.jpg",},
            {id : "411" , category: "Autobiography ", title : "Into the Wild", author: "Jon Krakauer ", votes :"5332" , rating : "3.9" , image : "https://images-na.ssl-images-amazon.com/images/I/811k9HNhaiL.jpg",},
            {id : "412" , category: "Autobiography ", title : "The Autobiography of Malcolm X", author: "Malcolm X", votes :"343" , rating : "3.7" , image : "https://images-na.ssl-images-amazon.com/images/I/81kQBRCqt-L.jpg",},
            {id : "414" , category: "Autobiography ", title : "Man's Search for Meaning", author: "Viktor E. Frankl", votes :"4.3" , rating : "132" , image : "https://images-na.ssl-images-amazon.com/images/I/41jNJ1FrUlL._SX307_BO1,204,203,200_.jpg",},
            {id : "413" , category: "Autobiography ", title : "John Adams", author: "by David McCullough", votes :"431" , rating : "4.0" , image : "https://images-na.ssl-images-amazon.com/images/I/517oIyvrNDL._SX325_BO1,204,203,200_.jpg",},
            {id : "51" , category: "Business", title : "Rich Dad Poor Dad", author: "Robert Kiyusaki", votes :"12444" , rating : "4.5" , image : "https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg",},
            {id : "512" , category: "Business", title : "The Art of Start", author: "Guy Kawasaki", votes :"2552" , rating : "4.3" , image : "https://images-na.ssl-images-amazon.com/images/I/81f9jlFQoxL.jpg",},
            {id : "511" , category: "Business", title : "Business Adventures", author: "John Brooks", votes :"6433" , rating : "4.4" , image : "https://images-na.ssl-images-amazon.com/images/I/91IMoV%2BG9iL.jpg",},
            {id : "514" , category: "Business", title : "The Personal MBA", author: "Josh Kaufman", votes :"6211" , rating : "4.9" , image : "https://images-na.ssl-images-amazon.com/images/I/810C3b5qifL.jpg",},
            {id : "513" , category: "Business", title : "The Four 4 Hour Work Week", author: "Timothy Ferris", votes :"5442" , rating : "4.7" , image : "https://images-na.ssl-images-amazon.com/images/I/51iGkLC6jhL._SX314_BO1,204,203,200_.jpg",},
            {id : "515" , category: "Business", title : "The Hard Thing About Hard Things", author: "Ben Horowitz", votes :"3222" , rating : "4.5" , image : "https://images-na.ssl-images-amazon.com/images/I/51slqM2g3jL._SX329_BO1,204,203,200_.jpg",},
            {id : "518" , category: "Business", title : "Good to Great", author: "Jim Collins", votes :"3455" , rating : "4.8" , image : "https://images-na.ssl-images-amazon.com/images/I/41yNUpi2QrL._SX303_BO1,204,203,200_.jpg",},
            {id : "517" , category: "Business", title : "Zero to One", author: "Peter Theil", votes :"2411" , rating : "4.1" , image : "https://images-na.ssl-images-amazon.com/images/I/71uAI28kJuL.jpg",},
            {id : "516" , category: "Business", title : "Hooked", author: "Nir Eyal", votes :"6444" , rating : "4.5" , image : "https://images-na.ssl-images-amazon.com/images/I/81L8JOVXJtL.jpg",},
            {id : "519" , category: "Business", title : "Crush It", author: "Gary Vaynerchuk", votes :"2355" , rating : "4.2" , image : "https://images-na.ssl-images-amazon.com/images/I/51jTTziN3dL._SX328_BO1,204,203,200_.jpg",},
            {id : "510" , category: "Business", title : "Bad Blood", author: "John Carry", votes :"1244" , rating : "4.2" , image : "https://images3.penguinrandomhouse.com/cover/9781524731656",},
            {id : "81" , category: "Crime Detective", title : "The Big Sleep ", author: "Raymond Chandler", votes :"342" , rating : "4.3" , image : "https://images-na.ssl-images-amazon.com/images/I/81452A%2B2teL.jpg",},
            {id : "811" , category: "Crime Detective", title : "Murder on the Orient Express", author: "Agatha Christie", votes :"4765" , rating : "4.0" , image : "https://www.virginmegastore.ae/medias/sys_master/root/h83/h67/9263158919198/345395-main.jpg",},
            {id : "812" , category: "Crime Detective", title : "The Alienist", author: "Caleb Carr ", votes :"5321" , rating : "4.1" , image : "https://images-na.ssl-images-amazon.com/images/I/91eg2tnW58L.jpg",},
            {id : "813" , category: "Crime Detective", title : "Gorky Park ", author: "Martin Cruz Smith", votes :"898" , rating : "4.3" , image : "https://images.gr-assets.com/books/1390189430l/762806.jpg",},
            {id : "814" , category: "Crime Detective", title : "The Thin Man ", author: "Dashiell Hammett", votes :"672" , rating : "3.6" , image : "https://images-na.ssl-images-amazon.com/images/I/91CR-OTIWML.jpg",},
            {id : "815" , category: "Crime Detective", title : "The Black Echo ", author: "Michael Connelly", votes :"5422" , rating : "4.1" , image : "https://www.easons.com/globalassets/5637150827/all/books/fiction/crime-fiction/9781409172789.jpg",},
            {id : "91" , category: "Fiction ", title : "Beautiful Disaster", author: "Jamie McGuire ", votes :"1233" , rating : "4.1" , image : "https://images-na.ssl-images-amazon.com/images/I/41ktXkZoKjL.jpg",},
            {id : "912" , category: "Fiction ", title : "Twilight", author: "Stephenie Meyer", votes :"4221" , rating : "4.5" , image : "https://images-na.ssl-images-amazon.com/images/I/41K99%2BcInvL._SX326_BO1,204,203,200_.jpg",},
            {id : "911" , category: "Fiction ", title : "Easy", author: "Tammara Webber", votes :"718" , rating : "4.0" , image : "https://images-na.ssl-images-amazon.com/images/I/81TAZTVbkGL.jpg",},
            {id : "913" , category: "Fiction ", title : "Gabriel's Inferno", author: "Sylvain Reynard ", votes :"666" , rating : "5.6" , image : "https://images-na.ssl-images-amazon.com/images/I/81uYjtNAfVL.jpg",},
            {id : "914" , category: "Fiction ", title : "The Time Traveler's Wife", author: "Audrey Niffenegger", votes :"878" , rating : "3.9" , image : "https://images-na.ssl-images-amazon.com/images/I/51QuHIRLzsL._SX323_BO1,204,203,200_.jpg",},
            {id : "915" , category: "Fiction ", title : "A Walk to Remember", author: "Nicholas Sparks ", votes :"502" , rating : "3.8" , image : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1498755310l/35545737._SY475_.jpg",},
            {id : "918" , category: "Fiction ", title : "Dark Lover", author: " J.R. Ward", votes :"4.2" , rating : "432" , image : "https://images-na.ssl-images-amazon.com/images/I/41vTS%2BAIDxL.jpg",},
            {id : "100" , category: "Historical", title : "The Origin of Species", author: "Charles Darwin", votes :"321" , rating : "3.9" , image : "https://images-na.ssl-images-amazon.com/images/I/81Sj70nGQ2L.jpg",},
            {id : "101" , category: "Historical", title : "1984", author: "George Orwell", votes :"654" , rating : "4.1" , image : "https://images-na.ssl-images-amazon.com/images/I/41EucOu4SEL._SX321_BO1,204,203,200_.jpg",},
            {id : "102" , category: "Historical", title : "The Prince", author: "Niccolò Machiavelli", votes :"988" , rating : "3.8" , image : "https://images-na.ssl-images-amazon.com/images/I/41jeaC6s3AL.jpg",},
            {id : "103" , category: "Historical", title : "The Art of War", author: "Sun Tzu", votes :"765" , rating : "3.9" , image : "https://prodimage.images-bn.com/pimages/9789176371107_p0_v2_s550x406.jpg",},
            {id : "104" , category: "Historical", title : "The Lord of the Rings", author: "J.R.R. Tolkien", votes :"554" , rating : "4.4" , image : "https://kbimages1-a.akamaihd.net/34c2057b-8c80-4176-bad3-5a74d6b3861a/1200/1200/False/the-two-towers-the-lord-of-the-rings-book-2-1.jpg",},
            {id : "105" , category: "Historical", title : "Romeo and Juliet", author: "William Shakespeare", votes :"234" , rating : "3.7" , image : "https://images-eu.ssl-images-amazon.com/images/I/51ajznr23jL.jpg",},
            {id : "106" , category: "Historical", title : "The Interpretation of Dreams", author: "Sigmund Freud", votes :"432" , rating : "3.8" , image : "https://prodimage.images-bn.com/pimages/9781542707121_p0_v1_s550x406.jpg",},
            {id : "140" , category: "Mystery", title : "Angels & Demons", author: "Dan Brown", votes :"453" , rating : "4.3" , image : "https://kbimages1-a.akamaihd.net/aad58714-db6b-45be-acbb-cc1b57bc8a84/1200/1200/False/angels-demons-1.jpg",},
            {id : "141" , category: "Mystery", title : "Rebecca", author: "Daphne du Maurier", votes :"1002" , rating : "4.3" , image : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1386605169l/17899948.jpg",},
            {id : "142" , category: "Mystery", title : "In Cold Blood", author: "Truman Capote", votes :"412" , rating : "4.1" , image : "https://upload.wikimedia.org/wikipedia/en/0/05/In_cold_blood99.jpg",},
            {id : "143" , category: "Mystery", title : "Gone Girl", author: "Gillian Flynn ", votes :"766" , rating : "4.0" , image : "https://images-na.ssl-images-amazon.com/images/I/613mMghsXzL.jpg",},
            {id : "144" , category: "Mystery", title : "Mystic River", author: "Dennis Lehane", votes :"322" , rating : "4.1" , image : "https://images-na.ssl-images-amazon.com/images/I/71eiTM3ngzL.jpg",},
            {id : "145" , category: "Mystery", title : "Midnight in the Garden of Good and Evil", author: "John Berendt", votes :"312" , rating : "3.9" , image : "https://prodimage.images-bn.com/pimages/0883929107711_p0_v2_s550x406.jpg",},
            {id : "200" , category: "Self Help", title : "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", votes :"5433" , rating : "4.7" , image : "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg",},
            {id : "201" , category: "Self Help", title : "Ego is The Enemy", author: "Ryan Holiday", votes :"322" , rating : "4.3" , image : "https://images-na.ssl-images-amazon.com/images/I/81izoHQypIL.jpg",},
            {id : "202" , category: "Self Help", title : "The Power of Habit", author: "Charles Duhigg", votes :"566" , rating : "4.5" , image : "https://images-na.ssl-images-amazon.com/images/I/819ZixpQzUL.jpg",},
            {id : "203" , category: "Self Help", title : "The One Thing", author: "Garry Keller", votes :"1244" , rating : "4.5" , image : "https://blog.kevineikenberry.com/wp-content/uploads/2016/02/one-thing.png",},
            {id : "204" , category: "Self Help", title : "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", votes :"67774" , rating : "4.6" , image : "https://images-na.ssl-images-amazon.com/images/I/817xk9KvJbL.jpg",},
            {id : "205" , category: "Self Help", title : "The Compound Effect", author: "Darren Hardy", votes :"4322" , rating : "4.6" , image : "https://images-na.ssl-images-amazon.com/images/I/51wvsKFGafL.jpg",},
            {id : "206" , category: "Self Help", title : "Eat That Frog", author: "Brian Tracy", votes :"1244" , rating : "4.4" , image : "https://images-na.ssl-images-amazon.com/images/I/71kF-So4n6L.jpg",},
            {id : "207" , category: "Self Help", title : "The Magic of Thinking Big", author: "David J. Schwartz", votes :"563" , rating : "4.3" , image : "https://images-na.ssl-images-amazon.com/images/I/719ovgJafDL.jpg",},
            {id : "208" , category: "Self Help", title : "The Mircale Morning", author: "Hal Elord", votes :"1643" , rating : "4.1" , image : "https://images-na.ssl-images-amazon.com/images/I/514wTdhRvuL.jpg",},
            {id : "209" , category: "Self Help", title : "Think And Grow Rich", author: "Napolean Hill", votes :"34322" , rating : "4.2" , image : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388177008l/1005.jpg",},
            {id : "2021" , category: "Self Help", title : "Smarter Faster Better", author: "Charles Duhigg", votes :"543" , rating : "4.1" , image : "https://images-na.ssl-images-amazon.com/images/I/81X-8QDCOIL.jpg",},
            {id : "2222" , category: "Entrepreneurship", title : "The Lean Startup", author: "Eric Ries", votes :"4332" , rating : "4.2" , image : "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",},
            {id : "2221" , category: "Entrepreneurship", title : "The Startup Way", author: "Eric Ries", votes :"1244" , rating : "4.5" , image : "https://images-na.ssl-images-amazon.com/images/I/81mXQdi5x%2BL.jpg",},
            {id : "2223" , category: "Entrepreneurship", title : "The Millionaire Fastlane", author: "M. J. DeMarco", votes :"5422" , rating : "4.6" , image : "https://images-na.ssl-images-amazon.com/images/I/71u4ODEBPLL.jpg",},
            {id : "2224" , category: "Entrepreneurship", title : "Profit First", author: "Mike Michalowicz", votes :"321" , rating : "4.1" , image : "https://images-na.ssl-images-amazon.com/images/I/91kK4O7wYuL.jpg",},
            {id : "2225" , category: "Entrepreneurship", title : "The $100 Startup", author: "Chris Guillebeau", votes :"542" , rating : "4.0" , image : "https://images-na.ssl-images-amazon.com/images/I/51Yta396tFL._SX311_BO1,204,203,200_.jpg",},
            {id : "2226" , category: "Entrepreneurship", title : "Crossing the Chasm", author: "Geoffrey Moore", votes :"678" , rating : "3.9" , image : "https://images-na.ssl-images-amazon.com/images/I/41czNgTCIQL._SX334_BO1,204,203,200_.jpg",},
            {id : "2227" , category: "Entrepreneurship", title : "The 7 Day Startup", author: "Dan Norris", votes :"" , rating : "4.0" , image : "https://images-na.ssl-images-amazon.com/images/I/51MgRJ2NnkL.jpg",},
            {id : "230" , category: "Psychology", title : "How to Win Firends & Influence People", author: "Dale Carnegie", votes :"3422" , rating : "4.5" , image : "http://prodimage.images-bn.com/pimages/9780671027032_p0_v2_s1200x630.jpg",},
            {id : "231" , category: "Psychology", title : "Influence", author: "Robert Cialdini", votes :"345" , rating : "4.7" , image : "https://images-na.ssl-images-amazon.com/images/I/512-B-1yXuL.jpg",},
            {id : "232" , category: "Psychology", title : "Mindset", author: "Carol S. Dweck", votes :"2355" , rating : "4.2" , image : "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436227012l/40745._SY475_.jpg",},
            {id : "233" , category: "Psychology", title : "The 48 Laws of Power", author: "Robert Greene", votes :"653" , rating : "4.1" , image : "https://images-na.ssl-images-amazon.com/images/I/71aG%2BxDKSYL.jpg",},
            {id : "234" , category: "Psychology", title : "The Pschology of Selling", author: "Brain Tracy", votes :"567" , rating : "4.4" , image : "https://images-na.ssl-images-amazon.com/images/I/71AKjthfATL.jpg",},
            {id : "235" , category: "Psychology", title : "Sell or Be Sold", author: "Grant Cardone", votes :"234" , rating : "4.3" , image : "https://images-na.ssl-images-amazon.com/images/I/41jVx9H8-QL._SX322_BO1,204,203,200_.jpg",},
            {id : "236" , category: "Psychology", title : "Made to Stick", author: "Chip Heath & Dan Heath", votes :"5456" , rating : "4.2" , image : "https://images-na.ssl-images-amazon.com/images/I/818KHQZAl0L.jpg",},
            {id : "280" , category: "Leadership", title : "Leaders Eat Last", author: "Simon Sinek", votes :"8676" , rating : "4.4" , image : "https://images-na.ssl-images-amazon.com/images/I/61wcA3r44UL.jpg",},
            {id : "281" , category: "Leadership", title : "The 8th Habit", author: "Stephen R Covey", votes :"321" , rating : "4.2" , image : "https://images-na.ssl-images-amazon.com/images/I/71ZW2wGvBnL.jpg",},
            {id : "282" , category: "Leadership", title : "Dare to Lead", author: "Brene Brown", votes :"432" , rating : "3.9" , image : "https://images-na.ssl-images-amazon.com/images/I/71%2BrNRLMbEL.jpg",},
            {id : "283" , category: "Leadership", title : "Primal Leadership", author: "Daniel Goleman", votes :"567" , rating : "4.5" , image : "https://images-na.ssl-images-amazon.com/images/I/515OnDrF4wL.jpg",},
            {id : "284" , category: "Leadership", title : "Leadership is an Art", author: "Max De Pree", votes :"987" , rating : "4.3" , image : "https://images-na.ssl-images-amazon.com/images/I/51wHYVKEPML.jpg",},
            {id : "285" , category: "Leadership", title : "Team of Teams", author: "McChrystal", votes :"321" , rating : "4.6" , image : "https://images-na.ssl-images-amazon.com/images/I/81G9pFYbSFL.jpg",},
          ], 
          filteredBooks : [

          ]
      }
      componentDidMount = ()=>{
           let cat = this.props.navigation.getParam("title");
           let filteredList = this.state.books.filter(
               (book)=>{
                return book.category === cat;
               }
           );
           this.setState({
               filteredBooks : filteredList
           });
      }
      loadBooks = (book)=>{
                   
            return (
                <TouchableOpacity>
                <View style={styles.bookMain}>
                <View style={{width:"100%",overflow:"hidden", height:450, }}>
                <Image style={{width : "100%" , height:"100%"}} 
                    source={{uri : book.item.image}} />
                 </View>
                <View style={styles.book}>
                    <Text style={styles.text}>{book.item.title}</Text>
                    <Text style={styles.text}> by  {book.item.author}</Text>
                </View>
                    
            </View>
            </TouchableOpacity>
            )

            }
          
      

    render() {
        return (
           <View style={styles.main}>
            <FlatList data={this.state.filteredBooks} renderItem={
                this.loadBooks
                }
            
             />
           </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex : 1,
        padding : 10,
       
    },
    bookMain :{
        marginTop:10,
        width : "100%",
        height:500,
       
        borderColor:"black" , borderWidth:1,
        borderRadius : 5
    },
    book: {
        backgroundColor : "#00F739",
        flexDirection: "row",
        justifyContent : "space-around",
        alignItems : "flex-end",
        overflow:"hidden",
        paddingVertical: 14, 
        borderRadius:5
    },
    text : {
        color:"black",
        fontFamily : "halfmoon_bold",
        fontSize: 19,
    }
});


export default BooksScreen;