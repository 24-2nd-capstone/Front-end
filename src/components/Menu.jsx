import './Menu.css'
import author from '../img/author.png';
import deliv from '../img/deliv.png';
import book from '../img/book.png';
import { useNavigate} from 'react-router-dom';

const Menu = () => {

  const navigate = useNavigate();

  return(
    <div className='list'>
      <div className='list_menu' onClick={()=>navigate('/Book')}>
        <div className='sir'>
          <img src={author} className="img" />
        </div>
        <p className='bold'>독립작가존</p>
        <p className='sub'>작은 이야기들</p>
      </div>
      <div className='list_menu'>
        <div className='sir'>
          <img src={deliv} className="img" onClick={()=>navigate('/Workbook')}/>
        </div>
        <p className='bold'>북적배달</p>
        <p className='sub'>새로운 책과 만남</p>
      </div>
      <div className='list_menu'>
        <div className='sir'>
          <img src={book} className="img" onClick={()=>navigate('/Author')}/>
        </div>
        <p className='bold'>도서 및 문제집</p>
        <p className='sub'>교환/판매</p>
      </div>
    </div>
  )
}

export default Menu;