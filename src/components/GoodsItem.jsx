function GoodsItem(props) {
    const {
        id,
        title,
        price,
        images,
        addToBasket=Function.prototype
    } = props;

    const imageUrl = images && images.length > 0 ? images[0] : 'https://via.placeholder.com/300';

    return  <div className="card" >
        <div className="card-image">
          <img src={imageUrl } alt={title} />
        </div>
        <div className="card-content">
            <span className="card-title">{title}</span>
        </div>
         <div className="card-action">
          <button className="btn" onClick={() => addToBasket({
              id,
              title,
              price
          })}>Купить</button>
          <span className="right" style={{fontSize: '1.8rem'}}>{price}руб.</span>
        </div>
      </div> 
} 

export default GoodsItem