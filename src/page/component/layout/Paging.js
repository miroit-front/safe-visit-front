function Paging({page, count, setPage}){
    return(
        <div>
        activePage = {page}
        itemsCountPerPage = {5}
        totalItemsCount = {count}
        pageRangeDisplayed = {5}
        prevPageText = {"<"}
        nextPageText = {">"}
        onChange = {setPage}
        </div>
    )
}

export default Paging;