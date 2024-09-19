function Book({el}){
    
};

function Bookbox({title}){
    const itembox = item.map((e,i)=>{
        return(<Book el={e} key={i}/>);
    });
    return(
        <div className="book-out-box">
            <div className="title-inf">
                {title}
            </div>
            {itembox}
        </div>
    );
};

const book_boxs = ReactDOM.createRoot(document.getElementById('book-box'));
book_boxs.render(<Bookbox title={"book"} data={}/>);