
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Pagination = ({ pagination, totalItems, ITEMS_PER_PAGE,setCurrentPage,currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / ITEMS_PER_PAGE); i++) {
    pageNumbers.push(i);
  }
  const prevPage=()=>{
    if(currentPage>1){
        setCurrentPage(currentPage-1);
        pagination(currentPage-1)

    }
    
  }
  const nextPage=()=>{
    if(currentPage<pageNumbers.length){
        const nextPageNumber = currentPage + 1;
        setCurrentPage(nextPageNumber);
        pagination(currentPage+1)
    }
  }
  return (
    <div className="pagination">
      <button className="prev" onClick={prevPage}>
        {" "}
        <MdOutlineKeyboardArrowLeft />
      </button>
      {pageNumbers?.map((num, index) => (
        <button className={currentPage===num?"active":""} onClick={()=>pagination(num)} key={index}>{num}</button>
      ))}

      <button className="next" onClick={nextPage}>
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
