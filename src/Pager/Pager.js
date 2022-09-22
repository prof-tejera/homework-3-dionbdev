import "./Pager.css";

const Pager = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <a href="!#">&laquo;</a>
       <div className='pagination'>
        {pageNumbers.map(number => (
          <div key={number} className='pagination'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </div>
        ))}
      </div>
      <a href="!#">&raquo;</a>
    </nav>
  );
  
};

export default Pager;
